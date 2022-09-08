export default {
  banner: {
    title: 'NestOS',
    backgroundText: 'SEARCH',
    subtitle: '基于欧拉开源操作系统的云底座操作系统'
  },
  card: {
    nestosTitle: '开启NestOS之旅',
    downloadTitle: '获取NestOS资源',
    issueTitle: '我想对NestOS说',
    description: 'NestOS云底座操作系统，集成了rpm-ostree支持、ignition配置等技术，采用双系分区、原子化更新的设计思路，使用nestos-assembler快速集成构建。并针对K8S、openStack、OKD等平台进行适配，优化容器运行底噪，与centos8相比容器启动速度提升了30%，容器创建速度提升了60%，适合作为以容器化应用为主的云场景基础运行环境。'
  },
  minititle: {
    archIn: '架构',
    archOut: 'ARCHITECTURE',
    docIn: '文档',
    docOut: 'DOCUMENTATION',
    resourceIn: '资源',
    resourceOut: 'RESOURCE',
  },
  arch: {
    character1: '1.开箱即用的容器平台：容器技术克服了用户修改系统配置、用户服务对系统组件依赖冲突等导致大规模集群服务运维困难的问题，同时可以快速的安装部署、根据服务负载方便的实时扩展收缩以及节点运维时服务平滑迁移，是云原生时代最重要的基础核心。当前主流通用服务器操作系统需要安装部署后再次进行云场景适配调整，而 NestOS 集成适配了 iSulad、Docker、Podman 、cri-o 等主流容器引擎，做到开箱即用，可为用户提供一种轻量级、定制化的云场景操作系统。',
    character2: '2.简单易用的安装配置过程：NestOS 采用了 Ignition 技术，可以以相同配置方便地完成大批量集群节点安装配置工作。Ignition 是一个与分发无关的配置实用程序，用于系统的安装和配置并初始化 NestOS。Ignition 配置文件中可以包含对网络、存储、文件系统、systemd 单元和用户鉴权及权限管理等配置。安装阶段，NestOS 既支持引导启动安装镜像后手动运行 nestos-installer 命令，加载 Ignition 配置文件，完成 NestOS 本地安装；也可通过 PXE 方式，在启动引导参数中添加远程 Ignition 配置访问地址，实现大批量集群节点网络引导方式安装。',
    character3: '3.安全可靠的包管理方式：NestOS 使用 rpm-ostree 进行软件包管理，rpm-ostree 可以看成是 rpm 和 ostree 的合体。Rpm-ostree 一方面提供了基于 rpm 的软件包安装管理方式，另一方面提供了基于 ostree 的操作系统更新升级。用户每次对系统更新都像是 rpm-ostree 在提交一次“Transaction”，确保更新过程全部成功或全部失败，并允许在更新系统遇到异常后回滚到更新前状态。',
    character4: '4.友好可控的自动更新机制：NestOS 提供自动更新服务，它作为远程更新服务和 rpm-ostree 的客户端，负责检测更新服务器是否存在更新版本，实现节点自动更新与重新引导。该服务支持自动更新代理、用户自定义配置文件和多种更新策略，用户可对是否自动更新、自动更新策略等选项进行配置，也可与上层集群服务相结合，将当前节点服务负载迁移后再行更新，实现集群节点有序升级，保证集群服务不因节点升级而中断。当集群节点需统一进行配置修改或基础环境更新时，可将修改完毕充分验证后的更新版本发布至更新服务器，集群节点将通过自动更新机制完成统一升级。',
    character5: '5.紧密配合的双系统分区：NestOS 采用双系统分区设计，两个分区分别被设置为主动模式和被动模式，并在系统运行期间各司其职。主动分区负责系统运行，被动分区负责系统升级，同时在系统运行期间主动分区被设置成只读状态，确保 NestOS 运行期间的完整性与安全性。当新版本操作系统发布时，一个完整的文件系统将被下载至被动分区，并在系统重启引导时从新版本分区启动，原来的被动分区将切换为主动分区，而之前的主动分区则被切换为被动分区，两个分区扮演的角色将相互对调，等待下一次系统更新。',
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