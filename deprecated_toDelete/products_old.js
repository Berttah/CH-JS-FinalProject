// const item = new Product (name, id, price, qty, userOrder)

const p1 = new Product('Product 1','p1', 10, 1, 1)
add2Inventory(p1)
const p2 = new Product('Product 2','p2', 20, 0, 0)
add2Inventory(p2)
const p3 = new Product('Product 3','p3', 30, 3, 4)
add2Inventory(p3)
const p4 = new Product('Product 4','p4', 40, 4, 2)
add2Inventory(p4)
const p5 = new Product('Product 5','p5', 50, 10, 3)
add2Inventory(p5)
console.table(inventory)

p1.checkStock()
p2.checkStock()
p3.checkStock()
p4.checkStock()
p5.checkStock()

add2Cart(cartArray,p5)
add2Cart(cartArray,p3)
add2Cart(cartArray,p4)

const itemDeliveryTest1 = new itemShipping(false,0)
const itemDeliveryTest2 = new itemShipping(true,0)

// itemDeliveryTest2.deliveryPrice()

subtotalPrice()
finalPrice()

console.log(cartArray)
checkout(cartArray)
console.log(cartArray)