# 🚀 GitHub Pages 快速设置指南

## 第一步：启用 GitHub Pages

1. 打开你的 GitHub 仓库页面：`https://github.com/mobaibai/template-react-vite`

2. 点击仓库顶部的 **Settings** 标签

3. 在左侧菜单中向下滚动，找到 **Pages** 选项

4. 在 **Source** 部分：
   - 选择 **GitHub Actions**（而不是 Deploy from a branch）

5. 点击 **Save** 保存设置

## 第二步：查看部署状态

1. 回到仓库主页，点击 **Actions** 标签

2. 你应该能看到 "Deploy to GitHub Pages" 工作流正在运行或已完成

3. 等待工作流完成（通常需要 2-5 分钟）

## 第三步：访问你的网站

部署完成后，你的网站将在以下地址可用：

```
https://mobaibai.github.io/template-react-vite/
```

## 🎉 完成！

现在每次你推送代码到 `main` 分支时，GitHub Actions 都会自动构建和部署你的网站。

## 📝 注意事项

- 首次部署可能需要几分钟时间
- 如果遇到问题，请查看 Actions 页面的错误日志
- 更多详细信息请参考 `DEPLOY.md` 文件

---

**需要帮助？** 查看 [GitHub Pages 官方文档](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)