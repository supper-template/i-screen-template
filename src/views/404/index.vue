<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2023-11-25 14:29:00
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-11-25 14:36:44
 * @FilePath: /I-BRAIN-SCREEN-TEMPLATE/src/views/404/index.vue
 * @Description: 404
-->
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
