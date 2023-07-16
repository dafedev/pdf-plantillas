import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  Svg,
  Line,
} from "@react-pdf/renderer";
import { styles } from "../../utils/productosClientes";

const MyDocument = ({ info }) => {
  const { dateQuery, data, totalPrice } = info;

  return (
    <PDFViewer style={styles.viewerStyles}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <Header dateQuery={dateQuery} />
            <Content dataUser={data} totalPrice={totalPrice} />
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
        <View style={styles.sectionProducts} fixed>
          <Text>{dateQuery}</Text>
          <Text style={styles.headerTitle}></Text>
          <Text></Text>
        </View>
      </View>
    </>
  );
};

const Content = ({ dataUser, totalPrice }) => {
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
              justifyContent: "space-between",
            }}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={[styles.bold, { marginRight: 20 }]}>Cliente:</Text>
              <Text style={styles.boldB}>{item.nameClient}</Text>
            </View>
          </View>

          {item.dataClient.map((dataClient) => (
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
                  <Text style={styles.boldB}>{dataClient.consecutive}</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={[styles.bold, { marginRight: 20 }]}>Fecha:</Text>
                  <Text style={styles.bold}>{dataClient.dateTime}</Text>
                </View>
              </View>
              <View style={[styles.bold, { marginTop: 20 }]}>
                <View style={styles.sectionProducts}>
                  <Text style={styles.headerCell3}>Nombre Producto</Text>
                  <Text style={styles.headerCell2}>Tipo de Producto</Text>
                  <Text style={styles.headerCell}>Cant</Text>
                  <Text style={styles.headerCell2}>Cost</Text>
                  <Text style={styles.headerCell2}>Valor Producto</Text>
                  <Text style={styles.headerCell2}>SubTotal</Text>
                  <Text style={styles.headerCell}>Cod</Text>
                </View>
              </View>

              {dataClient.products.map((product) => (
                <>
                  <View>
                    <View style={styles.sectionProductsContent}>
                      <Text style={styles.contentCell3}>
                        {product.nameProduct}
                      </Text>
                      <Text style={styles.contentCell2}>
                        {product.typeProduct}
                      </Text>
                      <Text style={styles.contentCell}>{product.quantity}</Text>
                      <Text style={styles.contentCell2}>
                        {formatNumber(product.price)}
                      </Text>
                      <Text style={styles.contentCell2}>
                        {formatNumber(product.productValue)}
                      </Text>
                      <Text style={styles.contentCell2}>
                        {formatNumber(product.subTotal)}
                      </Text>
                      <Text style={styles.contentCell}>{product.cod}</Text>
                    </View>
                  </View>
                </>
              ))}
              <View style={{ marginTop: 10 }}>
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

              <View style={[styles.bold]}>
                <View style={styles.sectionProductsContent}>
                  <Text style={styles.contentCell3}></Text>
                  <Text style={styles.contentCell2}>SubTotal:</Text>
                  <Text style={styles.contentCell}></Text>
                  <Text style={styles.contentCell2}></Text>
                  <Text style={styles.contentCell2}></Text>
                  <Text style={styles.contentCell2}>
                    {formatNumber(dataClient.subTotal)}
                  </Text>
                  <Text style={styles.contentCell}></Text>
                </View>
              </View>
              <View style={{ marginBottom: 10 }}>
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
            </>
          ))}
        </>
      ))}
      <View style={styles.bold}>
        <View style={styles.sectionProducts}>
          <Text style={styles.headerCell3}></Text>
          <Text style={styles.headerCell}></Text>
          <Text style={styles.headerCell2}>Total Costos:</Text>
          <Text style={styles.headerCell2}>{formatNumber(totalPrice)}</Text>
          <Text style={styles.headerCell2}></Text>
          <Text style={styles.headerCell2}></Text>
          <Text style={styles.headerCell}></Text>
        </View>
      </View>
    </>
  );
};
