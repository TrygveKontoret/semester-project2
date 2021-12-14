import { url } from './api.js';
import { fetchProducts, showProducts, findIndex, containItem } from './utils.js';

const shoppingCart = JSON.parse(window.localStorage.getItem('cart'));
if(!shoppingCart){
    localStorage.setItem('cart', JSON.stringify([]))
}

console.log(await fetchProducts(url + "products"));

const container = document.querySelector('.container');

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

    for (const product of data) {
        if (product.featured) {
            container.innerHTML += showProducts(product);
        }
    }
    addToCart(data);
    
}

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

const addToCart = (array) => {
    array.forEach((item) => {
        if (item.featured) {
            document.getElementById(`${item.id}`).addEventListener('click', () => {
            shoppingCart.push(data[findIndex(data, item)]);
            window.localStorage.setItem('cart', JSON.stringify(shoppingCart));
        })}
        
    })
}