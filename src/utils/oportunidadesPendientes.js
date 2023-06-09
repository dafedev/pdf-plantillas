import moment from "moment";
import { StyleSheet } from "@react-pdf/renderer";

export const data = {
  dateQuery: moment().format("YYYY/MM/DD"),
  data: [
    {
      id: 1,
      oportunity: [
        {
          fullName: "John Doe",
          fullNameClient: "Hoover Lopez",
          cellphone: "3001234567",
          product: "BWS FI",
          state: "Pendiente",
          ultSeg: "2023-05-18",
          mesOport: "2023-05-18",
          note: "",
        },
        {
          fullName: "John Doe",
          fullNameClient: "Hoover Lopez",
          cellphone: "3001234567",
          product: "BWS FI",
          state: "Pendiente",
          ultSeg: "",
          mesOport: "2023-05-18",
          note: "",
        },
        {
          fullName: "John Doe",
          fullNameClient: "Hoover Lopez",
          cellphone: "3001234567",
          product: "BWS FI",
          state: "Pendiente",
          ultSeg: "",
          mesOport: "2023-05-18",
          note: "",
        },
      ],
    },
    {
      id: 2,
      oportunity: [
        {
          fullName: "John Doe",
          fullNameClient: "Hoover Lopez",
          cellphone: "3001234567",
          product: "BWS FI",
          state: "Pendiente",
          ultSeg: "",
          mesOport: "2023-05-18",
          note: "",
        },
        {
          fullName: "John Doe",
          fullNameClient: "Hoover Lopez",
          cellphone: "3001234567",
          product: "BWS FI",
          state: "Pendiente",
          ultSeg: "",
          mesOport: "2023-05-18",
          note: "",
        },
        {
          fullName: "John Doe",
          fullNameClient: "Hoover Lopez",
          cellphone: "3001234567",
          product: "BWS FI",
          state: "Pendiente",
          ultSeg: "",
          mesOport: "2023-05-18",
          note: "",
        },
        {
          fullName: "John Doe",
          fullNameClient: "Hoover Lopez",
          cellphone: "3001234567",
          product: "BWS FI",
          state: "Pendiente",
          ultSeg: "2023-05-18",
          mesOport: "2023-05-18",
          note: "",
        },
        {
          fullName: "John Doe",
          fullNameClient: "Hoover Lopez",
          cellphone: "3001234567",
          product: "BWS FI",
          state: "Pendiente",
          ultSeg: "",
          mesOport: "2023-05-18",
          note: "",
        },
      ],
    },
  ],
};

export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    textTransform: "uppercase",
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
  sectionProducts: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
  sectionProductsContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentCell: {
    flexGrow: 1,
    flexBasis: 0,
    marginVertical: 2,
  },
  contentCell2: {
    flexGrow: 2,
    flexBasis: 0,
    marginVertical: 2,
  },
  sectionTotal: {
    alignSelf: "flex-end",
    marginVertical: 10,
    fontSize: 10,
  },
  uppercase: {
    textTransform: "uppercase",
  },
  bold: {
    fontFamily: "Helvetica-Bold",
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
