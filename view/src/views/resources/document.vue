<template>
  <div>
    <MiniDocs :title="title" :link="link" :IMG="IMG" />
  </div>
</template>

<script setup>
import MiniDocs from '@/components/MiniDocs.vue'
import { docFile } from '@/utils/resource'
const { title, link, IMG } = docFile[0];
</script>

<style lang="scss" scoped>
</style>