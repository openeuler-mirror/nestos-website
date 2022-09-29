<template>
  <div class="title">
    <div class="title-outside">{{  outsideTitle  }}</div>
    <div class="title-inside">{{  insideTitle  }}</div>
  </div>
</template>

<script setup>
defineProps({
  insideTitle: {
    type: String,
    default: '',
  },
  outsideTitle: {
    type: String,
    default: '',
  }
});
</script>

<style lang="scss" scoped>
@import "~@/styles/color-pick.scss";

.title {
  margin: 80px auto 40px;
  font-size: 40px;
  width: 20%;
  color: #000;
  position: relative;
  text-align: center;

  &-outside {
    position: absolute;
    left: 50%;
    top: -25%;
    transform: translateX(-50%);
    color: $gray-text;
    opacity: .3;
    font-weight: 300;
    z-index: 1;
    -webkit-user-select:none;
    user-select: none;
  }

  &-inside {
    font-size: 37px;
    -webkit-user-select:none;
    user-select: none;
  }
}
</style>
