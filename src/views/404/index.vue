<template>
  <div>
    <el-result title="404" sub-title="您访问的页面不存在">
      <template #icon>
        <el-image :src="NotFound" />
      </template>
      <template #extra>
        <el-button type="primary">返回首页</el-button>
      </template>
    </el-result>
  </div>
</template>
<script lang='ts' setup>
import { defineComponent } from 'vue'
import NotFound from '../../assets/images/404.png'
</script>
