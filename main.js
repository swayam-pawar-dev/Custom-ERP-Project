let loggedin = true;

const rightel1 = document.getElementById("rightel1");
const rightel2 = document.getElementById("rightel2");
const rightel3 = document.getElementById("rightel3");

function showLoginForm(event) {
    rightel1.textContent = "";
    if (event) event.preventDefault();
    rightel1.parentElement.style.display = "none";
    rightel2.parentElement.style.display = "none";
    rightel3.innerHTML = `
<form id="login-form" method="POST" action=""sir1.php>
    <input id="login-email" type="email" placeholder="Email" required>
    <input id="login-password" type="password" placeholder="Password" required>
    <button id="login-button" type="button">Login</button>
</form>
`;
}

function clearLoginForm() {
    rightel3.innerHTML = "";
}

function updateNavbar() {
    if (loggedin) {
        rightel1.textContent = "PROFILE";
        rightel2.textContent = "LOGOUT";
        rightel1.onclick = null;
        rightel2.onclick = function () {
            loggedin = false;
            clearLoginForm();
            updateNavbar();
        };
        clearLoginForm();
    } else {
        rightel1.textContent = "LOGIN";
        rightel2.textContent = "";
        rightel1.onclick = showLoginForm;
        rightel2.onclick = null;
    }
}

updateNavbar();