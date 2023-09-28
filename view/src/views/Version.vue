<template>
  <div class="version">
    <div class="version-btn">
      <div class="version-btn_style" @click="changeVersion('container')">NestOS For Container</div>
      <div class="version-btn_style" @click="changeVersion('virt')">NestOS For Virt</div>
    </div>
    <div class="version-content">
      <div class="version-content-text">
        <span class="version-content-text_title">{{ $t(verLink[version].TITLE) }}</span>
        <p class="version-content-text_desc">
          {{ $t(verLink[version].DESC) }}
        </p>
      </div>
      <!-- virt 暂时没有图片， 不展示 -->
      <div class="version-content-img" v-if="verLink[version].BTN !== 'virt'">
        <img class="archImg" :src="verLink[version].IMG" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { verLink } from '@/utils/resource';

const version = ref('0');

// const versionArr = [
//   {
//     btn: 'container',
//     title: 'NestOS For Container 介绍',
//     desc: 'NestOS For Container（以下简称NFC）集成了rpm-ostree支持、ignition配置等技术，采用双根文件系统，原子化更新的设计思路，使用nestos-assembler快速集成构建。并针对K8S、openStack等平台进行适配，优化容器运行底噪，使系统具备十分便捷的集群组建能力，可以更安全的运行大规模的容器化工作负载。',
//     img: require("@/assets/architecture.png")
//   },
//   {
//     btn: 'virt',
//     title: 'NestOS For Virt 介绍',
//     desc: `
//       NestOS For Virt（以下简称NFV）是一个专为虚拟化场景而设计的版本，预安装了虚拟化关键组件，其目标是用户可以轻松创建和管理虚拟机，无论是在开发、测试还是生产环境中工作，都能够提供卓越的虚拟化性能，同时可以在高性能的虚拟机上运行各种工作负载，实现资源隔离和安全性。

//       无论是运行云原生应用程序、虚拟化环境，还是两者兼顾，NestOS For Container 和 NestOS For Virt 都是理想之选。它们提供了稳定性、性能和安全性，以满足现代数据中心和云环境的要求。`,
//     img: require('@/assets/cards/cards-download.png')  
//   }
// ];



function changeVersion(type) {
    type === 'virt' ? version.value = 1 : version.value = 0;
}

</script>

<style lang="scss" scoped>
.version {
  width: 100%;
  display: grid;

  &-btn {
    display: flex;
    justify-content: center;
    cursor: pointer;

    &_style {
      width: 20rem;
      height: 4rem;
      background: #002fa7;
      color: #fff;
      font-size: 1.6rem;
      text-align: center;
      margin: 2rem;
      line-height: 4rem;
      border-radius: 0.6rem;
      border: 1px solid #012fa6;
    }
  }

  &-content {
    display: flex;
    justify-content: space-around;

    &-text {
      flex: 1;
      background: #fff;
      box-shadow: 0 1px 5px rgba(45, 47, 51, 0.1);
      margin-right: 1rem;
      padding: 3rem;
      background-image: url("~@/assets/resource/group.png");

      &_title {
        font-size: 1.8rem;
        line-height: 4rem;
      }
      &_desc {
        font-size: 1.2rem;
        text-indent: 1rem;
        line-height: 2rem;
      }
    }

    &-img {
      width: 37rem;
      background: #fff;
      box-shadow: 0 1px 5px rgba(45, 47, 51, 0.1);
      margin-left: 1rem;
      padding: 2rem;
      text-align: center;

      img {
        width: 90%;
        background: #e4e4e4;
        padding: 1rem;
      }
    }
  }

  
}
</style>