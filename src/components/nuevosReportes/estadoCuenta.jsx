import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  Svg,
  Line,
} from "@react-pdf/renderer";
import { styles } from "../../utils/estadoCuenta";

const MyDocument = ({ info }) => {
  return (
    <PDFViewer style={styles.viewerStyles}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <Header dataUser={info} />
            <Content dataUser={info} />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default MyDocument;

const Header = ({ dataUser }) => {
  const { cedula, names, address, cellphone } = dataUser;

  return (
    <>
      <View fixed>
        <View style={styles.sectionProducts} fixed>
          <Text></Text>
          <Text style={styles.headerTitle}>ESTADO DE CUENTA</Text>
          <Text></Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={styles.underLine}>Cédula:</Text>
            <Text
              style={{
                marginLeft: 10,
                marginRight: 280,
              }}
            >
              {cedula}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={styles.underLine}>Dirección:</Text>
            <Text
              style={{
                marginLeft: 10,
              }}
            >
              {address}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={styles.underLine}>Nombres:</Text>
            <Text
              style={{
                marginLeft: 10,
                marginRight: 250,
              }}
            >
              {names}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={styles.underLine}>Celular:</Text>
            <Text
              style={{
                marginLeft: 10,
              }}
            >
              {cellphone}
            </Text>
          </View>
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
      <View
        style={[
          {
            marginTop: 20,
            textAlign: "center",
            fontSize: 10,
          },
          styles.bold,
          styles.underLine,
        ]}
      >
        <Text>{dataUser.nameEnterprise}</Text>
      </View>
      <View style={[styles.sectionProducts, { marginTop: 20 }]}>
        <Text style={[styles.headerCell, styles.bold]}></Text>
        <Text style={[styles.headerCell2, styles.bold]}>Consecutivo</Text>
        <Text style={[styles.headerCell2, styles.bold]}>Fecha</Text>
        <Text style={[styles.headerCell3, styles.bold]}>TOTAL FACTURA</Text>
        <Text style={[styles.headerCell3, styles.bold]}>SALDO</Text>
      </View>
      <View style={styles.sectionProductsContent}>
        <Text style={styles.contentCell}></Text>
        <Text style={styles.contentCell2}>{dataUser.consec}</Text>
        <Text style={styles.contentCell2}>{dataUser.date}</Text>
        <Text style={styles.contentCell3}>{formatNumber(dataUser.total)}</Text>
        <Text style={styles.contentCell3}>
          {formatNumber(dataUser.balance)}
        </Text>
      </View>
      <View style={[styles.sectionProductsContent, { marginTop: 10 }]}>
        <Text style={styles.contentCell}></Text>
        <Text style={styles.contentCell2}></Text>
        <Text style={styles.contentCell2}></Text>
        <Text style={[styles.contentCell3, styles.bold]}>
          {formatNumber(dataUser.total)}
        </Text>
        <Text style={[styles.contentCell3, styles.bold, styles.underLine]}>
          {formatNumber(dataUser.balance)}
        </Text>
      </View>
      <View style={[styles.sectionProductsContent, { marginTop: 10 }]}>
        <Text style={styles.contentCell}></Text>
        <Text style={styles.contentCell2}></Text>
        <Text style={styles.contentCell2}></Text>
        <Text style={[styles.contentCell3]}>TOTAL SALDO CLIENTE:</Text>
        <Text style={[styles.contentCell3, styles.bold]}>
          {formatNumber(dataUser.totalBalance)}
        </Text>
      </View>
    </>
  );
};
