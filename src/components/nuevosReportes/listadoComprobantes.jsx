import React, { useState, useRef, useEffect } from "react";
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
import { styles } from "../../utils/listadoComprobantes";
import "moment/locale/es";
import moment from "moment";
import MyChart from "./barChartListado";

const MyDocument = ({ info }) => {
  const chartContainerRef = useRef(null);
  const { dateQuery, data, total, totalOutflows, totalOutflowsDenieds } = info;
  const [image, setImage] = useState(null);

  console.log(data);

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

  const formatNumber = (number) => {
    return "$ " + new Intl.NumberFormat("es-ES").format(number);
  };

  return (
    <>
      {!image && (
        <>
          <MyChart
            ref={chartContainerRef}
            data={{
              totalStateSell: totalOutflows,
              totalStateLost: totalOutflowsDenieds,
            }}
          />
        </>
      )}

      <PDFViewer
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        <Document>
          <Page size="A4" style={styles.page}>
            <Text fixed>{dateQuery}</Text>
            <Text style={styles.headerTitle}>
              Suma de TotalComprobante / NombreTipoComprobante
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginVertical: "20px",
              }}
            >
              {image && (
                <Image
                  src={image}
                  style={{
                    width: "200px",
                    height: "200px",
                    marginHorizontal: "20px",
                  }}
                />
              )}
            </View>

            {data.map((item) => (
              <>
                <View>
                  <Text style={styles.bold}>{item.name}</Text>
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
                </View>
                <View style={styles.sectionProductsHeader}>
                  <Text style={styles.headerCell}>Fecha</Text>
                  <Text style={styles.headerCell}>Conc.</Text>
                  <Text style={styles.headerCell}>Doc</Text>
                  <Text style={styles.headerCell2}>Nombres</Text>
                  <Text style={styles.headerCell}>Total</Text>
                  <Text style={styles.headerCell3}>Observación</Text>
                </View>
                <View>
                  <Text style={styles.bold}>OTROS</Text>
                </View>

                {item.outflows.map((element) => (
                  <>
                    <View style={styles.sectionProductsContent}>
                      <Text style={styles.contentCell}>{element.date}</Text>
                      <Text style={styles.contentCell}>{element.con}</Text>
                      <Text style={styles.contentCell}>{element.doc}</Text>
                      <Text style={styles.contentCell2}>{element.names}</Text>
                      <Text style={styles.contentCell}>
                        {formatNumber(element.total)}
                      </Text>
                      <Text style={styles.contentCell3}>
                        {element.observation}
                      </Text>
                    </View>
                  </>
                ))}

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    paddingRight: 199,
                  }}
                >
                  <Text style={styles.bold}>{formatNumber(item.total)}</Text>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingRight: 199,
                    marginVertical: 13,
                    fontSize: 10,
                  }}
                >
                  <Text style={styles.bold}>{item.name}</Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-end",
                    }}
                  >
                    <Svg height="10" width="100">
                      <Line
                        x1="0"
                        y1="10"
                        x2="100"
                        y2="10"
                        stroke="black"
                        strokeWidth="3"
                      />
                    </Svg>
                    <Text style={styles.bold}>{formatNumber(item.total)}</Text>
                    <Svg height="10" width="100">
                      <Line
                        x1="0"
                        y1="0"
                        x2="100"
                        y2="0"
                        stroke="black"
                        strokeWidth="3"
                      />
                    </Svg>
                  </View>
                </View>
              </>
            ))}

            <View
              style={[
                styles.bold,
                {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingRight: 150,
                },
              ]}
            >
              <View>
                <Text
                  style={{
                    marginBottom: 5,
                  }}
                >
                  Total general:
                </Text>
                <Svg height="2" width="100">
                  <Line
                    x1="0"
                    y1="0"
                    x2="100"
                    y2="0"
                    stroke="black"
                    strokeWidth="2"
                  />
                </Svg>
                <Svg height="2" width="100">
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
              <View>
                <Text
                  style={{
                    marginBottom: 5,
                    marginLeft: 50,
                  }}
                >
                  {formatNumber(total)}
                </Text>
                <View
                  style={{
                    marginRight: 50,
                  }}
                >
                  <Svg height="2" width="100">
                    <Line
                      x1="0"
                      y1="0"
                      x2="100"
                      y2="0"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </Svg>
                  <Svg height="2" width="100">
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
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
};

export default MyDocument;
