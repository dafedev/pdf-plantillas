import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  Svg,
  Line,
} from "@react-pdf/renderer";
import { styles } from "../../utils/reporteFlujos";

const MyDocument = ({ info }) => {
  const {
    dateQuery,
    data,
    totalFlowsBanks,
    totalFlowsCash,
    totalFlowsCredit,
    totalFlowsCreditValue,
  } = info;

  return (
    <PDFViewer style={styles.viewerStyles}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <Header dateQuery={dateQuery} />
            <Content dataUser={data} />
            <Footer
              dataUser={data}
              totalFlowsBanks={totalFlowsBanks}
              totalFlowsCash={totalFlowsCash}
              totalFlowsCredit={totalFlowsCredit}
              totalFlowsCreditValue={totalFlowsCreditValue}
            />
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
        <Text>{dateQuery}</Text>
        <View style={styles.headerTitle}>
          <Text>REPORTE DE FLUJOS</Text>
        </View>
        <View style={styles.sectionProducts}>
          <Text style={styles.headerCell3}>Nombre</Text>
          <Text style={styles.headerCell}>Recibo</Text>
          <Text style={styles.headerCell}>Factura</Text>
          <Text style={styles.headerCell}>Cartera</Text>
          <Text style={styles.headerCell}>ValorCredito</Text>
          <Text style={styles.headerCell}>Efectivo</Text>
          <Text style={styles.headerCell}>Bancos</Text>
          <Text style={styles.headerCell}>TotalAbono</Text>
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
      {dataUser.map((item) => {
        return (
          <>
            <View
              style={{
                marginTop: "10px",
              }}
            >
              <Text>{item.date}</Text>
              <Svg height="10" width="100">
                <Line
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="0"
                  stroke="black"
                  strokeWidth="2"
                />
              </Svg>
            </View>
            {item.flows.map((flow) => {
              return (
                <>
                  <View style={styles.sectionProductsContent}>
                    <Text style={styles.contentCell3}>{flow.name}</Text>
                    <Text style={styles.contentCell}>
                      {formatNumber(flow.bill)}
                    </Text>
                    <Text style={styles.contentCell}>
                      {formatNumber(flow.receipt)}
                    </Text>
                    <Text style={styles.contentCell}>{flow.wallet}</Text>
                    <Text style={styles.contentCell}>
                      {formatNumber(flow.creditValue)}
                    </Text>
                    <Text style={styles.contentCell}>
                      {formatNumber(flow.cash)}
                    </Text>
                    <Text style={styles.contentCell}>
                      {formatNumber(flow.banks)}
                    </Text>
                    <Text style={styles.contentCell}>
                      {formatNumber(flow.creditTotal)}
                    </Text>
                  </View>
                </>
              );
            })}
          </>
        );
      })}
    </>
  );
};

const Footer = ({
  dataUser,
  totalFlowsBanks,
  totalFlowsCash,
  totalFlowsCredit,
  totalFlowsCreditValue,
}) => {
  const formatNumber = (number) => {
    return "$ " + new Intl.NumberFormat("es-ES").format(number);
  };

  return (
    <>
      <View
        style={{
          marginTop: 30,
        }}
      />

      {dataUser.map((item) => {
        return (
          <>
            <View
              style={[
                styles.sectionProductsContent,
                styles.bold,
                { marginVertical: 3 },
              ]}
            >
              <Text style={styles.contentCell3}>{item.date}</Text>
              <Text style={styles.contentCell}></Text>
              <Text style={styles.contentCell}></Text>
              <Text style={styles.contentCell}></Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.totalFlowsCreditValue)}
              </Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.totalFlowsCash)}
              </Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.totalFlowsBanks)}
              </Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.totalFlowsCredit)}
              </Text>
            </View>
          </>
        );
      })}
      <View style={[styles.sectionProductsContent, styles.bold]}>
        <Text style={styles.contentCell3}>Total general:</Text>
        <Text style={styles.contentCell}></Text>
        <Text style={styles.contentCell}></Text>
        <Text style={styles.contentCell}></Text>
        <Text style={styles.contentCell}>
          {formatNumber(totalFlowsCreditValue)}
        </Text>
        <Text style={styles.contentCell}>{formatNumber(totalFlowsCash)}</Text>
        <Text style={styles.contentCell}>{formatNumber(totalFlowsBanks)}</Text>
        <Text style={styles.contentCell}>{formatNumber(totalFlowsCredit)}</Text>
      </View>
    </>
  );
};
