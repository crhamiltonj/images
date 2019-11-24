const state = {
  images: []
}

const getters = {
  allimages: () => state.images

}

const actions = {
  fetchImages() {
    
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
