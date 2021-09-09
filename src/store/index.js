import { createStore } from 'vuex'

import { journal } from '../modules/daybook/store/journal/'

export const store = createStore({
  modules: {
    journal,
  },
})
