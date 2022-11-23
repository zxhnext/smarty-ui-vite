/*
 * @Description: 
 * @Author: zhaoxiaohan03@kuaishou.com
 * @Date: 2022-11-23 11:45:13
 * @LastEditors: zhaoxiaohan03@kuaishou.com
 * @LastEditTime: 2022-11-23 11:45:26
 */
import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "../config/unocss";
// https://vitejs.dev/config/

export default defineConfig({
    plugins: [
        // 添加JSX插件
        vueJsx(),
        Unocss(),
    ],
});