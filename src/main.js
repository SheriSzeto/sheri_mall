/*
 * @Author: sheri 13580370252@163.com
 * @Date: 2023-03-02 11:28:09
 * @LastEditors: sheri 13580370252@163.com
 * @LastEditTime: 2023-03-02 11:28:09
 * @FilePath: /sheri_mall/src/main.js
 */
import {
	createSSRApp
} from "vue";
import store from "./store";
import App from "./App.vue";
export function createApp() {
	const app = createSSRApp(App);
	app.use(store);
	return {
		app,
	};
}
