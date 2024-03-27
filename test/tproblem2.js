let lastCarData = require("../problem2")
let inventoryData = require("../inventory")

let result = lastCarData(inventoryData)
// "Last car is a *car make goes here* *car model goes here*"

console.log(`Last car is a ${result.car_make} ${result.car_model}`)