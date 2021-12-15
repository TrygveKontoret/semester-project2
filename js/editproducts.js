import { url } from './api.js';
import { fetchProducts, starRating } from './utils.js';

console.log(await fetchProducts(url + "products"));

const container = document.querySelector('.editContainer');

const input = document.querySelector('input');
const search = document.querySelector('.searchbtn');

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


getProducts();