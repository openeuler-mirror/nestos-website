<template>
  <div class="fireContent">
    <div class="miniContent" v-for="item in fireFile">
      <MiniDocs :title="item.title" :link="item.link" :IMG="item.IMG" />
    </div>
  </div>
</template>

<script setup>
import MiniDocs from '@/components/MiniDocs.vue'
import { fireFile } from '@/utils/resource'
</script>

<style lang="scss" scoped>
.fireContent {
  width: 100%;
  display: flex;

  .miniContent {
    width: 100%;
  }
}
</style>