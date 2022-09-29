<template>
  <div class="info-cards">
    <div v-for="(item, index) in cardsLink" :key="item.index" class="info-cards-item">
      <div class="cover">
        <img v-if="item.HREF" class="info-cards-imgs" :src="item.IMG" alt="" @click="goLink(item.LINK)" />
        <img v-else class="info-cards-imgs" :src="item.IMG" alt="" @click="scrollLink()" />
      </div>
      <el-button v-if="item.HREF" @click="goLink(item.LINK)" class="info-cards-title">{{  $t(item.TITLE)  }}</el-button>
      <el-button v-else @click="scrollLink()" class="info-cards-title">{{  $t(item.TITLE)  }}</el-button>
    </div>
  </div>
</template>
<script setup>
import { cardsLink } from '@/utils/resource'
const emit = defineEmits(["handleScroll"]);
const goLink = (path) => {
  if (path.startsWith('https:')) {
    window.open(path, '_blank');
  }
}
const scrollLink = () => {
  emit('handleScroll');
};
</script>
<style lang="scss" scoped>
.info {
  &-cards {
    width: 100%;
    height: 300px;
    background-color: #fff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: var(--e-shadow-l1);
    margin-bottom: 3%;
    box-shadow: 0 1px 5px rgba(45, 47, 51, 0.1);

    &-item {
      width: 31%;
      height: 100%;
      text-align: center;

      .cover {
        width: 100%;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
      }
    }

    &-imgs {
      display: block;
      margin: 0 auto;
      width: 40%;
      box-sizing: border-box;
      cursor: pointer;
    }

    &-title {
      font-size: 16px;
      color: #fff;
      text-align: center;
    }
  }
}
</style>