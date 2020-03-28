import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';

Vue.use(Router);

export const AdminConfig: RouteConfig = {
  path: 'admin',
  name: 'adminIndex',
  components: {

  },
  children: [

  ],
  meta: {
    title: '后台',
  }
}