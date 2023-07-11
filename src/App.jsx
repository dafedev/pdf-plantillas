import { data as dataListadoOportunidadesPendientes } from "./utils/listadoOportunidadesPendientes";
import { data as dataOportunidadesPendientes } from "./utils/oportunidadesPendientes";
import { data as dataOportunidades } from "./utils/oportunidades";
import { data as dataSeguimientos } from "./utils/seguimientos";
import { data as dataOportunidadesPorMes } from "./utils/oportunidadesPorMes";
import { data as dataReporteCotizacion } from "./utils/reporteCotizacion";
import { data as dataVentasSinTaller } from "./utils/ventasSinEntrada";
import { data as dataInformeVentas } from "./utils/informeVentas";
import { data as dataProductoVendedor } from "./utils/productoVendedor";
import { data as dataPagoBancos } from "./utils/pagoBancos";
import { data as dataListadoComprobantes } from "./utils/listadoComprobantes";
import { data as dataReporteFlujos } from "./utils/reporteFlujos";
import { data as dataExogenas } from "./utils/exogena";
import { data as dataEntradaProducto } from "./utils/entradaProducto";
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
import PagosBancos from "./components/pagosBancos";
import ListadoComprobantes from "./components/listadoComprobantes";
import ReporteFlujos from "./components/reporteFlujos";
import Exogena from "./components/exogena";
import EntradaProducto from "./components/entradaProducto";

export default function App() {
  return <EntradaProducto info={dataEntradaProducto} />;
}
