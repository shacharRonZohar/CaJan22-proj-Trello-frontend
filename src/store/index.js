import { createStore } from 'vuex'
import boardModule from './modules/board.module.js'

const store = createStore({
    strict: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        boardModule
    }
})

export default store
