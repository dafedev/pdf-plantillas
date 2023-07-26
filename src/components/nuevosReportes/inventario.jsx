import React, { useState, useEffect } from "react";
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
import { styles } from "../../utils/inventario";

const MyDocument = ({ selectedOption, info }) => {
  const [render, setRender] = useState(1);

  useEffect(() => {
    setRender(selectedOption);
  }, [selectedOption]);

  if (render === 1) {
    return <ReporteInventario info={info} />;
  }
  if (render === 2) {
    return <ReporteInventarioDistribuidor info={info} />;
  }
  if (render === 3) {
    return <ReporteInventarioFabricante info={info} />;
  }
  if (render === 4) {
    return <ReporteInventarioProveedor info={info} />;
  }
};

export default MyDocument;

const formatNumber = (number) => {
  return "$ " + new Intl.NumberFormat("es-ES").format(number);
};
const ReporteInventario = ({ info }) => {
  const {
    dateQuery,
    data,
    totalDistribuidor,
    totalCosto,
    totalVenta,
    totalDisponible,
    totalInventario,
  } = info;

  return (
    <PDFViewer style={styles.viewerStyles}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <Header dateQuery={dateQuery} />
            <Content
              dataUser={data}
              totalDistribuidor={totalDistribuidor}
              totalCosto={totalCosto}
              totalVenta={totalVenta}
              totalDisponible={totalDisponible}
              totalInventario={totalInventario}
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
const ReporteInventarioDistribuidor = ({ info }) => {
  const {
    dateQuery,
    data,
    totalDistribuidor,
    totalDisponible,
    totalInventario,
  } = info;
  return (
    <PDFViewer style={styles.viewerStyles}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <Text style={[{ textAlign: "center" }, styles.bold]}>
              REPORTE DE PRECIO DISTRIBUIDOR
            </Text>
            <Text>{dateQuery}</Text>
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
          <View>
            <View style={styles.sectionProducts}>
              <Text style={styles.headerCell}>Cod.</Text>
              <Text style={styles.headerCell3}>Nombre Producto</Text>
              <Text style={styles.headerCell2}>Presentación</Text>
              <Text style={styles.headerCell}>P. Distribuidor</Text>
              <Text style={styles.headerCell}>Disponible</Text>
              <Text style={styles.headerCell}>V. Inventario</Text>
            </View>
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
          <View>
            <View>
              {data.map((item) => (
                <>
                  <Text style={[styles.bold, { marginVertical: 10 }]}>
                    {item.product}
                  </Text>
                  {item.products.map((product) => (
                    <>
                      <View style={styles.sectionProductsContent}>
                        <Text style={styles.contentCell}>{product.cod}</Text>
                        <Text style={styles.contentCell3}>{product.name}</Text>
                        <Text style={styles.contentCell2}>
                          {product.presentation}
                        </Text>
                        <Text style={styles.contentCell}>
                          {formatNumber(product.distribuidor)}
                        </Text>
                        <Text style={styles.contentCell}>
                          {product.disponible}
                        </Text>
                        <Text style={styles.contentCell}>
                          {formatNumber(product.inventario)}
                        </Text>
                      </View>
                    </>
                  ))}
                  <View
                    style={[
                      styles.sectionProductsContent,
                      { marginVertical: 10 },
                    ]}
                  >
                    <Text style={[styles.bold, styles.contentCell]}>
                      {item.product}
                    </Text>
                    <Text style={styles.contentCell3}></Text>
                    <Text style={styles.contentCell2}></Text>
                    <Text style={[styles.bold, styles.contentCell]}>
                      {formatNumber(item.secSubTotalDistribuidor)}
                    </Text>
                    <Text style={[styles.bold, styles.contentCell]}>
                      {item.subTotalDisponible}
                    </Text>
                    <Text style={[styles.bold, styles.contentCell]}>
                      {formatNumber(item.subTotalInventario)}
                    </Text>
                  </View>
                </>
              ))}
            </View>
          </View>
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

          <View style={[{ marginVertical: 10 }, styles.bold]}>
            <View style={styles.sectionProductsContent}>
              <Text style={[styles.bold, styles.contentCell]}>
                Total general:
              </Text>
              <Text style={styles.contentCell3}></Text>
              <Text style={styles.contentCell2}></Text>
              <Text style={[styles.bold, styles.contentCell]}>
                {formatNumber(totalDistribuidor)}
              </Text>
              <Text style={[styles.bold, styles.contentCell]}>
                {totalDisponible}
              </Text>
              <Text style={[styles.bold, styles.contentCell]}>
                {formatNumber(totalInventario)}
              </Text>
            </View>
          </View>
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
        </Page>
      </Document>
    </PDFViewer>
  );
};
const ReporteInventarioFabricante = ({ info }) => {
  const { dateQuery, data, address, tel, web, totalDistribuidor, urlLogo } =
    info;

  return (
    <PDFViewer style={styles.viewerStyles}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <Image
              src={urlLogo}
              style={{
                height: "100",
                marginBottom: 20,
              }}
            />
          </View>
          <View style={{ marginVertical: 10 }}>
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
          <View style={styles.sectionProducts}>
            <Text>Dirección: {address}</Text>
            <Text>Teléfono: {tel}</Text>
            <Text>Web: {web}</Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text>Fecha impresión: {dateQuery}</Text>
          </View>
          <View>
            <View style={styles.sectionProducts}>
              <Text style={styles.headerCell}>Cod.</Text>
              <Text style={styles.headerCell3}>Nombre Producto</Text>
              <Text style={styles.headerCell2}>Aplicación</Text>
              <Text style={styles.headerCell}>P. Distribuidor</Text>
            </View>
          </View>
          <View>
            <View>
              {data.map((item) => (
                <>
                  <Text style={[styles.bold, { marginVertical: 10 }]}>
                    {item.product}
                  </Text>
                  {item.products.map((product) => (
                    <>
                      <View style={styles.sectionProductsContent}>
                        <Text style={styles.contentCell}>{product.cod}</Text>
                        <Text style={styles.contentCell3}>{product.name}</Text>
                        <Text style={styles.contentCell2}>
                          {product.aplication}
                        </Text>
                        <Text style={styles.contentCell}>
                          {formatNumber(product.distribuidor)}
                        </Text>
                      </View>
                    </>
                  ))}
                  <View style={{ marginVertical: 10 }}>
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
              ))}
            </View>
          </View>
          <View style={[{ marginVertical: 10 }, styles.bold]}>
            <View style={styles.sectionProductsContent}>
              <Text style={[styles.bold, styles.contentCell]}>
                Total general:
              </Text>
              <Text style={styles.contentCell3}></Text>
              <Text style={styles.contentCell2}></Text>
              <Text style={[styles.bold, styles.contentCell]}>
                {formatNumber(totalDistribuidor)}
              </Text>
            </View>
          </View>
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
        </Page>
      </Document>
    </PDFViewer>
  );
};
const ReporteInventarioProveedor = ({ info }) => {
  const {
    dateQuery,
    proveedor,
    data,
    totalVenta,
    totalDistribuidor,
    totalCosto,
    totalDisponible,
  } = info;
  return (
    <PDFViewer style={styles.viewerStyles}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <Text style={[{ textAlign: "center" }, styles.bold]}>
              REPORTE PROVEEDOR
            </Text>
            <Text>{dateQuery}</Text>
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
            <Text style={[styles.underLine, { marginVertical: 10 }]}>
              Proveedor
            </Text>
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
            <Text style={{ marginVertical: 10 }}>{proveedor}</Text>

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

            <View>
              <View style={styles.sectionProducts}>
                <Text style={styles.headerCell}>Tipo Producto</Text>
                <Text style={styles.headerCell}>Cod.</Text>
                <Text style={styles.headerCell3}>Producto</Text>
                <Text style={styles.headerCell}>P. Venta</Text>
                <Text style={styles.headerCell}>P. Distribuidor</Text>
                <Text style={styles.headerCell}>P. Costo</Text>
                <Text style={styles.headerCell}>Disponible</Text>
              </View>
            </View>
            <View style={{ marginBottom: 10 }}>
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
            <View>
              <View>
                {data.map((item) => (
                  <>
                    {item.products.map((product) => (
                      <>
                        <View style={styles.sectionProductsContent}>
                          <Text style={styles.contentCell}>{item.product}</Text>
                          <Text style={styles.contentCell}>{product.cod}</Text>
                          <Text style={styles.contentCell3}>
                            {product.name}
                          </Text>
                          <Text style={styles.contentCell}>
                            {formatNumber(product.venta)}
                          </Text>
                          <Text style={styles.contentCell}>
                            {formatNumber(product.distribuidor)}
                          </Text>
                          <Text style={styles.contentCell}>
                            {formatNumber(product.costo)}
                          </Text>
                          <Text style={styles.contentCell}>
                            {product.disponible}
                          </Text>
                        </View>
                      </>
                    ))}
                    <View style={{ marginVertical: 10 }}>
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
                ))}
              </View>
              <View style={[{ marginVertical: 10 }, styles.bold]}>
                <View style={styles.sectionProductsContent}>
                  <Text style={[styles.bold, styles.contentCell3]}>
                    {proveedor}
                  </Text>
                  <Text style={styles.contentCell} />
                  <Text style={styles.contentCell} />
                  <Text style={styles.contentCell}>
                    {formatNumber(totalVenta)}
                  </Text>
                  <Text style={styles.contentCell}>
                    {formatNumber(totalDistribuidor)}
                  </Text>
                  <Text style={styles.contentCell}>
                    {formatNumber(totalCosto)}
                  </Text>
                  <Text style={styles.contentCell}>{totalDisponible}</Text>
                </View>
              </View>
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
              <View style={[{ marginVertical: 10 }, styles.bold]}>
                <View style={styles.sectionProductsContent}>
                  <Text style={[styles.bold, styles.contentCell3]}>
                    Total general:{" "}
                  </Text>
                  <Text style={styles.contentCell} />
                  <Text style={styles.contentCell} />
                  <Text style={styles.contentCell}>
                    {formatNumber(totalVenta)}
                  </Text>
                  <Text style={styles.contentCell}>
                    {formatNumber(totalDistribuidor)}
                  </Text>
                  <Text style={styles.contentCell}>
                    {formatNumber(totalCosto)}
                  </Text>
                  <Text style={styles.contentCell}>{totalDisponible}</Text>
                </View>
              </View>
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
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

const Header = ({ dateQuery }) => {
  return (
    <>
      <View fixed>
        <View style={styles.sectionProducts} fixed>
          <Text>{dateQuery}</Text>
          <Text style={styles.headerTitle}>REPORTE DE PRODUCTO</Text>
          <Text></Text>
        </View>

        <View>
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

        <View style={styles.sectionProducts}>
          <Text style={styles.headerCell}>Cod.</Text>
          <Text style={styles.headerCell3}></Text>
          <Text style={styles.headerCell}>P. Distribuidor</Text>
          <Text style={styles.headerCell}>P. Costo</Text>
          <Text style={styles.headerCell}>P. Venta</Text>
          <Text style={styles.headerCell}>Disponible</Text>
          <Text style={styles.headerCell}>V. Inventario</Text>
        </View>
      </View>
      <View>
        <Svg height="10" width="100%">
          <Line x1="0" y1="0" x2="800" y2="0" stroke="black" strokeWidth="3" />
        </Svg>
      </View>
    </>
  );
};
const Content = ({
  dataUser,
  totalDistribuidor,
  totalCosto,
  totalVenta,
  totalDisponible,
  totalInventario,
}) => {
  const formatNumber = (number) => {
    return "$ " + new Intl.NumberFormat("es-ES").format(number);
  };

  return (
    <>
      {dataUser.map((item) => {
        return (
          <>
            <View>
              <View style={[styles.bold, { marginTop: 10 }]}>
                <View style={styles.sectionProductsContent}>
                  <Text style={styles.contentCell}></Text>
                  <Text style={styles.contentCell3}>{item.product}</Text>
                  <Text style={styles.contentCell}></Text>
                  <Text style={styles.contentCell}></Text>
                  <Text style={styles.contentCell}></Text>
                  <Text style={styles.contentCell}></Text>
                  <Text style={styles.contentCell}></Text>
                </View>
              </View>

              {item.products.map((product) => {
                return (
                  <>
                    <View style={styles.sectionProductsContent}>
                      <Text style={styles.contentCell}>{product.cod}</Text>
                      <Text style={styles.contentCell3}>{product.name}</Text>
                      <Text style={styles.contentCell}>
                        {formatNumber(product.distribuidor)}
                      </Text>
                      <Text style={styles.contentCell}>
                        {formatNumber(product.costo)}
                      </Text>
                      <Text style={styles.contentCell}>
                        {formatNumber(product.venta)}
                      </Text>
                      <Text style={styles.contentCell}>
                        {product.disponible}
                      </Text>
                      <Text style={styles.contentCell}>
                        {formatNumber(product.inventario)}
                      </Text>
                    </View>
                  </>
                );
              })}

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

              <View style={[styles.bold]}>
                <View style={styles.sectionProductsContent}>
                  <Text style={styles.contentCell}></Text>
                  <Text style={styles.contentCell3}>{item.product}</Text>
                  <Text style={styles.contentCell}>
                    {formatNumber(item.subTotalDistribuidor)}
                  </Text>
                  <Text style={styles.contentCell}>
                    {formatNumber(item.subTotalCosto)}
                  </Text>
                  <Text style={styles.contentCell}>
                    {formatNumber(item.subTotalVenta)}
                  </Text>
                  <Text style={styles.contentCell}>
                    {item.subTotalDisponible}
                  </Text>
                  <Text style={styles.contentCell}>
                    {formatNumber(item.subTotalInventario)}
                  </Text>
                </View>
              </View>

              <View style={[styles.bold]}>
                <View style={styles.sectionProductsContent}>
                  <Text style={styles.contentCell}></Text>
                  <Text style={styles.contentCell3}>SUBTOTAL: </Text>
                  <Text style={styles.contentCell}>
                    {formatNumber(item.secSubTotalDistribuidor)}
                  </Text>
                  <Text style={styles.contentCell}>
                    {formatNumber(item.secSubTotalCosto)}
                  </Text>
                  <Text style={styles.contentCell}>
                    {formatNumber(item.SecSubTotalVenta)}
                  </Text>
                  <Text style={styles.contentCell}></Text>
                  <Text style={styles.contentCell}></Text>
                </View>
              </View>
            </View>
          </>
        );
      })}

      <View style={{ marginTop: 10 }}>
        <Svg height="3" width="100%">
          <Line x1="0" y1="0" x2="800" y2="0" stroke="black" strokeWidth="3" />
        </Svg>
      </View>

      <View style={[styles.bold]}>
        <View style={styles.sectionProductsContent}>
          <Text style={styles.contentCell}></Text>
          <Text style={styles.contentCell3}>Total general:</Text>
          <Text style={styles.contentCell}>
            {formatNumber(totalDistribuidor)}
          </Text>
          <Text style={styles.contentCell}>{formatNumber(totalCosto)}</Text>
          <Text style={styles.contentCell}>{formatNumber(totalVenta)}</Text>
          <Text style={styles.contentCell}>{totalDisponible}</Text>
          <Text style={styles.contentCell}>
            {formatNumber(totalInventario)}
          </Text>
        </View>
      </View>
    </>
  );
};
