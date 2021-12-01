import { url } from './api.js';
import { fetchProducts, showProducts } from './utils.js';

console.log(await fetchProducts(url));

const container = document.querySelector('.container');

const input = document.querySelector('input');
const search = document.querySelector('.searchbtn');

let data = []

const getProducts = async () => {
    const products = await fetchProducts(url);
    for (const product of products) {
        data.push(product)
    };
    render()
};

// const render = () => {
//     container.innerHTML = '';

//     for (const product of data) {
//         container.innerHTML += showProducts(product);
//     }
// }

getProducts();

let filterValue;
let filterTitle;


search.addEventListener('click', () => {
    filterValue = input.value.trim();
    container.innerHTML = '';

        filterTitle = data.filter(product => product.title.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1);
        filterTitle.forEach((product) => {
        container.innerHTML += showProducts(product);

        window.sessionStorage.removeItem('fubar');
    })
})


const render = () => {
    filterValue = input.value.trim();
    container.innerHTML = '';
    if (filterValue = window.sessionStorage.getItem('fubar', filterValue)){


        filterTitle = data.filter(product => product.title.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1);
        filterTitle.forEach((product) => {
            container.innerHTML += showProducts(product);

            window.sessionStorage.removeItem('fubar');
        
    })}
    

    else {
        for (const product of data) {
            container.innerHTML += showProducts(product);
        }

    }
}
