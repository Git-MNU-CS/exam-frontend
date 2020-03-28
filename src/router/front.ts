import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import ContentList from '@/views/front/ContentList.vue';
import ProblemList from '@/views/front/ProblemList.vue';
import Index from '@/views/front/Index.vue';

Vue.use(Router);

export const FrontConfig: RouteConfig[] = [
  {
    path: 'contentList',
    name: 'front/contentList',
    component: ContentList,
    meta: {
      title: '',
    },
  },
  {
    path: 'problemList',
    name: "front/problemList",
    component: ProblemList,
  },
  {
    path: "index",
    name: "front/index",
    component: Index,
  }
];
