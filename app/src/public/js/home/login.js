const id = document.querySelector("#id"),
    password = document.querySelector('#password'),
    loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", login);

function login() {
    console.log("클릭");

    const req = {
        id: id.value,
        password: password.value,
    }

    console.log(req);
}