import { url } from './api.js';
import { fetchProducts, starRating } from './utils.js';

console.log(await fetchProducts(url + "products"));

const container = document.querySelector('.editContainer');

let data = []

const getProducts = async () => {
    const products = await fetchProducts(url + "products");
    for (const product of products) {
        data.push(product)
    };
    render()
};



const render = () => {
    container.innerHTML = '';
    
    for (const item of data) {
        container.innerHTML += `
        <a href="singleedit.html?id=${item.id}">
            <div class="card">
                <div class="prodImg">
                    <img src ="${item.img_url}"/>
                </div>
                <div class="titleDesc"> 
                    <h3>${item.title}</h3>
                    <h4>${item.description}</h4>
                    <p>${starRating(item.rating)}</p>
                </div>
                <div>
                    <p class="price">£ ${item.price}</p>
                </div>
            </div>
        <a/>
        `
    }
};

const logOutbtn = document.querySelector('.logOut');

logOutbtn.addEventListener('click', () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    document.location.href = './index.html'
})


getProducts();

const input = document.querySelector('input');
const search = document.querySelector('.searchbtn');

let filterValue;


search.addEventListener('click', () => { 
    filterValue = input.value.trim();
    window.sessionStorage.setItem('fubar', filterValue);
    document.location.href = './products.html';
})


const searchBurger = document.querySelector('.searchbtnBurger');
const burgerInput = document.querySelector('.burgerInput');

searchBurger.addEventListener('click', () => { 
    filterValue = burgerInput.value.trim();
    window.sessionStorage.setItem('fubar', filterValue);
    document.location.href = './products.html';
})