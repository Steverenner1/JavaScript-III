/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: Defults to window binding if none of the other rules apply, the value of 'this' will be in the window object.
* 2. Implicit binding: The object before a dot is 'this' when a function is called after a dot.
* 3. New binding: Using constructor functions, object created and returned by a constructor function.
* 4. Explicit binding: When 'call' or 'apply' is used this explicitly defines 'this'.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this.name);
    return name;
};
sayName("Steve");

// Principle 2

// code example for Implicit Binding

let myFavorites = {
    football: 'Chargers',
    city: 'San Diego',
    food: 'lasagna',
    favorite: function(){
        console.log(this.city);
    }
};

// Principle 3
// object creator
// code example for New Binding

function HouseHold(houseObj) {
    this.mop = 'MrClean ';
    this.houseObj = 'Windex';
    this.home = function() {
      console.log(this.mop + this.houseObj);
      console.log(this);
    }
  }
  
  const broom = new HouseHold('Clean');
  const sponge = new HouseHold('Veryclean');
  
  broom.home();
  sponge.home();

  // Principle 4
// code example for Explicit Binding

broom.home.call('Veryclean'); sponge.home.apply('Clean');

