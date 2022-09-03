let inventory = [];
let cartArray = [];
let areaInput = '';
let areaPrice = 0;
let itemPrices = 0;

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
        // this function declares if a given item has avaible stock
        console.log(`Is there stock of ${this.name}? ${this.stock()}`)
        return this.stock
    }
}

function add2Inventory(item){
    inventory.push(item)
}

function add2Cart(arr1,arr2) {
    // this function adds/pushes the product to the cart array if there is stock
    if(arr2.stock() == true){
        arr1.push(arr2)
        localStorage.setItem(arr2.name,arr2.price)
        console.log(`The product ${arr2.name} added to the cart`)
    }
    else {
        console.log(`Not enough stock of ${arr2.name} to add into the cart`)
    }
}
function deleteCart() {
    // this function (w/button) clears the cart array
    localStorage.clear()
    for (i=0;i<=cartArray.length;i++){
        cartArray.pop();
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
            //the cycle asigns the shipping price
            if (areaInput == 0) {
                console.log('The shipping price is $100')
                return areaPrice = 100
            } else if (areaInput == 1) {
                console.log('The shipping price is $200')
                return areaPrice = 200
            } else if (areaInput == 2) {
                console.log('The shipping price is $300')
                return areaPrice = 300
            } else {
                return console.log('error')
            }
        } else {
            console.log('no delivery')
            return areaPrice = 0
        }
    }
}

function subtotalPrice() {
    // this function would add the prices of each item and to get the item subtotal
    itemPrices = cartArray.reduce((acc,item) => acc + item.price, 0)
    console.log(`The Subtotal is $${itemPrices}`)
    return itemPrices
}
function finalPrice() {
    // this function would add subtotal and area shipping price, then multiply it to get the price with IVA.
    let price = Math.round((((itemPrices + areaPrice)*1.21))*100)/100
    console.log(`The final price is $${price}`)
}

function checkout(cart){
    // subtracts the amount of items the user wants from their stock
    for (item of cart){
        console.log(`The old stock for ${item.name} is ${item.quantity}`)
        item.quantity = item.quantity - item.userOrder
        console.log(`The new stock for ${item.name} is ${item.quantity}`)
    }
    // then deletes/empties the cart array
    deleteCart()
}

// crear funciones para el formulario de datos del usuario.