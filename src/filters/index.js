import Vue from "vue";
import dayjs from "dayjs";
Vue.filter("Dayjs", (val, format = "YYYY-MM-DD") => {
  if (!val) return "0000";
  return dayjs(val).format(format);
});
