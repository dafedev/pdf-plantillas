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
  const { dateQuery, data } = info;

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
            Oportunidades por mes
          </Text>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default MyDocument;
