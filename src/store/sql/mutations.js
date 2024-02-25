import { navigationItems } from '@/constants'

const mutations = {
    setFirstRun (state, value) {
        state.isFirstRun = value
    },
    setLoading (state, value) {
        state.loading = value
    },
    setSelectedSchema (state, value) {
        state.selectedSchema = value
        state.pageTitle = navigationItems.find(item => item.id === value).title
    },
    setErrorMessage (state, value) {
        state.errorMessage = value
    },
    setSelectedQuery (state, value) {
        state.selectedQuery = value
    },
    resetState (state) {
        state.loading = false
        state.isFirstRun = true
        state.errorMessage = ''
        state.selectedQuery = null
    },
}

export default mutations
