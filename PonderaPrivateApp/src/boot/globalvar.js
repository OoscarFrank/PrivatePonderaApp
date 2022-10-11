import { boot } from "quasar/wrappers";

export default boot(({ app }) => {
  app.config.globalProperties.$user = null;
  app.config.globalProperties.$apiUrl = "https://api.pondera.fr/pro/";
});
