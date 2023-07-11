import { Page, Text, View, Document, PDFViewer } from "@react-pdf/renderer";
import { styles } from "../utils/entradaProducto";

const MyDocument = ({ info }) => {
  const {
    dateQuery,
    data,
    bill,
    consecutive,
    date,
    third,
    observation,
    subTotalCuantity,
  } = info;

  return (
    <PDFViewer style={styles.viewerStyles}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <Header
              dateQuery={dateQuery}
              dataUser={data}
              bill={bill}
              consecutive={consecutive}
              date={date}
              third={third}
              observation={observation}
            />
            <Content dataUser={data} subTotalCuantity={subTotalCuantity} />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default MyDocument;

const Header = ({ dateQuery, bill, consecutive, date, third, observation }) => {
  return (
    <>
      <View fixed>
        <View style={styles.sectionProducts}>
          <Text>{dateQuery}</Text>
          <Text style={styles.headerTitle}>REPORTE ENTRADA DE PRODUCTO</Text>
          <Text>Factura: {bill}</Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.underLine}>Consecutivo:</Text>
            <Text> {consecutive}</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.underLine}>Fecha:</Text>
            <Text> {date}</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.underLine}>Tercero:</Text>
            <Text> {third}</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={[styles.underLine, { marginVertical: 20 }]}>
            Observación:
          </Text>
          <Text> {observation}</Text>
        </View>

        <View style={styles.sectionProducts}>
          <Text style={styles.headerCell}>Cod.</Text>
          <Text style={styles.headerCell}>Referencia</Text>
          <Text style={styles.headerCell3}>Nombre Producto</Text>
          <Text style={styles.headerCell}>Precio Costo</Text>
          <Text style={styles.headerCell}>Precio Venta</Text>
          <Text style={styles.headerCell}>Cant</Text>
          <Text style={styles.headerCell}>Disp</Text>
        </View>
      </View>
    </>
  );
};

const Content = ({ dataUser, subTotalCuantity }) => {
  const formatNumber = (number) => {
    return "$ " + new Intl.NumberFormat("es-ES").format(number);
  };

  return (
    <>
      {dataUser.map((item) => {
        return (
          <>
            <View style={styles.sectionProductsContent}>
              <Text style={styles.contentCell}>{item.cod}</Text>
              <Text style={styles.contentCell}>{item.reference}</Text>
              <Text style={styles.contentCell3}>{item.nameProduct}</Text>
              <Text style={styles.contentCell}>{formatNumber(item.prize)}</Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.prizeSale)}
              </Text>
              <Text style={styles.contentCell}>{item.quantity}</Text>
              <Text style={styles.contentCell}>{item.disponibility}</Text>
            </View>
          </>
        );
      })}
      <View
        style={[
          styles.bold,
          {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: 10,
          },
        ]}
      >
        <Text
          style={{
            marginRight: 100,
          }}
        >
          SUB TOTAL:
        </Text>
        <Text
          style={{
            paddingRight: 115,
          }}
        >
          {subTotalCuantity}
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
