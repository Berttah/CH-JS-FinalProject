// this constructor is used to make the items on the store
class Product {
    constructor(pName,id,price,quantity) {
        this.pName = pName
        this.id = id
        this.price = price
        this.quantity = quantity
    }
}

let inventory = [
    { 
        pName: "The Lightning Thief",
        id: 1,
        price: 1331.50,
        quantity: 6 
    },
    { 
        pName: "Sea of Monsters",
        id: 2, 
        price: 1183.00,
        quantity: 0 
    },
    { 
        pName: "Titan's Curse",
        id: 3, 
        price: 1183.00,
        quantity: 7 
    },
    { 
        pName: "Battle of the Labyrinth",
        id: 4, 
        price: 1240.50,
        quantity: 2 
    },
    { 
        pName: "The Last Olympian",
        id: 5, 
        price: 1323.50,
        quantity: 8 
    },
    { 
        pName: "The Lost Hero",
        id: 6, 
        price: 2639.00,
        quantity: 0 
    },
    { 
        pName: "The Son of Neptune",
        id: 7, 
        price: 2030.00,
        quantity: 9 
    },
    { 
        pName: "The Mark of Athena",
        id: 8, 
        price: 1989.00,
        quantity: 3 
    },
    { 
        pName: "The House of Hades",
        id: 9, 
        price: 2107.50,
        quantity: 0 
    },
    { 
        pName: "The Blood of Olympus",
        id: 10, 
        price: 2401.00,
        quantity: 1 
    },
];