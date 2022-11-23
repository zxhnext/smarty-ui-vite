/*
 * @Description: 
 * @Author: zhaoxiaohan03@kuaishou.com
 * @Date: 2022-11-23 20:31:53
 * @LastEditors: zhaoxiaohan03@kuaishou.com
 * @LastEditTime: 2022-11-23 20:37:43
 */
const sidebar = {
    '/': [
        { text: '快速开始', link: '/' },
        {
        text: '通用',
        children: [
            { text: 'Button 按钮', link: '/components/button/' },
        ]
        },
        { text: '导航' },
        { text: '反馈' },
        { text: '数据录入' },
        { text: '数据展示' },
        { text: '布局' },
    ]
}
const config = {
    title: "🔨  Smarty-UI",
    description: "组件库搭建的教学模型",
    themeConfig: {
        sidebar,
    },

    markdown: {
        config: (md) => {
            // 添加DemoBlock插槽
            const { demoBlockPlugin } = require('vitepress-theme-demoblock')
            md.use(demoBlockPlugin)
        }
    }
}

export default config;