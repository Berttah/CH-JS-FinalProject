// this will be used to find a particular item in the inventory
// probably a highlight & change of color of the border
{/*
let lookingFor = prompt('Is there a book you are looking for?').toLowerCase()
let result = inventory.find(item => item.pName === lookingFor)
if (result !== undefined) {
    console.log('Book Stock Details:', result)
} else {
    console.log("We don't have that one, reload and ask for Product 1 instead")
}
*/}

// this will be used to display in a different way items that have no stock
// probable by granting a different stock label
function displayStock(){
    let inventoryStock = inventory.filter(item => item.quantity > 0)
    let inventoryNoStock = inventory.filter(item => item.quantity == 0)
    console.table(`Our items on stock are:`, inventoryStock)
    console.table(`Our items not on stock are:`, inventoryNoStock)
}
displayStock()