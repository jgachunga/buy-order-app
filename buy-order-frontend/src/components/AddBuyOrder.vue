<template>
  <div>
    <h3>Add Buy Order</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="name" placeholder="Enter name" />
        <input type="text" v-model="max_bid_price" placeholder="Enter max bid price" />
        <select v-model="data_package_type">
            <option disabled value="">Please select a data package type</option>
            <option 
            v-for="data_package_type in allDataPackageTypes"
            :key="data_package_type._id"
            v-bind:value="data_package_type._id"
            >{{data_package_type.name}}</option>
            
        </select>
        
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "AddBuyOrder",
  data() {
    return {
      id: "",
      name: '',
      max_bid_price : '',
      data_package_type : '',
      edit: false
    }
  },
  computed: mapGetters(["allDataPackageTypes", "getBuyOrder"]),
  watch: {
    getBuyOrder: function (val) {
        if(val){
            this.id = val.id
            this.name = val.name;
            this.max_bid_price = val.max_bid_price;
            this.data_package_type = val.data_package_type[0]._id
            this.edit = true
        }
    },
  },
  methods: {
    ...mapActions(["addBuyOrder", "updateBuyOrder"]),
    onSubmit(event) {
      event.preventDefault();

      const buyOrder = {
        name: this.name,
        max_bid_price : this.max_bid_price,
        data_package_type : this.data_package_type
      }
      if(this.edit){
          buyOrder.id = this.id,
          this.updateBuyOrder(buyOrder)
      }else{
          buyOrder.data_package_type = this.data_package_type
          this.addBuyOrder(buyOrder);
      }

      this.name = ''; 
      this.max_bid_price = '';
      this.data_package_type = ''
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
  }

  input[type="text"] {
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
  }

  input[type="submit"] {
    flex: 2;
    background: #41b883;
    color: #fff;
    border: 1px solid #41b883;
    cursor: pointer;
  }
</style>