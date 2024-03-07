/*
 * @Author: 关广强 2223585058@qq.com
 * @Date: 2023-11-25 13:53:56
 * @LastEditors: 关广强 2223585058@qq.com
 * @LastEditTime: 2023-11-25 14:31:30
 * @FilePath: /I-BRAIN-SCREEN-TEMPLATE/src/router/router.ts
 * @Description: 路由
 */
export default [
	{
		path: '/',
		redirect: '/main'
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('@/views/404/index.vue'),
		meta: {
			title: 'NotFound',
			showHeader: false
		}
	},
	{
		path: '/main',
		name: 'Main',
		component: () => import('@/views/main/index.vue'),
		meta: {
			title: '首页',
			showHeader: true
		}
	}
]
