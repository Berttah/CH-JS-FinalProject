// these serve as the callback for the different possible id
labelID = '';
buyButtonID = '';


// this loop iterates every item on the inventory and creates a product card, it changes if there is no stock for it
function inventoryDisplay(){
    for (item of inventory) {
        let productCard = document.createElement('div');
        productCard.classList.add('productCard');

        itemID = item.id
        let cartStock = localStorage.getItem(itemID)

        if (item.quantity > 0) {
            item.stockText = `Stock ${item.quantity - cartStock}`;
            labelID = 'labelCard';
            buyButtonClass = 'buyCard';
            disabled = '';
        } else {
            item.stockText = 'No Stock';
            labelID = 'labelCardNoStock';
            buyButtonClass = 'buyCard buyCardNoStock';
            disabled = 'disabled';
        };
        productCard.innerHTML = `
                                <div id="${labelID}" class="labelCard">${item.stockText}</div>
                                <div class="imgCard">   <img class="cardImage"  src="./assets/open-book.png" alt="book"></div>
                                <div class="nameCard">  ${item.pName}</div>
                                <div class="priceCard"> $${item.price}</div>
                                <button onClick="cardClicked(event)" type="button" class="${buyButtonClass}" id="${itemID}" ${disabled}>   <i class="fa-solid fa-cart-shopping"></i></button>
                                `;
                                document.getElementById('productAreaContainer').appendChild(productCard)
    }
}

function popDisplay(){
    let iDisplay = document.getElementById('productAreaContainer');
    let divInside = iDisplay.querySelectorAll('div.productCard');
    divInside.forEach((card) => {
        card.remove()
      });
}

loadData(inventoryDisplay)