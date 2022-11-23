/*
 * @Description:
 * @Author: zhaoxiaohan03@kuaishou.com
 * @Date: 2022-11-22 23:40:55
 * @LastEditors: zhaoxiaohan03@kuaishou.com
 * @LastEditTime: 2022-11-23 21:16:36
 */
import { App } from "vue";
import SButton from "./button";
import SFCButton from "./button/SFCButton.vue";
import JSXButton from "./button/JSXButton";

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
