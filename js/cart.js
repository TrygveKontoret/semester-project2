import { findIndex, showProducts, starRating } from "./utils.js";

const container = document.querySelector('.cartCont');

const getCart = JSON.parse(window.localStorage.getItem('cart'));

const remove = () => {
    for (const item of getCart) {
        document.getElementById(`${item.id}`).addEventListener('click', () => {
            getCart.splice(findIndex(getCart, item), 1);
            window.localStorage.setItem('cart', JSON.stringify(getCart));
            cart();
        })
    }
}

const cart = () => {
    container.innerHTML = '';
    for (const item of getCart) {
        // container.innerHTML += showProducts(item);
        container.innerHTML += `
            <div class="singleProd">
                <div class="left">
                    <h1>${item.title}</h1>
                    <img src ="${item.img_url}"/>
                </div>
                <div class="right"> 
                    <div>
                        <h4>${item.description}</h4>
                        <p class="price">£ ${item.price}</p>
                        <p>${starRating(item.rating)}</p>
                        <button id="${item.id}">Remove from cart</button>
                    </div>
                </div>
            </div>
        `
    }
    if (container.innerHTML === '') {
        container.innerHTML = `<h2> Cart is empty</h2>`
    }
    remove();
}

cart();