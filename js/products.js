// this constructor is used to make the items on the store
class Product {
    constructor(pName,id,price,quantity) {
        this.pName = pName
        this.id = id
        this.price = price
        this.quantity = quantity
    }
}


let inventory = {}

function loadData(callback) {
    fetch("../inventory.json")
    .then(res => res.json())
    .then(data => {inventory = data
        // console.log(inventory)
        callback()
    })
}

