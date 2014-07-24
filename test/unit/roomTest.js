/*jshint expr:true*/
/*global describe, it*/
'use strict';

var expect = require('chai').expect;
var Room   = require('../../app/models/room.js');

describe('Room', function(){
  describe('constructor', function(){
    it('should construct a room', function(){
      var lr = new Room('living room', 20, 30);
      
      expect(lr).to.be.instanceof(Room);
      expect(lr.name).to.equal('living room');
      expect(lr.width).to.equal(20);
      expect(lr.length).to.equal(30);
    });
  });
  describe('#area', function(){
    it('should provide the area of the room', function(){
      var lr = new Room('living room', 20, 30);
      expect(lr.area()).to.equal(600);
    });
  });
  describe('#cost', function(){
    it('should provide the cost of a room', function(){
      var lr = new Room('living room', 20, 30);

      expect(lr.cost()).to.equal(3000);
    });
  });

});
