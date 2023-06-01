import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  Svg,
  Line,
} from "@react-pdf/renderer";
import { styles } from "../utils/listadoOportunidadesPendientes";
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
              Listado de oportunidades
            </Text>
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
                      <Text style={styles.bold}>{item.fullName}</Text>
                      <Svg height="10" width="220">
                        <Line
                          x1="0"
                          y1="0"
                          x2="220"
                          y2="0"
                          stroke="black"
                          strokeWidth="3"
                        />
                      </Svg>
                    </View>

                    <Text style={styles.capitalize}>
                      Total Oportunidades:{" "}
                      <Text style={styles.bold}>{item.oportunity.length}</Text>
                    </Text>
                  </View>
                </View>
                <View style={styles.sectionProducts}>
                  <View style={styles.sectionProductsHeader}>
                    <Text style={styles.headerCell3}>Cliente</Text>
                    <Text style={styles.headerCell2}>Producto</Text>
                    <Text style={styles.headerCell}>Fecha</Text>
                    <Text style={styles.headerCell}>Celular</Text>
                    <Text style={styles.headerCell}>Estado</Text>
                  </View>
                  <View>
                    {item.oportunity.map((item, index) => (
                      <View key={index} style={styles.sectionProductsContent}>
                        <View style={styles.contentCell3}>
                          <Text>{item.nameClient}</Text>
                        </View>
                        <View style={styles.contentCell2}>
                          {item.products.map((item, index) => (
                            <Text key={index}>{item.name}</Text>
                          ))}
                        </View>
                        <View style={styles.contentCell}>
                          {item.products.map((item, index) => (
                            <Text key={index} style={styles.capitalize}>
                              {moment(item.date).format("DD-MMM-YYYY")}
                            </Text>
                          ))}
                        </View>
                        <View style={styles.contentCell}>
                          <Text>{item.cellphone}</Text>
                        </View>
                        <View style={styles.contentCell}>
                          {item.products.map((item, index) => (
                            <Text key={index}>{item.state}</Text>
                          ))}
                        </View>
                      </View>
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
