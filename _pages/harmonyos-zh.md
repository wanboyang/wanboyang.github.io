---
permalink: /zh/harmonyos/
title: "鸿蒙操作系统"
excerpt: "L06911 · 2026-2027学年第一学期"
author_profile: true
lang: zh
---

<span class='anchor' id='harmonyos'></span>

# 鸿蒙操作系统 <small style="color:#666">L06911 · 2026–2027 第一学期</small>

> 江西科技师范大学 · 信息工程学院 · 电子信息工程 25级（创新班）1班 | 3学分 · 48学时 · 14 次课｜2026.9.2—2027.1.8

<div style="background:#f8f9fa; border-left:4px solid #BE374B; padding:12px 16px; margin:16px 0; font-size:0.92em;">
<b>主教材</b>《智能终端操作系统与OpenHarmony实践》陈海波 等，电子工业出版社，2024（ISBN 978-7-121-48972-3）<br>
<b>考核</b> 平时 30%（含课程项目 10分：开题2+里程碑3+答辩5）+ 期末闭卷 70%（100分钟）<br>
<b>项目</b> 每周实验卡（30–60分钟）+ 3–4人小组综合应用 · 零真机：本地模拟器（主推）/ 云真机（备选）/ 教师QEMU演示
</div>

## 课程简介

本课程以 OpenHarmony 为主线，系统讲解智能终端操作系统的架构、机制与生态。围绕“做中学”：从 Hello World 的系统调用链入手，贯通进程、内存、文件、设备管理，再到应用框架、分布式与安全，最后完成可运行的鸿蒙应用原型。强调“验证优于信任”的 AI 使用原则与国产系统的产业视角。

## 教学安排与课件

| 教学周 | 日期 | 教学内容 | 课件 | 作业 |
|:---:|------|------|------|------|
| 1 | 9/2 | 智能终端操作系统概述 | [课件 PDF](/files/harmonyos/week-01-harmonyos-slides.pdf) | 待更新 |
| 2 | 9/9 | OpenHarmony 概述 | [课件 PDF](/files/harmonyos/week-02-harmonyos-slides.pdf) | [作业 PDF](/files/harmonyos/week-02-homework.pdf) |
| 3 | 9/16 | 智能终端操作系统内核 | [课件 PDF](/files/harmonyos/week-03-harmonyos-slides.pdf) | 待更新 |
| 4 | 9/24 | 处理器调度 | [课件 PDF](/files/harmonyos/week-04-harmonyos-slides.pdf) | [作业 PDF](/files/harmonyos/week-04-homework.pdf) |
| 5 | 国庆假期 | — | — | — |
| 6 | 10/10（周六补课） | 内存管理 | [课件 PDF](/files/harmonyos/week-06-harmonyos-slides.pdf) | [作业 PDF](/files/harmonyos/week-06-homework.pdf) |
| 7–8 | 10/14、10/21 停课 | — | — | — |
| 9 | 10/28 | 存储与文件系统 | [课件 PDF](/files/harmonyos/week-09-harmonyos-slides.pdf) | [作业 PDF](/files/harmonyos/week-09-homework.pdf) |
| 10 | 11/4 | 进程间通信与设备管理 | [课件 PDF](/files/harmonyos/week-10-harmonyos-slides.pdf) | [作业 PDF](/files/harmonyos/week-10-homework.pdf) |
| 11 | 11/11 | 图形服务与媒体服务 | [课件 PDF](/files/harmonyos/week-11-harmonyos-slides.pdf) | [作业 PDF](/files/harmonyos/week-11-homework.pdf) |
| 12 | 11/18 | 通信服务与传感服务 | [课件 PDF](/files/harmonyos/week-12-harmonyos-slides.pdf) | [作业 PDF](/files/harmonyos/week-12-homework.pdf) |
| 13 | 11/25 | 设备运行时服务与分布式智能终端服务 | [课件 PDF](/files/harmonyos/week-13-harmonyos-slides.pdf) | [作业 PDF](/files/harmonyos/week-13-homework.pdf) |
| 14 | 12/2 | 分布式数据管理（教学内容结束） | 待更新 | 待更新 |
| 15 | 12/9 | 期末全面复习 | 待更新 | — |
| 16 | 12/16 | 学生演示（本学期最后一次课） | 待更新 | — |

> **授课日历（以实际执行为准）**：第 1–4 教学周每周三上课（9/2、9/9、9/16、9/24）；第 5 周（9/30）与第 6 周周三（10/7）为国庆假期；**10/10（周六）补课**；第 7–8 周（10/14、10/21）停课；第 9–13 周每周三上课（10/28–11/25）；第 14 周 12/2 结束教学内容；第 15 周 12/9 期末全面复习；第 16 周 12/16 学生演示。第 9–14 周每周 4 学时，其余每周 3 学时。课件文件名按教学周编号，与上表一致。

## 课程项目（做中学）

- **选题**：课程学习助手 / 校园记账本 / 健康运动助手 / AI 问答助手 / 智能家居控制（可自定义）
- **环境**：DevEco Studio 6.0+（最新版，安装时自动配套 HarmonyOS SDK）· API 14 起兼容，推荐用最新稳定版（如 API 20，HarmonyOS 6.0）· `hvigorw assembleHap`
- **过程**：每周实验卡与理论同步 · 第 7–8 周停课期间完成开题报告与原型（线上）· 第 16 周（12/16）课堂演示答辩
- **诚信**：全量可跑 starter code + 代码走查 + 答辩；AI 辅助需声明

## 教材与资源

- **白皮书**《鸿蒙生态解决方案白皮书》第1章（课堂发放）
- **开发者学堂**《HarmonyOS 第一课》<https://developer.huawei.com/consumer/cn/training/>
- **IPADS 课程**（陈海波/夏虞斌，含 ChCore 实验）<https://ipads.se.sjtu.edu.cn/courses/os/>
- **OpenHarmony 官网** <https://www.openharmony.cn> · **华为开发者联盟** <https://developer.huawei.com>

## 延伸：鸿蒙人才生态

> 2025-04 中共中央 AI 全学段通识；2026-01 工信部鸿蒙人才促进工作组（130+单位）。华为认证 HCIA→HCIP→HCIE（HarmonyOS 应用开发方向），已认证 110万+（HCIE 4万+），一试双证衔接“移动操作系统应用设计员”。本课为 HCIA 基础。

---

<p style="font-size:0.85em; color:#888">最后更新：2026年11月24日 · 课件源码与 QA：见课程仓库 <code>qa_render_and_check.py flagged=0</code> · 联系：wanboyangjerry@163.com</p>
