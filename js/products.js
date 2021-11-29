import { url } from './api.js';
import { fetchProducts, showProducts } from './utils.js';

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
        container.innerHTML += showProducts(product);
    }
}

getProducts();