import { data as dataListadoOportunidadesPendientes } from "./utils/listadoOportunidadesPendientes";
import { data as dataOportunidadesPendientes } from "./utils/oportunidadesPendientes";
import { data as dataOportunidades } from "./utils/oportunidades";
import { data as dataSeguimientos } from "./utils/seguimientos";
import { data as dataOportunidadesPorMes } from "./utils/oportunidadesPorMes";
import { data as dataReporteCotizacion } from "./utils/reporteCotizacion";
import ListadoOportunidades from "./components/listadoOportunidades";
import OportunidadesPendientes from "./components/oportunidadesPendientes";
import Oportunidades from "./components/oportunidades";
import Seguimientos from "./components/seguimientos";
import OportunidadesPorMes from "./components/oportunidadesPorMes";
import ReporteCotizacion from "./components/reporteCotizacion";
export default function App() {
  return <ReporteCotizacion info={dataReporteCotizacion} />;
}
