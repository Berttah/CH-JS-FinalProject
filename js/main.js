function cardClicked(event) {
        // console.log('clicked')
        // console.log(event.currentTarget.id)

        let prodID = event.currentTarget.id
                // console.log(prodID)
        // funcion que checkee si ya estaba en el cart, de estarlo suma el userQty en vez del producto
        cart.addProduct(inventory[prodID-1])
        cart.cartShow()
        // removes the inventory display
        popDisplay()
        // remakes the updated inventory display
        inventoryDisplay()
        Toast.fire({
                icon: 'success',
                title: `Added ${inventory[prodID-1].pName} to the cart`,
                background: 'rgba(255, 255, 249, 0.95)'
        })
}

// inventoryDisplay()