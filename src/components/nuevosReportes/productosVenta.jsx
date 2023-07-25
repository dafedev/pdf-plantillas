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
import React, { useState, useRef, useEffect } from "react";
import { styles } from "../../utils/inventario";
import MyChart from "../pieChartVentas";

const MyDocument = ({ selectedOption, info }) => {
  const [render, setRender] = useState(1);

  useEffect(() => {
    setRender(selectedOption);
  }, [selectedOption]);

  if (render === 1) {
    return <ReporteVenta info={info} />;
  }
  if (render === 2) {
    return <ReporteVentaTipo info={info} />;
  }
};

export default MyDocument;

const ReporteVenta = ({ info }) => {
  const {
    dateQuery,
    data,
    totalQuantity,
    totalSubVenta,
    totalSubPrice,
    totalUtility,
  } = info;

  return (
    <PDFViewer style={styles.viewerStyles}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <Header dateQuery={dateQuery} />
            <Content
              dataUser={data}
              totalQuantity={totalQuantity}
              totalSubVenta={totalSubVenta}
              totalSubPrice={totalSubPrice}
              totalUtility={totalUtility}
            />
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 50,
              left: 30,
              right: 27,
            }}
            fixed
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

const ReporteVentaTipo = ({ info }) => {
  const chartContainerRef = useRef(null);
  const { dateQuery, data, totalQuantity, totalSubTotal } = info;
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
          <MyChart
            titleChart="Suma de Cantidad / NombreTipoProducto"
            ref={chartContainerRef}
            data={data}
          />
        </>
      )}
      <PDFViewer style={styles.viewerStyles}>
        <Document>
          <Page size="A4" style={styles.page}>
            <HeaderTipo dateQuery={dateQuery} image={image} />
            <ContentTipo
              dataUser={data}
              totalQuantity={totalQuantity}
              totalSubTotal={totalSubTotal}
            />
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
};

