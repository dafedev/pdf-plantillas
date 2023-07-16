import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  Svg,
  Line,
} from "@react-pdf/renderer";
import { styles } from "../../utils/productosHistorico";

const MyDocument = ({ info }) => {
  const { dateQuery, data } = info;

  return (
    <PDFViewer style={styles.viewerStyles}>
      <Document>
        <Page size="A3" style={styles.page}>
          <View>
            <Header dateQuery={dateQuery} />
            <Content dataUser={data} />
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 50,
              left: 30,
              right: 27,
            }}
            fixed
          >
            <Svg height="3" width="100%">
              <Line
                x1="0"
                y1="0"
                x2="800"
                y2="0"
                stroke="black"
                strokeWidth="3"
              />
            </Svg>
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
        <View
          style={[styles.sectionProducts, { justifyContent: "space-between" }]}
          fixed
        >
          <Text>{dateQuery}</Text>
          <Text style={styles.headerTitle}>HISTORICO DE PRODUCTOS</Text>
          <Text></Text>
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
      {dataUser.map((item) => (
        <>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text style={[styles.bold, { marginRight: 200 }]}>
              {item.nameProduct}
            </Text>
            <Text style={styles.bold}>{item.reference}</Text>
          </View>

          <View>
            <Svg height="3" width="300">
              <Line
                x1="0"
                y1="0"
                x2="300"
                y2="0"
                stroke="black"
                strokeWidth="3"
              />
            </Svg>
          </View>

          {item.dataProducts.map((items) => (
            <>
              <View style={[styles.bold, { marginTop: 10 }]}>
                <Text>DIA: {items.date}</Text>
              </View>

              <View style={[styles.bold, { marginTop: 10 }]}>
                <View style={styles.sectionProducts}>
                  <Text style={styles.headerCell}>P. Venta</Text>
                  <Text style={styles.headerCell}>P. Costo</Text>
                  <Text style={styles.headerCell}>Cantidad</Text>
                  <Text style={styles.headerCell2}>Disponible</Text>
                  <Text style={styles.headerCell2}>Fecha Cambio</Text>
                  <Text style={styles.headerCell2}>Accion</Text>
                  <Text style={styles.headerCell2}>Usuario</Text>
                  <Text style={styles.headerCell2}>Observacion</Text>
                </View>
              </View>

              {items.products.map((item) => (
                <>
                  <View style={styles.sectionProductsContent}>
                    <Text style={styles.contentCell}>
                      {formatNumber(item.pVenta)}
                    </Text>
                    <Text style={styles.contentCell}>
                      {formatNumber(item.pCosto)}
                    </Text>
                    <Text style={styles.contentCell}>{item.quantity}</Text>
                    <Text style={styles.contentCell2}>{item.available}</Text>
                    <Text style={styles.contentCell2}>{item.dateChange}</Text>
                    <Text style={styles.contentCell2}>{item.action}</Text>
                    <Text style={styles.contentCell2}>{item.user}</Text>
                    <Text style={styles.contentCell2}>{item.observation}</Text>
                  </View>
                </>
              ))}
            </>
          ))}
          {/* {item.dataProducts.map((items) => (
            <>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={[styles.bold, { marginRight: 20 }]}>
                    Consecutivo:
                  </Text>
                  <Text style={styles.boldB}>{items.consecutive}</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={[styles.bold, { marginRight: 20 }]}>Fecha:</Text>
                  <Text style={styles.bold}>{items.dateTime}</Text>
                </View>
              </View>
              
            </>
          ))} */}
        </>
      ))}
      {/* <View style={styles.bold}>
        <View style={styles.sectionProducts}>
          <Text style={styles.headerCell3}></Text>
          <Text style={styles.headerCell}></Text>
          <Text style={styles.headerCell2}>Total Costos:</Text>
          <Text style={styles.headerCell2}>{formatNumber(22)}</Text>
          <Text style={styles.headerCell2}></Text>
          <Text style={styles.headerCell2}></Text>
          <Text style={styles.headerCell}></Text>
        </View>
      </View> */}
    </>
  );
};
