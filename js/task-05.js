
const inputNameInWindow = document.querySelector("#name-input");
const spanInput = document.querySelector("#name-output");


inputNameInWindow.addEventListener("input", (event) => {
    spanInput.textContent = event.currentTarget.value.trim() || "Anonimous"
}) ;

