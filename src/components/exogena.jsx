import { Page, Text, View, Document, PDFViewer } from "@react-pdf/renderer";
import { styles } from "../utils/reporteFlujos";

const MyDocument = ({ info }) => {
  const { dateQuery, data, total, base, totalIva, totalBounty, exempt } = info;

  return (
    <PDFViewer style={styles.viewerStyles}>
      <Document>
        <Page size="A3" style={styles.page}>
          <View>
            <Header dateQuery={dateQuery} />
            <Content dataUser={data} />
            <Footer
              dataUser={data}
              total={total}
              base={base}
              totalIva={totalIva}
              totalBounty={totalBounty}
              exempt={exempt}
            />
          </View>
          <Text
            style={styles.footerPage}
            render={({ pageNumber }) => `${pageNumber} `}
            fixed
          />
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default MyDocument;

const Header = ({ dateQuery }) => {
  return (
    <>
      <View fixed>
        <Text>{dateQuery}</Text>
        <View style={styles.sectionProducts}>
          <Text style={styles.headerCell}>Documento</Text>
          <Text style={styles.headerCell3}>Nombres</Text>
          <Text style={styles.headerCell3}>Dirección</Text>
          <Text style={styles.headerCell}>Fecha</Text>
          <Text style={styles.headerCell}>Total</Text>
          <Text style={styles.headerCell}>Base</Text>
          <Text style={styles.headerCell}>TotalIva</Text>
          <Text style={styles.headerCell}>Mes</Text>
          <Text style={styles.headerCell}>Iva</Text>
          <Text style={styles.headerCell}>TotalBolsa</Text>
          <Text style={styles.headerCell}>Excentos</Text>
        </View>
      </View>
    </>
  );
};

const Content = ({ dataUser }) => {
  const formatNumber = (number) => {
    return "$ " + new Intl.NumberFormat("es-ES").format(number);
  };

  return (
    <>
      {dataUser.map((item) => {
        return (
          <>
            <View style={styles.sectionProductsContent}>
              <Text style={styles.contentCell}>{item.document}</Text>
              <Text style={styles.contentCell3}>{item.names}</Text>
              <Text style={styles.contentCell3}>{item.address}</Text>
              <Text style={styles.contentCell}>{item.date}</Text>
              <Text style={styles.contentCell}>{formatNumber(item.total)}</Text>
              <Text style={styles.contentCell}>{formatNumber(item.base)}</Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.totalIva)}
              </Text>
              <Text style={styles.contentCell}>{item.month}</Text>
              <Text style={styles.contentCell}>{formatNumber(item.iva)}</Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.totalBounty)}
              </Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.exempt)}
              </Text>
            </View>
          </>
        );
      })}
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
