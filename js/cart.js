import { findIndex, showProducts, starRating } from "./utils.js";

const container = document.querySelector('.cartCont');
const showPrice = document.querySelector('.totalPrice');

const shoppingCart = JSON.parse(window.localStorage.getItem('cart'));
if(!shoppingCart){
    localStorage.setItem("cart", JSON.stringify([]))
}

const getCart = JSON.parse(window.localStorage.getItem('cart'));

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


const remove = () => {
    for (const item of uniqueArray) {
        document.getElementById(`${item.id}`).addEventListener('click', () => {
            getCart.splice(findIndex(getCart, item), 1);
            window.localStorage.setItem('cart', JSON.stringify(getCart));
            render();
            price();
            console.log(price());
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
                    <button id="${item.id}">Remove from cart</button>
                </div>
            </div>
        `
    }

    showPrice.innerHTML = `Total price: £ ` + price();

    if (container.innerHTML === '') {
        container.innerHTML = `<h2> Cart is empty</h2>`
    }
    remove();

};


const uniqueArray = getCart.filter((item, index) => {
  const _thing = JSON.stringify(item);
  return index === getCart.findIndex(obj => {
    return JSON.stringify (obj) === _thing;
  });
});

// console.log("ua: " +  uniqueArray)



render();
price();
console.log(price());