import { url } from './api.js';
import { fetchProducts } from './utils.js';




const query = document.location.search;
const parameter = new URLSearchParams(query);
const id = parameter.get('id');

console.log(await fetchProducts(url + '/' + `${id}`));

const container = document.querySelector('.detail-wrapper');
const meta = document.querySelector('.meta');

let data = []

const getProducts = async () => {
    const product = await fetchProducts(url + "/" + `${id}`);
        data.push(product)
    render()

};


const render = () => {
    container.innerHTML = '';

    for (const product of data) {
        document.title = `GPU | ${product.title}`
        meta.setAttribute('content', `${product.title}` + `, ${product.description}`);
        
    }


}



getProducts();
