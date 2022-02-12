<template>
  <div id="app">
    <add-buy-order/>
    <BuyOrders/>
  </div>
</template>

<script>
import AddBuyOrder from './components/AddBuyOrder.vue'

import BuyOrders from './components/BuyOrders.vue'

export default {
  name: 'App',
  components: {
    BuyOrders,
    AddBuyOrder
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
