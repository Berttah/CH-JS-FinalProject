// this constructor is used to make the items on the store
class Product {
    constructor(name,id,price,quantity) {
        this.name = name
        this.id = id
        this.price = price
        this.quantity = quantity
    }
    checkStock(orderQty) {
        console.log(this.quantity)
        console.log(orderQty)
        // this cycle checks for an initial stock and if the user order is valid
        if (this.quantity > 0 && this.quantity - orderQty >= 0) {
            console.log(`Is there stock of ${this.name}? Yes, ${this.quantity}`)
            return true
        } else {
            console.log(`There is no stock of ${this.name}`)
            return false
        }       
    }
}
