// let car_data = require()

function carDealer(inventory,id){
    // if(inventory == null || !Array.isArray(inventory) || typeof id !== 'number') {
    //     return {
    //         car_model: null,
    //         car_make: null,
    //         car_year: null
    //     };
    // }
    for(let i = 0; i < inventory.length; i++){
        if(inventory[i].id == id){
            return inventory[i]
        }
    }
}
module.exports = carDealer;