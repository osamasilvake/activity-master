// import { createApp } from "vue";
// import { createPinia } from "pinia";
// import "./style.css";
// import App from "./App.vue";

// /* import the fontawesome core */
// import { library } from "@fortawesome/fontawesome-svg-core";

// /* import font awesome icon component */

// /* import specific icons */
// import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

// /* add icons to the library */
// library.add(faUserSecret);
// const pinia = createPinia();
// const app = createApp(App);

// app.use("font-awesome-icon", FontAwesomeIcon);
// app.use(pinia);
// app.mount("#app");

/* Set up using Vue 3 */
import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
const pinia = createPinia();
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faSmile, faTrash } from "@fortawesome/free-solid-svg-icons";
import { createPinia } from "pinia";

/* add icons to the library */
library.add(faTrash, faSmile);

const app = createApp(App);
app.use(pinia);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
