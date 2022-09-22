// Definitions
const sPrice = 'Shipping Price'
let storageShip = Number(localStorage.getItem(sPrice))
let subtotal = 0;
if (localStorage.getItem(sPrice)){
    areaPrice = storageShip
} else {
    areaPrice = 0;
}

// defines the price for the shipping areas
function areaSelection(event) {
    if (event.currentTarget.id == 0) {
        areaPrice=0
        localStorage.setItem(sPrice, 0)
    } else if (event.currentTarget.id == 1) {
        areaPrice=300
        localStorage.setItem(sPrice, 300)
    } else if (event.currentTarget.id == 2) {
        areaPrice=800
        localStorage.setItem(sPrice, 800)
    } else if (event.currentTarget.id == 3) {
        areaPrice=1200
        localStorage.setItem(sPrice, 1200)
    }
    let storageShip = localStorage.getItem(sPrice)
    shippingPrice.innerText = `Shipping Price: $${storageShip}` 
    finalPrice()
}

// creates the display for the cart
function cartDisplay() {
    for (let i=0;i<localStorage.length;i++){

        const key = localStorage.key(i);

        if (!isNaN(key)){

            let quantity = localStorage.getItem(key) // this is the value (qty) of the item on localStorage
            
            subtotal = subtotal + (inventory[key-1].price*quantity) // adds the price
    
            let card = document.createElement('div');
                card.classList.add(`cartCard`);
                card.classList.add(`${key}`);
                card.innerHTML = `<p>${inventory[key-1].pName}</p>
                                  <div id=${key} class="cartPriceArea">
                                    <div data-id=${key} class="cartButtons">
                                        <i data-action="-" class="fa-solid fa-circle-minus addSubst"></i>
                                        <p id="item${key}">${quantity}</p>
                                        <i data-action="+" class="fa-solid fa-circle-plus addSubst"></i>
                                    </div>
                                    <p id="price${key}">$${(inventory[key-1].price)*quantity}</p>
                                  </div>
                                   `;
                 document.getElementById('cardsAreaContainer').appendChild(card)
        }
        
    }
}

function emptyCart(){
    cart.emptyCart();
    document.getElementById('cardsAreaContainer').innerHTML = '';
    subtotal = 0;
    finalSubtotal()
    finalPrice()
}

// defines the display of area shipping
function shippingDisplay() {
    let shippingPrice = document.getElementById('shippingPrice')
    shippingPrice.innerText = `Shipping Price: $${areaPrice}` 
}
// defines the display of subtotal
function finalSubtotal() {
    let finalSubtotal = document.getElementById('subtotalPrice')
    finalSubtotal.innerText = `Product Subtotal: $${subtotal}`
}
// defines the display of final price
function finalPrice() {
    priceFinal = subtotal + areaPrice;
    let finalPrice = document.getElementById('finalPrice')
    finalPrice.innerText = `Final Price: $${priceFinal}` 
}

function savePurchase() {
    localStorage.setItem('Final Price', priceFinal)
}
    
// these execute at the start and create the entire diplay
cartDisplay()
shippingDisplay()
finalSubtotal()
finalPrice()


// these are the logic behind the add/substract from the cart
let addSubstButtons = document.querySelectorAll('.addSubst')
for (button of addSubstButtons){
    button.addEventListener('click', function(event){        
        // this gets the key from storage
        let itemID = event.currentTarget.parentNode.parentNode.id
            console.log('The item ID: ', itemID)
        // this gets the operation
        let itemAction = event.currentTarget.getAttribute('data-action')
            // console.log(event.currentTarget.getAttribute('data-action'))
            // console.log(itemAction)
        // this method is the logic to add or substract
        cart.modCart(itemID,itemAction)
        
        // this gets the new value(qty) for the key(item id) 
        let newQuantity = localStorage.getItem(itemID) 
            console.log('The new Quantity: ',newQuantity)
        
        let price = inventory[itemID-1].price
        
        if (itemAction === '+'){
            subtotal = subtotal + price
            // console.log('New Subtotal: ',subtotal)
        } else if (itemAction === '-') {
            subtotal = subtotal - price
            // console.log('New Subtotal: ',subtotal)
        }

        // this gets the id from the quantity display
        let qtyDisplay = document.getElementById(`item${itemID}`)
        qtyDisplay.innerText = `${newQuantity}`

        // this displays the item price
        let priceDisplay = document.getElementById(`price${itemID}`)
        priceDisplay.innerText = `$${newQuantity * inventory[itemID-1].price}`

        // logica para quitar el item cuando la qty es 0
        if (newQuantity<1){
            localStorage.removeItem(itemID)
            location.reload()
        }

        //  logica para que no sume items por encima del stock
        if (newQuantity > inventory[itemID-1].quantity){
            // redefines the item quantity on the cart
            newQuantity = inventory[itemID-1].quantity

            // redefines the subtotal
            subtotal = subtotal - price

            // redefines the qtyDisplay
            qtyDisplay.innerText = `${newQuantity}`

            // redefines the priceDisplay
            priceDisplay.innerText = `$${newQuantity * inventory[itemID-1].price}`

            // redefines the item in storage at the limit
            localStorage.setItem(itemID, newQuantity)
            console.log('limit')
        }

        // these displays the prices and subtotals
        shippingDisplay()
        finalSubtotal()
        finalPrice()
    })
}



