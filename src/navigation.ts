import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  // 1. 顶部菜单：全部清空，只留空白，让界面最简洁
  links: [],
  
  // 2. 顶部右侧按钮：改成跳转到你的 Github
  actions: [{ text: 'Github', href: 'https://github.com/Zxt-qmy', target: '_blank', icon: 'tabler:brand-github' }],
};

export const footerData = {
  // 3. 底部的大链接列表（Product, Platform...）：全部清空
  links: [],
  
  // 4. 底部的小字链接：保留隐私协议（显得正规点），不需要也可以删掉
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  
  // 5. 底部社交图标：只保留了 Github，其他的我先注释掉了，需要时可以打开
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Zxt-qmy' },
  ],
  
  // 6. 底部版权文字：改成你的名字
  footNote: `
    Designed by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/Zxt-qmy"> Zxt AI Lab</a> · All rights reserved.
  `,
};