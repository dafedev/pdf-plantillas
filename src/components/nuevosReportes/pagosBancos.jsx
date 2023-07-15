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
import { styles } from "../../utils/pagoBancos";
import "moment/locale/es";
import moment from "moment";
import MyChart from "../pieChart";
const MyDocument = ({ info }) => {
  const chartContainerRef = useRef(null);
  const { dateQuery, data, totalValue, totalCredit, totalDebit } = info;
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
              totalCredit: totalCredit,
              totalDebit: totalDebit,
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
              Suma de TotalMovimiento / Descripción
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
                    width: "150px",
                    height: "150px",
                    marginHorizontal: "20px",
                  }}
                />
              )}
            </View>
            <View style={styles.sectionProductsHeader}>
              <Text style={styles.headerCell}></Text>
              <Text style={styles.headerCell}></Text>
              <Text style={styles.headerCell}>Fecha</Text>
              <Text style={styles.headerCell}>Consecutivo</Text>
              <Text style={styles.headerCell}></Text>
              <Text style={styles.headerCell}>Total Ingreso</Text>
            </View>
            {data.map((item, index) => (
              <>
                <View key={index}>
                  <View>
                    <Text style={[styles.contentCell, styles.bold]}>
                      {item.name}
                    </Text>
                    <Svg height="13" width="220">
                      <Line
                        x1="0"
                        y1="13"
                        x2="220"
                        y2="13"
                        stroke="black"
                        strokeWidth="2"
                      />
                    </Svg>
                  </View>
                  {item.card.map((element, index) => (
                    <View key={index}>
                      <View
                        style={[
                          styles.spacingLeft,
                          {
                            display: "flex",
                            flexDirection: "row",
                          },
                        ]}
                      >
                        <View>
                          <Text style={[styles.bold, styles.upperCase]}>
                            {element.typeCard}
                          </Text>
                          <Svg height="10" width="140">
                            <Line
                              x1="0"
                              y1="0"
                              x2="140"
                              y2="0"
                              stroke="black"
                              strokeWidth="2"
                            />
                          </Svg>
                        </View>
                        <Text
                          style={{
                            marginLeft: 100,
                          }}
                        >
                          No.Tarjeta
                        </Text>
                      </View>
                      <View></View>
                      {element.entrys.map((entry) => (
                        <>
                          <View style={styles.sectionProductsContent}>
                            <Text style={styles.contentCell}></Text>
                            <Text style={styles.contentCell}></Text>
                            <Text style={styles.contentCell}>
                              {moment(entry.date).format("DD-MMMM-YYYY")}
                            </Text>
                            <Text style={styles.contentCell}>
                              {entry.consecutive}
                            </Text>
                            <Text style={styles.contentCell}>
                              {entry.numberCard}
                            </Text>
                            <Text style={styles.contentCell}>
                              {formatNumber(entry.totalEntry)}
                            </Text>
                          </View>
                        </>
                      ))}
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          marginRight: 60,
                          marginTop: 10,
                        }}
                      >
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
                        <View
                          style={[
                            styles.bold,
                            { display: "flex", flexDirection: "row" },
                          ]}
                        >
                          <Text
                            style={[
                              styles.upperCase,
                              {
                                marginRight: 80,
                              },
                            ]}
                          >
                            {element.typeCard}
                          </Text>
                          <Text>{formatNumber(element.totalValue)}</Text>
                        </View>
                      </View>
                    </View>
                  ))}
                  <Text
                    style={[
                      styles.bold,
                      {
                        marginVertical: 20,
                      },
                    ]}
                  >
                    {item.name}
                  </Text>
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
                  {formatNumber(totalValue)}
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
