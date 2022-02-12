
<template>
  <div>
    <h3>Buy Orders</h3>
    <div class="legend">
      <span>Buy Orders List</span>
    </div>
    <div class="buy_orders">
      <div
        :key="buy_order._id"
        v-for="buy_order in allBuyOrders"
        class="buy_order"
      >
        <p>Name: {{ buy_order.name }}</p>
         <p>Max Bid Price: {{ buy_order.max_bid_price }}</p>
         <p>Data Package Type: {{ buy_order.data_package_type? buy_order.data_package_type[0].name : '' }}</p>

        <i class="fas fa-trash-alt" v-on:click="deleteBuyOrder(buy_order._id)"></i>
        <i class="fas fa-pen edit-icon" v-on:click="editBuyOrder(buy_order)"></i>
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "BuyOrders",
  methods:{
      ...mapActions(["fetchBuyOrders","setBuyOrder","deleteBuyOrder","updateBuyOrder", "fetchDataPackageTypes"]),
      editBuyOrder(buy_order) {
        const buyOrder = {
            id: buy_order._id,
            name: buy_order.name,
            max_bid_price: buy_order.max_bid_price,
            data_package_type: buy_order.data_package_type
        }
        this.setBuyOrder(buyOrder);
    }
  },
  computed: mapGetters(["allBuyOrders"]),
  created() {
    this.fetchBuyOrders();
    this.fetchDataPackageTypes();
  }
};
</script>

<style scoped>
  .buy_orders {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  .buy_order {
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }
  i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    cursor: pointer;
  }
  .edit-icon {
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 10px
  }
  .legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
  .complete-box,
  .incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
  }
  .complete-box {
    background: #35495e;
  }
  .incomplete-box {
    background: #41b883;
  }
  .is-complete {
    color: #fff;
    background: #35495e;
  }
  @media (max-width: 500px) {
    .buy_orders {
      grid-template-columns: 1fr;
    }
  }
</style>
