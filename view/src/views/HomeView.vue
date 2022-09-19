<template>
  <div class="layout">
    <v-header />
    <div class="body">
      <v-banner />
      <div class="content">
        <v-cards @handleScroll="handleScroll" />

        <div class="description">
          <p>{{ $t(`card.description`) }}</p>
        </div>

        <mini-title :inside-title="t('minititle.planIn')" :outside-title="t('minititle.planOut')" />
        <img class="roadmap box_shadow" src="~@/assets/2022_plan.png" alt="">

        <mini-title :inside-title="t('minititle.archIn')" :outside-title="t('minititle.archOut')" />
        <v-architecture />

        <mini-title :inside-title="t('minititle.comIn')" :outside-title="t('minititle.comOut')" />
        <v-comparision />

        <mini-title :inside-title="t('minititle.resourceIn')" :outside-title="t('minititle.resourceOut')" />
        <v-resource id="resource" />
      </div>

    </div>
    <v-footer />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import MiniTitle from '@/components/MiniTitle.vue';
import vHeader from '@/components/Header.vue';
import vFooter from '@/components/Footer.vue';
import vBanner from './Banner.vue';
import vCards from './Cards.vue';
import vArchitecture from './Architecture.vue';
import vComparision from './Comparision.vue';
import vResource from './Resource.vue';
import { onMounted } from 'vue';
import AOS from 'aos';
onMounted(() => {
  AOS.init({
    offset: 200,
    duration: 800,
    easing: 'ease-in-sine',
    delay: 100,
    once: true
  });
});
const { t } = useI18n();
const handleScroll = () => {
  document.querySelector('#resource').scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest"
  })
}
</script>
<style lang="scss" scoped>
@import "~@/styles/color-pick.scss";

.layout {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  overflow-x: hidden;
  background-color: $main-back;

  .body {
    width: 100%;
    padding-top: 80px;

    .content {
      width: 74%;
      margin: 0 auto;
      padding: 3% 0;

      .roadmap {
        width: 100%;
      }

      .description {
        width: 100%;
        font-size: 14px;
        box-shadow: 0 1px 5px rgba(45, 47, 51, 0.1);

        p {
          text-indent: 1rem;
          padding: 34px;
          line-height: 24px;
        }

        background-color: #fff;
      }
    }
  }
}
</style>
