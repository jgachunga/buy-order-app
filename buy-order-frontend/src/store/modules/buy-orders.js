import axios from 'axios';

const state = {
    buy_orders: [],
    buy_order : {}
};

const getters = {
  allBuyOrders: (state) => {
    return state.buy_orders
  },
  getBuyOrder: (state) => {
    return state.buy_order
  }
};

const actions = {
  async fetchBuyOrders({ commit }) {
    const response = await axios.get('http://localhost:3000/api/v1/buyOrder');
    commit('setBuyOrders', response.data.data);
  },

  async deleteBuyOrder({ commit }, id) {
    await axios.delete(`http://localhost:3000/api/v1/buyOrder/${id}`);

    commit('removeBuyOrder', id);
  },

  async setBuyOrder({ commit }, updatedBuyOrder) {
     commit('setBuyOrder', updatedBuyOrder);
  },

  async updateBuyOrder({ commit }, updatedBuyOrder) {
      console.log(updatedBuyOrder)
    axios.put(`http://localhost:3000/api/v1/buyOrder/${updatedBuyOrder.id}`, updatedBuyOrder).then((response) => {
        console.log(response.data.data);
        commit('updateBuyOrder', response.data.data);
    });
    
  },

  async addBuyOrder({commit}, addedBuyOrder){
      const response = await axios.post(`http://localhost:3000/api/v1/buyOrder`,
      addedBuyOrder)
        console.log(response.data)
      commit('addBuyOrder', response.data.data)
  },

}

const mutations = {
    setBuyOrders: (state, buy_orders) => (state.buy_orders = buy_orders),
    setBuyOrder: (state, buy_order) => (state.buy_order = buy_order),
    removeBuyOrder:(state, id) => state.buy_orders = state.buy_orders.filter((buy_order) => buy_order._id !== id),
    updateBuyOrder: (state, updatedBuyOrder) => {
        // Find index
        const index = state.buy_orders.findIndex(buy_order => buy_order._id === updatedBuyOrder._id);
    
        if (index !== -1) {
          state.buy_orders.splice(index, 1, updatedBuyOrder);
        }
    },
    addBuyOrder:(state, newBuyOrder) => state.buy_orders.unshift(newBuyOrder)
};


export default {
    state,
    getters,
    actions,
    mutations
};