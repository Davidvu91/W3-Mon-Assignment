


// Assignment 2 - Object Shorthand

// 2.1

// const name = 'Parrot'
// const colors = ['Red', 'Green', 'Blue', 'Yellow']

// const bird = {
//   name,
//   colors
// };

// console.log(bird)

// //2.2 

// const name = 'Parrot';
// const colors = ['Red', 'Green', 'Blue', 'Yellow'];
// const talons = true;

// const bird = {
//   name,
//   colors,
//   talons
// }

// console.log(bird)

// //2.3 

// const capital = 'Hanoi'
// const continent = 'Asia'

// const vietnam = {
//   capital, continent
// };

// console.log(vietnam)

// //2.4 
// const wheelsCount = 4
// const doorsCount = 4
// const color = 'black'

// const car = {
//   wheelsCount, doorsCount, color
// };

// console.log(car);

//Assignment 3 - Destructuring 

//3.1
function getAverage(obj) {

  let {x, y, z} = obj;

  return Math.floor((x + y + z) / 3.0); // CHANGE ME
}
console.log(getAverage({ x: 3.6, y: 7.8, z: 4.3 }))

//3.2
  function getAddress(haha) {

    let {city, country, address: { street}} = haha;
    
    
    return (city === "HCMC") && (country === "Vietnam") && (street === "Ton Dan"); // CHANGE ME
  }
  
  console.log(  getAddress(
    {
        city: "HCMC",
        country: "Vietnam",
        address: {
          number: 12,
          street: "Ton Dan",
          district: "4",
        },
      }
  )
)

 //3.3
function objectifyElements(arr) {


  let [ , , , , fourth,] = arr 

  return {fourth}; 
}

console.log(objectifyElements([0, 1, 2, 3, 4, 5, 6, 7, 8]).fourth === 4)

//3.4 

function getFoodItems() {
  const food = [
    ["carrots", "beans", "peas", "lettuce"],
    ["apples", "mangos", "oranges"],
    ["cookies", "cake", "pizza", "chocolate"],
  ];

  const [[], [ , haha], []] = food 
  console.log(haha);

 
  return {haha}
}
console.log(getFoodItems().haha === 'mangos')

//3.5


function getHistoricPrices(index) {

  const [bingo] = index;
  console.log(bingo)
  return bingo;
}

console.log(getHistoricPrices([true, false, true]))
