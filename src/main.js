import TableColumnDatepicker from "./datepicker";
import ReportalBase from "r-reportal-base"

window.Reportal = window.Reportal || {};
ReportalBase.mixin(window.Reportal,{
  TableColumnDatepicker
});

export default TableColumnDatepicker
