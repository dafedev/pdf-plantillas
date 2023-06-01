import { Page, Text, View, Document, PDFViewer } from "@react-pdf/renderer";
import { styles } from "../utils/oportunidades";
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
          <View>
            <Text fixed>{dateQuery}</Text>
            <Text style={styles.headerTitle} fixed>
              Reporte oportunidades
            </Text>
            {data.map((item, index) => (
              <>
                <View key={index}>
                  <Text style={styles.headerTitleContent}>{item.fullName}</Text>
                  <View key={index}>
                    <View style={styles.sectionProducts}>
                      <Text style={styles.headerCell2}>Cliente</Text>
                      <Text style={styles.headerCell}>Documento</Text>
                      <Text style={styles.headerCell}>Celular</Text>
                      <Text style={styles.headerCell3}>E-mail</Text>
                      <Text style={styles.headerCell2}>Producto</Text>
                      <Text style={styles.headerCell}>Fecha</Text>
                      <Text style={styles.headerCell2}>Estado</Text>
                    </View>
                  </View>
                  {item.oportunity.map((item, index) => (
                    <View style={styles.sectionProductsContent} key={index}>
                      <Text style={styles.contentCell2}>{item.fullName}</Text>
                      <Text style={styles.contentCell}>{item.document}</Text>
                      <Text style={styles.contentCell}>{item.cellphone}</Text>
                      <Text style={styles.contentCell3}>{item.email}</Text>
                      <Text style={styles.contentCell2}>{item.product}</Text>
                      <Text style={styles.contentCell}>
                        {moment(item.ultSeg).format("DD-MMM-YYYY")}
                      </Text>
                      <Text style={styles.contentCell2}>{item.state}</Text>
                    </View>
                  ))}
                </View>
                <View style={styles.sectionTotal}>
                  <Text style={styles.uppercase}>
                    Vendedor:
                    <Text style={styles.bold}>{item.seller}</Text>
                  </Text>
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
