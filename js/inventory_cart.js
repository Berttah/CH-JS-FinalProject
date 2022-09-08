let inventory = [
    { 
        pName: 'product 1',
        id: 1, 
        price: 10,
        quantity: 6 
    },
    { 
        pName: 'product 2',
        id: 2, 
        price: 10,
        quantity: 0 
    },
    { 
        pName: 'product 3',
        id: 3, 
        price: 10,
        quantity: 7 
    },
    { 
        pName: 'product 4',
        id: 4, 
        price: 10,
        quantity: 2 
    },
    { 
        pName: 'product 5',
        id: 5, 
        price: 10,
        quantity: 8 
    },
    { 
        pName: 'product 6',
        id: 6, 
        price: 10,
        quantity: 0 
    },
    { 
        pName: 'product 7',
        id: 7, 
        price: 10,
        quantity: 9 
    },
    { 
        pName: 'product 8',
        id: 8, 
        price: 10,
        quantity: 3 
    },
    { 
        pName: 'product 9',
        id: 9, 
        price: 10,
        quantity: 0 
    },
    { 
        pName: 'product 10',
        id: 10, 
        price: 10,
        quantity: 1 
    },
];

// console.table(inventory)

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
        if (prod.quantity >= qty){
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
        console.log('The products on the cart are:')
        this.products.forEach(prod => {
            console.log(
                `Name: ${prod.pName}`,
                `ID: ${prod.id}`,
                `Price: ${prod.price}`,
                `Quantity: ${this.quantity}`
                )
        })
    
    // prod.quantity -= orderQty -> this will be useful on a method when at the end of the purchase the stock in inventory of the items will decrease by the ammount bought
    }
}
// these state the cart & inventory that will act as the arrays
let cart = new Cart()

