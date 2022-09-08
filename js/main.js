let prodID = prompt('Ingrese la ID del producto a comprar (1 -> 10) \n[Ingrese 11+ para terminar]')

// checks that the ID is valid and then executes the instructions
while (prodID >= 0 && prodID <= PRODUCT_QUANTITY) {
        let orderQty = prompt('Ingrese la cantidad deseada')
        // this method adds the selected item from the inventory to the cart and checks if the amount the user wants is valid
        cart.addProduct(inventory[prodID-1],orderQty)
        // then since the first conditions are valid it asks again for more items, if the ID selected is outside the range the cycle ends
        prodID = prompt('Ingrese la ID del producto a comprar (0 -> 10)')
        if (prodID < 0 || prodID >= PRODUCT_QUANTITY) break
        orderQty = prompt('Ingrese la cantidad deseada')        
} 
// lastly this shows what is in the cart
cart.cartShow()