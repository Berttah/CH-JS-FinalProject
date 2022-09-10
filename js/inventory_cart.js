let inventory = [
    { 
        pName: 'The Lightning Thief',
        id: 1, 
        price: 1331.50,
        quantity: 6 
    },
    { 
        pName: 'Sea of Monsters',
        id: 2, 
        price: 1183.00,
        quantity: 0 
    },
    { 
        pName: "Titan's Curse",
        id: 3, 
        price: 1183.00,
        quantity: 7 
    },
    { 
        pName: 'Battle of the Labyrinth',
        id: 4, 
        price: 1240.50,
        quantity: 2 
    },
    { 
        pName: 'The Last Olympian',
        id: 5, 
        price: 1323.50,
        quantity: 8 
    },
    { 
        pName: 'The Lost Hero',
        id: 6, 
        price: 2639.00,
        quantity: 0 
    },
    { 
        pName: 'The Son of Neptune',
        id: 7, 
        price: 2030.00,
        quantity: 9 
    },
    { 
        pName: 'The Mark of Athena',
        id: 8, 
        price: 1989.00,
        quantity: 3 
    },
    { 
        pName: 'The House of Hades',
        id: 9, 
        price: 2107.50,
        quantity: 0 
    },
    { 
        pName: 'The Blood of Olympus',
        id: 10, 
        price: 2401.00,
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
    addProduct(prod){
        let orderQty = Number(prompt('How many do you want to buy?'))
        // this checks if the quantity is valid
        if (prod.quantity >= orderQty){
            // then pushes the item & quantity to the cart
            this.products.push(prod)
            prod.orderQty = orderQty
            prod.quantity = prod.quantity - orderQty
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
                `Quantity: ${prod.quantity}`,
                `User Order: ${prod.orderQty}`
                )
        })
    
    // prod.quantity -= orderQty -> this will be useful on a method when at the end of the purchase the stock in inventory of the items will decrease by the ammount bought
    }
}
// these state the cart & inventory that will act as the arrays
let cart = new Cart()
