import api from '../../api/imgur'

const state = {
  images: []
}

const getters = {
  allImages: () => state.images

}

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth
    const response = await api.fetchImages(token);
    commit('setImages', response.data.data)
  },
  async uploadImages({commit}, images) {
    console.log(images)
  }
}

const mutations = {
  setImages: (state, images) => {
    state.images = images
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
