import "bootstrap/dist/css/bootstrap.min.css";
import "vuetify/styles";
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import { aliases, fa } from "vuetify/iconsets/fa-svg";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount } from '@mdi/js'

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { vueFire } from "vuefire";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
});
library.add(fas); // Include needed solid icons
library.add(far);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(library)
  .use(store)
  .use(router)
  .use(vueFire)
  .use(vuetify)
  .use(SvgIcon)
  .use(mdiAccount)
  .mount("#app");

import "bootstrap/dist/js/bootstrap.min";
