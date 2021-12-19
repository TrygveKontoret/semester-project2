import { url } from './api.js';
import { fetchProducts, showProducts, findIndex, containItem } from './utils.js';

console.log(await fetchProducts(url + "products"));

const container = document.querySelector('.container');

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

let filterValue;
let filterTitle = [];

search.addEventListener('click', () => {
    filterValue = input.value.trim();
    container.innerHTML = '';

        filterTitle = data.filter(product => product.title.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1);
        filterTitle.forEach((product) => {
            container.innerHTML += showProducts(product);
    })
    console.log(filterTitle)

    addToCart(filterTitle);    
});

const searchBurger = document.querySelector('.searchbtnBurger');
const burgerInput = document.querySelector('.burgerInput');

searchBurger.addEventListener('click', () => { 
    filterValue = burgerInput.value.trim();
    container.innerHTML = '';

    filterTitle = data.filter(product => product.title.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1);
    filterTitle.forEach((product) => {
        container.innerHTML += showProducts(product);
    })
    burgerNav.style.display = 'none';
    burger.classList.toggle("change");
    console.log(filterTitle)

    addToCart(filterTitle); 
});

const render = () => {
    
    filterValue = input.value.trim();
    container.innerHTML = '';
    
    if (filterValue = window.sessionStorage.getItem('fubar', filterValue)){
        filterTitle = data.filter(product => product.title.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1);
        console.log(filterTitle)
        filterTitle.forEach((product) => {
            container.innerHTML += showProducts(product);
        })

        addToCart(filterTitle);
    }

    else {
        for (const product of data) {
            container.innerHTML += showProducts(product);
        }
        addToCart(data);

    }
    
    window.sessionStorage.removeItem('fubar');
};

getProducts();

const shoppingCart = JSON.parse(window.localStorage.getItem('cart'));
if(!shoppingCart){
    localStorage.setItem("cart", JSON.stringify([]))
};

const addToCart = (array) => {
    array.forEach((item) => {
        document.getElementById(`${item.id}`).addEventListener('click', () => {
            shoppingCart.push(data[findIndex(data,item)]);
            window.localStorage.setItem('cart', JSON.stringify(shoppingCart));
    })
    })
};