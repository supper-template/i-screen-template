/*
 * @Author: 关广强 2223585058@qq.com
 * @Date: 2023-11-25 13:53:56
 * @LastEditors: 关广强 2223585058@qq.com
 * @LastEditTime: 2023-11-25 15:35:52
 */
import { ElLoading } from 'element-plus'

let loading: ReturnType<typeof ElLoading.service>
let timer: NodeJS.Timeout

export default {
	/**
	 * @description 打开Loading
	 * @param options 配置
	 * @param 超时毫秒
	 */
	show(options = {}, timeout = 0) {
		timer = setTimeout(() => {
			loading = ElLoading.service({ fullscreen: true, body: true, lock: true, ...options })
		}, timeout)
		return loading
	},
	/**
	 * @description 隐藏Loading
	 */
	hide() {
		if (loading) {
			loading.close()
		}
		clearTimeout(timer)
		return loading
	}
}
