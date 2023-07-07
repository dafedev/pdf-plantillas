import moment from "moment";
import { StyleSheet } from "@react-pdf/renderer";

export const data = {
  dateQuery: moment().format("YYYY/MM/DD"),
  totalValue: 1695000,
  totalDebit: 1130000,
  totalCredit: 565000,
  data: [
    {
      id: 1,
      name: "Banco de Bogotá",
      card: [
        {
          typeCard: "Tarjetas débito",
          totalValue: 565000,
          entrys: [
            {
              date: "2023-06-29",
              consecutive: "Factura No. 3",
              numberCard: 11,
              totalEntry: 220000,
            },
            {
              date: "2023-06-29",
              consecutive: "Factura No. 4",
              numberCard: 11,
              totalEntry: 125000,
            },
            {
              date: "2023-06-29",
              consecutive: "Factura No. 5",
              numberCard: 11,
              totalEntry: 220000,
            },
          ],
        },
      ],
    },
    {
      id: 1,
      name: "Banco de Bogotá",
      card: [
        {
          typeCard: "Tarjetas débito",
          totalValue: 565000,
          entrys: [
            {
              date: "2023-06-29",
              consecutive: "Factura No. 3",
              numberCard: 11,
              totalEntry: 220000,
            },
            {
              date: "2023-06-29",
              consecutive: "Factura No. 4",
              numberCard: 11,
              totalEntry: 125000,
            },
            {
              date: "2023-06-29",
              consecutive: "Factura No. 5",
              numberCard: 11,
              totalEntry: 220000,
            },
          ],
        },
      ],
    },
    {
      id: 1,
      name: "Bancolombia",
      card: [
        {
          typeCard: "Tarjetas crédito",
          totalValue: 565000,
          entrys: [
            {
              date: "2023-06-29",
              consecutive: "Factura No. 3",
              numberCard: 11,
              totalEntry: 220000,
            },
            {
              date: "2023-06-29",
              consecutive: "Factura No. 4",
              numberCard: 11,
              totalEntry: 125000,
            },
            {
              date: "2023-06-29",
              consecutive: "Factura No. 5",
              numberCard: 11,
              totalEntry: 220000,
            },
          ],
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
