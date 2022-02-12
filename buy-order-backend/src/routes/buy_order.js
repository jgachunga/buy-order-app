var express = require('express');
var router = express.Router();

var BuyOrderController = require('../controllers/buy_order');

// Get all BuyOrder
router.get('/buyOrder', BuyOrderController.GetBuyOrder);

// Create new BuyOrder
router.post('/buyOrder', BuyOrderController.PostBuyOrder);

// Delete a buyOrder based on :id
router.delete('/buyOrder/:id', BuyOrderController.DeleteBuyOrder);

// Update a buyOrder based on :id
router.put('/buyOrder/:id', BuyOrderController.UpdateBuyOrder);

module.exports = router;