import moment from "moment";
import { StyleSheet } from "@react-pdf/renderer";

export const data = {
  dateQuery: moment().format("YYYY/MM/DD"),

  data: [
    {
      id: 1,
      fullName: "John Doe",
      oportunity: [
        {
          nameClient: "Hoover Lopez",
          cellphone: "3001234567",
          products: [
            {
              id: 1,
              name: "XTZ 125",
              date: "2023-05-23",
              state: "Pendiente",
            },
            {
              id: 2,
              name: "Moto n-Max ABS",
              date: "2023-05-23",
              state: "Poco interes",
            },
          ],
        },
        {
          nameClient: "Julian Andres Cardona Velasquez",
          cellphone: "3001234567",
          products: [
            {
              id: 1,
              name: "BWS FI",
              date: "2023-05-23",
            },
          ],
        },
        {
          nameClient: "Andres Marin",
          cellphone: "3024485083",
          products: [
            {
              id: 1,
              name: "XTZ 125",
              date: "2022-08-30",
              state: "Poco interes",
            },
          ],
        },
        {
          nameClient: "Wiener Rebolledo",
          cellphone: "3143873121",
          products: [
            {
              id: 1,
              name: "FZ2.0 FI D-6",
              date: "2022-08-30",
            },
          ],
        },
        {
          nameClient: "Jose Alegria",
          cellphone: "3163833384",
          products: [
            {
              id: 1,
              name: "XTZ150",
              date: "2022-08-30",
            },
          ],
        },
        {
          nameClient: "Manuel Chaves",
          cellphone: "3228989221",
          products: [
            {
              id: 1,
              name: "FZ2.0 FI D-6",
              date: "2022-08-29",
            },
          ],
        },
        {
          nameClient: "Yerly Katalina Martinez Canizalez",
          cellphone: "3015307723",
          products: [
            {
              id: 1,
              name: "CRYPTON FI 115",
              date: "2022-08-29",
            },
          ],
        },
        {
          nameClient: "Milton Correa",
          cellphone: "3234715931",
          products: [
            {
              id: 1,
              name: "YCZ-110",
              date: "2022-08-29",
            },
          ],
        },
        {
          nameClient: "Yustin Alarcon",
          cellphone: "3106156680",
          products: [
            {
              id: 1,
              name: "CRYPTON FI 115",
              date: "2022-08-29",
            },
          ],
        },
        {
          nameClient: "Jonathan Castro",
          cellphone: "000",
          products: [
            {
              id: 1,
              name: "XTZ 125",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Rodrigo Toro",
          cellphone: "3104432910",
          products: [
            {
              id: 1,
              name: "FZ2.0 FI D-6",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Valentina Hernandez",
          cellphone: "3187578773",
          products: [
            {
              id: 1,
              name: "YBR-Z125",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Geraldin Escobar",
          cellphone: "3165601623",
          products: [
            {
              id: 1,
              name: "FZ2.0 FI D-6",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Javier Perez",
          cellphone: "3102779500",
          products: [
            {
              id: 1,
              name: "SZ-R",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Hernando Perdomo",
          cellphone: "3175978708",
          products: [
            {
              id: 1,
              name: "FZ2.0 FI D-6",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Carmen Elena Chaves Rosero",
          cellphone: "3176509331",
          products: [
            {
              id: 1,
              name: "XTZ150",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Ivan Caicedo",
          cellphone: "3242784739",
          products: [
            {
              id: 1,
              name: "XTZ 125",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Alexander Paredes",
          cellphone: "3218421493",
          products: [
            {
              id: 1,
              name: "CRYPTON FI 115",
              date: "2022-08-26",
              state: "Perdida",
            },
          ],
        },
        {
          nameClient: "Cristian Mota Polania",
          cellphone: "3143038491",
          products: [
            {
              id: 1,
              name: "CRYPTON FI 115",
              date: "2022-08-26",
            },
          ],
        },
        {
          nameClient: "Monica Narvaez",
          cellphone: "3218375744",
          products: [
            {
              id: 1,
              name: "XTZ 125",
              date: "2022-08-25",
            },
          ],
        },
        {
          nameClient: "Oscar Sebastian Suarez Giraldo",
          cellphone: "3155049937",
          products: [
            {
              id: 1,
              name: "FZ25",
              date: "2022-08-25",
            },
          ],
        },
      ],
    },
    {
      id: 1,
      fullName: "John Doe",
      oportunity: [
        {
          nameClient: "Hoover Lopez",
          cellphone: "3001234567",
          products: [
            {
              id: 1,
              name: "XTZ 125",
              date: "2023-05-23",
              state: "Pendiente",
            },
            {
              id: 2,
              name: "Moto n-Max ABS",
              date: "2023-05-23",
              state: "Poco interes",
            },
          ],
        },
        {
          nameClient: "Julian Andres Cardona Velasquez",
          cellphone: "3001234567",
          products: [
            {
              id: 1,
              name: "BWS FI",
              date: "2023-05-23",
            },
          ],
        },
        {
          nameClient: "Andres Marin",
          cellphone: "3024485083",
          products: [
            {
              id: 1,
              name: "XTZ 125",
              date: "2022-08-30",
              state: "Poco interes",
            },
          ],
        },
        {
          nameClient: "Wiener Rebolledo",
          cellphone: "3143873121",
          products: [
            {
              id: 1,
              name: "FZ2.0 FI D-6",
              date: "2022-08-30",
            },
          ],
        },
        {
          nameClient: "Jose Alegria",
          cellphone: "3163833384",
          products: [
            {
              id: 1,
              name: "XTZ150",
              date: "2022-08-30",
            },
          ],
        },
        {
          nameClient: "Manuel Chaves",
          cellphone: "3228989221",
          products: [
            {
              id: 1,
              name: "FZ2.0 FI D-6",
              date: "2022-08-29",
            },
          ],
        },
        {
          nameClient: "Yerly Katalina Martinez Canizalez",
          cellphone: "3015307723",
          products: [
            {
              id: 1,
              name: "CRYPTON FI 115",
              date: "2022-08-29",
            },
          ],
        },
        {
          nameClient: "Milton Correa",
          cellphone: "3234715931",
          products: [
            {
              id: 1,
              name: "YCZ-110",
              date: "2022-08-29",
            },
          ],
        },
        {
          nameClient: "Yustin Alarcon",
          cellphone: "3106156680",
          products: [
            {
              id: 1,
              name: "CRYPTON FI 115",
              date: "2022-08-29",
            },
          ],
        },
        {
          nameClient: "Jonathan Castro",
          cellphone: "000",
          products: [
            {
              id: 1,
              name: "XTZ 125",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Rodrigo Toro",
          cellphone: "3104432910",
          products: [
            {
              id: 1,
              name: "FZ2.0 FI D-6",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Valentina Hernandez",
          cellphone: "3187578773",
          products: [
            {
              id: 1,
              name: "YBR-Z125",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Geraldin Escobar",
          cellphone: "3165601623",
          products: [
            {
              id: 1,
              name: "FZ2.0 FI D-6",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Javier Perez",
          cellphone: "3102779500",
          products: [
            {
              id: 1,
              name: "SZ-R",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Hernando Perdomo",
          cellphone: "3175978708",
          products: [
            {
              id: 1,
              name: "FZ2.0 FI D-6",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Carmen Elena Chaves Rosero",
          cellphone: "3176509331",
          products: [
            {
              id: 1,
              name: "XTZ150",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Ivan Caicedo",
          cellphone: "3242784739",
          products: [
            {
              id: 1,
              name: "XTZ 125",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Alexander Paredes",
          cellphone: "3218421493",
          products: [
            {
              id: 1,
              name: "CRYPTON FI 115",
              date: "2022-08-26",
              state: "Perdida",
            },
          ],
        },
        {
          nameClient: "Cristian Mota Polania",
          cellphone: "3143038491",
          products: [
            {
              id: 1,
              name: "CRYPTON FI 115",
              date: "2022-08-26",
            },
          ],
        },
        {
          nameClient: "Monica Narvaez",
          cellphone: "3218375744",
          products: [
            {
              id: 1,
              name: "XTZ 125",
              date: "2022-08-25",
            },
          ],
        },
        {
          nameClient: "Oscar Sebastian Suarez Giraldo",
          cellphone: "3155049937",
          products: [
            {
              id: 1,
              name: "FZ25",
              date: "2022-08-25",
            },
          ],
        },
      ],
    },
    {
      id: 1,
      fullName: "John Doe",
      oportunity: [
        {
          nameClient: "Hoover Lopez",
          cellphone: "3001234567",
          products: [
            {
              id: 1,
              name: "XTZ 125",
              date: "2023-05-23",
              state: "Pendiente",
            },
            {
              id: 2,
              name: "Moto n-Max ABS",
              date: "2023-05-23",
              state: "Poco interes",
            },
          ],
        },
        {
          nameClient: "Julian Andres Cardona Velasquez",
          cellphone: "3001234567",
          products: [
            {
              id: 1,
              name: "BWS FI",
              date: "2023-05-23",
            },
          ],
        },
        {
          nameClient: "Andres Marin",
          cellphone: "3024485083",
          products: [
            {
              id: 1,
              name: "XTZ 125",
              date: "2022-08-30",
              state: "Poco interes",
            },
          ],
        },
        {
          nameClient: "Wiener Rebolledo",
          cellphone: "3143873121",
          products: [
            {
              id: 1,
              name: "FZ2.0 FI D-6",
              date: "2022-08-30",
            },
          ],
        },
        {
          nameClient: "Jose Alegria",
          cellphone: "3163833384",
          products: [
            {
              id: 1,
              name: "XTZ150",
              date: "2022-08-30",
            },
          ],
        },
        {
          nameClient: "Manuel Chaves",
          cellphone: "3228989221",
          products: [
            {
              id: 1,
              name: "FZ2.0 FI D-6",
              date: "2022-08-29",
            },
          ],
        },
        {
          nameClient: "Yerly Katalina Martinez Canizalez",
          cellphone: "3015307723",
          products: [
            {
              id: 1,
              name: "CRYPTON FI 115",
              date: "2022-08-29",
            },
          ],
        },
        {
          nameClient: "Milton Correa",
          cellphone: "3234715931",
          products: [
            {
              id: 1,
              name: "YCZ-110",
              date: "2022-08-29",
            },
          ],
        },
        {
          nameClient: "Yustin Alarcon",
          cellphone: "3106156680",
          products: [
            {
              id: 1,
              name: "CRYPTON FI 115",
              date: "2022-08-29",
            },
          ],
        },
        {
          nameClient: "Jonathan Castro",
          cellphone: "000",
          products: [
            {
              id: 1,
              name: "XTZ 125",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Rodrigo Toro",
          cellphone: "3104432910",
          products: [
            {
              id: 1,
              name: "FZ2.0 FI D-6",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Valentina Hernandez",
          cellphone: "3187578773",
          products: [
            {
              id: 1,
              name: "YBR-Z125",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Geraldin Escobar",
          cellphone: "3165601623",
          products: [
            {
              id: 1,
              name: "FZ2.0 FI D-6",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Javier Perez",
          cellphone: "3102779500",
          products: [
            {
              id: 1,
              name: "SZ-R",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Hernando Perdomo",
          cellphone: "3175978708",
          products: [
            {
              id: 1,
              name: "FZ2.0 FI D-6",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Carmen Elena Chaves Rosero",
          cellphone: "3176509331",
          products: [
            {
              id: 1,
              name: "XTZ150",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Ivan Caicedo",
          cellphone: "3242784739",
          products: [
            {
              id: 1,
              name: "XTZ 125",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Alexander Paredes",
          cellphone: "3218421493",
          products: [
            {
              id: 1,
              name: "CRYPTON FI 115",
              date: "2022-08-26",
              state: "Perdida",
            },
          ],
        },
        {
          nameClient: "Cristian Mota Polania",
          cellphone: "3143038491",
          products: [
            {
              id: 1,
              name: "CRYPTON FI 115",
              date: "2022-08-26",
            },
          ],
        },
        {
          nameClient: "Monica Narvaez",
          cellphone: "3218375744",
          products: [
            {
              id: 1,
              name: "XTZ 125",
              date: "2022-08-25",
            },
          ],
        },
        {
          nameClient: "Oscar Sebastian Suarez Giraldo",
          cellphone: "3155049937",
          products: [
            {
              id: 1,
              name: "FZ25",
              date: "2022-08-25",
            },
          ],
        },
      ],
    },
    {
      id: 1,
      fullName: "John Doe",
      oportunity: [
        {
          nameClient: "Hoover Lopez",
          cellphone: "3001234567",
          products: [
            {
              id: 1,
              name: "XTZ 125",
              date: "2023-05-23",
              state: "Pendiente",
            },
            {
              id: 2,
              name: "Moto n-Max ABS",
              date: "2023-05-23",
              state: "Poco interes",
            },
          ],
        },
        {
          nameClient: "Julian Andres Cardona Velasquez",
          cellphone: "3001234567",
          products: [
            {
              id: 1,
              name: "BWS FI",
              date: "2023-05-23",
            },
          ],
        },
        {
          nameClient: "Andres Marin",
          cellphone: "3024485083",
          products: [
            {
              id: 1,
              name: "XTZ 125",
              date: "2022-08-30",
              state: "Poco interes",
            },
          ],
        },
        {
          nameClient: "Wiener Rebolledo",
          cellphone: "3143873121",
          products: [
            {
              id: 1,
              name: "FZ2.0 FI D-6",
              date: "2022-08-30",
            },
          ],
        },
        {
          nameClient: "Jose Alegria",
          cellphone: "3163833384",
          products: [
            {
              id: 1,
              name: "XTZ150",
              date: "2022-08-30",
            },
          ],
        },
        {
          nameClient: "Manuel Chaves",
          cellphone: "3228989221",
          products: [
            {
              id: 1,
              name: "FZ2.0 FI D-6",
              date: "2022-08-29",
            },
          ],
        },
        {
          nameClient: "Yerly Katalina Martinez Canizalez",
          cellphone: "3015307723",
          products: [
            {
              id: 1,
              name: "CRYPTON FI 115",
              date: "2022-08-29",
            },
          ],
        },
        {
          nameClient: "Milton Correa",
          cellphone: "3234715931",
          products: [
            {
              id: 1,
              name: "YCZ-110",
              date: "2022-08-29",
            },
          ],
        },
        {
          nameClient: "Yustin Alarcon",
          cellphone: "3106156680",
          products: [
            {
              id: 1,
              name: "CRYPTON FI 115",
              date: "2022-08-29",
            },
          ],
        },
        {
          nameClient: "Jonathan Castro",
          cellphone: "000",
          products: [
            {
              id: 1,
              name: "XTZ 125",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Rodrigo Toro",
          cellphone: "3104432910",
          products: [
            {
              id: 1,
              name: "FZ2.0 FI D-6",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Valentina Hernandez",
          cellphone: "3187578773",
          products: [
            {
              id: 1,
              name: "YBR-Z125",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Geraldin Escobar",
          cellphone: "3165601623",
          products: [
            {
              id: 1,
              name: "FZ2.0 FI D-6",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Javier Perez",
          cellphone: "3102779500",
          products: [
            {
              id: 1,
              name: "SZ-R",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Hernando Perdomo",
          cellphone: "3175978708",
          products: [
            {
              id: 1,
              name: "FZ2.0 FI D-6",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Carmen Elena Chaves Rosero",
          cellphone: "3176509331",
          products: [
            {
              id: 1,
              name: "XTZ150",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Ivan Caicedo",
          cellphone: "3242784739",
          products: [
            {
              id: 1,
              name: "XTZ 125",
              date: "2022-08-27",
            },
          ],
        },
        {
          nameClient: "Alexander Paredes",
          cellphone: "3218421493",
          products: [
            {
              id: 1,
              name: "CRYPTON FI 115",
              date: "2022-08-26",
              state: "Perdida",
            },
          ],
        },
        {
          nameClient: "Cristian Mota Polania",
          cellphone: "3143038491",
          products: [
            {
              id: 1,
              name: "CRYPTON FI 115",
              date: "2022-08-26",
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
    textTransform: "uppercase",
    paddingTop: 35,
    paddingBottom: 65,
    paddingLeft: 27,
    paddingRight: 30,
    fontSize: 9,
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
