import moment from "moment";
import { StyleSheet } from "@react-pdf/renderer";

export const data = {
  dateQuery: moment().format("YYYY/MM/DD"),
  total: 1983000,
  totalOutflows: 1091500,
  totalOutflowsDenieds: 891500,
  data: [
    {
      id: 1,
      name: "EGRESOS ANULACIONES",
      total: 1091500,
      outflows: [
        {
          id: 1,
          date: "2021-05-01",
          con: 3.977,
          doc: "1007798588",
          names: "MARIA TABARES",
          total: 891500,
          observation: "guardo maria",
        },
      ],
    },
    {
      id: 2,
      name: "EGRESOS",
      total: 1091500,
      outflows: [
        {
          id: 1,
          date: "2021-05-01",
          con: 3.977,
          doc: "1007798588",
          names: "MARIA TABARES",
          total: 891500,
          observation: "guardo maria",
        },
        {
          id: 2,
          date: "2021-05-01",
          con: 3.977,
          doc: "121212333",
          names: "PEDRO PEREZ",
          total: 200000,
          observation: "guardo pedro",
        },
      ],
    },
  ],
};

export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    paddingTop: 35,
    paddingBottom: 65,
    paddingLeft: 27,
    paddingRight: 30,
    fontSize: 9,
  },
  spacingLeft: {
    paddingLeft: 100,
    marginTop: 30,
  },
  sectionProducts: {
    minWidth: "100%",
  },
  header: {
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
  },
  sectionProductsContentItem: {
    display: "flex",
    flexDirection: "column",
  },
  headerTitle: {
    fontFamily: "Helvetica-Bold",
    alignSelf: "center",
    marginTop: 10,
    fontSize: 12,
    marginBottom: 10,
  },
  headerClientName: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  upperCase: {
    textTransform: "uppercase",
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
  },
  space: {
    padding: 10,
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
