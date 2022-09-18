// this will be used to find a particular item in the inventory
// probably a highlight & change of color of the border

document.getElementById('searchInput').addEventListener('keypress', function(e) {
    // check if the element is an input element and the key is enter
    if (e.target.nodeName === "INPUT" && e.key === 'Enter') {
        let result = inventory.find(item => item.pName === e.target.value)
        if (result !== undefined) {
            alert(`We have ${result.quantity} units of ${result.pName}`)
        } else {
            alert("We don't have that one, ask for one that is displayed instead")
        }
    }
  }
);

// this will be used to display in a different way items that have no stock
// probable by granting a different stock label
function displayStock(){
    let inventoryStock = inventory.filter(item => item.quantity > 0)
    let inventoryNoStock = inventory.filter(item => item.quantity == 0)
    // console.table(`Our items on stock are:`, inventoryStock)
    // console.table(`Our items not on stock are:`, inventoryNoStock)
}
displayStock()