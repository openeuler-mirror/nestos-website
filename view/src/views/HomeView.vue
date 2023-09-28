<template>
  <div class="layout">
    <v-header />
    <div class="body">
      <v-banner />
      <div class="content">
        <v-briefly @handleScroll="handleScroll" />

        <mini-title
          :inside-title="t('minititle.versionIn')"
          :outside-title="t('minititle.versionOut')"
        />
        <v-version />

        <mini-title
          :inside-title="t('minititle.archIn')"
          :outside-title="t('minititle.archOut')"
        />
        <v-architecture />

        <mini-title
          :inside-title="t('minititle.comIn')"
          :outside-title="t('minititle.comOut')"
        />
        <v-comparision />

        <mini-title
          :inside-title="t('minititle.resourceIn')"
          :outside-title="t('minititle.resourceOut')"
        />
        <v-resource id="resource" />
      </div>
    </div>
    <v-footer />
  </div>
</template>
  
  <script setup>
import { useI18n } from "vue-i18n";
import MiniTitle from "@/components/MiniTitle.vue";
import vHeader from "@/components/Header.vue";
import vFooter from "@/components/Footer.vue";
import vArchitecture from "./architecture/Architecture.vue";
import vBanner from "./Banner.vue";
import vBriefly from "./Briefly.vue";
import vComparision from "./Comparision.vue";
import vResource from "./Resource.vue";
import vVersion from "./Version.vue";
import { onMounted } from "vue";
import AOS from "aos";
onMounted(() => {
  AOS.init({
    offset: 200,
    duration: 800,
    easing: "ease-in-sine",
    delay: 100,
    once: true,
  });
});
const { t } = useI18n();
const handleScroll = () => {
  document.querySelector("#resource").scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
};
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
    }
  }
}
</style>
  