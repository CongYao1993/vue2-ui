module.exports = {
  title: "Vue2 UI",
  description: "vue2-ui 组件库文档",
  base: "/vue2-ui/",
  themeConfig: {
    nav: [
      // 一级导航
      { text: "主页", link: "/" },
      { text: "组件", link: "/components/guide/introduction" },
    ],
    sidebar: {
      // 侧边栏
      "/components/": [
        {
          title: "开发指南",
          collapsable: false,
          children: ["guide/introduction"],
        },
        {
          title: "基础组件",
          collapsable: false,
          children: ["basic/button"],
        },
      ],
    },
  },
  plugins: ["@vuepress/back-to-top", "demo-container"],
};
