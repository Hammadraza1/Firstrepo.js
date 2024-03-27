let carData = require('../problem1')
let inventoryData = require('../inventory')

let result = carData(inventoryData,33)
// "Car 33 is a *car year goes here* *car make goes here* *car model goes here*"
// {"id":33,"car_make":"Jeep","car_model":"Wrangler","car_year":2011},
console.log(`Car 33 is a ${result.car_year} ${result.car_make} ${result.car_model}`)
