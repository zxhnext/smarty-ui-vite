import { App } from 'vue';
import SButton from './SButton';
import SFCButton from './SFCButton/SFCButton.vue';
import JSXButton from './JSXButton';

// 导出单独组件
export { SButton, SFCButton, JSXButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(SButton.name, SButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
