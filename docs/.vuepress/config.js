module.exports = {
  title: "Vue2 UI",
  description: "vue2-ui 组件库文档",
  themeConfig: {
    nav: [
      // 一级导航
      { text: "主页", link: "/" },
      { text: "组件", link: "/components/" },
    ],
    sidebar: {
      // 侧边栏
      "/components/": [
        ["", "介绍"], // '' 等价于 /guide/
        {
          title: "组件",
          collapsable: false,
          children: [["../components/Button.md", "Button"]],
        },
      ],
    },
  },
  plugins: ["@vuepress/back-to-top", "demo-container"],
};
