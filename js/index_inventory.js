// these serve as the callback for the different possible id
labelID = '';
buyButtonID = '';

// this loop iterates every item on the inventory and creates a product card, it changes if there is no stock for it
for (item of inventory) {
    let productCard = document.createElement('div');
    productCard.classList.add('productCard');
    if (item.quantity > 0) {
        item.stock = 'Stock';
        labelID = 'labelCard';
        buyButtonID = 'buyCard'
    } else {
        item.stock = 'No Stock';
        labelID = 'labelCardNoStock';
        buyButtonID = 'buyCardNoStock'
    }
    productCard.innerHTML = `
                            <div id="${labelID}" class="labelCard">${item.stock}</div>
                            <div class="imgCard">   <img class="cardImage"  src="./assets/open-book.png" alt="book"></div>
                            <div class="nameCard">  ${item.pName}</div>
                            <div class="priceCard"> $${item.price}</div>
                            <div id="${buyButtonID}" class="buyCard">   <i class="fa-solid fa-cart-shopping"></i></div>
                            `;
                            document.getElementById('productAreaContainer').appendChild(productCard)
}

