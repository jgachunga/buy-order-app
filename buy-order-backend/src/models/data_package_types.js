import mongoose from 'mongoose';

let dataPackageType= new mongoose.Schema({
    name:String,
})

module.exports = mongoose.model("DataPackageType", dataPackageType, 'data_package_types');