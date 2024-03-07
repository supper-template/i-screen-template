<template>
	<el-config-provider :locale="getLanguage">
		<router-view />
	</el-config-provider>
</template>

<script setup lang="ts">
import { watch, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

const router = useRouter()
const isShowHeader = ref(false)
const locale = ref('zh')

const languageList: TDict = {
	zh: zhCn,
	en: en
}

const getLanguage = computed(() => {
	return languageList[locale.value]
})

// 监听路由判断是否显示导航条
watch(
	() => router.currentRoute.value,
	(newValue) => {
		isShowHeader.value = !!newValue.meta.showHeader
	},
	{ immediate: true, deep: true }
)
</script>

<style lang="scss" scoped>
.page-container-view {
	width: 100%;
	height: 100%;
	display: flex;
	background-color: var(--peng-bg-secondary);

	.container-view {
		flex: 1;
		width: 100%;
		height: 100%;
		overflow-y: auto;
	}
}
</style>
