import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  Svg,
  Line,
  Rect,
  Image,
} from "@react-pdf/renderer";
import { styles } from "../utils/reporteCotizacion";
import "moment/locale/es";
import moment from "moment";

const MyDocument = ({ info }) => {
  const { dateQuery, data } = info;
  return (
    <PDFViewer style={styles.viewerStyles}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <RectDataUser dataUser={data} dateQuery={dateQuery} />
            <SectionDataUser dataUser={data} />
            <SectionFooter dataUser={data} />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default MyDocument;

const RectDataUser = ({ dataUser, dateQuery }) => {
  return (
    <>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: "50px",
          }}
        >
          <Image src={dataUser.logo} />
          <Text>VENTA DE MOTOCICLETAS</Text>
        </View>
        <View>
          <View style={styles.containerDataUser}>
            <Text style={styles.textSpacing}>{dataUser.nameEnterprise}</Text>
            <Text style={styles.textSpacing}>Nit: {dataUser.nit}</Text>
            <Text>Regimen: {dataUser.regime}</Text>
          </View>
          <View style={styles.containerDataUserSpacing}>
            <View style={styles.containerDataUser}>
              <Text style={styles.textSpacing}>
                Dirección: {dataUser.address}
              </Text>
              <Text style={styles.textSpacing}>Teléfono: {dataUser.phone}</Text>
              <Text>Fax: {dataUser.fax}</Text>
            </View>
            <View>
              <Text>Fecha: {moment(dateQuery).format("DD-MMMM-YYYY")}</Text>
            </View>
          </View>
          <View style={[styles.containerDataUser, { alignItems: "center" }]}>
            <Text style={[styles.underLine, styles.textSpacing]}>PEDIDO</Text>
            <Text style={[styles.bold, styles.textSpacing, { fontSize: "11" }]}>
              No. {dataUser.order}
            </Text>
            <Text
              style={[styles.bold, styles.textSpacing, { marginLeft: "50" }]}
            >
              Vendedor:{" "}
              <Text style={[styles.bold, styles.textSpacing]}>
                {dataUser.seller}
              </Text>
            </Text>
            <View style={styles.boxDataUserSeller}>
              <Svg width="380" height="14">
                <Rect
                  x={0}
                  y={0}
                  width="380"
                  height="14"
                  stroke="#000"
                  strokeWidth="2"
                />
              </Svg>
            </View>
          </View>
          <View style={styles.containerDataUser}>
            <Text style={styles.textSpacing}>
              Señor: {"   "}
              {dataUser.buyer}
            </Text>
            <Text style={styles.textSpacing}>
              Dirección: {dataUser.addressBuyer}
            </Text>
          </View>
          <View style={styles.containerDataUser}>
            <Text style={styles.textSpacing}>
              Teléfono: {"   "}
              {dataUser.cellBuyer}
              {"   "}
              {dataUser.cellBuyer}
            </Text>
            <Text style={styles.textSpacing}>
              Nit o CC: {dataUser.nitBuyer}
            </Text>
          </View>
        </View>
        <View style={styles.boxDataUser}>
          <Svg width="100%" height="95">
            <Rect
              x={0}
              y={0}
              width="538"
              height="95"
              stroke="#000"
              strokeWidth="2"
            />
          </Svg>
        </View>
      </View>
    </>
  );
};

