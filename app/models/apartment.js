'use strict';
/* Step 1
 * Make your constructor for apartment with 3 variables: unit, room = [];, renter = []
 */
function Apartment(name){
  this.name    = name;
  this.rooms   = [];
  this.renters = [];
}


/* #area
 *Using a for loop, look through this.rooms and create a sum variable.
 Example: this.rooms[i].area += sum
 */




/* #cost
 * Using a for loop, look through this.rooms and create a sum variable.
 * Exmaple: this.rooms[i].cost += sum
 */



/* #bedrooms
 * Using a for loop, look through this.rooms and check to see if the room is a 'bedroom'
 * If it is, create a variable to increment the room count
 * Exmaple: if(this.room[i].name === 'bedroom') then roomCount += 1
 */



/* #isAvailable
 * This is the same concept as the # bedrooms function, so you can copy it from above
 * and modify it. 
 * Exmaple: if(roomCount !== this.renters.length), the room is available
 */


/* #purgeEvicted
 * Using a for loop, loop through this.renters and check to see if they are evicted
 * Example: if(this.renter[i].isEvicted) then this.renters.splice(i, 1);
 */



/* #collectRent
 * Using a for loop, loop through this.rooms and check to see if bedroom
 * if it is a bedroom we need add to a sum variable this.rooms[i].cost
 *Exmaple: if(this.rooms[i].name === 'bedroom) then add this.room[i].cost() to
 a sum variable
 */



/* #save
 * Will have to look at previous day's work to save to database
*/

module.exports = Apartment;
