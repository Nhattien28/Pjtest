import Defaulayout from "@/layout/Defaulayout.vue";
import CreatePage from "@/page/CreatePage.vue";
import DetailArticle from "@/page/DetailArticle.vue";
import HomePage from "@/page/HomePage.vue";
import InfoPage from "@/page/InfoPage.vue";
import ListPage from "@/page/ListPage.vue";


export const routes = [
    {
        path: '/',
        
        component: Defaulayout,
        children: [
    {
                path: '/',
                name: 'home',
                component: HomePage,
    },
    {
        path: '/info',
        name: 'info',
        component: InfoPage,
},
{
    path: '/list',
    component: ListPage,
},
    {
             path: '/create',
             name: 'create',
                component: CreatePage, 
    }
,{
    path: "/article/:id",
    name: "article-details",
    component: DetailArticle,
  },]
    }

]