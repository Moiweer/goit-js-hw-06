const form = document.querySelector(".login-form");
const email = document.querySelector("[name=email]");
const password =document.querySelector("[name=password]")

function handleSubmit(event) {
    event.preventDefault();
    const formData = {
        email: email.value,
        password: password.value,
    };
    console.log(formData)
    form.reset();
}

form.addEventListener("submit", handleSubmit);