<template>
  <div class="arch">
    <div class="character">
      <p v-for="item in 5">{{  $t(`arch.character${item}`)  }}</p>
    </div>
    <img class="archImg" src="~@/assets/architecture.png" alt="">
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.arch {
  width: 100%;

  background-color: #fff;
  box-shadow: 0 1px 5px rgba(45, 47, 51, 0.1);
  text-align: center;

  .character {
    padding: 40px;

    p {
      padding-top: 16px;
      font-size: 14px;
      text-align: left;
      text-indent: 1rem;
      line-height: 22px;
      // border-bottom: 1px dashed gray;
    }
  }

  .archImg {
    padding-top: 40px;
    width: 70%;
  }
}
</style>