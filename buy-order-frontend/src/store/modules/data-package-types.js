import axios from 'axios';

const state = {
  data_package_types: []
};

const getters = {
  allDataPackageTypes: (state) => {
    return state.data_package_types
  }
};

const actions = {
  async fetchDataPackageTypes({ commit }) {
    const response = await axios.get('http://localhost:3000/api/v1/dataPackageTypes');

    commit('setDataPackageTypes', response.data.data);
  },

}

const mutations = {
    setDataPackageTypes: (state, data_package_types) => (state.data_package_types = data_package_types),
};


export default {
    state,
    getters,
    actions,
    mutations
};