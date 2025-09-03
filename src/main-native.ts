import { createApp, HippyApp } from "@hippy/vue-next";

import App from "./app.vue";
import { setGlobalInitProps } from "./util";

const app: HippyApp = createApp(App, {
  appName: "Demo",
  styleOptions: {
    ratioBaseWidth: 1920,
  },
});

app.config.errorHandler = (err, instance, info) => {
  if (process.env.NODE_ENV == "development") {
    console.error("❌ Vue Error:", err);
    console.error("👉 Component instance:", instance);
    console.error("⚠️ Info:", info);
  }
};

const initCallback = ({ superProps, rootViewId }) => {
  setGlobalInitProps({
    superProps,
    rootViewId,
  });
  app.mount("#root");
};

app.$start().then(initCallback);
