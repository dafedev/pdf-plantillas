import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  Svg,
  Line,
} from "@react-pdf/renderer";
import { useState } from "react";
import { styles } from "../utils/listadoOportunidadesPendientes";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

const InformeVentas = ({ info }) => {
  const { data, dateQuery } = info;

  const [initalDate, setInitalDate] = useState("");
  const [finalDate, setFinalDate] = useState("");
  const [includeCanceled, setIncludeCanceled] = useState(false);
  const [active, setActive] = useState(false);

  const sendQuery = () => {
    console.log(initalDate, finalDate, includeCanceled);
    setActive(true);
  };

  return (
    <>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "20px",
        }}
      >
        <h1>Datos generales</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <label htmlFor="">Desde:</label>
            <input
              type="date"
              name=""
              id=""
              onChange={(e) => setInitalDate(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <label htmlFor="">Hasta:</label>
            <input
              type="date"
              name=""
              id=""
              onChange={(e) => setFinalDate(e.target.value)}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            marginTop: "20px",
          }}
        >
          <label htmlFor="">Incluye anuladas</label>
          <input
            type="checkbox"
            onChange={(e) => setIncludeCanceled(e.target.checked)}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
            gap: "30px",
          }}
        >
          <button onClick={sendQuery}>Aceptar</button>
          <button
            onClick={() => {
              setInitalDate("");
              setFinalDate("");
              setIncludeCanceled(false);
              setActive(false);
            }}
          >
            Cancelar
          </button>
        </div>
      </section>
      <MyDocument data={data} dateQuery={dateQuery} active={active} />
    </>
  );
};

const MyDocument = ({ data, dateQuery, active }) => {
  const formatNumber = (number) => {
    return "$ " + new Intl.NumberFormat("es-ES").format(number);
  };

  return (
    <>
      {active && (
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
                  Reporte consolidado - Factura Pos
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
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              marginTop: "10px",
                            }}
                          >
                            <View
                              style={{
                                paddingRight: "90px",
                              }}
                            >
                              <View
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                <Text style={styles.bold}>Empresa:</Text>{" "}
                                <Text> {item.fullName}</Text>
                              </View>
                              <View
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                <Text style={styles.bold}>Dirección:</Text>{" "}
                                <Text> {item.address}</Text>
                              </View>
                            </View>
                            <View>
                              <View
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                <Text style={styles.bold}>Teléfonos:</Text>{" "}
                                <Text> {item.phone}</Text>
                              </View>
                              <View
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                <Text style={styles.bold}>Email:</Text>{" "}
                                <Text> {item.email}</Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    {item.sells.map((item, index) => (
                      <>
                        <View
                          key={index}
                          style={{
                            marginTop: "20px",
                          }}
                        >
                          <Text style={styles.bold}>
                            {moment(item.date).format("MM-YYYY")}
                          </Text>
                          <Svg height="10" width="140">
                            <Line
                              x1="0"
                              y1="0"
                              x2="140"
                              y2="0"
                              stroke="black"
                              strokeWidth="3"
                            />
                          </Svg>
                        </View>
                        <View style={styles.sectionProducts}>
                          <View style={styles.sectionProductsHeader}>
                            <Text style={styles.headerCell}>Consec.</Text>
                            <Text style={styles.headerCell2}>Fecha</Text>
                            <Text style={styles.headerCell}>Documento</Text>
                            <Text style={styles.headerCell3}>Nombres</Text>
                            <Text style={styles.headerCell}>Base</Text>
                            <Text style={styles.headerCell}>Total IMP</Text>
                            <Text style={styles.headerCell}>Total</Text>
                          </View>
                        </View>
                        {item.data.map((item, index) => (
                          <>
                            <View
                              key={index}
                              style={styles.sectionProductsContent}
                            >
                              <View style={styles.contentCell}>
                                <Text>{item.consec}</Text>
                              </View>
                              <View style={styles.contentCell2}>
                                <Text>{item.date}</Text>
                              </View>
                              <View style={styles.contentCell}>
                                <Text>{item.document}</Text>
                              </View>
                              <View style={styles.contentCell3}>
                                <Text>{item.names}</Text>
                              </View>
                              <View style={styles.contentCell}>
                                <Text>{formatNumber(item.base)}</Text>
                              </View>
                              <View style={styles.contentCell}>
                                <Text>{formatNumber(item.tax)}</Text>
                              </View>
                              <View style={styles.contentCell}>
                                <Text>{formatNumber(item.total)}</Text>
                              </View>
                            </View>
                          </>
                        ))}
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              marginTop: "10px",
                              textTransform: "capitalize",
                            }}
                          >
                            <Text>Cantidad Movimientos:</Text>
                            <Text style={[{ marginLeft: "10px" }, styles.bold]}>
                              {item.data.length}
                            </Text>
                          </View>
                          <View
                            style={[
                              styles.sectionProductsContent,
                              {
                                marginTop: "10px",
                                width: "140px",
                                justifyContent: "space-between",
                                marginRight: "22px",
                              },
                            ]}
                          >
                            <View>
                              <Text style={styles.bold}>
                                {formatNumber(item.totalBase)}
                              </Text>
                            </View>

                            <View>
                              <Text style={styles.bold}>
                                {formatNumber(item.totalTax)}
                              </Text>
                            </View>

                            <View>
                              <Text style={styles.bold}>
                                {formatNumber(item.total)}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </>
                    ))}

                    <View
                      style={{ marginTop: "20px", textTransform: "capitalize" }}
                    >
                      <Text style={styles.bold}>Total Consolidado</Text>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "100px",
                            marginTop: "10px",
                          }}
                        >
                          <Text style={styles.bold}>Total Base:</Text>
                          <Text>{formatNumber(item.totalBase)}</Text>
                        </View>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "100px",
                          }}
                        >
                          <Text style={styles.bold}>Total IMP:</Text>
                          <Text>{formatNumber(item.totalTax)}</Text>
                        </View>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "100px",
                          }}
                        >
                          <Text style={styles.bold}>Total:</Text>
                          <Text>{formatNumber(item.total)}</Text>
                        </View>
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
      )}
    </>
  );
};

export default InformeVentas;
