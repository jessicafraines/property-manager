/*jshint expr:true*/
/*global describe, it*/
'use strict';

var expect = require('chai').expect;
var Renter = require('../../app/models/renter.js');

describe('Renter', function(){
  describe('constructor', function(){
    it('should create a renter', function(){
      var earl = new Renter('earl', 24, 'male', 'spartan');

      expect(earl.name).to.equal('earl');
      expect(earl.age).to.equal(24);
      expect(earl.gender).to.equal('male');
      expect(earl.profession).to.equal('spartan');
      expect(earl.cash).to.be.within(100, 5000);
      expect(earl.isEvicted).to.equal(false);
    }); 
  });
  describe('#work', function(){
    it('should increase cash based on profession', function(){
      var earl = new Renter('earl', 24, 'male', 'spartan');
      var start = earl.cash;
      earl.work();

      expect(earl.cash).to.be.within(150, 5250);
      expect(earl.cash).to.be.above(start);
      
    });
  });

  describe('#payRent', function(){
    it('should subtract amount from cash', function(){
      var earl = new Renter('earl', 24, 'male', 'spartan');
      var start = earl.cash;
      earl.payRent(100);

      expect(earl.cash).to.be.below(start);
      expect(earl.cash).to.be.within(0, 4900);      
    });
    it('should evict renter', function(){
      var earl = new Renter('earl', 24, 'male', 'spartan');
      earl.payRent(6000);

      expect(earl.isEvicted).to.equal(true);
    });
  });

  describe('#party', function(){
    it('should determine if you partied too hard', function(){
      var earl = new Renter('earl', 24, 'male', 'spartan');

      while(!earl.isEvicted){
        earl.party();
      }
      expect(earl.isEvicted).to.equal(true);
      
    });
    });



});
