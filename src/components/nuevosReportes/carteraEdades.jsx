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
    totalEdad30,
    totalEdad60,
    totalEdad90,
    totalEdad120,
    totalMayor120,
    totalTotal,
    totalJuridico,
    totalCastigo,
    cutDate,
  } = info;

  return (
    <PDFViewer style={styles.viewerStyles}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <Header dateQuery={dateQuery} cutDate={cutDate} />
            <Content
              dataUser={data}
              totalEdad30={totalEdad30}
              totalEdad60={totalEdad60}
              totalEdad90={totalEdad90}
              totalEdad120={totalEdad120}
              totalMayor120={totalMayor120}
              totalTotal={totalTotal}
              totalJuridico={totalJuridico}
              totalCastigo={totalCastigo}
            />
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 50,
              left: 30,
              right: 27,
            }}
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

const Header = ({ dateQuery, cutDate }) => {
  return (
    <>
      <View fixed>
        <View style={styles.sectionProducts} fixed>
          <Text>Fecha impresión: {dateQuery}</Text>
          <Text style={styles.headerTitle}>CARTERA POR EDADES</Text>
          <Text>Fecha corte: {cutDate}</Text>
        </View>

        <View style={styles.sectionProducts}>
          <Text style={styles.headerCell2}>Documento</Text>
          <Text style={styles.headerCell3}>Nombres</Text>
          <Text style={styles.headerCell}>Edad 30</Text>
          <Text style={styles.headerCell}>Edad 60</Text>
          <Text style={styles.headerCell}>Edad 90</Text>
          <Text style={styles.headerCell}>Edad 120</Text>
          <Text style={styles.headerCell}>Mayor 120</Text>
          <Text style={styles.headerCell}> TOTAL</Text>
          <Text style={styles.headerCell}>Jurídico</Text>
          <Text style={styles.headerCell}>Castigo</Text>
        </View>
        <View>
          <Svg height="10" width="100%">
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
  totalEdad30,
  totalEdad60,
  totalEdad90,
  totalEdad120,
  totalMayor120,
  totalTotal,
  totalJuridico,
  totalCastigo,
}) => {
  const formatNumber = (number) => {
    return "$ " + new Intl.NumberFormat("es-ES").format(number);
  };

  return (
    <>
      {dataUser.map((item) => {
        return (
          <>
            <View style={styles.sectionProductsContent}>
              <Text style={styles.contentCell2}>{item.document}</Text>
              <Text style={styles.contentCell3}>{item.names}</Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.edad30)}
              </Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.edad60)}
              </Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.edad90)}
              </Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.edad120)}
              </Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.mayor120)}
              </Text>
              <Text style={styles.contentCell}>{formatNumber(item.total)}</Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.juridico)}
              </Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.castigo)}
              </Text>
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
        );
      })}

      <View style={[styles.bold]}>
        <View style={styles.sectionProductsContent}>
          <Text style={styles.contentCell2}></Text>
          <Text style={styles.contentCell3}></Text>
          <Text style={styles.contentCell}>{formatNumber(totalEdad30)}</Text>
          <Text style={styles.contentCell}>{formatNumber(totalEdad60)}</Text>
          <Text style={styles.contentCell}>{formatNumber(totalEdad90)}</Text>
          <Text style={styles.contentCell}>{formatNumber(totalEdad120)}</Text>
          <Text style={styles.contentCell}>{formatNumber(totalMayor120)}</Text>
          <Text style={styles.contentCell}>{formatNumber(totalTotal)}</Text>
          <Text style={styles.contentCell}>{formatNumber(totalJuridico)}</Text>
          <Text style={styles.contentCell}>{formatNumber(totalCastigo)}</Text>
        </View>
      </View>
    </>
  );
};
