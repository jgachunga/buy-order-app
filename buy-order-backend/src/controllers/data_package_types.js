var DataPackageType = require('../models/data_package_types');

    var DataPackageTypeCtrl = {
        
        GetDataPackageTypes: function(req, res){
            DataPackageType.find({}, function(err, data_package_types){
              if(err) {
                res.json({status: false, error: "Something went wrong"});
                return;
              }
              res.json({status: true, message:"fetch successful", data: data_package_types});
            });
        },
    }

module.exports = DataPackageTypeCtrl;