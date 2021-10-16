const state = {
    messagessuccess: '',
}

const getters = {
    returnMessagessuccess: (state) => state.messagessuccess
}

const actions = {
    addNotificationsuccess({commit}, messagesuccess){
        commit('addMessagesuccess', messagesuccess)
    },
    removeNotificationsuccess({commit}){
        commit('removeMessagesuccess')
    }
}

const mutations = {
    addMessagesuccess: (state, messagesuccess) => (state.messagessuccess = messagesuccess),
    removeMessagesuccess: (state) => (state.messagessuccess = '')
}

export default{state, getters, actions, mutations}