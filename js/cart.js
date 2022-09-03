// this constant equals to the number of items in the inventory
const PRODUCT_QUANTITY = 10
class Cart{
    constructor(){
        // the cart starts as a empty array
        this.products = []
    }
    // this method serves to add the product and the quantity the user wanted
    addProduct(prod, qty){
        // this checks if the quantity is valid
        if (prod.checkStock(qty)){
            // then pushes the item & quantity to the cart
            this.products.push(prod)
            this.quantity = qty
        } else {
            console.log('There is not enough stock');
            return
        }
    }
    // this method shows the items on the cart
    cartShow(){
        // when there are no items
        if (this.products.length < 1) {
            console.log('The Cart is empty')
            return
        }
        // when something was added
        this.products.forEach(prod => {
            console.log(
                `Name: ${prod.name}`,
                `ID: ${prod.id}`,
                `Price: ${prod.price}`,
                `Quantity: ${this.quantity}`
                )
        })
    
    // prod.quantity -= orderQty -> this will be useful on a method when at the end of the purchase the stock in inventory of the items will decrease by the ammount bought
    }
}
// these state the cart & inventory that will act as the arrays
var cart = new Cart()
var inventory = [];

// this cylce creates by iteration up to PRODUCT_QUANTITY the items that will go into the inventory
for (let i=0;i<PRODUCT_QUANTITY;i++){
    const p = new Product(
        `Product ${i}`,
        i,
        Math.floor(Math.random()*(50-0)),
        Math.floor(Math.random()*(100-50)+50),
        )
    inventory.push(p)
}

// console.log('Inventory', inventory)


