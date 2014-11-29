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
      var earl2 = new Renter('earl', 24, 'male', 'movie star');
      var earl3 = new Renter('earl', 24, 'male', 'waiter');
      var earl4 = new Renter('earl', 24, 'male', 'coder');
      var earl5 = new Renter('earl', 24, 'male', 'social worker');
      
      earl.cash = 0;
      earl2.cash = 0;
      earl3.cash = 0;
      earl4.cash = 0;
      earl5.cash = 0;
      
      
      earl.work();
      earl2.work();
      earl3.work();
      earl4.work();
      earl5.work();

      expect(earl.cash).to.be.within(50, 250);
      expect(earl2.cash).to.be.within(3000, 10000);
      expect(earl3.cash).to.be.within(50, 250);
      expect(earl4.cash).to.be.within(1000, 7000);
      expect(earl5.cash).to.be.within(150, 750);
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