const SectionDataUser = ({ dataUser }) => {
  const { motorbike } = dataUser;
  return (
    <>
      <View style={{ marginVertical: "10px" }}>
        <Image src={motorbike.thumbnail} />
        <View
          style={{
            dispaly: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <Text style={styles.textSpacing}>Nos autoriza contactarlo</Text>
          <View
            style={[styles.bold, { display: "flex", flexDirection: "row" }]}
          >
            <Text>SI</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text>{motorbike.authContact ? "X" : " "}</Text>
              <Svg height="10" width="10">
                <Line
                  x1="0"
                  y1="0"
                  x2="10"
                  y2="0"
                  stroke="black"
                  strokeWidth="3"
                />
              </Svg>
            </View>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ marginLeft: "5px" }}>NO</Text>
            <View
              style={[
                styles.bold,
                {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                },
              ]}
            >
              <Text>{motorbike.authContact ? "  " : "X"}</Text>

              <Svg height="10" width="10">
                <Line
                  x1="0"
                  y1="0"
                  x2="10"
                  y2="0"
                  stroke="black"
                  strokeWidth="3"
                />
              </Svg>
            </View>
          </View>
        </View>
        <View style={styles.sectionProducts}>
          <Text style={styles.headerCell}>Cod.</Text>
          <Text style={styles.headerCell3}>Detalle</Text>
          <Text style={styles.headerCell2}>TipoProducto</Text>
          <Text style={styles.headerCell}>Cant</Text>
          <Text style={styles.headerCell2}>V/r. Unit</Text>
          <Text style={styles.headerCell}>DES</Text>
          <Text style={styles.headerCell}>%</Text>
          <Text style={styles.headerCell2}>Valor Total</Text>
        </View>
        <View style={styles.sectionProductsContent}>
          <Text style={styles.contentCell}>{motorbike.code}</Text>
          <Text style={styles.contentCell3}>{motorbike.detail}</Text>
          <Text style={styles.contentCell2}>{motorbike.typeProduct}</Text>
          <Text style={styles.contentCell}>{motorbike.amount}</Text>
          <Text style={styles.contentCell2}>{motorbike.unitValue}</Text>
          <Text style={styles.contentCell}>{motorbike.discount}</Text>
          <Text style={styles.contentCell}>{motorbike.percentageDiscount}</Text>
          <Text style={styles.contentCell2}>{motorbike.totalValue}</Text>
        </View>
      </View>
    </>
  );
};

