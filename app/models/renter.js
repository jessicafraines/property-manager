'use strict';

function Renter(name, age, gender, profession){
  this.name       = name;
  this.age        = age;
  this.gender     = gender;
  this.profession = profession;
  this.cash       = Math.floor(Math.random() * 4901  + 100);
  this.isEvicted  = false;
}

Renter.prototype.work = function(){
  switch(this.profession){
    case 'movie star':
      this.cash += Math.floor(Math.random() * 7001 + 3000);
      break;
    case 'coder':
      this.cash += Math.floor(Math.random() * 6001 + 1000);
      break;
    case 'waiter':
      this.cash += Math.floor(Math.random() * 201 + 50);
      break;
    case 'social worker':
      this.cash += Math.floor(Math.random() * 601 + 150);
      break;
    case 'spartan':
      this.cash += Math.floor(Math.random() * 201 + 50);
      break;
  }
};

Renter.prototype.payRent = function(amount){
  if (amount > this.cash){
    this.isEvicted = true;
  }else{
    this.cash -= amount;
  }
};

Renter.prototype.party = function(){
  if(Math.floor(Math.random() * 9 + 1) > 8){
    this.isEvicted = true;
  }
};

module.exports = Renter;
