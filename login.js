let x = document.getElementById("loginPass");

function showLoginPassword() {
    if (x.type === "password"){
        x.type = "text";
    }
    else {
        x.type = "password";
    }
};

let y = document.querySelectorAll("#createPass");

function showCreatePassword() {
    for (let i = 0; i < y.length; i++) {
        if (y[i].type === "password") {
            y[i].type = "text";
        }
        else {
            y[i].type = "password";
        }
    }
};

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');

function showForm(type) {
    if (type === 'login') {
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        loginForm.classList.add('active');
        registerForm.classList.remove('active');

      }
       else if (type === 'register') {
        loginTab.classList.remove('active');
        loginForm.classList.remove('active');
        registerTab.classList.add('active')
        registerForm.classList.add('active');
      }
    };
