// import Vue from 'vue'
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";  //引入挂载到Vue根实例上
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

createApp(App).use(store).use(Antd).use(router).mount("#app");

// 创建vue根实例，注册App根组件，最终把这个根实例挂载到index.html的#app上
// new Vue({
//     el:'#app',
//     router,
//     components:{App},
//     tenplate:'</App>'
// })
