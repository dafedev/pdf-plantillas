import { Page, Text, View, Document, PDFViewer } from "@react-pdf/renderer";
import { styles } from "../utils/oportunidadesPendientes";
import "moment/locale/es";
import moment from "moment";

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
        <Page size="A3" style={styles.page}>
          <Text fixed>{dateQuery}</Text>
          <Text style={styles.headerTitle} fixed>
            Oportunidades Pendientes
          </Text>
          {data.map((item, index) => (
            <>
              <View key={index}>
                <View style={styles.sectionProducts}>
                  <Text style={styles.headerCell2} />
                  <Text style={styles.headerCell2} />
                  <Text style={styles.headerCell}>Celular</Text>
                  <Text style={styles.headerCell}>Producto</Text>
                  <Text style={styles.headerCell}>Estado</Text>
                  <Text style={styles.headerCell}>Ult Seg</Text>
                  <Text style={styles.headerCell}>Mes Oport</Text>
                  <Text style={styles.headerCell}>Nota</Text>
                </View>
              </View>
              {item.oportunity.map((item, index) => (
                <View style={styles.sectionProductsContent} key={index}>
                  <Text style={styles.contentCell2}>{item.fullName}</Text>
                  <Text style={styles.contentCell2}>{item.fullNameClient}</Text>
                  <Text style={styles.contentCell}>{item.cellphone}</Text>
                  <Text style={styles.contentCell}>{item.product}</Text>
                  <Text style={styles.contentCell}>{item.state}</Text>
                  <Text style={styles.contentCell}>
                    {moment(item.ultSeg).format("DD-MMM-YYYY")}
                  </Text>
                  <Text style={styles.contentCell}>{item.mesOport}</Text>
                  <Text style={styles.contentCell}>{item.note}</Text>
                </View>
              ))}
              <View style={styles.sectionTotal}>
                <Text style={styles.uppercase}>
                  Total pendientes:{" "}
                  <Text style={styles.bold}>{item.oportunity.length}</Text>
                </Text>
              </View>
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
