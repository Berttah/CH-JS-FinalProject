// Takes the User Data to be used at Purchase Page
function save(){                            
    userData['first_name'] = firstName
    userData['last_name'] = lastName
    userData['card_number'] = cardNumber
    userData['security_number'] = secNumber
    userData['exp_date'] = expDate
    userData['telephone_number'] = telNumber
        console.log(userData)

    let userDataJSON = JSON.stringify(userData)
        localStorage.setItem('User Data', userDataJSON)
}

// tries to set the value for the inputs if already there
function dataDiplay() {
    let displayUD = JSON.parse(localStorage.getItem('User Data'))
    if (displayUD) {
        document.getElementById("fName").value = displayUD['first_name']
        document.getElementById("lName").value = displayUD['last_name']
        document.getElementById("cNumber").value = displayUD['card_number']
        document.getElementById("sNumber").value = displayUD['security_number']
        document.getElementById("eDate").value = displayUD['exp_date']
        document.getElementById("tNumber").value = displayUD['telephone_number']
    }
}

let userData = {};
let firstName = '';
let lastName = '';
let cardNumber = '';
let secNumber = '';
let expDate;
let telNumber = '';

// These get the input values
    let firsNameInput = document.getElementById('fName')
        firsNameInput.onchange = () => {firstName = firsNameInput.value};

    let lastNameInput = document.getElementById('lName')
        lastNameInput.onchange = () => {lastName = lastNameInput.value};
    
    let cardNumberInput = document.getElementById('cNumber')
        cardNumberInput.onchange = () => {cardNumber = cardNumberInput.value};

    let secNumberInput = document.getElementById('sNumber')
        secNumberInput.onchange = () => {secNumber = secNumberInput.value};

    let expDateInput = document.getElementById('eDate')
        expDateInput.onchange = () => {expDate = expDateInput.value};

    let telNumberInput = document.getElementById('tNumber')
        telNumberInput.onchange = () => {telNumber = telNumberInput.value};

    // gets the button and add the event listener
    let saveButton = document.getElementById('saveButton')
        // nota mental: no usar eventListener para botones con onClick




dataDiplay()