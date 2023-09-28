<template>
  <div class="introduce">
    <div class="introduce-left">
      <img :src="require('@/assets/cards/cards-work.png')" alt="" />
      <el-button @click="goLink('https://gitee.com/openeuler/NestOS')">{{
        $t(`card.nestosTitle`)
      }}</el-button>
    </div>
    <div class="introduce-right">
      <p class="introduce-right-normal">{{ $t(`card.description`) }}</p>
      <p class="introduce-right-main">
        {{ $t(`card.mainDesc1`) }}<span class="text-style" @click="scrollLink()">{{ $t(`card.dltext`) }}</span
        ><span
          >{{ $t(`card.mainDesc2`) }}<span
            class="text-style"
            @click="goLink('https://gitee.com/openeuler/NestOS/issues')"
            >{{ $t(`card.linksText`) }}</span
          >。</span
        >
      </p>
    </div>
  </div>
</template>

<script setup>
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
.introduce {
  font-size: 18px;
  background-color: #fff;
  box-shadow: 0 1px 5px rgba(45, 47, 51, 0.1);
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;

  &-left {
    img {
      height: 13rem;
    }
    .el-button {
      margin-left: 16px;
    }
  }

  &-right {
    padding: 10px 20px;
    &-normal,
    &-main {
      text-indent: 1rem;
      padding: 24px 24px 0;
      line-height: 2rem;
    }

    &-main {
      font-weight: bold;
      line-height: 5rem;

      .text-style {
        color: #002fa7;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
