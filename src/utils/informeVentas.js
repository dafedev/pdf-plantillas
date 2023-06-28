import { StyleSheet } from "@react-pdf/renderer";
import moment from "moment";

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
    textTransform: "lowercase",
  },
  sectionTotal: {
    alignSelf: "flex-start",
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

export const data = {
  dateQuery: moment().format("YYYY-MM-DD"),
  data: [
    {
      id: 1,
      fullName: "DISTRIMOTOS YAMAHA SAS",
      address: "Carrera 12",
      phone: "3001234567",
      email: "react.simbio@gmail.com",
      totalBase: 400000,
      totalTax: 76000,
      total: 476000,
      sells: [
        {
          date: "2021-05-01",
          totalBase: 200000,
          totalTax: 38000,
          total: 238000,
          data: [
            {
              consec: 1,
              date: "2021-05-01",
              document: "123456789",
              names: "Consumidor Final",
              base: 100000,
              tax: 19000,
              total: 119000,
            },
            {
              consec: 2,
              date: "2021-05-01",
              document: "123456789",
              names: "Consumidor Final",
              base: 100000,
              tax: 19000,
              total: 119000,
            },
          ],
        },
        {
          date: "2021-06-01",
          totalBase: 200000,
          totalTax: 38000,
          total: 238000,
          data: [
            {
              consec: 1,
              date: "2021-05-01",
              document: "123456789",
              names: "Consumidor Final",
              base: 100000,
              tax: 19000,
              total: 119000,
            },
            {
              consec: 2,
              date: "2021-05-01",
              document: "123456789",
              names: "Consumidor Final",
              base: 100000,
              tax: 19000,
              total: 119000,
            },
          ],
        },
      ],
    },
  ],
};
