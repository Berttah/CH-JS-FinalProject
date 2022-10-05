let inventory = {}

function loadData(callback) {
    fetch("../inventory.json")
    .then(res => res.json())
    .then(data => {inventory = data
        callback()
    })
}

