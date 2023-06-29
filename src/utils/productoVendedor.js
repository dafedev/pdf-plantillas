import moment from "moment";
import { StyleSheet } from "@react-pdf/renderer";

export const data = {
  dateQuery: moment().format("YYYY/MM/DD"),
  data: {
    seller: "Yeison Pruebas",
    totalSubTotal: 1100000,
    customers: [
      {
        name: "Yeison Cliente",
        totalSubtotal: 660000,
        products: [
          {
            reference: "TK-NIK-001-41",
            name: "ZAPATILLAS ADIDAS",
            value: 220000,
            amount: 1,
            discount: 0,
            subTotal: 220000,
            date: "2023-06-26",
          },
          {
            reference: "TK-NIK-001-41",
            name: "ZAPATILLAS ADIDAS",
            value: 220000,
            amount: 1,
            discount: 0,
            subTotal: 220000,
            date: "2023-06-26",
          },
          {
            reference: "TK-NIK-001-41",
            name: "ZAPATILLAS ADIDAS",
            value: 220000,
            amount: 1,
            discount: 0,
            subTotal: 220000,
            date: "2023-06-26",
          },
        ],
      },
      {
        name: "Yeison Cliente",
        totalSubtotal: 440000,
        products: [
          {
            reference: "TK-NIK-001-41",
            name: "ZAPATILLAS ADIDAS",
            value: 220000,
            amount: 1,
            discount: 0,
            subTotal: 220000,
            date: "2023-06-26",
          },
          {
            reference: "TK-NIK-001-41",
            name: "ZAPATILLAS ADIDAS",
            value: 220000,
            amount: 1,
            discount: 0,
            subTotal: 220000,
            date: "2023-06-26",
          },
        ],
      },
    ],
  },
};

export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    paddingTop: 35,
    paddingBottom: 65,
    paddingLeft: 27,
    paddingRight: 30,
    fontSize: 7,
  },
  space: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  underline: {
    textDecoration: "underline",
    paddingTop: "5px",
    paddingBottom: "2px",
  },
  sectionProducts: {
    minWidth: "100%",
    fontSize: 7,
  },
  header: {
    fontSize: 9,
    display: "flex",
    flexDirection: "column",
  },
  sectionProductsHeader: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  sectionProductsContent: {
    display: "flex",
    flexDirection: "row",
    fontSize: 7,
  },
  sectionProductsContentItem: {
    display: "flex",
    flexDirection: "column",
  },
  headerTitle: {
    fontFamily: "Helvetica-Bold",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
    textTransform: "uppercase",
  },
  headerClientName: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bold: {
    fontFamily: "Helvetica-Bold",
  },
  capitalize: {
    textTransform: "capitalize",
  },
  headerCell: {
    flexGrow: 1,
    flexBasis: 0,
    textDecoration: "underline",
    textTransform: "capitalize",
    textAlign: "center",
    marginBottom: 5,
  },
  headerCell2: {
    flexGrow: 2,
    flexBasis: 0,
    textDecoration: "underline",
    textTransform: "capitalize",
    marginBottom: 5,
  },
  headerCell3: {
    flexGrow: 3,
    flexBasis: 0,
    textDecoration: "underline",
    textTransform: "capitalize",
    marginBottom: 5,
  },

  contentCell: {
    flexGrow: 1,
    flexBasis: 0,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  contentCell2: {
    flexGrow: 2,
    flexBasis: 0,
    display: "flex",
    flexDirection: "column",
  },
  contentCell3: {
    flexGrow: 3,
    flexBasis: 0,
    display: "flex",
    flexDirection: "column",
  },
  footerPage: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 30,
    fontSize: 9,
    textAlign: "right",
  },
});
