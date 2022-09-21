export default {
  banner: {
    title: 'NestOS',
    backgroundText: 'DISCOVERY',
    subtitle: '基于欧拉开源操作系统的云底座操作系统'
  },
  card: {
    nestosTitle: '开启NestOS之旅',
    downloadTitle: '获取NestOS资源',
    issueTitle: '我想对NestOS说',
    description: 'NestOS云底座操作系统，集成了rpm-ostree支持、ignition配置等技术，采用双系分区、原子化更新的设计思路，使用nestos-assembler快速集成构建。并针对K8S、openStack、OKD等平台进行适配，优化容器运行底噪，与centos8相比容器启动速度提升了30%，容器创建速度提升了60%，适合作为以容器化应用为主的云场景基础运行环境。'
  },
  minititle: {
    planIn: '年度规划',
    planOut: 'PROGRAMME',
    archIn: '功能特色',
    archOut: 'CHARACTERISTIC',
    comIn: '性能对比',
    comOut: 'COMPARISION',
    docIn: '文档',
    docOut: 'DOCUMENTATION',
    resourceIn: '资源',
    resourceOut: 'RESOURCE',
  },
  arch: {
    title1: '开箱即用的容器平台',
    title2: '简单易用的安装配置过程',
    title3: '安全可靠的包管理方式',
    title4: '友好可控的自动更新机制',
    title5: '紧密配合的双系统分区',
    character1: 'NestOS集成适配了iSulad、Docker、Podman等主流容器引擎，为用户提供轻量级、定制化的云场景OS。',
    character2: 'NestOS采用ignition技术，可以以相同的配置方便地完成大批量集群结点的安装配置工作。',
    character3: 'NestOS使用rpm-ostree进行软件包管理，搭配openEuler软件包源，确保原子化更新的安全稳定状态。',
    character4: 'NestOS使用zincati提供自动更新服务，可实现节点自动更新与重新引导，实现集群节点有序升级而服务不中断。',
    character5: 'NestOS采用双系统分区设计，确保NestOS运行期间的完整性与安全性，并计划与社区Kubeos融合，各取所长。',
  },
  compare: {
    desc: '使用 NestOS beta 版本横向对比 openEuler21.09、openEuler20.03LTS、Centos8 系统运行 iSulad2.0.10 容器引擎性能。',
    iSulad_x86: 'iSulad（x86_64）测试结果如下：',
    iSulad_arch: 'iSulad（aarch64）测试结果如下：',
    detail: '*Docker、podman的测试数据详见>> ',
    url_text: '[ 性能对比 ]',
  },
  resource: {
    mirror: '镜像',
    document: '文档',
    other: '其他',
    file: {
      doc: 'NestOS使用文档',
      other1: 'NestOS点火文件',
      other2: '点火文件2解释内容',
      other3: '点火文件3解释内容',
    }
  },
  footer: {
    atom_description: 'openEuler 是由开放原子开源基金会（OpenAtom Foundation）孵化及运营的开源项目',
    copyright: '版权所有 © 2022 openEuler 保留一切权利',
    Trademark: '品牌',
    Policy: '隐私政策',
    Legal: '法律说明',
    Service: '服务状态',
  }
}