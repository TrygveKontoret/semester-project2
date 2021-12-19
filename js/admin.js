import { url } from './api.js';
import { showMessage, token } from './utils.js';

const addTitle = document.querySelector('#addTitle');
const addPrice = document.querySelector('#addPrice');
const addRating = document.querySelector('#addRating');
const addImage = document.querySelector('#addImage');
const addFeatured = document.querySelector('#addFeatured');
const addDesc = document.querySelector('#addDesc');
const addButton = document.querySelector('#addButton');

addButton.addEventListener('click', () => {
    submit();
});

const submit = () => {

    const title = addTitle.value.trim();
    const price = parseFloat(addPrice.value);
    const rating = addRating.value.trim();
    const image = addImage.value.trim();
    const featured = addFeatured.checked;
    const desc = addDesc.value.trim();

    if (title.length === 0 || price.length === 0 || isNaN(price) || image.length === 0 || desc.length === 0) {
        return showMessage("Please input proper values", "invalid", ".errorMessage")
    }
  
    addProduct(title, price, rating, image, featured, desc);
};

const addProduct = async (title, price, rating, image, featured, desc) => {
    const addUrl = url + 'products/';

    const data = JSON.stringify({title: title, price: price, rating: rating, img_url: image, featured: featured, description: desc})

    console.log(token)

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(addUrl, options);
    const json = await response.json();
    location.reload();
};

const logOutbtn = document.querySelector('.logOut');

logOutbtn.addEventListener('click', () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    document.location.href = './index.html'
});

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
});