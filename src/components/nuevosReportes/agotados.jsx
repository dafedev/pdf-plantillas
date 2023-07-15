import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  Svg,
  Line,
} from "@react-pdf/renderer";
import { styles } from "../../utils/inventario";

const MyDocument = ({ info }) => {
  const {
    dateQuery,
    data,
    totalDistribuidor,
    totalCosto,
    totalVenta,
    totalDisponible,
    totalInventario,
  } = info;

  return (
    <PDFViewer style={styles.viewerStyles}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <Header dateQuery={dateQuery} />
            <Content
              dataUser={data}
              totalDistribuidor={totalDistribuidor}
              totalCosto={totalCosto}
              totalVenta={totalVenta}
              totalDisponible={totalDisponible}
              totalInventario={totalInventario}
            />
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 50,
              left: 30,
              right: 27,
            }}
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
          <Text style={styles.headerTitle}>REPORTE DE PRODUCTOS AGOTADOS</Text>
          <Text></Text>
        </View>

        <View>
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

        <View style={styles.sectionProducts}>
          <Text style={styles.headerCell}>Cod.</Text>
          <Text style={styles.headerCell2}>Referencia</Text>
          <Text style={styles.headerCell3}>Producto</Text>
          <Text style={styles.headerCell}>P. Venta</Text>
          <Text style={styles.headerCell}>Disponible</Text>
          <Text style={styles.headerCell}>Existencia mínima</Text>
        </View>
      </View>
      <View>
        <Svg height="10" width="100%">
          <Line x1="0" y1="0" x2="800" y2="0" stroke="black" strokeWidth="3" />
        </Svg>
      </View>
    </>
  );
};

const Content = ({
  dataUser,
  totalDistribuidor,
  totalCosto,
  totalVenta,
  totalDisponible,
  totalInventario,
}) => {
  const formatNumber = (number) => {
    return "$ " + new Intl.NumberFormat("es-ES").format(number);
  };

  return (
    <>
      {dataUser.map((item) => {
        return (
          <>
            <View>
              <View
                style={[
                  styles.bold,
                  { marginVertical: 10, marginBottom: 20, textAlign: "center" },
                ]}
              >
                <Text style={styles.contentCell3}>{item.product}</Text>
              </View>

              {item.products.map((product) => {
                return (
                  <>
                    <View style={styles.sectionProductsContent}>
                      <Text style={styles.contentCell}>{product.cod}</Text>
                      <Text style={styles.contentCell2}>
                        {product.reference}
                      </Text>
                      <Text style={styles.contentCell3}>{product.name}</Text>
                      <Text style={styles.contentCell}>
                        {formatNumber(product.venta)}
                      </Text>
                      <Text style={styles.contentCell}>
                        {product.disponible}
                      </Text>
                      <Text style={styles.contentCell}>
                        {product.existenciaM}
                      </Text>
                    </View>
                  </>
                );
              })}

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
                  <Text style={styles.contentCell3}>{item.product}</Text>
                  <Text style={styles.contentCell}></Text>
                  <Text style={styles.contentCell2}></Text>
                  <Text style={styles.contentCell}>
                    {formatNumber(item.subTotalVenta)}
                  </Text>
                  <Text style={styles.contentCell}>
                    {item.subTotalDisponible}
                  </Text>
                  <Text style={styles.contentCell}></Text>
                </View>
              </View>
            </View>
          </>
        );
      })}

      <View style={{ marginTop: 10 }}>
        <Svg height="3" width="100%">
          <Line x1="0" y1="0" x2="800" y2="0" stroke="black" strokeWidth="3" />
        </Svg>
      </View>

      <View style={[styles.bold]}>
        <View style={styles.sectionProductsContent}>
          <Text style={styles.contentCell3}>Total general:</Text>
          <Text style={styles.contentCell2}></Text>
          <Text style={styles.contentCell}></Text>
          <Text style={styles.contentCell}>{formatNumber(totalVenta)}</Text>
          <Text style={styles.contentCell}></Text>
          <Text style={styles.contentCell}></Text>
        </View>
      </View>
    </>
  );
};
