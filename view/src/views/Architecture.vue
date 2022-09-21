<template>
  <div class="arch">
    <div class="character">
      <div class="character-item box_shadow" v-for="item in 5">
        <span class="character-item-img"><svg class="icon svg-icon" aria-hidden="true">
            <use :xlink:href=IMG[item-1]></use>
          </svg></span>
        <span class="character-item-title">{{$t(`arch.title${item}`)}}</span>
        <span class="character-item-desc">{{$t(`arch.character${item}`)}}</span>
      </div>
    </div>
    <img class="archImg" src="~@/assets/architecture.png" alt="">
  </div>
</template>

<script setup>
const IMG = ['#icon-kaixiangjiyong', '#icon-peizhi-zhongduanpeizhi', '#icon-safe', '#icon-caozuo_zidongliangdu', '#icon-shigongpeihe'];

</script>

<style lang="scss" scoped>
.arch {
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 5px rgba(45, 47, 51, 0.1);
  text-align: center;

  .character {
    padding: 4px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    &-item {
      width: 24%;
      height: 170px;
      margin: 20px 14px;
      padding: 6px 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
      border: 1px dashed gray;

      &-img {
        display: flex;
        align-items: center;
        width: 30%;
        height: 32%;

        .icon {
          width: 100%;
          height: 100%;
        }
      }

      &-title {
        display: inline-block;
        font-size: 20px;
        padding: 6px 0 10px 0;
        font-weight: bold;
        color: #4d4949;
      }

      &-desc {
        display: inline-block;
        font-size: 16px;
        text-align: justify;
      }
    }

  }

  .archImg {
    padding-top: 40px;
    width: 70%;
  }
}
</style>