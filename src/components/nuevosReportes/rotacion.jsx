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
  const { data } = info;

  return (
    <PDFViewer style={styles.viewerStyles}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <Header />
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

const Header = () => {
  return (
    <>
      <View fixed>
        <View style={styles.sectionProducts} fixed>
          <Text></Text>
          <Text style={styles.headerTitle}>
            REPORTE DE ROTACION DE PRODUCTOS
          </Text>
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
          <Text style={styles.headerCell}>Tipo Producto</Text>
          <Text style={styles.headerCell3}>Nombre Producto</Text>
          <Text style={styles.headerCell}>Rotación</Text>
          <Text style={styles.headerCell}>Disponible</Text>
        </View>
      </View>
    </>
  );
};

const Content = ({ dataUser }) => {
  return (
    <>
      {dataUser.map((item) => {
        return (
          <>
            <View style={styles.sectionProductsContent}>
              <Text style={styles.contentCell}>{item.cod}</Text>
              <Text style={styles.contentCell2}>{item.reference}</Text>
              <Text style={styles.contentCell}>{item.typeProduct}</Text>
              <Text style={styles.contentCell3}>{item.nameProduct}</Text>
              <Text style={styles.contentCell}>{item.rotation}</Text>
              <Text style={styles.contentCell}>{item.available}</Text>
            </View>
          </>
        );
      })}
    </>
  );
};
