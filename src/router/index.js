// import * as Vue from 'vue'
// import Router from 'vue-router'

import { createRouter, createWebHashHistory } from 'vue-router'

/* Layout */
import Layout from '@/layout/index.vue'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
const constantRoutes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/',
        redirect: '/user'
    },
    {
        path: '/user',
        component: Layout,
        children: [{  
            path: '',
            name: 'User',
            component: () => import('@/views/user/index.vue'),
            meta: {
            title: '用户管理',
            icon: 'el-icon-user'
            }
        }]
    },
    {
        path: '/articles',
        component: Layout,
        children: [{
            path: '',
            name: 'Articles',
            component: () => import('@/views/articles/index.vue'),
            meta: {
            title: '文章列表',
            icon: 'el-icon-document'
            }
        }]
    },
    {
        path: '/categories',
        component: Layout,
        children: [{
            path: '',
            name: 'Categories',
            component: () => import('@/views/categories/index.vue'),
            meta: {
            title: '文章分类',
            icon: 'el-icon-document'
            }
        }]
    },
    {
        path: '/tags',
        component: Layout,
        children: [{
            path: '',
            name: 'Tags',
            component: () => import('@/views/tags/index.vue'),
            meta: {
            title: '文章标签',
            icon: 'el-icon-price-tag'
            }
        }]
    },
    {
        path: '/guestbook',
        component: Layout,
        children: [{
            path: '',
            name: 'Guestbook',
            component: () => import('@/views/guestbook/index.vue'),
            meta: {
            title: '留言板',
            icon: 'el-icon-price-tag'
            }
        }]
    },
    {
        path: '/comment',
        component: Layout,
        children: [{
            path: '',
            name: 'Comment',
            component: () => import('@/views/comment/index.vue'),
            meta: {
            title: '评论管理',
            icon: 'el-icon-chat-dot-round'
            }
        }]
    },
    {
        path: '/vlogs',
        component: Layout,
        children: [{
            path: '',
            name: 'Vlogs',
            component: () => import('@/views/vlogs/index.vue'),
            meta: {
            title: 'vlog管理',
            icon: 'el-icon-chat-dot-round'
            }
        }]
    },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