const SectionFooter = ({ dataUser }) => {
  return (
    <>
      <View style={styles.sectionFooter}>
        <View
          style={[
            styles.sectionContentFooter,
            { display: "flex", flexDirection: "row" },
          ]}
        >
          <Text style={[styles.textSpacing, { marginRight: "10" }]}>
            <Text style={styles.uppercase}>SI ES EMPLEADO:</Text> 2 Fotocopias
            de TOTAL la cédula de ciudadanía ampliada al 150%| Carta laboral:
            Incluyendo salario, comisiones, antigüedad, clase de contrato,
            cargo| 4 últimos desprendibles de pago
          </Text>

          <Svg height="70" width="10">
            <Line x1="0" y1="0" x2="0" y2="70" stroke="black" strokeWidth="3" />
          </Svg>
        </View>
        <View
          style={[
            styles.sectionContentFooter,
            { display: "flex", flexDirection: "row" },
          ]}
        >
          <Text style={[styles.textSpacing, { marginRight: "10" }]}>
            <Text style={styles.uppercase}>SI ES INDEPENDIENTE:</Text> 2
            Fotocopias de la cédula de ciudadanía ampliada al 150%| Certificado
            de Cámara y comercio - Fotocopia declaración de renta | Extratos
            bancarios - fotocopia facturas de compra - referencia comercial por
            escrito|Fotocopia del runt
          </Text>

          <Svg height="70" width="10">
            <Line x1="0" y1="0" x2="0" y2="70" stroke="black" strokeWidth="3" />
          </Svg>
        </View>
        <View
          style={[
            styles.sectionContentFooter,
            { display: "flex", flexDirection: "row" },
          ]}
        >
          <Text style={[styles.textSpacing, { marginRight: "10" }]}>
            <Text style={styles.uppercase}>
              SI ES PENSIONADO CON PROPIEDAD RAIZ:
            </Text>{" "}
            2 Fotocopias de la cédula de ciudadanía ampliada al 150%| 2 Últimos
            desprendibles de la pensión, Certificado de tradición (propiedad
            libre, sin patrímonio familiar, sin afectación a vivienda y sin
            hipoteca)
          </Text>

          <Svg height="70" width="10">
            <Line x1="0" y1="0" x2="0" y2="70" stroke="black" strokeWidth="3" />
          </Svg>
        </View>
        <View
          style={[
            styles.sectionContentFooter,
            { display: "flex", flexDirection: "row" },
          ]}
        >
          <Text style={[styles.textSpacing, { marginRight: "10" }]}>
            <Text style={styles.uppercase}>TRANSPORTADORES:</Text> 2 Fotocopias
            de la cédula de ciudadanía ampliada al 150%| Carta de afiliación,
            Fotocopia T.P vehiculo
          </Text>

          <Svg height="70" width="10">
            <Line x1="0" y1="0" x2="0" y2="70" stroke="black" strokeWidth="3" />
          </Svg>
        </View>
        <View
          style={[
            styles.sectionContentFooter2,
            { display: "flex", flexDirection: "column" },
          ]}
        >
          <Text>Total:</Text>
          <Text>{dataUser.motorbike.totalValue}</Text>
        </View>
      </View>
      <View style={{ marginVertical: "15px" }}>
        <Text style={{ textTransform: "capitalize", marginBottom: "3px" }}>
          Nombre:
        </Text>
        <Svg height="5" width="220">
          <Line x1="0" y1="0" x2="220" y2="0" stroke="black" strokeWidth="3" />
        </Svg>
        <Text style={{ textTransform: "capitalize" }}>
          Doc: {dataUser.nitBuyer}
        </Text>
      </View>
      <View>
        <Text>
          POLÍTICA GENERAL DE TRATAMIENTO DE DATOS DE LAS PERSONAS NATURALES
        </Text>
        <Text>
          Distrimotos Yamaha, garantiza la protección de derechos como el Habeas
          Data, la privacidad, la intimidad, el buen nombre y la imagen. Con el
          propósito de que todas las actuaciones se regirán por principios de
          buena fe, legalidad, veracidad, libertad y transparencia. Quien en
          ejercicio de su actividad comercial y/o contractual, utilizará los
          datos consignados para suministrar de forma periódica y cada que se
          considere conveniente. Cualquier actividad, incluyendo las académicas,
          comerciales y laborales, sean estas permanentes u ocasionales pueda
          suministrar cualquier tipo de información o dato personal a
          Distrimotos Yamaha S.A. y en la cual esta actúe como encargado del
          tratamiento o responsable del tratamiento podrá conocerla,
          actualizarla y rectificarla. Distrimotos-Yamaha S.A utilizará los
          datos por Usted consignados en el documento mediante el cual nos
          autoriza a suministrarle de forma periódica, cada que Distrimotos
          Yamaha S.A., Yamaha Motor Co., su Red de Distribución o sus encargados
          lo estimen conveniente, y mientras la actividad comercial y/o
          contractual se encuentre en operación, todo tipo de información
          comercial relacionada con los productos y servicios que comercializa,
          oferta, promociona, demás datos o actividades relacionadas. Esta
          información, en caso de que Distrimotos Yamaha así lo considere, será
          trasferida a terceras personas, nacionales o extranjeras (naturales o
          jurídicas) o a su Red de distribución, quienes en calidad de
          encargados del tratamiento, con las cuales contrate actividades de
          cualquier tipo, darán a la base de datos el uso informado en el
          presente Manual. Se le informa que Usted como titular tiene los
          derechos consagrados en el artículo 8 de la ley 1581 de 2012: A)
          conocer, actualizar y rectificar sus datos. B) solicitar prueba de su
          autorización. C) ser informado sobre el uso que se le ha dado a sus
          datos. D) presentar quejas ante la SIC por infracciones. E) revocar su
          autorización de acuerdo con el procedimiento creado por la SIC. F)
          Acceder gratuitamente a sus datos personales.
        </Text>
      </View>
    </>
  );
};
