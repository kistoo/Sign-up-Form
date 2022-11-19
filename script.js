let inputNodeList = document.querySelectorAll("input");

const submitButton=document.querySelector("button");
submitButton.addEventListener("click",()=>checkFields());

let password = ""

inputNodeList.forEach(input => {
    input.addEventListener("click", ()=>{
        removeErrorClass(input);
        });
})

function removeErrorClass(item) {
    item.classList.remove("error");
}

function addErrorClass(item) {
    item.classList.add("error");
}

function checkFields() {
    //refreshes input values
    let inputNodeList = document.querySelectorAll("input");
    inputNodeList.forEach(input => {
        let validity = input.checkValidity();
        if (validity === false) {
            addErrorClass(input);
            input.setCustomValidity("Please complete this field");
            if (input.id === "password" || input.id === "confirm-password") {
                input.setCustomValidity("Password must be between 8 and 20 characters");
            }
        } else if (validity === true) {
            removeErrorClass(input);
        }
        //validates that passwords match
        if (input.id === "password") {
            if (validity === true) {
                password = input.value;
            }
        }
        if (input.id === "confirm-password") {
            if (input.value !== password) {
                input.setCustomValidity("Passwords does not match");
                addErrorClass(input);
            } else if (password.length < 7) {
                input.setCustomValidity("Passwords must be between 8 and 20 characters");
                addErrorClass(input);
            }
        }
    });
}