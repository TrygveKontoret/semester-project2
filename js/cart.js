import { findIndex, showProducts, starRating } from "./utils.js";

const container = document.querySelector('.cartCont');

const shoppingCart = JSON.parse(window.localStorage.getItem('cart'));
if(!shoppingCart){
    localStorage.setItem("cart", JSON.stringify([]))
}

const getCart = JSON.parse(window.localStorage.getItem('cart'));

const price = () => {
    const priceList = getCart.map((item)=>{
        return item.price 
    })

    if (priceList.length === 0) {
        return `0`;
    }
    console.log(priceList)

    const reducer = (x, y) => x + y;

    return priceList.reduce(reducer)

    
}




const remove = () => {
    for (const item of getCart) {
        document.getElementById(`${item.id}`).addEventListener('click', () => {
            getCart.splice(findIndex(getCart, item), 1);
            window.localStorage.setItem('cart', JSON.stringify(getCart));
            cart();
            price();
            console.log(price());
        })
    } 
    
}

const cart = () => {
    container.innerHTML = '';
    for (const item of getCart) {
        // container.innerHTML += showProducts(item);
        container.innerHTML += `
            <div class="card">
                <div class="prodImg">
                    <img src ="${item.img_url}"/>
                </div>
                <div class="titleDesc"> 
                    <h3>${item.title}</h3>
                    <h4>${item.description}</h4>
                    <p>${starRating(item.rating)}</p>
                </div>
                <div class="priceRating">
                    <p class="price">£ ${item.price}</p>
                    <button id="${item.id}">Remove from cart</button>
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
price();
console.log(price());