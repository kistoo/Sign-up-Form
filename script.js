const inputNodeList = document.querySelectorAll("input");

const submitButton=document.querySelector("button");
submitButton.addEventListener("click",()=>checkFields());

inputNodeList.forEach(input => {
    input.addEventListener("click", ()=>{
        input.classList.remove("error");
        });
})

function checkFields() {
    inputNodeList.forEach(input => {
        let validity = input.checkValidity();
        if (validity===false) {
            input.classList.add("error");
        }
    });
}