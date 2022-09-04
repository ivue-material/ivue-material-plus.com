import {
  createStore,
} from 'vuex';

export const HIDE_MENU = 'HIDE_MENU';

/* eslint-disable */
export default createStore({
  state: {
    /**
     * 是否显示菜单导航
     *
     * @type {Boolean}
     */
    hideMenu: false,
  },
  mutations: {
    // 是否显示菜单导航
    [HIDE_MENU](state, HIDE_MENU) {
      state.hideMenu = HIDE_MENU;
    },
  },
  actions: {
    // 是否显示菜单导航
    setHideMenu({
      commit
    }, state) {
      commit(HIDE_MENU, state);
    },
  },
});
