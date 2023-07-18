import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  Svg,
  Line,
} from "@react-pdf/renderer";
import { styles } from "../../utils/productoSugerido";

const MyDocument = ({ info }) => {
  const { dateQuery, data } = info;

  return (
    <PDFViewer style={styles.viewerStyles}>
      <Document>
        <Page size="A4" style={styles.page}>
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
          <Text style={styles.headerTitle}>REPORTE DE PRODUCTOS SUGERIDOS</Text>
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
          <View>
            <Text style={[styles.bold, { marginTop: 10 }]}>
              {item.nameProduct}
            </Text>
          </View>

          <View>
            <Svg height="3" width="200">
              <Line
                x1="0"
                y1="0"
                x2="200"
                y2="0"
                stroke="black"
                strokeWidth="3"
              />
            </Svg>
          </View>

          <View style={[styles.bold, { marginTop: 5 }]}>
            <View style={styles.sectionProducts}>
              <Text style={styles.headerCell}>Código</Text>
              <Text style={styles.headerCell2}>Referencia</Text>
              <Text style={styles.headerCell3}></Text>
              <Text style={styles.headerCell2}>Fecha</Text>
              <Text style={styles.headerCell2}>Usuario</Text>
            </View>
          </View>

          {item.dataProducts.map((items) => (
            <>
              <>
                <View style={styles.sectionProductsContent}>
                  <Text style={styles.contentCell}>{items.code}</Text>
                  <Text style={styles.contentCell2}>{items.reference}</Text>
                  <Text style={styles.contentCell3}>{items.name}</Text>
                  <Text style={styles.contentCell2}>{items.date}</Text>
                  <Text style={styles.contentCell2}>{items.user}</Text>
                </View>
              </>
            </>
          ))}
        </>
      ))}
    </>
  );
};
