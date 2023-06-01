import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  Svg,
  Line,
} from "@react-pdf/renderer";
import { styles } from "../utils/seguimientos";
import "moment/locale/es";
import moment from "moment";

const MyDocument = ({ info }) => {
  const { fullName, seller, data, dateQuery } = info;

  return (
    <PDFViewer
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Document>
        <Page size="A3" style={styles.page}>
          <Text fixed>{dateQuery}</Text>
          <Text style={styles.headerTitle} fixed>
            Oportunidades Pendientes
          </Text>
          <Text style={styles.headerNameEmp}>{fullName}</Text>
          <View style={styles.headerClientName}>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "10px",
              }}
            >
              <Text style={styles.bold}>{seller}</Text>
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
              Total Seguimientos:{" "}
              <Text style={styles.bold}>{data[0].activitys.length}</Text>
            </Text>
          </View>
          {data.map((item, index) => (
            <>
              <View key={index} style={styles.headerSectionDataClient}>
                <View style={styles.sectionDataClient}>
                  <Text style={styles.capitalize}>
                    Cliente:{" "}
                    <Text style={styles.capitalize}>{item.clientName}</Text>
                  </Text>
                  <Text style={styles.capitalize}>
                    E-mail: <Text style={styles.lowercase}>{item.email}</Text>
                  </Text>
                </View>
                <View style={styles.sectionDataClient}>
                  <Text style={styles.capitalize}>
                    Dirección:{" "}
                    <Text style={styles.capitalize}>{item.address}</Text>
                  </Text>
                  <Text style={styles.capitalize}>
                    Celular:{" "}
                    <Text style={styles.capitalize}>{item.cellPhone}</Text>
                  </Text>
                </View>
              </View>
              <View key={index}>
                <View style={styles.sectionProducts}>
                  <Text style={styles.headerCell2}>Fecha</Text>
                  <Text style={styles.headerCell2}>Duración</Text>
                  <Text style={styles.headerCell2}>Seguimiento</Text>
                  <Text style={styles.headerCell3}>Estado</Text>
                  <Text style={styles.headerCell}>%Cierre</Text>
                  <Text style={styles.headerCell2}>Fecha Prox Seguimiento</Text>
                  <Text style={styles.headerCell}>Hora</Text>
                </View>
              </View>
              {item.activitys.map((item, index) => (
                <>
                  <View style={styles.sectionProductsContent} key={index}>
                    <Text style={styles.contentCell2}>
                      {moment(item.date).format("DD-MMM-YYYY")}
                    </Text>
                    <Text style={styles.contentCell2}>{item.duration}</Text>
                    <Text style={styles.contentCell2}>{item.activity}</Text>
                    <Text style={styles.contentCell3}>{item.state}</Text>
                    <Text style={styles.contentCell}>
                      {item.percentageClose}
                    </Text>
                    <Text style={styles.contentCell2}>
                      {moment(item.dateNextActivity).format("DD-MMM-YYYY")}
                    </Text>
                    <Text style={styles.contentCell}>{item.timeActivity}</Text>
                  </View>
                  <View style={styles.spacing}>
                    <Text style={styles.capitalize}>
                      Nota: <Text style={styles.lowercase}>{item.note}</Text>
                    </Text>
                  </View>
                </>
              ))}
              <Svg height="10" width="100%">
                <Line
                  x1="0"
                  y1="0"
                  x2="1500"
                  y2="0"
                  stroke="black"
                  strokeWidth="3"
                />
              </Svg>
            </>
          ))}
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
