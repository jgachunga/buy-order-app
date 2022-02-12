var express = require('express');
var router = express.Router();

var DataPackageTypeController = require('../controllers/data_package_types');

// Get all DataPackageTypes
router.get('/dataPackageTypes', DataPackageTypeController.GetDataPackageTypes);

module.exports = router;