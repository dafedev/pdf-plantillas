import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  Svg,
  Line,
} from "@react-pdf/renderer";
import { styles } from "../utils/ventasSinEntrada.js";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

const MyDocument = ({ info }) => {
  const { data, dateQuery } = info;

  return (
    <PDFViewer
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <Text fixed>{dateQuery}</Text>
            <Text style={styles.headerTitle} fixed>
              Ventas sin entrada a Taller
            </Text>
            <View style={styles.sectionProductsHeader}>
              <Text style={styles.headerCell}></Text>
              <Text style={styles.headerCell2}>Cliente</Text>
              <Text style={styles.headerCell}>Celular</Text>
              <Text style={styles.headerCell}>Número</Text>
              <Text style={styles.headerCell2}>Vendedor</Text>
            </View>
            {data.map((item, index) => (
              <>
                <View key={index}>
                  <View style={styles.headerClientName}>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "10px",
                      }}
                    >
                      <Text key={index} style={styles.capitalize}>
                        <Text style={styles.bold}>
                          {moment(item.date).format("MMMM-YYYY")}
                        </Text>
                      </Text>
                      <Svg height="10" width="170">
                        <Line
                          x1="0"
                          y1="0"
                          x2="170"
                          y2="0"
                          stroke="black"
                          strokeWidth="3"
                        />
                      </Svg>
                    </View>
                  </View>
                </View>
                <View style={styles.sectionProducts}>
                  <View>
                    {item.sell.map((item, index) => (
                      <>
                        <View key={index} style={styles.sectionProductsContent}>
                          <View style={styles.contentCell}>
                            <Text style={styles.bold}>
                              {item.identification}
                            </Text>
                          </View>
                          <View style={styles.contentCell2}>
                            <Text>{item.nameClient}</Text>
                          </View>
                          <View style={styles.contentCell}>
                            <Text>{item.cellphone}</Text>
                          </View>
                          <View style={styles.contentCell}>
                            <Text>{item.number}</Text>
                          </View>
                          <View style={styles.contentCell2}>
                            <Text>{item.seller}</Text>
                          </View>
                        </View>
                        <View
                          style={{
                            paddingLeft: "10px",
                            paddingBottom: "10px",
                          }}
                        >
                          {item.products.map((item, index) => (
                            <Text key={index}>{item.name}</Text>
                          ))}
                        </View>
                      </>
                    ))}
                  </View>
                </View>
              </>
            ))}
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
