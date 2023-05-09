'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    mainIndex = 0,
    starterIndex = 1,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved! 
      ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
      will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Lezzetli bir pasta için gerekenler;
    ${ing1},
    ${ing2},
    ${ing3}`);
  },
  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

// restaurant.orderPizza('mushroom', 'corn', 'olive');
// restaurant.orderPizza('salam');

// spread because on right side of equal =
// const arr = [1, 2, ...[3, 4]];

// Rest, because on left side of equal
// const [a, b, ...others] = [1, 2, 3];
// console.log(a);
// console.log(b);
// console.log(others);

// const [, pasta, , ...othersfood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pasta, othersfood);

//objects
// const {fri, ...restHours} = restaurant.openingHours;
// console.log(restHours);

// function
// const add = function (...numbers) {
//   console.log(numbers);
// };

// add(1, 2, 3, 5);
// add(2, 3);
// add(2, 124, -11, 123342, 7, 8);

// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     // for of döngü kalıbı
//     result += number;
//   }
//   return result;
// }

// const x = [1, 2, 3, 5];
// console.log(sum(...x));

// const icindekiler = [
//   prompt('Lütfen 1.malzemeyi giriniz:'),
//   prompt('Lütfen ikinci malzemeyi giriniz:'),
//   prompt('Lütfen 3.malzemeyi giriniz:'),
// ];
// restaurant.orderPasta(icindekiler[0], icindekiler[1], icindekiler[2]);
// restaurant.orderPasta(...icindekiler);

// const arr = [3, 4, 5];

// const goodNewArr = [1, 2, ...arr];
// console.log(goodNewArr);
// console.log(...goodNewArr);

// const newMenu = [...restaurant.mainMenu, 'Lahmacun'];
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // join Array
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// İterables: arrays, string, maps and sets NOT Objects

// const firstName = 'Erhan';

// const newName = [...firstName, ' ', 'Sanli'];
// console.log(newName);

// // console.log(`${...firstName} Sanli` );

// // Objects
// const newRestaurat = {
//   foundYear: '1988',
//   founded: 'Erhan',
//   ...restaurant,
// };

// console.log(newRestaurat);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Kofteci Yusuf';

// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// Use ANY data types - Return ANY data Types - Short-Circuiting
// console.log(3 || 'Erhan');
// console.log('' || 'Erhan');
// console.log(true || 0);
// console.log(undefined || null);
// console.log('' || null || 0 || undefined || 'Hello' || 22);

// //restaurant.numGuess = 23;
// const Guess1 = restaurant.numGuess ? restaurant.numGuess : 10;
// console.log(Guess1);

// console.log('Erhan' && 6 && 'Sanli');
// console.log(22 && true && '' && 'erhan');

// // Pratical Example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spanach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spanach');

// //restaurant.numGuess = 0;
// const Guess2 = restaurant.numGuess || 10;
// console.log(Guess2);

//Nullish : null and undefined NOT (0 and "")
// restaurant.numGuess = undefined;
// const Guess3 = restaurant.numGuess ?? 10;
// console.log(Guess3);

// const rest1 = {
//   name: 'erhan',
//   //number: 23,
//   number: 0,
// };

// const rest2 = {
//   name: 'Pizza Lazza',
//   owner: 'Fatih',
// };

// OR
// rest1.number = rest1.number || 10;
// rest2.number = rest2.number || 10;
// console.log(rest1, rest2);

// NULLİSH
// rest1.number ??= 10;
// rest2.number ??= 10;
// console.log(rest1, rest2);

// AND
// rest1.owner = rest1.owner && 'Anonim';
// rest2.owner = rest2.owner && 'Anonim';
// console.log(rest1, rest2);

// rest1.owner &&= 'Anonim';
// rest2.owner &&= 'Anonim';
// console.log(rest1, rest2);

// for (const item of Object.entries(restaurant)) {
//   console.log(item);
// }
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
