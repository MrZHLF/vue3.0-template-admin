import { createStore } from 'vuex'
import getters from './getters.js'

import app from './modules/app'
import permission from './modules/permission'
import user from './modules/user'

export default createStore({
  getters,
  modules:{
    app,
    permission,
    user
  }
})