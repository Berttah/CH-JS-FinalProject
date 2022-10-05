let inventory = {}

function loadData(callback) {
    fetch("https://berttah.github.io/CH-JS-FinalProject/inventory.JSON")
    .then(res => res.json())
    .then(data => {inventory = data
        callback()
    })
}

