import { findIndex, showProducts, starRating } from "./utils.js";

const container = document.querySelector('.cartCont');
const showPrice = document.querySelector('.totalPrice');
const cartcounter = document.querySelector('.cartcounter');


// const shoppingCart = JSON.parse(window.localStorage.getItem('cart'));


const getCart = JSON.parse(window.localStorage.getItem('cart'));
if(!getCart){
    localStorage.setItem("cart", JSON.stringify([]))
}

const price = () => {
    const priceList = uniqueArray.map((item)=>{
        return item.price * getCart.filter(obj => obj.id === item.id).length
    })

    if (priceList.length === 0) {
        return `0`;
    }
    console.log(priceList)

    const reducer = (x, y) => x + y;

    return priceList.reduce(reducer)    
}

const uniqueArray = getCart.filter((item, index) => {
    const _thing = JSON.stringify(item);
    return index === getCart.findIndex(obj => {
      return JSON.stringify (obj) === _thing;
    });
});


const remove = () => {
    for (const item of uniqueArray) {
        document.getElementById(`${item.id}`).addEventListener('click', () => {
            uniqueArray.splice(findIndex(uniqueArray, item), 1);
            window.localStorage.setItem('cart', JSON.stringify(uniqueArray));
            price();
            console.log(price());
            render();
        })
    } 
}

const render = () => {
    container.innerHTML = '';
    
    for (const item of uniqueArray) {
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

    // cartcounter.innerHTML = getCart.length
};




// console.log("ua: " +  uniqueArray)



render();
price();
console.log(price());