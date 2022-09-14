let subtotal = 0;
let areaPrice = 0;

function newPrices() {
    shippingPrice.innerText = `Shipping Price: $${areaPrice}` 
    finalSubtotal.innerText = `Product Subtotal: $${subtotal}`
    priceFinal = subtotal + areaPrice
    finalPrice.innerText = `Final Price: $${priceFinal}` 
}

function areaSelection(event) {
    if (event.currentTarget.id == 0) {
        areaPrice=0
    } else if (event.currentTarget.id == 1) {
        areaPrice=300
    } else if (event.currentTarget.id == 2) {
        areaPrice=800
    } else if (event.currentTarget.id == 3) {
        areaPrice=1200
    }
    newPrices()
}

// will change inventory for cart and quantity for orderQty
function cartDisplay() {
    for (item of inventory) {
        if (item.quantity > 0){
            subtotal = subtotal + (item.price*item.quantity) // adds the price
            let card = document.createElement('div');
            card.classList.add('cartCard')
            card.innerHTML = `<p>${item.pName}</p>
                              <div class="cartPriceArea">
                                <div class="cartButtons">
                                    <i class="fa-solid fa-circle-minus addSubst"></i>
                                    <p>${item.quantity}</p>
                                    <i class="fa-solid fa-circle-plus addSubst"></i>
                                </div>
                              <p>$${(item.price)*item.quantity}</p>`;
            document.getElementById('cardsAreaContainer').appendChild(card)
        }
    }
}

cartDisplay()

let shippingPrice = document.getElementById('shippingPrice')
shippingPrice.innerText = `Shipping Price: $${areaPrice}` 

let finalSubtotal = document.getElementById('subtotalPrice')
finalSubtotal.innerText = `Product Subtotal: $${subtotal}`

let priceFinal = subtotal;

let finalPrice = document.getElementById('finalPrice')
finalPrice.innerText = `Final Price: $${priceFinal}` 
