/*
 * @Author: Feng-xuerui 33976094+Feng-xuerui@users.noreply.github.com
 * @Date: 2025-10-18 17:10:56
 * @LastEditors: Feng-xuerui 33976094+Feng-xuerui@users.noreply.github.com
 * @LastEditTime: 2025-10-19 11:48:00
 * @FilePath: \MyBlog-static\src\.vuepress\config.ts
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/MyBlog-static/",

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
