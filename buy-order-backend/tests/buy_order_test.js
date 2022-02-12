var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
import mongoose, { SchemaTypes } from 'mongoose';

require('./sinon-mongoose/index');


var BuyOrder = require('../src/models/buy_order');

describe("Get all buy orders", function(){
   it("should return all buy orders", function(done){
       var BuyOrderMock = sinon.mock(BuyOrder);
       var expectedResult = {status: true, buy_orders: []};
       BuyOrderMock.expects('find').yields(null, expectedResult);
       BuyOrder.find(function (err, result) {
        BuyOrderMock.verify();
        BuyOrderMock.restore();
           expect(result.status).to.be.true;
           done();
       });
   });

   // Test will pass if we fail to get a buy order
   it("should return error", function(done){
       var BuyOrderMock = sinon.mock(BuyOrder);
       var expectedResult = {status: false, error: "Something went wrong"};
       BuyOrderMock.expects('find').yields(expectedResult, null);
       BuyOrder.find(function (err, result) {
        BuyOrderMock.verify();
        BuyOrderMock.restore();
           expect(err.status).to.not.be.true;
           done();
       });
   });
});

describe("Post a new buy order", function(){
    it("should create new buy order", function(done){
        var BuyOrderMock = sinon.mock(new BuyOrder({ name: 'Buy order one', max_bid_price : 20.00, data_package_type: '61e3f46ec44efc171b430210'}));
        var buyOrder = BuyOrder.object;
        var expectedResult = { status: true };
        BuyOrderMock.expects('save').yields(null, expectedResult);
        buyOrder.save(function (err, result) {
            BuyOrderMock.verify();
            BuyOrderMock.restore();
            expect(result.status).to.be.true;
            done();
        });
    });
    
    it("should return error, if post not saved", function(done){
        var BuyOrderMock = sinon.mock(new BuyOrder({ name: 'Buy order one', max_bid_price : 20.00, data_package_type: '61e3f46ec44efc171b430210'}));
        var buyOrder = BuyOrderMock.object;
        var expectedResult = { status: false };
        BuyOrderMock.expects('save').yields(expectedResult, null);
        buyOrder.save(function (err, result) {
            BuyOrderMock.verify();
            BuyOrderMock.restore();
            expect(err.status).to.not.be.true;
            done();
        });
    });
});

describe("Update a new buy order by id", function(){
    it("should updated a buy order by id", function(done){
      var BuyOrderMock = sinon.mock(new BuyOrder({ max_bid_price: 40.00}));
      var buyOrder = BuyOrderMock.object;
      var expectedResult = { status: true };
      BuyOrderMock.expects('save').withArgs({_id: 12345}).yields(null, expectedResult);
      buyOrder.save(function (err, result) {
        BuyOrderMock.verify();
        BuyOrderMock.restore();
        expect(result.status).to.be.true;
        done();
      });
    });
    // Test will pass if the Buy order is not updated based on an ID
    it("should return error if update action is failed", function(done){
      var BuyOrderMock = sinon.mock(new BuyOrder({ max_bid_price: 40.00}));
      var buyOrder = BuyOrderMock.object;
      var expectedResult = { status: false };
      BuyOrderMock.expects('save').withArgs({_id: 12345}).yields(expectedResult, null);
      buyOrder.save(function (err, result) {
        BuyOrderMock.verify();
        BuyOrderMock.restore();
        expect(err.status).to.not.be.true;
        done();
      });
    });
  });

  describe("Delete a buy order by id", function(){
    it("should delete a buy order by id", function(done){
        var BuyOrderMock = sinon.mock(BuyOrder);
        var expectedResult = { status: true };
        BuyOrderMock.expects('remove').withArgs({_id: 12345}).yields(null, expectedResult);
        BuyOrder.remove({_id: 12345}, function (err, result) {
            BuyOrderMock.verify();
            BuyOrderMock.restore();
            expect(result.status).to.be.true;
            done();
        });
    });
    
    it("should return error if delete action is failed", function(done){
        var BuyOrderMock = sinon.mock(BuyOrder);
        var expectedResult = { status: false };
        BuyOrderMock.expects('remove').withArgs({_id: 12345}).yields(expectedResult, null);
        BuyOrder.remove({_id: 12345}, function (err, result) {
            BuyOrderMock.verify();
            BuyOrderMock.restore();
            expect(err.status).to.not.be.true;
            done();
        });
    });
});