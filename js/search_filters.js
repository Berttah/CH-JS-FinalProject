// this will be used to find a particular item in the inventory
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    // check if the element is an input element and the key is enter
    if (e.target.nodeName === "INPUT" && e.key === 'Enter') {
        let result = inventory.find(item => item.pName === e.target.value)
        let text = ''
        result !== undefined 
            ? text = `We have ${result.quantity} units of ${result.pName}`
            : text = "We don't have that one, ask for one that is displayed instead"

        Swal.fire({
            html: ` 
                    <p class= "swal2-title"> Search Result </p>
                    <div class= "swalHTML">
                        <img class="swalImg" src="././assets/open-book.png" alt="">
                        <p class="swalText">${text}</p>
                    </div>
                  `,
            showConfirmButton: false,
            width: '600px',
            padding: '0em',
            position: 'top',
            background: '#FFFFF9',
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
    }
  }
);

// this will be used to display in a different way items that have no stock
// probable by granting a different stock label
function displayStock(){
    let inventoryStock = inventory.filter(item => item.quantity > 0)
        console.table(`Our items on stock are:`, inventoryStock)
    let inventoryNoStock = inventory.filter(item => item.quantity == 0)
        console.table(`Our items not on stock are:`, inventoryNoStock)
}
// displayStock()