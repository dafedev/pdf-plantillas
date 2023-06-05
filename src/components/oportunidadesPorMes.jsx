import React, { useState, useRef, useEffect, forwardRef } from "react";
import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  Svg,
  Line,
  Image,
} from "@react-pdf/renderer";
import { styles } from "../utils/seguimientos";
import "moment/locale/es";
import moment from "moment";
import MyChart from "../components/barChart";
const MyDocument = ({ info }) => {
  const chartContainerRef = useRef(null);
  const { dateQuery, data, fullName, seller } = info;
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (chartContainerRef?.current) {
      setTimeout(() => {
        (async () => {
          const imageURI = await chartContainerRef.current.getImageUri();
          setImage(imageURI);
        })();
      }, 1000);
    }
  }, [data]);

  return (
    <>
      {!image && (
        <>
          {data.map((item, index) => (
            <MyChart ref={chartContainerRef} data={item} key={index} />
          ))}
        </>
      )}

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
            </View>
            {data.map((item, index) => (
              <>
                <View
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
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

                  {image && (
                    <Image
                      src={image}
                      style={{
                        width: "300px",
                        height: "150px",
                        marginHorizontal: "20px",
                      }}
                    />
                  )}
                </View>

                <View key={index}>
                  <View style={styles.sectionProducts}>
                    <Text style={styles.headerCell3}>Cliente</Text>
                    <Text style={styles.headerCell2}>F. Oportunidad</Text>
                    <Text style={styles.headerCell2}>Total</Text>
                    <Text style={styles.headerCell3}>Estado</Text>
                    <Text style={styles.headerCell}>Financiación</Text>
                    <Text style={styles.headerCell}>%Cierre</Text>
                    <Text style={styles.headerCell2}>F. Ult seguimiento</Text>
                  </View>
                </View>
                {item.oportunityPerMonth.map((item, index) => (
                  <>
                    <View style={styles.sectionProductsContent} key={index}>
                      <Text style={styles.contentCell3}>{item.clientName}</Text>
                      <Text style={styles.contentCell2}>
                        <Text style={styles.capitalize}>
                          {moment(item.dateOportunity).format("DD-MMM-YYYY")}
                        </Text>
                      </Text>
                      <Text style={styles.contentCell2}>{item.total}</Text>
                      <Text style={styles.contentCell3}>{item.state}</Text>
                      <Text style={styles.contentCell}>{item.finance}</Text>
                      <Text style={styles.contentCell}>{item.percentage}</Text>
                      <Text style={styles.contentCell2}>
                        <Text style={styles.capitalize}>
                          {item.dateLastFollow
                            ? moment(item.dateLastFollow).format("DD-MMM-YYYY")
                            : ""}
                        </Text>
                      </Text>
                    </View>
                  </>
                ))}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Svg
                    height="10"
                    width="100%"
                    style={{
                      marginTop: "10px",
                    }}
                  >
                    <Line
                      x1="0"
                      y1="0"
                      x2="1500"
                      y2="0"
                      stroke="black"
                      strokeWidth="3"
                    />
                  </Svg>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={styles.bold}>TOTALES: {item.total}</Text>
                    <Text style={styles.bold}>
                      CANTIDAD VENTAS: {item.totalStateSell}
                    </Text>
                    <Text style={styles.bold}>
                      TOTAL PERDIDAS: {item.totalLost}
                    </Text>
                  </View>
                  <Text style={styles.bold}>
                    TOTAL VENTAS: {item.total + item.totalLost}
                  </Text>
                </View>
              </>
            ))}
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
};

export default MyDocument;
