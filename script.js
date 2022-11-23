let inputNodeList = document.querySelectorAll("input");

const submitButton=document.querySelector("button");
submitButton.disabled;
submitButton.addEventListener("click",()=>checkFields());

let password = ""
let validity = true;
const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const validName = /^[a-zA-Z]/;
const validNumber = /^\d+/;

inputNodeList.forEach(input => {
    input.addEventListener("click", ()=>{
        removeErrorClass(input);
        });
})

inputNodeList.forEach(input => {
    input.addEventListener("input", ()=>{
        removeErrorClass(input);
        });
})

function removeErrorClass(item) {
    item.classList.remove("error");
    item.setCustomValidity("");
}

function addErrorClass(item,validFieldCount) {
    item.classList.add("error");
    if (item.value === "") {
        item.setCustomValidity("Please complete this field");
    } else {
        item.setCustomValidity("This field is invalid");
    }
    if (item.id === "password") {
        item.setCustomValidity("Password must be between 8 and 20 characters");
    }
    if ((item.id === "confirm-password") && (validFieldCount === 5)) {
        item.setCustomValidity("Passwords does not match");
    }
}

function checkField(textField,validFieldCount) {    
    switch (textField.id) {
        case "first-name": case "last-name":
            if (textField.value.match(validName)) {
                return true;
            } else {
                return false;
            }
        case "email":
            if (textField.value.match(validEmail)) {
                return true;
            } else {
                return false;
            }
        case "phone-number":
            if (textField.value.match(validNumber)) {
                return true;
            } else {
                return false;
            }
        case "password":
            if (textField.value.length>7) {
                password = textField.value;
                return true;
            } else {
                return false;
            }
        case "confirm-password":
            if ((validFieldCount === 5) && (password === textField.value)){
                return true;
            } else {
                textField.value = "";
                return false;
            }
    }
}

function checkFields() {
    let validFieldCount = 0;
    inputNodeList.forEach(input => {
        validity = checkField(input,validFieldCount);
        if (validity === false) {
            addErrorClass(input,validFieldCount);
        } else if (validity === true) {
            removeErrorClass(input);
            validFieldCount++;
        }
    });
}