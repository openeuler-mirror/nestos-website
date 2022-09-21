<template>
  <div class="compare box_shadow">
    <p>{{$t(`compare.desc`)}}</p><br />
    <p class="table_title">{{$t(`compare.iSulad_x86`)}}</p>
    <el-table class="table" :data="iSulad_x86" border stripe style="width: 100%" height="200">
      <el-table-column prop="col1" fixed="left" label="operator(ms)" width='180' />
      <el-table-column prop="col2" label="nestos" width='120' />
      <el-table-column prop="col3" label="openEuler21.09" width='180' />
      <el-table-column prop="col4" label="openEuler20.03LTS" width='180' />
      <el-table-column prop="col5" label="Centos8" width='160' />
      <el-table-column prop="col6" label="Vs openEuler21.09" width='180' />
      <el-table-column prop="col7" label="Vs openEuler20.03LTS" width='180' />
      <el-table-column prop="col8" label="Vs centos8" />
    </el-table>
    <p class="table_title">{{$t(`compare.iSulad_arch`)}}</p>
    <el-table class="table" :data="iSulad_arch" border stripe style="width: 100%" height="200">
      <el-table-column prop="col1" fixed="left" label="operator(ms)" width='180' />
      <el-table-column prop="col2" label="nestos" width='120' />
      <el-table-column prop="col3" label="openEuler21.09" width='180' />
      <el-table-column prop="col4" label="openEuler20.03LTS" width='180' />
      <el-table-column prop="col5" label="Centos8" width='160' />
      <el-table-column prop="col6" label="Vs openEuler21.09" width='180' />
      <el-table-column prop="col7" label="Vs openEuler20.03LTS" width='180' />
      <el-table-column prop="col8" label="Vs centos8" />
    </el-table>
    <br />
    <p class="detail">{{$t(`compare.detail`)}}<span class="compare_link"
        @click="goLink">{{$t(`compare.url_text`)}}</span></p>
  </div>
</template>

<script setup>
import { comparision_url } from '@/utils/resource';

// 跳转到性能对比详情页面
const goLink = () => {
  window.open(comparision_url, '_blank')
}

const iSulad_x86 = [
  { col1: '100*create', col2: '817', col3: '1083', col4: '3693', col5: '1340', col6: '-25%', col7: '-78%', col8: '-40%' },
  { col1: '100*start', col2: '1822', col3: '2256', col4: '5947', col5: '3524', col6: '-20%', col7: '-70%', col8: '-49%' },
  { col1: '100*stop', col2: '328', col3: '507', col4: '1180', col5: '584', col6: '-36%', col7: '-73%', col8: '-44%' },
  { col1: '100*rm', col2: '839', col3: '896', col4: '1272', col5: '1023', col6: '-7%', col7: '-35%', col8: '-18%' },
]
const iSulad_arch = [
  { col1: '100*create', col2: '558', col3: '614', col4: '1181', col5: '1077', col6: '-10%', col7: '-53%', col8: '-49%' },
  { col1: '100*start', col2: '1883', col3: '2019', col4: '2927', col5: '2310', col6: '-7%', col7: '-36%', col8: '-19%' },
  { col1: '100*stop', col2: '268', col3: '334', col4: '388', col5: '2555', col6: '-20%', col7: '-31%', col8: '-853%' },
  { col1: '100*rm', col2: '428', col3: '547', col4: '555', col5: '694', col6: '-22%', col7: '-23%', col8: '-39%' },
]
</script>

<style lang="scss" scoped>
.compare {
  background-color: #fff;
  padding: 20px;

  .table_title {
    font-size: 16px;
    font-weight: bold;
    color: #4d4949;
  }

  .table {
    margin: 0 0 16px 0;
  }

  .detail {
    font-size: 14px;
    font-weight: bold;
    color: #4d4949;

    .compare_link {

      &:hover {
        cursor: pointer;
        color: #002f9c;
      }
    }
  }
}
</style>