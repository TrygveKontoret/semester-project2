import { url } from './api.js';
import { saveToken, saveUser, showMessage } from './utils.js';


const username = document.querySelector('#username');
const password = document.querySelector('#password');
const form = document.querySelector('form');
const errorMessage = document.querySelector('.errorMessage');

// const showMessage = (message, messageType, target) => {
//     const item = document.querySelector(target);
//     item.innerHTML = `
//     <div class_"${messageType}">${message}</div>
//     `;
// }

const submitForm = (e) => {
    e.preventDefault();

    errorMessage.innerHTML = '';

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue.length === 0 || passwordValue.length === 0) {
        return showMessage("Please fill in the fields properly!", "Invalid", ".errorMessage")
    }

    login(usernameValue, passwordValue);
}


form.addEventListener('submit', submitForm);

const login = async (username, password) => {

    const urlPass = url + 'auth/local';
    const data = JSON.stringify({ identifier: username, password: password});

    const options = {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(urlPass, options);
        const json = await response.json();

        if (json.user) {
            saveToken(json.jwt);
            saveUser(json.user);

            location.href = './admin.html';
        };

        if (json.error) {
            showMessage("wrong username or password", "Invalid", ".errorMessage");
        };
    }

    catch(error) {
        showMessage("errorrr", error, ".errorMessage");
    }
};


const input = document.querySelector('input');
const search = document.querySelector('.searchbtn');

let filterValue;

search.addEventListener('click', () => {
    filterValue = input.value.trim();
    window.sessionStorage.setItem('fubar', filterValue);
    document.location.href = './products.html';
});

const searchBurger = document.querySelector('.searchbtnBurger');
const burgerInput = document.querySelector('.burgerInput');

searchBurger.addEventListener('click', () => { 
    filterValue = burgerInput.value.trim();
    window.sessionStorage.setItem('fubar', filterValue);
    document.location.href = './products.html';
})