const Header = ({ dateQuery }) => {
  return (
    <>
      <View fixed>
        <View style={styles.sectionProducts} fixed>
          <Text>{dateQuery}</Text>
          <Text style={styles.headerTitle}></Text>
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
      </View>
    </>
  );
};
const HeaderTipo = ({ dateQuery, image }) => {
  return (
    <>
      <View>
        <View style={styles.sectionProducts} fixed>
          <Text>{dateQuery}</Text>
          <Text style={styles.headerTitle}></Text>
          <Text></Text>
        </View>

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

        <View style={styles.sectionProducts} fixed>
          <Text style={styles.headerCell2}>Tipo Producto</Text>
          <Text style={styles.headerCell}>Cod</Text>
          <Text style={styles.headerCell3}>Nombre</Text>
          <Text style={styles.headerCell}>Cant</Text>
          <Text style={styles.headerCell2}>Valor Producto</Text>
          <Text style={styles.headerCell}>SubTotal</Text>
        </View>
      </View>
    </>
  );
};
const Content = ({
  dataUser,
  totalQuantity,
  totalSubVenta,
  totalSubPrice,
  totalUtility,
}) => {
  const formatNumber = (number) => {
    return "$ " + new Intl.NumberFormat("es-ES").format(number);
  };

  return (
    <>
      {dataUser.map((item) => (
        <>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={[styles.bold, { marginRight: 20 }]}>Prod:</Text>
              <Text style={styles.boldB}>{item.product}</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={[styles.bold, { marginRight: 20 }]}>Categoría:</Text>
              <Text style={styles.bold}>{item.category}</Text>
            </View>
          </View>

          <View style={styles.sectionProducts}>
            <Text style={styles.headerCell}>Cod.</Text>
            <Text style={styles.headerCell3}>{item.code}</Text>
            <Text style={styles.headerCell}>Cant</Text>
            <Text style={styles.headerCell}>Valor Producto</Text>
            <Text style={styles.headerCell}>Precio Costo</Text>
            <Text style={styles.headerCell}>Sub Venta</Text>
            <Text style={styles.headerCell}>SubCostoC</Text>
            <Text style={styles.headerCell}>Utilidad</Text>
            <Text style={styles.headerCell}>%</Text>
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
          {item.products.map((product) => (
            <>
              <View>
                <View style={styles.sectionProductsContent}>
                  <Text style={styles.contentCell}></Text>
                  <Text style={styles.contentCell3}>{product.reference}</Text>
                  <Text style={styles.contentCell}>{product.quantity}</Text>
                  <Text style={styles.contentCell}>
                    {formatNumber(product.productValue)}
                  </Text>
                  <Text style={styles.contentCell}>
                    {formatNumber(product.price)}
                  </Text>
                  <Text style={styles.contentCell}>
                    {formatNumber(product.subVenta)}
                  </Text>
                  <Text style={styles.contentCell}>
                    {formatNumber(product.subPrice)}
                  </Text>
                  <Text style={styles.contentCell}>
                    {formatNumber(product.utility)}
                  </Text>
                  <Text style={styles.contentCell}>
                    {product.utilityPercent}
                  </Text>
                </View>
              </View>
            </>
          ))}

          <View style={styles.boldB}>
            <View style={styles.sectionProductsContent}>
              <Text style={styles.contentCell}></Text>
              <Text style={styles.contentCell3}></Text>
              <Text style={styles.contentCell}>{item.totalQuantity}</Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.totalValue)}
              </Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.totalPrice)}
              </Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.totalSubVenta)}
              </Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.totalSubPrice)}
              </Text>
              <Text style={styles.contentCell}>
                {formatNumber(item.totalUtility)}
              </Text>
              <Text style={styles.contentCell}>{item.totalUtilityPercent}</Text>
            </View>
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
      ))}

      <View style={[styles.bold, { marginTop: 10 }]}>
        <View style={styles.sectionProductsContent}>
          <Text style={styles.contentCell}></Text>
          <Text style={styles.contentCell3}>Total general: </Text>
          <Text style={styles.contentCell}>{totalQuantity}</Text>
          <Text style={styles.contentCell}></Text>
          <Text style={styles.contentCell}></Text>
          <Text style={styles.contentCell}>{formatNumber(totalSubVenta)}</Text>
          <Text style={styles.contentCell}>{formatNumber(totalSubPrice)}</Text>
          <Text style={styles.contentCell}>{formatNumber(totalUtility)}</Text>
          <Text style={styles.contentCell}>{}</Text>
        </View>
      </View>
    </>
  );
};
const ContentTipo = ({ dataUser, totalQuantity, totalSubTotal }) => {
  const formatNumber = (number) => {
    return "$ " + new Intl.NumberFormat("es-ES").format(number);
  };

  return (
    <>
      <View style={{ marginTop: 10 }}>
        {dataUser.map((item) => (
          <>
            <Text style={styles.bold}>{item.typeProduct}</Text>
            <Svg height="3" width="150">
              <Line
                x1="0"
                y1="0"
                x2="150"
                y2="0"
                stroke="black"
                strokeWidth="3"
              />
            </Svg>

            {item.products.map((product) => (
              <>
                <View
                  style={[
                    styles.sectionProductsContent,
                    { marginTop: 10, marginLeft: 3 },
                  ]}
                >
                  <Text style={styles.contentCell2}></Text>
                  <Text style={styles.contentCell}>{product.code}</Text>
                  <Text style={styles.contentCell3}>{product.name}</Text>
                  <Text style={styles.contentCell}></Text>
                  <Text style={styles.contentCell2}></Text>
                  <Text style={styles.contentCell}></Text>
                </View>

                {product.sells.map((items) => (
                  <>
                    <View
                      style={[styles.sectionProductsContent, { marginLeft: 3 }]}
                    >
                      <Text style={styles.contentCell2}>
                        {items.typeProduct}
                      </Text>
                      <Text style={styles.contentCell}></Text>
                      <Text style={styles.contentCell3}></Text>
                      <Text style={styles.contentCell}>{items.quantity}</Text>
                      <Text style={styles.contentCell2}>
                        {formatNumber(items.valueProduct)}
                      </Text>
                      <Text style={styles.contentCell}>
                        {formatNumber(items.subTotal)}
                      </Text>
                    </View>
                  </>
                ))}
                <View
                  style={[
                    styles.sectionProductsContent,
                    { marginTop: 10, marginLeft: 3 },
                  ]}
                >
                  <Text style={styles.contentCell2}></Text>
                  <Text style={styles.contentCell}></Text>
                  <Text
                    style={[styles.contentCell3, styles.bold, styles.underLine]}
                  >
                    SUBTOTAL:
                  </Text>
                  <Text style={[styles.contentCell, styles.bold]}>
                    {product.quantity}
                  </Text>
                  <Text style={styles.contentCell2}></Text>
                  <Text style={[styles.contentCell, styles.bold]}>
                    {formatNumber(product.subTotal)}
                  </Text>
                </View>
              </>
            ))}
            <Svg height="3" width="100%" style={{ marginTop: 10 }}>
              <Line
                x1="0"
                y1="0"
                x2="1000"
                y2="0"
                stroke="black"
                strokeWidth="3"
              />
            </Svg>
            <View
              style={[styles.sectionProducts, styles.bold, { marginTop: 10 }]}
            >
              <Text style={styles.headerCell2}></Text>
              <Text style={styles.headerCell}>Cant</Text>
              <Text style={styles.headerCell3}>Total</Text>
              <Text style={styles.headerCell}></Text>
              <Text style={styles.headerCell2}></Text>
              <Text style={styles.headerCell}></Text>
            </View>

            <View
              style={[
                styles.sectionProductsContent,
                { marginTop: 10, marginBottom: 10, marginLeft: 3 },
                styles.bold,
              ]}
            >
              <Text style={styles.contentCell2}>{item.typeProduct}</Text>
              <Text style={styles.contentCell}>{item.quantity}</Text>
              <Text style={styles.contentCell3}>{item.totalSubTotal}</Text>
              <Text style={styles.contentCell}></Text>
              <Text style={styles.contentCell2}></Text>
              <Text style={styles.contentCell}></Text>
            </View>
          </>
        ))}
      </View>

      <Svg height="3" width="100%">
        <Line x1="0" y1="0" x2="1000" y2="0" stroke="black" strokeWidth="3" />
      </Svg>
      <View
        style={[
          styles.sectionProductsContent,
          { marginTop: 10, marginLeft: 3 },
          styles.bold,
        ]}
      >
        <Text style={styles.contentCell2}>Total general</Text>
        <Text style={styles.contentCell}></Text>
        <Text style={styles.contentCell3}></Text>
        <Text style={styles.contentCell}>{totalQuantity}</Text>
        <Text style={styles.contentCell2}></Text>
        <Text style={styles.contentCell}>{formatNumber(totalSubTotal)}</Text>
      </View>
    </>
  );
};
