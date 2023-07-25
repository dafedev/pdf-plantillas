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
import { data as dataInventario } from "./utils/inventario";
import { data as dataAgotados } from "./utils/agotados";
import { data as dataEstadoCuenta } from "./utils/estadoCuenta";
import { data as dataEstadoCuentaTotalizada } from "./utils/estadoCuentaTotalizada";
import { data as dataCuentaEdades } from "./utils/carteraEdades";
import { data as dataRotacion } from "./utils/rotacion";
import { data as dataProductoVenta } from "./utils/productosVenta";
import { data2 as dataProductoVentaDos } from "./utils/productosVenta";
import { data as dataProductoCliente } from "./utils/productosClientes";
import { data as dataProductoHistoricos } from "./utils/productosHistorico";
import { data2 as dataProductoHistoricosDos } from "./utils/productosHistorico";
import { data as dataProductoSugeridos } from "./utils/productoSugerido";
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
import PagosBancos from "./components/nuevosReportes/pagosBancos";
import ListadoComprobantes from "./components/nuevosReportes/listadoComprobantes";
import ReporteFlujos from "./components/nuevosReportes/reporteFlujos";
import Exogena from "./components/nuevosReportes/exogena";
import EntradaProducto from "./components/nuevosReportes/entradaProducto";
import Inventario from "./components/nuevosReportes/inventario";
import Agotados from "./components/nuevosReportes/agotados";
import EstadoCuenta from "./components/nuevosReportes/estadoCuenta";
import EstadoCuentaTotalizada from "./components/nuevosReportes/estadoCuentaTotalizada";
import CarteraEdades from "./components/nuevosReportes/carteraEdades";
import Rotacion from "./components/nuevosReportes/rotacion";
import ProductosVenta from "./components/nuevosReportes/productosVenta";
import ProductosClientes from "./components/nuevosReportes/productosClientes";
import ProductosHistoricos from "./components/nuevosReportes/productosHistoricos";
import ProductoSugerido from "./components/nuevosReportes/productoSugerido";

export default function App() {
  return <ProductosVenta selectedOption={2} info={dataProductoVentaDos} />;
}
