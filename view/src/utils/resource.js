// 后期资源维护处
/* 
* 镜像资源
*/
export const docList = [
  {
    dateTitle: '【22.03-LTS】',
    x86List: [
      {
        name: 'NestOS-22.03 ISO下载',
        path: 'https://1.203.97.152/nestos20220330/x86_64/nestos-22.03.20220329.dev.0-live.x86_64.iso'
      },
      {
        name: 'NestOS-22.03 QCOW2下载',
        path: 'https://1.203.97.152/nestos20220330/x86_64/nestos-22.03.20220329.dev.0-qemu.x86_64.qcow2'
      },
    ],
    armList: [
      {
        name: 'NestOS-22.03 ISO下载',
        path: 'https://1.203.97.152/nestos20220330/aarch64/nestos-22.03.20220329.dev.0-live.aarch64.iso'
      },
      {
        name: 'NestOS-22.03 QCOW2下载',
        path: 'https://1.203.97.152/nestos20220330/aarch64/nestos-22.03.20220329.dev.0-qemu.aarch64.qcow2'
      },
    ]
  },
  {
    dateTitle: '【22.09】',
    x86List: [
      {
        name: 'NestOS-22.09 ISO下载',
        path: 'https://1.203.97.152/nestos20220930/x86_64/nestos-22.09.20220928.0-live.x86_64.iso'
      },
      {
        name: 'NestOS-22.09 QCOW2下载',
        path: 'https://1.203.97.152/nestos20220930/x86_64/nestos-22.09.20220928.0-qemu.x86_64.qcow2'
      },
    ],
    armList: [
      {
        name: 'NestOS-22.09 ISO下载',
        path: 'https://1.203.97.152/nestos20220930/aarch64/nestos-22.09.20220928.0-live.aarch64.iso'
      },
      {
        name: 'NestOS-22.09 QCOW2下载',
        path: 'https://1.203.97.152/nestos20220930/aarch64/nestos-22.09.20220928.0-qemu.aarch64.qcow2'
      },
    ]
  },
  {
    dateTitle: '【22.03-LTS-SP1】',
    x86List: [
      {
        name: 'NestOS-22.03-LTS-SP1 ISO下载',
        path: 'https://gitee.com/openeuler/NestOS'
      },
      {
        name: 'NestOS-22.03-LTS-SP1 QCOW2下载',
        path: 'https://gitee.com/openeuler/NestOS'
      },
    ],
    armList: [
      {
        name: 'NestOS-22.03-LTS-SP1 ISO下载',
        path: 'https://gitee.com/openeuler/NestOS'
      },
      {
        name: 'NestOS-22.03-LTS-SP1 QCOW2下载',
        path: 'https://gitee.com/openeuler/NestOS'
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
    path: 'https://1.203.97.152/PublicResources/NestOS.pdf', //下载链接
    IMG: require('@/assets/resource/illustration-file.png') //背景图小图
  },
  /* {
    title: `resource.file.doc`,
    path: 'http://124.126.103.127/doc/xxx.pdf',
    IMG: require('@/assets/resource/illustration-xxx.png')
  } */
]

/* 
* 其他资源
*/
export const fireFile = [
  {
    title: `resource.file.other1`,
    path: 'https://1.203.97.152/nestos-ign/config.ign',
    IMG: require('@/assets/resource/illustration-file.png')
  },
  /* {
    title: `resource.file.other2`,
    path: 'https://xxx.com',
    IMG: require('@/assets/resource/illustration-arrow.png')
  },
  {
    title: `resource.file.other3`,
    path: 'https://xxx.com',
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

/* 
* 性能测试对比地址
*/
export const comparision_url = 'https://gitee.com/openeuler/NestOS/blob/master/docs/usr_manual/%E6%80%A7%E8%83%BD%E5%AF%B9%E6%AF%94%E6%B5%8B%E8%AF%95.md';