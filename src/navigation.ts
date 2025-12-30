import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  // 1. 顶部菜单：空
  links: [],
  // 2. 顶部右侧按钮：空 (之前这里有个 Github 按钮，现在删掉了)
  actions: [],
};

export const footerData = {
  // 3. 底部链接：空
  links: [],
  secondaryLinks: [],
  socialLinks: [],
  // 4. 只保留最底部的版权文字，证明这网站是你做的
  footNote: `
    © 2025 Zxt AI Lab · All rights reserved.
  `,
};