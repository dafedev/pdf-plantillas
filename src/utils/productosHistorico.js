import { StyleSheet } from "@react-pdf/renderer";
import moment from "moment";

export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    paddingTop: 35,
    paddingBottom: 65,
    paddingLeft: 27,
    paddingRight: 30,
    fontSize: 9,
  },
  headerTitle: {
    fontFamily: "Helvetica-Bold",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  headerTitleContent: {
    fontFamily: "Helvetica-Bold",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  sectionProducts: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerClientName: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerCell: {
    flexGrow: 1,
    flexBasis: 0,
    textDecoration: "underline",
    textTransform: "capitalize",
    marginBottom: 5,
    marginTop: 5,
  },
  headerCell2: {
    flexGrow: 2,
    flexBasis: 0,
    textDecoration: "underline",
    textTransform: "capitalize",
    marginBottom: 5,
    marginTop: 5,
  },
  headerCell3: {
    flexGrow: 3,
    flexBasis: 0,
    textDecoration: "underline",
    textTransform: "capitalize",
    marginBottom: 5,
    marginTop: 5,
  },
  sectionProductsContent: {
    display: "flex",
    flexDirection: "row",
    textTransform: "uppercase",
    justifyContent: "space-between",
  },
  contentCell: {
    flexGrow: 1,
    flexBasis: 0,
    paddingBottom: 3,
  },
  contentCell2: {
    flexGrow: 2,
    paddingBottom: 3,
    flexBasis: 0,
  },
  contentCell3: {
    flexGrow: 3,
    flexBasis: 0,
    paddingBottom: 3,
  },
  uppercase: {
    textTransform: "uppercase",
  },
  capitalize: {
    textTransform: "capitalize",
  },
  bold: {
    fontFamily: "Helvetica-Bold",
  },
  boldB: {
    fontFamily: "Helvetica-Bold",
    color: "#373796",
  },
  footerPage: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 30,
    fontSize: 9,
    textAlign: "right",
  },
  headerSectionDataClient: {
    display: "flex",
    flexDirection: "row",
  },
  sectionDataClient: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 10,
    marginRight: 40,
  },
  headerNameEmp: {
    fontFamily: "Helvetica-Bold",
    alignSelf: "flex-end",
  },
  lowercase: {
    textTransform: "lowercase",
  },
  spacing: {
    marginBottom: 10,
  },
  viewerStyles: {
    height: "100vh",
    width: "100vw",
  },
  boxDataUser: {
    position: "absolute",
    top: "50",
    left: "0",
    width: "100%",
    height: "95",
  },
  containerDataUser: {
    display: "flex",
    flexDirection: "row",
    padding: "5px",
    justifyContent: "flex-start",
    textTransform: "uppercase",
  },
  containerDataUserSpacing: {
    display: "flex",
    flexDirection: "row",
    paddingRight: "5px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textSpacing: {
    paddingRight: "10px",
  },
  underLine: {
    textDecoration: "underline",
    fontFamily: "Helvetica-Bold",
  },
  boxDataUserSeller: {
    position: "absolute",
    top: "4",
    right: "10",
    width: "380",
    height: "14",
  },
  sectionFooter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionContentFooter: {
    flexGrow: 2,
    flexBasis: 0,
    textTransform: "lowercase",
  },
  sectionContentFooter2: {
    flexGrow: 1,
    flexBasis: 0,
  },
});

export const data = {
  dateQuery: moment().format("YYYY/MM/DD"),
  totalPrice: 100000,
  data: [
    {
      nameProduct: "ACEITE 20W50 ADVANCE SHELL",
      reference: "20W50 ADVANCE",
      dataProducts: [
        {
          date: "27/06/2023",
          products: [
            {
              pVenta: 30000,
              pCosto: 0,
              quantity: 0,
              available: 61,
              dateChange: "27/06/2023 8:23:27",
              action: "ACTUALIZO PRODUCTO",
              user: "ORLANDOBANDO",
              observation: "ACEITES R/**OR-",
            },
            {
              pVenta: 30000,
              pCosto: 0,
              quantity: 0,
              available: 61,
              dateChange: "27/06/2023 8:23:27",
              action: "ACTUALIZO PRODUCTO",
              user: "ORLANDOBANDO",
              observation: "ACEITES R/**OR-",
            },
            {
              pVenta: 30000,
              pCosto: 0,
              quantity: 0,
              available: 61,
              dateChange: "27/06/2023 8:23:27",
              action: "ACTUALIZO PRODUCTO",
              user: "ORLANDOBANDO",
              observation: "ACEITES R/**OR-",
            },
          ],
        },
      ],
    },
    {
      nameProduct: "ACEITE 20W50 ADVANCE SHELL",
      reference: "20W50 ADVANCE",
      dataProducts: [
        {
          date: "27/06/2023",
          products: [
            {
              pVenta: 30000,
              pCosto: 0,
              quantity: 0,
              available: 61,
              dateChange: "27/06/2023 8:23:27",
              action: "ACTUALIZO PRODUCTO",
              user: "ORLANDOBANDO",
              observation: "ACEITES R/**OR-",
            },
          ],
        },
      ],
    },
    {
      nameProduct: "ACEITE 20W50 ADVANCE SHELL",
      reference: "20W50 ADVANCE",
      dataProducts: [
        {
          date: "27/06/2023",
          products: [
            {
              pVenta: 30000,
              pCosto: 0,
              quantity: 0,
              available: 61,
              dateChange: "27/06/2023 8:23:27",
              action: "ACTUALIZO PRODUCTO",
              user: "ORLANDOBANDO",
              observation: "ACEITES R/**OR-",
            },
            {
              pVenta: 30000,
              pCosto: 0,
              quantity: 0,
              available: 61,
              dateChange: "27/06/2023 8:23:27",
              action: "ACTUALIZO PRODUCTO",
              user: "ORLANDOBANDO",
              observation: "ACEITES R/**OR-",
            },
            {
              pVenta: 30000,
              pCosto: 0,
              quantity: 0,
              available: 61,
              dateChange: "27/06/2023 8:23:27",
              action: "ACTUALIZO PRODUCTO",
              user: "ORLANDOBANDO",
              observation: "ACEITES R/**OR-",
            },
          ],
        },
      ],
    },
  ],
};
