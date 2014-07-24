/*jshint expr:true*/
/*global describe, it*/
'use strict';

var expect = require('chai').expect;
var Apartment = require('../../app/models/apartment');
var Room = require('../../app/models/room');


describe('Apartment', function(){
  //before and beforeEach blocks go here
  describe('constructor', function(){
    it('should create a new apartment object', function(){
      var a1 = new Apartment('A1');

      expect(a1).to.be.instanceof(Apartment);
      expect(a1.rooms.length).to.equal(0);
      expect(a1.renters.length).to.equal(0);
      expect(a1.name).to.equal('A1');
    });
  });


  describe('#area', function(){
    it('should display the total area of all rooms in a unit', function(){
      var a1 = new Apartment('A1');

      debugger;
      console.log(a1);
      a1.rooms.push( new Room('bedroom', 10, 20), new Room('kitchen', 20, 20), new Room('bedroom', 20, 30), new Room('bathroom', 10, 10));
      console.log(a1.rooms.length);
      expect(a1.area()).to.be.equal(1300);

    });
  });





});
