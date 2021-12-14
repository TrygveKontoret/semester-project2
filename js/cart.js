import { findIndex, showProducts, starRating } from "./utils.js";

const container = document.querySelector('.cartCont');
const showPrice = document.querySelector('.totalPrice');
// const cartcounter = document.querySelector('.cartcounter');


// const shoppingCart = JSON.parse(window.localStorage.getItem('cart'));


const getCart = JSON.parse(window.localStorage.getItem('cart'));
if(!getCart){
    localStorage.setItem("cart", JSON.stringify([]))
}

const price = () => {
    const priceList = uniqueProductArray.map((item)=>{
        return item.price * getCart.filter(obj => obj.id === item.id).length
    })

    if (priceList.length === 0) {
        return `0`;
    }
    console.log(priceList)

    const reducer = (x, y) => x + y;

    return priceList.reduce(reducer)    
}

const uniqueProductArray = getCart.filter((item, index) => {
    const product = JSON.stringify(item);
    return index === getCart.findIndex(obj => {
      return JSON.stringify (obj) === product;
    });
});


const remove = () => {
    for (const item of uniqueProductArray) {
        document.getElementById(`${item.id}`).addEventListener('click', () => {
            uniqueProductArray.splice(findIndex(uniqueProductArray, item), 1);
            window.localStorage.setItem('cart', JSON.stringify(uniqueProductArray));
            price();
            console.log(price());
            render();
        })
    } 
}

const render = () => {
    container.innerHTML = '';
    
    for (const item of uniqueProductArray) {
        const amount = getCart.filter(obj => obj.id === item.id).length;
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
                <div>
                    <p class="price">£ ${item.price * amount}</p>
                    <p>Quantity ${amount}</p>
                    <button id="${item.id}">Remove from all cart</button>
                </div>
            </div>
        `
    }

    showPrice.innerHTML = `Total price: £ ` + price();
    // cartcounter.innerHTML = `Total products in cart: ` + getCart.length;

    if (container.innerHTML === '') {
        container.innerHTML = `<h2> Cart is empty</h2>`
    }
    remove();
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
})

render();
price();
console.log(price());