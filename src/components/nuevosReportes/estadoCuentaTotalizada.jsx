import { Page, Text, View, Document, PDFViewer } from "@react-pdf/renderer";
import { styles } from "../../utils/estadoCuentaTotalizada";

const MyDocument = ({ info }) => {
  const { nameSeller, data, address, total } = info;

  return (
    <PDFViewer style={styles.viewerStyles}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <Header nameSeller={nameSeller} address={address} />
            <Content dataUser={data} total={total} />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default MyDocument;

const Header = ({ nameSeller, address }) => {
  return (
    <>
      <View style={styles.sectionProducts}>
        <Text></Text>
        <Text style={styles.headerTitle}>ESTADO DE CUENTA TOTALIZADA</Text>
        <Text></Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 10,
        }}
      >
        <Text style={{ marginRight: 30 }}>{nameSeller}</Text>
        <Text>{address}</Text>
      </View>
    </>
  );
};

const Content = ({ dataUser, total }) => {
  const formatNumber = (number) => {
    return "$ " + new Intl.NumberFormat("es-ES").format(number);
  };

  return (
    <>
      {dataUser.map((item) => {
        return (
          <>
            <View style={[styles.sectionProductsContent, { marginTop: 10 }]}>
              <Text style={styles.contentCell}>{item.cedula}</Text>
              <Text style={[styles.contentCell3, styles.bold]}>
                {item.names}
              </Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.balance)}
              </Text>
            </View>
          </>
        );
      })}
      <View style={[styles.sectionProductsContent, { marginTop: 10 }]}>
        <Text style={[styles.contentCell, styles.bold]}>Total general:</Text>
        <Text style={[styles.contentCell3, styles.bold]}></Text>
        <Text style={[styles.contentCell, styles.bold]}>
          {formatNumber(total)}
        </Text>
      </View>
    </>
  );
};

const Footer = ({ total, base, totalIva, totalBounty, exempt }) => {
  const formatNumber = (number) => {
    return "$ " + new Intl.NumberFormat("es-ES").format(number);
  };

  return (
    <>
      <View
        style={{
          marginTop: 30,
        }}
      />

      <View style={[styles.sectionProductsContent, styles.bold]}>
        <Text style={styles.contentCell}></Text>
        <Text style={styles.contentCell3}></Text>
        <Text style={styles.contentCell3}></Text>
        <Text style={styles.contentCell}></Text>
        <Text style={styles.contentCell}>{formatNumber(total)}</Text>
        <Text style={styles.contentCell}>{formatNumber(base)}</Text>
        <Text style={styles.contentCell}>{formatNumber(totalIva)}</Text>
        <Text style={styles.contentCell}></Text>
        <Text style={styles.contentCell}></Text>
        <Text style={styles.contentCell}>{formatNumber(totalBounty)}</Text>
        <Text style={styles.contentCell}>{formatNumber(exempt)}</Text>
      </View>
    </>
  );
};
