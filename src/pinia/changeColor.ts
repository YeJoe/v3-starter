import { defineStore } from 'pinia'

const rootCls =  document.documentElement.classList || undefined
const rootEl = document.documentElement || undefined
const rootStyle = rootEl && getComputedStyle(rootEl)


export const useColorsStore = defineStore({
  id: 'Theme_Config', // 必填且唯一
  state: () => {
    return {
        majorColor:  ref(rootStyle ? rootStyle.getPropertyValue('--vxp-color-primary-base') : ''), //默认颜色
        isDark:ref(rootCls && rootCls.contains('dark')),//黑暗主题
        seriesColors:ref<Record<string, string[]>>({
          light: [],
          opacity: [],
          dark: []
        }),
        showAsideMenu:ref(true),//是否展示边栏菜单
        menuReduced:ref(false),//菜单折叠
        asideWidth:ref(240),//边栏宽度
        asideHeight:ref(55)//边栏高度
    }
  },
  
  actions: {
    
  },
  //使用该插件，开启数据缓存
  persist: {
    // 修改存储中使用的键名称，默认为当前 Store的 id
    key: 'Theme_Config',
    // 修改为 sessionStorage，默认为 localStorage
    storage: window.localStorage,
    // 部分持久化状态的点符号路径数组，[]意味着没有状态被持久化(默认为undefined，持久化整个状态)
    paths: ['majorColor','isDark','showAside','menuReduced','asideWidth','asideHeight',],
  },
})
