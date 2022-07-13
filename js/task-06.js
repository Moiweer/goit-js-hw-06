const inputText = document.querySelector("text");
const dataLenght = document.querySelector("[data-lenght=6]")
const valid = document.querySelector("#validation-input.valid");
const invalid = document.querySelector("#validation-input.invalid");

inputText.addEventListener("input", (event) => {
    inputText.value = dataLenght.value 
    valid.focus() || 
        inputText.value !== dataLenght.value
        invalid.focus()
});