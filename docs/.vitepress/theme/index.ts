/*
 * @Description: 
 * @Author: zhaoxiaohan03@kuaishou.com
 * @Date: 2022-11-23 20:33:47
 * @LastEditors: zhaoxiaohan03@kuaishou.com
 * @LastEditTime: 2022-11-23 20:38:09
 */

import Theme from 'vitepress/dist/client/theme-default'
import SmartyUI from '../../../src/entry'

// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'


export default {
    ...Theme,
    enhanceApp({ app }) {
        app.use(SmartyUI)
        app.component('Demo', Demo)
        app.component('DemoBlock', DemoBlock)
    },
}