# 万博洋个人学术主页

<h1 align="center">
万博洋个人学术主页
</h1>

<div align="center">

[![](https://img.shields.io/github/stars/wanboyang/wanboyang.github.io)](https://github.com/wanboyang/wanboyang.github.io)
[![](https://img.shields.io/github/forks/wanboyang/wanboyang.github.io)](https://github.com/wanboyang/wanboyang.github.io)
[![](https://img.shields.io/github/license/wanboyang/wanboyang.github.io)](https://github.com/wanboyang/wanboyang.github.io/blob/main/LICENSE) | [中文文档](./docs/README-zh.md) 
</div>

<p align="center">江西科技师范大学万博洋博士的个人学术主页</p>

<p align="center">
    <br>
    <img src="docs/screenshot.png" width="100%"/>
    <br>
</p>

## 访问地址

- **英文版本**: https://wanboyang.github.io/
- **中文版本**: https://wanboyang.github.io/zh/

## 项目简介

这是江西科技师范大学万博洋博士的个人学术主页，基于Jekyll构建，部署在GitHub Pages上。主页展示了作者的学术背景、研究方向、科研成果、指导学生信息等内容。

## 主要功能

- **中英文双语支持**: 支持中英文版本，一键切换语言
- **自动更新Google Scholar引用**: 通过Google Scholar爬虫和GitHub Actions自动更新作者引用统计
- **响应式设计**: 自动适配不同屏幕尺寸和设备
- **学术成果展示**: 展示论文、项目、指导学生等信息
- **SEO优化**: 搜索引擎优化，便于学术信息传播

## 技术特点

- **技术栈**: Jekyll静态网站生成器 + GitHub Pages
- **多语言支持**: 使用Jekyll的liquid模板语言实现中英文切换
- **自动化部署**: 通过GitHub Actions实现自动构建和部署
- **学术数据集成**: 集成Google Scholar API获取实时引用数据

## 作者信息

**万博洋 博士**
- **单位**: 江西科技师范大学
- **研究团队**: 生物信息感知与多模态智能研究团队
- **研究方向**: AI4SCIENCE, 跨媒体AI, 视觉描述, 异常检测
- **Google Scholar**: [https://scholar.google.com/citations?user=xXDl1kgAAAAJ](https://scholar.google.com/citations?user=xXDl1kgAAAAJ)

## 项目结构

```
wanboyang.github.io/
├── _config.yml          # Jekyll配置文件
├── _pages/              # 页面内容
│   ├── about.md         # 英文版本主页
│   └── about-zh.md      # 中文版本主页
├── _includes/           # 包含文件
├── _layouts/            # 布局模板
├── _data/               # 数据文件（导航、多语言配置）
├── assets/              # 静态资源（CSS、JS、字体）
├── images/              # 图片资源
├── docs/                # 文档和论文
└── google_scholar_crawler/  # Google Scholar爬虫工具
```

## 本地开发

1. 克隆项目到本地：
   ```bash
   git clone https://github.com/wanboyang/wanboyang.github.io.git
   ```

2. 安装Jekyll环境（需要Ruby、RubyGems、GCC和Make）：
   ```bash
   # 参考Jekyll官方安装指南：https://jekyllrb.com/docs/installation/
   ```

3. 启动本地开发服务器：
   ```bash
   bundle exec jekyll serve
   # 或使用提供的脚本
   bash run_server.sh
   ```

4. 在浏览器中访问 http://127.0.0.1:4000

## 致谢

- 本项目基于 [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) 模板构建
- 使用了 Font Awesome 图标库
- 受到 [mmistakes/minimal-mistakes](https://github.com/mmistakes/minimal-mistakes) 和 [academicpages/academicpages.github.io](https://github.com/academicpages/academicpages.github.io) 项目的启发

## 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件
