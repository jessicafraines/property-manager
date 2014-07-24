'use strict';


var Apartment = require('./apartment');

function Room(name, width, length){
  this.name   = name;
  this.width  = parseInt(width);
  this.length = parseInt(length);
}

Room.prototype.area = function(){
  return this.width * this.length;
};

Room.prototype.cost = function(){
  return this.area() * 5;
};


module.exports = Room;
