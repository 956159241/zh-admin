import type { Router, RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { getBasicRoutes, basicRoutes, setLayout } from './routes';
import { rangeRight } from 'lodash';
import { useLayoutStore } from '@/layout/store';
import storage from '@/utils/storage';
import { close, start } from '@/utils/nporgress';

const PUBLIC_PATH = import.meta.env.VITE_PUBLIC_PATH;

// 白名单应该包含基本静态路由
const WHITE_NAME_LIST: string[] = [];
// const getRouteNames = (array: any[]) =>
//   array.forEach((item) => {
//     WHITE_NAME_LIST.push(item.name);
//     getRouteNames(item.children || []);
//   });
// getRouteNames(basicRoutes);

// app router
// 创建一个可以被 Vue 应用程序使用的路由实例
console.log(PUBLIC_PATH);
// export const router = createRouter({
//   history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
//   routes: basicRoutes,
//   // 是否应该禁止尾部斜杠。默认为假
//   // strict: true,
//   scrollBehavior: () => ({ left: 0, top: 0 }),
// });

// reset router
// export function resetRouter() {
//   router.getRoutes().forEach((route) => {
//     const { name } = route;
//     // if (name && !WHITE_NAME_LIST.includes(name as string)) {
//     //   router.hasRoute(name) && router.removeRoute(name);
//     // }
//   });
// }

let router: Router | null = null;

async function getRouter () {
  const store = useLayoutStore();
  const routes:any = storage.getToken() ? await getBasicRoutes() : [];
  router = createRouter({
    history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
    // history: createWebHistory(),
    // routes: [...basicRoutes, ...routes ],
    routes: [ ...basicRoutes, ...routes ],
    scrollBehavior: () => ({ left: 0, top: 0 }),
  });

  router.beforeEach(async (to) => {
    // return true;
    start();
  });
  router.afterEach(async () => {
    // return true;
    close();
  });

  return router;
}

export function getCurrentRouter () {
  return router;
}

export {
  router,
  setLayout,
};

// config router
export async function setupRouter(app: App<Element>) {
  const router = await getRouter();
  app.use(router);
}