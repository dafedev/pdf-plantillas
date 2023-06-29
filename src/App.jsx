import { data as dataListadoOportunidadesPendientes } from "./utils/listadoOportunidadesPendientes";
import { data as dataOportunidadesPendientes } from "./utils/oportunidadesPendientes";
import { data as dataOportunidades } from "./utils/oportunidades";
import { data as dataSeguimientos } from "./utils/seguimientos";
import { data as dataOportunidadesPorMes } from "./utils/oportunidadesPorMes";
import { data as dataReporteCotizacion } from "./utils/reporteCotizacion";
import { data as dataVentasSinTaller } from "./utils/ventasSinEntrada";
import { data as dataInformeVentas } from "./utils/informeVentas";
import { data as dataProductoVendedor } from "./utils/productoVendedor";
import ListadoOportunidades from "./components/listadoOportunidades";
import OportunidadesPendientes from "./components/oportunidadesPendientes";
import Oportunidades from "./components/oportunidades";
import Seguimientos from "./components/seguimientos";
import OportunidadesPorMes from "./components/oportunidadesPorMes";
import ReporteCotizacion from "./components/reporteCotizacion";
import VentasSinEntrada from "./components/ventasSinTaller";
import Firma from "./components/firma";
import InformeVentas from "./components/informeVentas";
import ProductoVendedor from "./components/productoPorVendedor";
export default function App() {
  return <ProductoVendedor info={dataProductoVendedor} />;
}
