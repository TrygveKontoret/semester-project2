import { url } from './api.js';
import { fetchProducts, showProducts, findIndex, containItem } from './utils.js';

const shoppingCart = JSON.parse(window.localStorage.getItem('cart'));
if(!shoppingCart){
    localStorage.setItem('cart', JSON.stringify([]))
}

console.log(await fetchProducts(url));

const container = document.querySelector('.container');

let data = []

const getProducts = async () => {
    const products = await fetchProducts(url);
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
    // for (const product of data) {
        
    //     container.innerHTML += showProducts(product);
        
        
    // }

    addToCart(data);
}

getProducts();


const input = document.querySelector('input');
const search = document.querySelector('.searchbtn');

let filterValue;
let filterTitle;

search.addEventListener('click', () => { 
    filterValue = input.value.trim();
    window.sessionStorage.setItem('fubar', filterValue);
    document.location.href = './products.html';
})

const addToCart = (array) => {
    array.forEach((item) => {
        document.getElementById(`${item.id}`).addEventListener('click', () => {
            shoppingCart.push(data[findIndex(data, item)]);
            window.localStorage.setItem('cart', JSON.stringify(shoppingCart));
        })
    })
}