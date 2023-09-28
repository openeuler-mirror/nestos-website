<template>
  <div class="partner">
    <div class="partner-logo" > 
        <img :src="require('@/assets/partner/kylinos.png')" alt="">
    </div>
    <div class="partner-logo"> 
        <img class="sky" :src=" require('@/assets/partner/skysolidiss.jpg')" alt="">
    </div>
  </div>
</template>

<script setup>
// const IMG = [
//     {img: require('@/assets/partner/kylinos.png')},
//     {img: require('@/assets/partner/skysolidiss.jpg')},
// ]
</script>

<style lang="scss" scoped>
.partner {
    width: 100%;
    display: flex;
    justify-content: center;

    &-logo {
        width: 300px;
        background: #fff;
        margin: 0 10px;
        text-align: center;

        img {
            width: 70%;
        }

        .sky {
            margin-top: 22px;
        }
    }
}
</style>