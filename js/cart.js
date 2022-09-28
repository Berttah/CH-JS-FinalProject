// this constant equals to the number of items in the inventory
class Cart{
    constructor(){
        // the cart starts as a empty array
        this.products = []
    }
    
    // this method serves to add the product and the quantity the user wanted
    addProduct(prod){
        let orderQty = Number(prompt('How many do you want to buy?'))
        let previousQty = 0;
        
        // checks if the product was already on the cart
        localStorage.getItem(prod.id) && (
            previousQty = Number(localStorage.getItem(prod.id)),
            console.log("previousQty",previousQty),
            console.log("result", previousQty + orderQty)
        )
        if (prod.quantity < orderQty + previousQty) {
            console.log('Not enough stock')
            return
        }
        localStorage.setItem(prod.id, orderQty + previousQty)
    }
    
    // this method shows the items on the cart
    cartShow(){
        // when there are no items
        if (this.products.length < 1) {
            // console.log('The Cart is empty')
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
                )
        })
    };
    
    emptyCart(){
        for (let i=0;i<localStorage.length;i++){
            const key = localStorage.key(i);
            !isNaN(key) && localStorage.removeItem(key)   
        }
    };

    modCart(id,action){
        let qty = localStorage.getItem(id)
        // eval() gets first the quantity then evaluates the action and then applies it to the number 1
        let newQty = eval(`${qty} ${action} 1`)
        localStorage.setItem(id, newQty)
    }

    removeItem(id){
        let item = localStorage.getItem(id)
        localStorage.removeItem(item)
    }
}
// this declares the array that will act as the cart
let cart = new Cart()