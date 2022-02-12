var BuyOrder = require('../models/buy_order');

    var BuyOrderCtrl = {
        
        GetBuyOrder: function(req, res){
            BuyOrder.find({}, function(err, buy_orders){
              if(err) {
                res.json({status: false, error: "Something went wrong"});
                return;
              }
              res.json({status: true, message: "fetch successful", data: buy_orders});
            }).populate('data_package_type')
        },

        PostBuyOrder: function(req, res){
            var buyOrder = new BuyOrder(req.body);
            buyOrder.save(function(err, buyOrder){
              if(err) {
                res.json({status: false, error: "Something went wrong"});
                return;
              }
              res.json({status: true, message: "Buy Order Saved!!", data : buyOrder});
            });
        },

        UpdateBuyOrder: function(req, res){
            var max_bid_price = req.body.max_bid_price;
            var name = req.body.name;
            var data_package_type = req.body.data_package_type;
            
            BuyOrder.findById(req.params.id, function(err, buyOrder){
              buyOrder.max_bid_price = max_bid_price;
              buyOrder.name = name;
              buyOrder.data_package_type = data_package_type
              buyOrder.save(function(err, buyOrder){
                if(err) {
                  res.json({status: false, error: "Buy order not updated"});
                }
                res.json({status: true, message: "Buy order updated successfully", data : buyOrder});
              });
            });
        },

        DeleteBuyOrder: function(req, res){
          BuyOrder.deleteOne({_id: req.params.id}, function(err, buy_orders){
            if(err) {
              res.json({status: false, error: "Deleting buy order is not successfull"});
              return;
            }
            res.json({status: true, message: "Buy order deleted successfully!!"});
          });
        }
    }

module.exports = BuyOrderCtrl;