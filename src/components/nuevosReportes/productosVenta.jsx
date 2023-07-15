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
    totalQuantity,
    totalSubVenta,
    totalSubPrice,
    totalUtility,
  } = info;

  return (
    <PDFViewer style={styles.viewerStyles}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <Header dateQuery={dateQuery} />
            <Content
              dataUser={data}
              totalQuantity={totalQuantity}
              totalSubVenta={totalSubVenta}
              totalSubPrice={totalSubPrice}
              totalUtility={totalUtility}
            />
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
      </View>
    </>
  );
};

const Content = ({
  dataUser,
  totalQuantity,
  totalSubVenta,
  totalSubPrice,
  totalUtility,
}) => {
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
              <Text style={[styles.bold, { marginRight: 20 }]}>Prod:</Text>
              <Text style={styles.boldB}>{item.product}</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={[styles.bold, { marginRight: 20 }]}>Categoría:</Text>
              <Text style={styles.bold}>{item.category}</Text>
            </View>
          </View>

          <View style={styles.sectionProducts}>
            <Text style={styles.headerCell}>Cod.</Text>
            <Text style={styles.headerCell3}>{item.code}</Text>
            <Text style={styles.headerCell}>Cant</Text>
            <Text style={styles.headerCell}>Valor Producto</Text>
            <Text style={styles.headerCell}>Precio Costo</Text>
            <Text style={styles.headerCell}>Sub Venta</Text>
            <Text style={styles.headerCell}>SubCostoC</Text>
            <Text style={styles.headerCell}>Utilidad</Text>
            <Text style={styles.headerCell}>%</Text>
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
          {item.products.map((product) => (
            <>
              <View>
                <View style={styles.sectionProductsContent}>
                  <Text style={styles.contentCell}></Text>
                  <Text style={styles.contentCell3}>{product.reference}</Text>
                  <Text style={styles.contentCell}>{product.quantity}</Text>
                  <Text style={styles.contentCell}>
                    {formatNumber(product.productValue)}
                  </Text>
                  <Text style={styles.contentCell}>
                    {formatNumber(product.price)}
                  </Text>
                  <Text style={styles.contentCell}>
                    {formatNumber(product.subVenta)}
                  </Text>
                  <Text style={styles.contentCell}>
                    {formatNumber(product.subPrice)}
                  </Text>
                  <Text style={styles.contentCell}>
                    {formatNumber(product.utility)}
                  </Text>
                  <Text style={styles.contentCell}>
                    {product.utilityPercent}
                  </Text>
                </View>
              </View>
            </>
          ))}

          <View style={styles.boldB}>
            <View style={styles.sectionProductsContent}>
              <Text style={styles.contentCell}></Text>
              <Text style={styles.contentCell3}></Text>
              <Text style={styles.contentCell}>{item.totalQuantity}</Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.totalValue)}
              </Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.totalPrice)}
              </Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.totalSubVenta)}
              </Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.totalSubPrice)}
              </Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.totalUtility)}
              </Text>
              <Text style={styles.contentCell}>{item.totalUtilityPercent}</Text>
            </View>
          </View>

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
        </>
      ))}

      <View style={[styles.bold, { marginTop: 10 }]}>
        <View style={styles.sectionProductsContent}>
          <Text style={styles.contentCell}></Text>
          <Text style={styles.contentCell3}>Total general: </Text>
          <Text style={styles.contentCell}>{totalQuantity}</Text>
          <Text style={styles.contentCell}></Text>
          <Text style={styles.contentCell}></Text>
          <Text style={styles.contentCell}>{formatNumber(totalSubVenta)}</Text>
          <Text style={styles.contentCell}>{formatNumber(totalSubPrice)}</Text>
          <Text style={styles.contentCell}>{formatNumber(totalUtility)}</Text>
          <Text style={styles.contentCell}>{}</Text>
        </View>
      </View>
    </>
  );
};
