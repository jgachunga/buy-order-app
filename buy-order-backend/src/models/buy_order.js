import mongoose, { SchemaTypes } from 'mongoose';

var DataPackageType = require('../models/data_package_types');

var Schema = mongoose.Schema;
// Defining schema for our Todo API
var BuyOrderSchema = Schema({
  name: {
    type: String
  },
  max_bid_price: {
    type: Number,
  },
  data_package_type_id: {
    type: SchemaTypes.ObjectId,
  },
  data_package_type:[{
    type: Schema.Types.ObjectId, ref: "DataPackageType"
 }]
});
//Exporting our model
var BuyOrderModel = mongoose.model('BuyOrder', BuyOrderSchema);

module.exports = BuyOrderModel;