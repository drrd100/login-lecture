const id = document.querySelector("#id"),
    password = document.querySelector('#password'),
    loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        password: password.value,
    }
    fetch("./login", {
        method: "POST",
        headers: {
            "Content-Type": "appliction/json",
        },
        body: JSON.stringify(req),
    });
}