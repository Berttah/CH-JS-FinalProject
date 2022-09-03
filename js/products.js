// const item = new Product (name, id, price, qty, userOrder)

const p1 = new Product('Product 1','p1', 10, 1, 1)
const p2 = new Product('Product 2','p2', 20, 0, 0)
const p3 = new Product('Product 3','p3', 30, 3, 4)
const p4 = new Product('Product 4','p4', 40, 4, 2)

p1.checkStock()
p2.checkStock()
p3.checkStock()
p4.checkStock()


const itemDeliveryTest1 = new itemShipping(false,0)
const itemDeliveryTest2 = new itemShipping(true,0)

itemDeliveryTest2.deliveryPrice()