// 后期资源维护处
/* 
* 镜像资源
*/
export const docList = [
  {
    dateTitle: '2022-03-29',
    x86List: [
      {
        name: 'NestOS-22.03 ISO下载',
        path: 'http://124.126.103.127/nestos20220329/x86_64/nestos-22.03.20220329.dev.0-live.x86_64.iso'
      },
      {
        name: 'NestOS-22.03 QCOW2下载',
        path: 'http://124.126.103.127/nestos20220329/x86_64/nestos-22.03.20220329.dev.0-qemu.x86_64.qcow2'
      },
    ],
    armList: [
      {
        name: 'NestOS-22.03 ISO下载',
        path: 'http://124.126.103.127/nestos20220329/aarch64/nestos-22.03.20220329.dev.0-live.aarch64.iso'
      },
      {
        name: 'NestOS-22.03 QCOW2下载',
        path: 'http://124.126.103.127/nestos20220329/aarch64/nestos-22.03.20220329.dev.0-qemu.aarch64.qcow2'
      },
    ]
  },
]

/* 
* 文档资源
*/
export const docFile = [
  {
    title: `resource.file.doc`, // 界面文字
    link: 'http://124.126.103.127/doc/NestOS.pdf', //下载链接
    IMG: require('@/assets/resource/illustration-file.png') //背景图小图
  },
  /* {
    title: `resource.file.doc`,
    link: 'http://124.126.103.127/doc/xxx.pdf',
    IMG: require('@/assets/resource/illustration-xxx.png')
  } */
]

/* 
* 其他资源
*/
export const fireFile = [
  {
    title: `resource.file.other1`,
    link: 'http://124.126.103.127/ign/config.ign',
    IMG: require('@/assets/resource/illustration-file.png')
  },
  /* {
    title: `resource.file.other2`,
    link: 'https://xxx.com',
    IMG: require('@/assets/resource/illustration-arrow.png')
  },
  {
    title: `resource.file.other3`,
    link: 'https://xxx.com',
    IMG: require('@/assets/resource/illustration-book.png')
  } */
]


/* 
* 开头卡片点击跳转nestos、issue地址
*/
export const cardsLink = [
  {
    HREF: true,
    IMG: require("@/assets/cards/cards-work.png"),
    TITLE: `card.nestosTitle`,
    LINK: 'https://gitee.com/openeuler/NestOS'
  },
  {
    HREF: false,
    IMG: require("@/assets/cards/cards-download.png"),
    TITLE: `card.downloadTitle`,
  },
  {
    HREF: true,
    IMG: require("@/assets/cards/cards-letter.png"),
    TITLE: `card.issueTitle`,
    LINK: 'https://gitee.com/openeuler/NestOS/issues'
  },
]