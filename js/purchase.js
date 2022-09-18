// this creates the cards for the purchased items
function purchaseDisplay() {
    for (let i=0;i<localStorage.length;i++){
    
            const key = localStorage.key(i);
            quantity = localStorage.getItem(key)
    
            if (!isNaN(key)){
                let cardPurchase = document.createElement('div');
                cardPurchase.classList.add('cartCard')
                cardPurchase.classList.add('cartCPurchase')
                cardPurchase.innerHTML = `<p>${inventory[key-1].pName}</p>
                                            <div class="cartPriceArea">
                                                <div class="cartButtons">
                                                    <p>${quantity}</p>
                                                </div>
                                            <p>$${(inventory[key-1].price)*quantity}</p>`;
                document.getElementById('cACPurchase').appendChild(cardPurchase)
    
            }
    }
}


// These are to display a message based by the delivery option
let selectedShipping = localStorage.getItem('Shipping Price')
let deliveryMsg = document.getElementById('deliveryMsg')

if (selectedShipping == 0) {
    deliveryMsg.innerText = 'Since you selected for no delivery, your purchase will be at the local waiting for you to pick up.'
} else if (selectedShipping == 300) {
    deliveryMsg.innerText = 'Since you selected for a close delivery, your purchase will arrive to the area between 1 to 2 working days.'
} else if (selectedShipping == 800) {
    deliveryMsg.innerText = 'Since you selected for a near delivery, your purchase will arrive to the area between 5 to 10 working days.'
} else if (selectedShipping == 1200) {
    deliveryMsg.innerText = 'Since you selected for a far delivery, your purchase will arrive to the area between 10 to 15 working days.'
}


// These are to display a message based in the user data
let userDataPurchase = JSON.parse(localStorage.getItem('User Data'))
console.log(userDataPurchase)
let userMsg = document.getElementById('userMsg')
userMsg.innerText = `We thank you ${userDataPurchase['first_name']} ${userDataPurchase['last_name']} for your purchase. `


// This one displays the final price
let finalPricePurchase = localStorage.getItem('Final Price')
let purchasePrice = document.getElementById('finalPricePurchase')
purchasePrice.innerText = `Final Price: $${finalPricePurchase}`

///////////////////////////////////////////////////////////////////
let orderID = Math.floor(Math.random()*((999999999-0)+1));
let orderIdDisplay = document.getElementById('orderID')
orderIdDisplay.innerText = `Order ID: ${orderID}` 
///////////////////////////////////////////////////////////////////
purchaseDisplay()