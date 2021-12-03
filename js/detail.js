import { url } from './api.js';
import { fetchProducts, starRating } from './utils.js';




const query = document.location.search;
const parameter = new URLSearchParams(query);
const id = parameter.get('id');

console.log(await fetchProducts(url + '/' + `${id}`));

const container = document.querySelector('.detail-wrapper');
const meta = document.querySelector('.meta');

const modal = document.querySelector('.modal');
const body = document.querySelector('body');

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
        
        container.innerHTML += `
            <div class="singleProd">
                <div class="left">
                    <h1>${product.title}</h1>
                    <img id="${product.id}" src ="${product.img_url}"/>
                </div>
                <div class="right"> 
                    <div>
                        <h4>${product.description}</h4>
                        <p class="price">£ ${product.price}</p>
                        <p>${starRating(product.rating)}</p>
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
        `

        modal.innerHTML = `<img src ="${product.img_url}"/>`
    }
    funkyModal();
}


const funkyModal = ()=> {
    for (const imgmodal of data) {
        document.getElementById(`${imgmodal.id}`).addEventListener('click', () => {
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


const input = document.querySelector('input');
const search = document.querySelector('.searchbtn');

let filterValue;
let filterTitle;

search.addEventListener('click', () => {
    filterValue = input.value.trim();
    window.sessionStorage.setItem('fubar', filterValue);
    document.location.href = './products.html';
});


