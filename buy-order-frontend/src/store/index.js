// Entrypoint for vuex

import Vuex from 'vuex';
import Vue from 'vue';
import buy_orders from './modules/buy-orders';
import data_package_types from './modules/data-package-types';
import { createLogger } from 'vuex'

// Load vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    buy_orders,
    data_package_types
  },
  plugins: [createLogger()]
});