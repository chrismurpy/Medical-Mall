import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },

  // 系统设置
  {
    path: '/admin',
    name: 'admin',
    meta: {
      title: '系统设置',
      icon: 'md-menu'
    },
    component: Main,
    children: [
      {
        path: 'post',
        name: 'list_admin_post',
        meta: {
          title: '岗位管理',
          icon: 'md-funnel'
        },
        component: () => import('@/view/admin/post/list')
      },
      {
        path: 'post/edit',
        name: 'edit_admin_post',
        meta: {
          title: '岗位修改',
          hideInMenu: true,
          icon: 'md-funnel'
        },
        component: () => import('@/view/admin/post/edit')
      },
      {
        path: 'dept',
        name: 'list_admin_dept',
        meta: {
          title: '部门管理',
          icon: 'md-funnel'
        },
        component: () => import('@/view/admin/dept/list')
      },
      {
        path: 'dept/edit',
        name: 'edit_admin_dept',
        meta: {
          title: '部门修改',
          hideInMenu: true,
          icon: 'md-funnel'
        },
        component: () => import('@/view/admin/dept/edit')
      },
      {
        path: 'dict',
        name: 'list_admin_dict',
        meta: {
          title: '字典管理',
          icon: 'md-funnel'
        },
        component: () => import('@/view/admin/dict/list')
      },
      {
        path: 'dict/edit',
        name: 'edit_admin_dict',
        meta: {
          title: '字典修改',
          hideInMenu: true,
          icon: 'md-funnel'
        },
        component: () => import('@/view/admin/dict/edit')
      }
    ]
  },
  // 权限管理
  {
    path: '/security',
    name: 'security',
    meta: {
      title: '权限管理',
      icon: 'md-menu'
    },
    component: Main,
    children: [
      {
        path: 'menu',
        name: 'list_security_menu',
        meta: {
          title: '菜单管理',
          icon: 'md-funnel'
        },
        component: () => import('@/view/security/menu/list')
      },
      {
        path: 'menu/edit',
        name: 'edit_security_menu',
        meta: {
          title: '菜单修改',
          hideInMenu: true,
          icon: 'md-funnel'
        },
        component: () => import('@/view/security/menu/edit')
      },
      {
        path: 'role',
        name: 'list_security_role',
        meta: {
          title: '角色管理',
          icon: 'md-funnel'
        },
        component: () => import('@/view/security/role/list')
      },
      {
        path: 'role/edit',
        name: 'edit_security_role',
        meta: {
          title: '角色修改',
          hideInMenu: true,
          icon: 'md-funnel'
        },
        component: () => import('@/view/security/role/edit')
      },
      {
        path: 'user',
        name: 'list_security_user',
        meta: {
          title: '用户管理',
          icon: 'md-funnel'
        },
        component: () => import('@/view/security/user/list')
      },
      {
        path: 'user/edit',
        name: 'edit_security_user',
        meta: {
          title: '用户修改',
          hideInMenu: true,
          icon: 'md-funnel'
        },
        component: () => import('@/view/security/user/edit')
      }
    ]
  },

  // 商品管理
  {
    path: '/item',
    name: 'item',
    meta: {
      title: '商品管理',
      icon: 'md-menu'
    },
    component: Main,
    children: [
      {
        path: 'category',
        name: 'list_item_category',
        meta: {
          title: '类型管理',
          icon: 'md-funnel'
        },
        component: () => import('@/view/item/category/list')
      },
      {
        path: 'category/edit',
        name: 'edit_item_category',
        meta: {
          title: '类型修改',
          hideInMenu: true,
          icon: 'md-funnel'
        },
        component: () => import('@/view/item/category/edit')
      },
      {
        path: 'brand',
        name: 'list_item_brand',
        meta: {
          title: '品牌管理',
          icon: 'md-funnel'
        },
        component: () => import('@/view/item/brand/list')
      },
      {
        path: 'brand/edit',
        name: 'edit_item_brand',
        meta: {
          title: '品牌修改',
          hideInMenu: true,
          icon: 'md-funnel'
        },
        component: () => import('@/view/item/brand/edit')
      },
      {
        path: 'spec',
        name: 'list_item_spec',
        meta: {
          title: '规格参数',
          icon: 'md-funnel'
        },
        component: () => import('@/view/item/spec/spec')
      },
      {
        path: 'spu',
        name: 'list_item_spu',
        meta: {
          title: '商品管理',
          icon: 'md-funnel'
        },
        component: () => import('@/view/item/spu/list')
      },
      {
        path: 'spu/edit',
        name: 'edit_item_spu',
        meta: {
          title: '商品修改',
          hideInMenu: true,
          icon: 'md-funnel'
        },
        component: () => import('@/view/item/spu/edit')
      }
    ]
  },

  // TODO 此处为旅游网线路管理模块，暂时显示为订单
  {
    path: '/route',
    name: 'route',
    meta: {
      title: '线路',
      icon: 'md-menu'
    },
    component: Main,
    children: [
      {
        path: 'category',
        name: 'list_route_category',
        meta: {
          title: '类型管理',
          icon: 'md-funnel'
        },
        component: () => import('@/view/route/category/list')
      },
      {
        path: 'category/edit',
        name: 'edit_route_category',
        meta: {
          title: '类型修改',
          hideInMenu: true,
          icon: 'md-funnel'
        },
        component: () => import('@/view/route/category/edit')
      },
      {
        path: 'seller',
        name: 'list_route_seller',
        meta: {
          title: '商家管理',
          icon: 'md-funnel'
        },
        component: () => import('@/view/route/seller/list')
      },
      {
        path: 'seller/edit',
        name: 'edit_route_seller',
        meta: {
          title: '商家修改',
          hideInMenu: true,
          icon: 'md-funnel'
        },
        component: () => import('@/view/route/seller/edit')
      },
      {
        path: 'line',
        name: 'list_route_line',
        meta: {
          title: '线路管理',
          icon: 'md-funnel'
        },
        component: () => import('@/view/route/line/list')
      },
      {
        path: 'line/edit',
        name: 'edit_route_line',
        meta: {
          title: '线路修改',
          hideInMenu: true,
          icon: 'md-funnel'
        },
        component: () => import('@/view/route/line/edit')
      }
    ]
  },

  {
    path: '/multilevel',
    name: 'multilevel',
    meta: {
      icon: 'md-menu',
      title: '多级菜单'
    },
    component: Main,
    children: [
      {
        path: 'level_2_1',
        name: 'level_2_1',
        meta: {
          icon: 'md-funnel',
          title: '二级-1'
        },
        component: () => import('@/view/multilevel/level-2-1.vue')
      },
      {
        path: 'level_2_2',
        name: 'level_2_2',
        meta: {
          // access: ['super_admin'],
          icon: 'md-funnel',
          showAlways: true,
          title: '二级-2'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: 'level_2_2_1',
            meta: {
              icon: 'md-funnel',
              title: '三级'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
          },
          {
            path: 'level_2_2_2',
            name: 'level_2_2_2',
            meta: {
              icon: 'md-funnel',
              title: '三级'
            },
            component: () => import('@/view/multilevel/level-2-2/level-2-2-2.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
