let subtotal = 0
console.log(subtotal)
let areaInput = '';
let areaPrice = 0;

class itemShipping{
    constructor(shipping,area) {
        this.shipping = shipping
        this.area = area
    }

    deliveryPrice() {
        // el prompt simula la asignacion de area
        areaInput = Number(prompt('Elige un area (No: 0 / A1: 1/ A2: 2 / A3: 3)'));
        if (this.shipping == true) {
            //the cycle asigns the shipping price
            if (areaInput == 0) {
                console.log('The shipping price is $0')
                return areaPrice = 0
            } else if (areaInput == 1) {
                console.log('The shipping price is $100')
                return areaPrice = 100
            } else if (areaInput == 2) {
                console.log('The shipping price is $200')
                return areaPrice = 200
            } else if (areaInput == 3) {
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

const itemDeliveryTest2 = new itemShipping(true,0)
itemDeliveryTest2.deliveryPrice()

for (item of inventory) {
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

let finalSubtotal = document.getElementById('subtotalPrice')
finalSubtotal.innerText = `Product Subtotal: $${subtotal}` 

console.log(subtotal)

let shippingPrice = document.getElementById('shippingPrice')
shippingPrice.innerText = `Shipping Price: $${areaPrice}` 

let priceFinal = subtotal + areaPrice
console.log(priceFinal)

let finalPrice = document.getElementById('finalPrice')
finalPrice.innerText = `Final Price: $${priceFinal}` 