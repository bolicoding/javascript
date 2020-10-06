//class ArrayPopper {
  //constructor(arr) {
    //this.arr = arr;
    //this.atBeginning = true;
  //}

  //togglePopper() {
    //this.atBeginning = !this.atBeginning;
    //return this.atBeginning ? this.arr.pop() : this.arr.shift();
  //}
//}

//const ap = new ArrayPopper([1, 2, 3, 4, 5]);

//ap.togglePopper()
//ap.togglePopper()
//ap.togglePopper()
//ap.togglePopper()
//ap.togglePopper()
//
//const strap = new ArrayPopper(["hi", "there", "from", "js"]);
//
//strap.togglePopper();
//strap.togglePopper();
//strap.togglePopper();
//strap.togglePopper();
//
//var userObj = {
//  email: 'sampl@gmail.com',
//  fullName: 'Boli Bustos'
//}
//
//function dashGreeting() {
//  console.log('hi there, '.concat(userObj.fullName));
//}
//
//dashGreeting();
//console.log(userObj.fullName)
//
//
//var greeting = function() {
//  return 'hi there again';
//};
//
//console.log(greeting())
//
//var age = 3;
//
//if (age <= 10) {
//  var buildMenu = function(){
//    return 'kid\'s menu';
//  };
//  
//  console.log(buildMenu());
//}
//
// function fullName(firstName, lastName) {
//   return lastName.toUpperCase() + "," + firstName.toUpperCase();
// }
//
//fullName('Boli', 'Bustos');
//
//document.getElementsByClassName('b1');
//
//function battingAverage() {
//  var hits = 100;
//  var atBats = 300;
//  
//  return {
//    getCurrentAverage: function () {
//      return(hits/atBats);
//    },
//    updateHitsAndAtBats: function (hit, atBat) {
//      hits += hit;
//      atBats += atBat;
//    }
//  }
//}
//
//var altuve = battingAverage();
//console.log(altuve.getCurrentAverage());
//altuve.updateHitsAndAtBats(0, 20);
//console.log(altuve.getCurrentAverage());
//
//
//var guide = {
  //title: 'guide to prog',
  //content: 'cont will go here',
  //visibleToUser: function (viewingUserRole) {
  //  if (viewingUserRole === 'paid') {
    //  return true;
  //  } else {
    //  return false;
  //  }
//  },
  //renderContent: function(userRole) {
    //if(this.visibleToUser(userRole)) {
      //console.log(this.title + " - " + this.content);
    //} else {
      //this.content = '';
      //console.log(this.title + " - " + this.content)
    //}
  //}
//}

//user = { role: 'paid'};
//guide.renderContent(user.role);



//const lyrics = 'never gunna give u up';
//console.log(`I'm ${lyrics}`);




//let page = 'Home';
//console.log(`class=${ page === 'Home' ? 'master-layout : 'secondary-layout }`)

//function fullName (fName, lName) {
  //console.log(`${fName} ${lName}`);
//}
//fullName('Boli', 'Mon')

//fullName = function (fName, lName) {
  //console.log(`${fName} ${lName}`);
//}
//fullName('Boli', 'Mon')

//helloWorld = () => { console.log('Hi there'); }
//helloWorld();




//firstName = fName => {  //console.log(fName.toUpperCase()); }
//firstName('Boli');





//fullName = (fName, lName) => {
//  console.log(`${fName} ${lName}`);
//}
//fullName('Boli', 'Mon');

const entreeMenu = prompt('We have pizza or calzones. Which would you like today?', answer);

if (answer = pizza) {
  
}

entreeMenu()


// this with arrow functions
function Invoice(subTotal) {
  this.taxRate = 0.06;
  this.subTotal = subTotal;
  
  this.total = setInterval(()  => {
    console.log((this.taxRate * this.subTotal) + this.subTotal);
    //console.log(this);
  }, 2000);
}

const inv = new Invoice(200);

// how to swap variables
let playerOne = 'Ash';
let playerTwo = 'Mili';

[playerOne, playerTwo] = [playerTwo, playerOne];
//let tempPlayerOne = playerOne;
//let tempPlayerTwo = playerTwo;

//playerOne = tempPlayerTwo;
//playerTwo = tempPlayerOne;

console.log(`Player One: ${playerOne}`, `Player Two: ${playerTwo}`)

//how to pass objects as function args
const user = {
  name: 'Ash',
  email: 'ash@gmail.com'
}

const renderUser = ({ name, email }) => {
  console.log(`${name}: ${email}`);
}

renderUser(user);

//default obj to java func

const user = {
  name: 'Ash',
  email: 'ash@gmail.com'
}

const renderUser = ({ name, email }) => {
  console.log(`${name}: ${email}`);
}

renderUser(user);

//metadata
const blog = {
  title: 'my great post',
  summary: 'summary of post'
}

const openGraphMetadata = ({ title, summary = "A DailySmarty Post" }) => {
  console.log(`
    og-title=${title}
    og-description=${summary}
`);
}

openGraphMetadata(blog)


//combining arrays with spread
let shoppingCart = [345, 567, 789, 432];
let newItems = [98, 67];

shoppingCart.push(...newItems);
console.log(shoppingCart);

//combining arrays
let shoppingCart = [345, 567, 789, 432];
let newItems = [98, 67];

shoppingCart.push(newItems);
console.log(shoppingCart);

// create copy and make changes to the copy not original
const shoppingCart = [345, 567, 789, 432];
const updatedCart = shoppingCart.slice();
updatedCart.push(5);
console.log(shoppingCart);
console.log(updatedCart);


//with spread operator
const shoppingCart = [345, 567, 789, 432];
const updatedCart = [...shoppingCart];
updatedCart.push(5);
console.log(shoppingCart);
console.log(updatedCart);


// no numbers
const orderTotals = [1, 5, 1, 10, 2, 3];
console.log(Math.max(...orderTotals));


//how to deconstruct object
const { starter, closer, ...keepers } = {
  starter: 'Werner',
  closer: 'Havertz',
  keeper_1: 'Mendy',
  keeper_2: 'Kepa'
}

console.log(starter);
console.log(closer);
console.log(keepers);
