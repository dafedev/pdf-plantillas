import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  Svg,
  Line,
} from "@react-pdf/renderer";
import { styles } from "../utils/productoVendedor";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

const MyDocument = ({ info }) => {
  const { data, dateQuery } = info;

  const formatNumber = (number) => {
    return "$ " + new Intl.NumberFormat("es-ES").format(number);
  };
  return (
    <PDFViewer
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.headerTitle}>
            <Text>Reporte de producto por vendedor</Text>
          </View>
          <View>
            <Text>Fecha impresión: {dateQuery}</Text>
          </View>
          <View>
            <Text style={styles.underline}>Vendedor</Text>
            <Text>{data.seller}</Text>
          </View>
          <View style={styles.sectionProducts}>
            <View style={styles.sectionProductsHeader}>
              <Text style={styles.headerCell2}>Referencia</Text>
              <Text style={styles.headerCell3}>Producto</Text>
              <Text style={styles.headerCell}>Valor</Text>
              <Text style={styles.headerCell}>Cantidad</Text>
              <Text style={styles.headerCell}>Descuento</Text>
              <Text style={styles.headerCell}>Subtotal</Text>
              <Text style={styles.headerCell}>Fecha</Text>
            </View>
          </View>
          {data.customers.map((item) => (
            <>
              {item.products.map((product) => (
                <>
                  <View style={styles.sectionProductsContent}>
                    <View style={styles.contentCell2}>
                      <Text>{product.reference}</Text>
                    </View>
                    <View style={styles.contentCell3}>
                      <Text>{product.name}</Text>
                    </View>
                    <View style={styles.contentCell}>
                      <Text>{formatNumber(product.value)}</Text>
                    </View>
                    <View style={[styles.contentCell]}>
                      <Text>{product.amount}</Text>
                    </View>
                    <View style={styles.contentCell}>
                      <Text>{product.discount} %</Text>
                    </View>
                    <View style={styles.contentCell}>
                      <Text>{formatNumber(product.subTotal)}</Text>
                    </View>
                    <View style={styles.contentCell}>
                      <Text>{moment(product.date).format("DD-MMMM-YYYY")}</Text>
                    </View>
                  </View>
                </>
              ))}
              <View style={[styles.space, { textAlign: "right" }]}>
                <Text>
                  SUBTOTAL:{" "}
                  <Text style={styles.bold}>{item.totalSubtotal}</Text>
                </Text>
                <Text style={{ paddingVertical: 5 }}>
                  Cantidad documentos:{" "}
                  <Text style={styles.bold}>{item.products.length}</Text>
                </Text>
              </View>
            </>
          ))}

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100px",
            }}
          >
            <Text style={styles.bold}>Total clientes:</Text>
            <Text style={styles.bold}>{data.customers.length}</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100px",
            }}
          >
            <Text style={styles.bold}>Subtotal:</Text>
            <Text style={styles.bold}>{formatNumber(data.totalSubTotal)}</Text>
          </View>
          <View style={styles.footerPage}>
            <Text render={({ pageNumber }) => `${pageNumber} `} fixed />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default MyDocument;
