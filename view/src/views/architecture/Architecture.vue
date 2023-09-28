<template>
  <div class="arch">
    <div class="character">
      <div
        class="character-item"
        v-for="item in 6"
        :key="item + 'key'"
        @click="viewDetail(item)"
      >
        <div class="character-item-img">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="IMG[item - 1]"></use>
          </svg>
        </div>
        <div class="character-item-text">
          <span class="character-item-text_title">{{
            $t(`arch.title${item}`)
          }}</span>
          <span class="character-item-text_desc">{{
            $t(`arch.desc${item}`)
          }}</span>
        </div>
      </div>
    </div>

    <el-drawer v-model="drawer" :title="drawerTitle" size="40%">
      <template #header>
        <h2 style="color: #000">{{ $t(`arch.title${detailIndex}`) }}</h2>
      </template>
      <div class="detail">
        <v-detail-one v-if="detailIndex === 1" />
        <v-detail-two v-if="detailIndex === 2" />
        <v-detail-three v-if="detailIndex === 3" />
        <v-detail-four v-if="detailIndex === 4" />
        <v-detail-five v-if="detailIndex === 5" />
        <v-detail-six v-if="detailIndex === 6" />
      </div>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import vDetailOne from "./detail/DetailOne.vue";
import vDetailTwo from "./detail/DetailTwo.vue";
import vDetailThree from "./detail/DetailThree.vue";
import vDetailFour from "./detail/DetailFour.vue";
import vDetailFive from "./detail/DetailFive.vue";
import vDetailSix from "./detail/DetailSix.vue";

const drawer = ref(false);
const detailIndex = ref(1);
const drawerTitle = ref("内核特性增强");

const IMG = [
  "#icon-kaixiangjiyong",
  "#icon-peizhi-zhongduanpeizhi",
  "#icon-safe",
  "#icon-caozuo_zidongliangdu",
  "#icon-shigongpeihe",
  "#icon-peihegongzuo",
];

const viewDetail = (index) => {
  detailIndex.value = index;
  console.log("index", index, detailIndex);
  drawer.value = true;
};
</script>

<style lang="scss" scoped>
.arch {
  background-color: #fff;
  box-shadow: 0 1px 5px rgba(45, 47, 51, 0.1);
  padding: 0 10rem;

  .character {
    display: grid;
    grid-template-columns: auto auto;

    &-item {
      height: 5rem;
      padding: 4rem 0;
      margin: 0 2rem;
      display: flex;
      border-bottom: 1px solid #e5e5e5;
      cursor: pointer;

      &-img {
        width: 8rem;

        .icon {
          width: 100%;
          height: 100%;
        }
      }

      &-text {
        flex: 1;

        &_title {
          display: inline-block;
          font-size: 20px;
          font-weight: bold;
          color: #4d4949;
          padding-bottom: 0.4rem;
        }

        &_desc {
          display: inline-block;
          font-size: 16px;
          color: #707070;
        }
      }
    }
  }
}
</style>
