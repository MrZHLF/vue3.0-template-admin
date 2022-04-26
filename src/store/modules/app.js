import { getItem, setItem } from '@/utils/storage'
export default {
  namespaced: true,
  state: {
    sidebarOpened: true,
    tagsViewList: getItem() || []
  },
  mutations: {
    triggerSidebarOpened(state) {
      state.sidebarOpened = !state.sidebarOpened
    },
    TOGGLE_SIDEBAR: state => {
      state.sidebar.opened = !state.sidebar.opened
    },
    UPDATE_SIDEBAR: (state, bool) => {
      state.sidebar.opened = bool
    },
    /**
     * 添加 tags
     */
    addTagsViewList(state, tag) {
      const isFind = state.tagsViewList.find(item => {
        return item.path === tag.path
      })
      // 处理重复
      if (!isFind) {
        state.tagsViewList.push(tag)
        setItem(state.tagsViewList)
      }
    },
    /**
     * 为指定的 tag 修改 title
     */
    changeTagsView(state, { index, tag }) {
      state.tagsViewList[index] = tag
      setItem(state.tagsViewList)
    },
    /**
     * 删除 tag
     * @param {type: 'other'||'right'||'index', index: index} payload
     */
    removeTagsView(state, payload) {
      if (payload.type === 'index') {
        state.tagsViewList.splice(payload.index, 1)
        return
      } else if (payload.type === 'other') {
        state.tagsViewList.splice(
          payload.index + 1,
          state.tagsViewList.length - payload.index + 1
        )
        state.tagsViewList.splice(0, payload.index)
      } else if (payload.type === 'right') {
        state.tagsViewList.splice(
          payload.index + 1,
          state.tagsViewList.length - payload.index + 1
        )
      }
      setItem( state.tagsViewList)
    }
  },
  actions: {
    

    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    updateSideBar({ commit }, bool) {
      commit('UPDATE_SIDEBAR', bool)
    },
  },
}

