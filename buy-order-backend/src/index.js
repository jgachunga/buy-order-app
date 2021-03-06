const debug =require('debug')('server:debug');
import mongoose from 'mongoose';
import config from 'config';
import express from 'express';
import  bodyParser from 'body-parser';
import buyOrderRouter from './routes/buy_order';
import dataPackageTypeRouter from './routes/data_package_types';
var cors = require('cors')

mongoose.connect(config.get('database'), {
  useNewUrlParser: true
});

// callback when connection to mongodb is open
mongoose.connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

const app=express();
 // support json encoded bodies in the req
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(cors())
 //sets the limit of json bodies in the req body.
 app.use(bodyParser.json());
 app.use('/api/v1/',buyOrderRouter);
 app.use('/api/v1/',dataPackageTypeRouter);


const listen =app.listen(config.get('port'),()=>{
    debug(`server is running on port ${config.get('port')} and in ${config.get('name')} mode`);
    console.log(`server is running on port ${config.get('port')} and in ${config.get('name')} mode`);
})



module.exports= app;
module.exports.port=listen.address().port;

