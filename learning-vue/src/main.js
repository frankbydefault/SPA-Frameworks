import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router';
import LastArticles from './components/LastArticlesComp.vue'
import testComponent from './components/test.vue'

//createApp.use(VueRouter);

const routes = [
    {path:'/home', component: LastArticles},
    {path:'/Last-Articles', component: LastArticles},
    {path:'/component', component: testComponent},
    {path:'/', component: LastArticles},
];

const router = new VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

createApp(App).use(router).mount('#app')
