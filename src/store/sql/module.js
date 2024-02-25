import { defaultState } from './state'
import mutations from './mutations'
import actions from './actions'

const module = {
    namespaced: true,
    state: Object.assign({}, defaultState),
    mutations,
    actions
}

export default module