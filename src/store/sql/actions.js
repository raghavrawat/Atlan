import { getHeaderObject } from '@/store/sql/utils'
import { QUERY_RESULT } from '@/constants'

const actions = {
    setSelectedSchema ({ commit }, value) {
        commit ('resetState')
        commit('setSelectedSchema', value)
    },
    getSQLData ({ state, commit }, val) {
        if (!val) {
            commit('setErrorMessage', 'This field cannot be empty.')
            return false
        }
        commit('setLoading', true)
        const queryData = QUERY_RESULT[state.selectedSchema].queries.find(query => query.query === val)
        if (queryData) {
            const headers = getHeaderObject(queryData.data)
            commit('setLoading', false)
            commit('setFirstRun', false)
            commit('setErrorMessage', '')
            return { headers, content: queryData.data}
        } else {
            commit('setErrorMessage', 'Enter a different query.')
            commit('setLoading', false)
            return false
        }
    }
}

export default actions