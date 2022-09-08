<template>
  <div class="head">
    <a href="https://www.openeuler.org/" class="nav">
      <img class="logo" src="~@/assets/logo_openEuler.png" alt="openEuler">
    </a>
    <!-- 切换语言入口，需要时放开 -->
    <!-- <div class="language">
      <el-button @click="$i18n.locale = $i18n.locale === 'zh-CN' ? 'en-US' : 'zh-CN';">中/英</el-button>
    </div> -->
  </div>
</template>

<script setup>
</script>
<style lang="scss" scoped>
.head {
  width: 100%;
  height: 80px;
  overflow: hidden;
  position: fixed;
  z-index: 999;
  background-color: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav {
    width: 20%;
    height: 50%;
    padding-left: 3%;
    display: inline-block;

    .logo {
      height: 100%;
      cursor: pointer;
    }

  }

  .language {
    padding-right: 3%;
  }
}
</style>
