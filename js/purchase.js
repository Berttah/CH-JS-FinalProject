let subtotal = 0;
let areaPrice = 0;

// this is only necesary until able to call the cart with localstorage
const purchaseCart = inventory.filter(item => item.quantity > 0) 

for (item of purchaseCart) {                            // here would be cart instead of purchaseCart
    subtotal = subtotal + (item.price*item.quantity)
    let cardPurchase = document.createElement('div');
    cardPurchase.classList.add('cartCard')
    cardPurchase.classList.add('cartCPurchase')
    cardPurchase.innerHTML = `<p>${item.pName}</p>
                                <div class="cartPriceArea">
                                    <div class="cartButtons">
                                        <p>${item.quantity}</p>
                                    </div>
                                <p>$${(item.price)*item.quantity}</p>`;
    document.getElementById('cACPurchase').appendChild(cardPurchase)
}

let orderID = Math.floor(Math.random()*((999999999-0)+1));
let orderIdDisplay = document.getElementById('orderID')
orderIdDisplay.innerText = `Order ID: ${orderID}` 

let priceFinal = subtotal + areaPrice
let finalPricePurchase = document.getElementById('finalPricePurchase')
finalPricePurchase.innerText = `Final Price: $${priceFinal}` 