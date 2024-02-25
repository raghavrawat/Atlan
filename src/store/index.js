import Vue from 'vue'
import Vuex from 'vuex'
import sql from './sql/module'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    modules: {
        sql,
    }
})