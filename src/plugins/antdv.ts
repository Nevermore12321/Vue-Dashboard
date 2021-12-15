import { Button } from "ant-design-vue";
import { App } from "vue";

const ant = {
  install(Vue: App): void {
    Vue.component(Button.name, Button);
  },
};

export default ant;
