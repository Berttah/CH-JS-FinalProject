let cartArray = [];
let areaInput = '';

class Product {
    constructor(name,id,price,quantity,userOrder) {
        this.name = name
        this.id = id
        this.price = price
        this.quantity = quantity
        this.userOrder = userOrder
    }

    stock() {
        // this function checks for an initial stock
        // then checks again to validate that there are enough items
        while (this.quantity > 0) {
            if (this.quantity - this.userOrder >= 0) {
                return true
            } else {
                return false
            }
        } if (this.quantity <= 0) {
            return false
        }       
    }
    checkStock() {
        console.log(`Is there stock of ${this.name}? ${this.stock()}`)
        return this.stock
    }

    add2Cart() {
        // here would go the function to push the object into the cart array
        // this function would use a "while" loop to check if the checkStock function is true or false, depending on the result it would let or not add the item to the cart
    }
    delFromCart() {
        // here would go the function to pop the object from the cart array
    }
}

class itemShipping{
    constructor(shipping,area) {
        this.shipping = shipping
        this.area = area
    }

    deliveryPrice() {
        // el prompt simula la asignacion de area
        areaInput = Number(prompt('Elige un area (0/1/2)'));
        if (this.shipping == true) {
            //el ciclo asigna el precio
            if (areaInput == 0) {
                return console.log(100)
            } else if (areaInput == 1) {
                return console.log(200)
            } else if (areaInput == 2) {
                return console.log(300)
            } else {
                return console.log('error')
            }
        } else {
            return console.log('no delivery')
        }
    }
}


function finalPrice() {
    // this function would add the prices of each item and multiply it to get the price with IVA as well as add the area delivery cost
}