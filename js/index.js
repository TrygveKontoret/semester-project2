import { url } from './api.js';
import { fetchProducts } from './utils.js';

console.log(await fetchProducts(url));

const container = document.querySelector('.container');

