import { url } from './api.js';
import { fetchProducts, findIndex, starRating } from './utils.js';

const query = document.location.search;
const parameter = new URLSearchParams(query);
const id = parameter.get('id');

console.log(await fetchProducts(url + 'products/' + `${id}`));

const container = document.querySelector('.detail-wrapper');
const meta = document.querySelector('.meta');

const modal = document.querySelector('.modal');
const body = document.querySelector('body');

let data = []

const getProducts = async () => {
    const product = await fetchProducts(url + "products/" + `${id}`);
        data.push(product)
    render()
};



const render = () => {
    container.innerHTML = '';

    for (const product of data) {
        document.title = `GPU | ${product.title}`
        meta.setAttribute('content', `${product.title}` + `, ${product.description}`);
        
        container.innerHTML += `
            <div class="singleProd">
                <div class="left">
                    <h1>${product.title}</h1>
                    <img id="${product.id+1}" src ="${product.img_url}" alt="${product.title}"/>
                </div>
                <div class="right"> 
                    <div>
                        <h4>${product.description}</h4>
                        <p class="price">£ ${product.price}</p>
                        <p>${starRating(product.rating)}</p>
                        <button id="${product.id}">Add to cart</button>
                    </div>
                </div>
            </div>
        `

        modal.innerHTML = `<img src ="${product.img_url}"/>`
    }
    funkyModal();
    addToCart();
};

const shoppingCart = JSON.parse(window.localStorage.getItem('cart'));
if(!shoppingCart){
    localStorage.setItem("cart", JSON.stringify([]))
};

const addToCart = () => {
    for (const product of data) {
        document.getElementById(`${product.id}`).addEventListener('click', () => {
            shoppingCart.push(data[findIndex(data, product)]);
            window.localStorage.setItem('cart', JSON.stringify(shoppingCart));
            console.log("HELLLOOOO");
        })
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
});

const funkyModal = ()=> {
    for (const product of data) {
        document.getElementById(`${product.id+1}`).addEventListener('click', () => {
            const funky = document.querySelector(".bigger");
            modal.style.display = "flex";
            body.classList.add("modalBody");
            document.documentElement.scrollTop = "0";
    })}
};

modal.addEventListener("click", function() {
    modal.style.display = "none";
    body.classList.remove("modalBody");
});

getProducts();