import { StyleSheet } from "@react-pdf/renderer";

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
    alignItems: "center",
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
  cedula: "8816261",
  names: "BERNY MOTOS",
  address: "cra 15 # 13a - 38",
  cellphone: "",
  nameEnterprise: "IMPORTADORA ROMA OM SAS",
  consec: 1472,
  date: "17/02/2018",
  total: 1283867,
  balance: 1283867,
  totalBalance: 1283867,
};
