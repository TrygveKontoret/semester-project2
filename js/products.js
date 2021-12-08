import { url } from './api.js';
import { fetchProducts, showProducts, findIndex, containItem } from './utils.js';

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
//     if (container.innerHTML === '') {
//         container.innerHTML = "aslkdsadjaksd"
//     }
// }



let filterValue;
let filterTitle = [];


search.addEventListener('click', () => {
    filterValue = input.value.trim();
    container.innerHTML = '';

        filterTitle = data.filter(product => product.title.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1);
        filterTitle.forEach((product) => {
            container.innerHTML += showProducts(product);

        

        // window.sessionStorage.removeItem('fubar');
            
        
    })
    // if (filterTitle === []) {
    //     container.innerHTML = "aslkdsadjaksd"
    // }

    console.log(filterTitle)

    addToCart(filterTitle);    
})

// if (container.innerHTML === "") {
//     container.innerHTML === `<p>FUNK DA FOR FAEN</p>`
// }


const render = () => {
    
    filterValue = input.value.trim();
    // container.innerHTML = '';
    
    if (filterValue = window.sessionStorage.getItem('fubar', filterValue)){
        filterTitle = data.filter(product => product.title.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1);
        // filterTitle = data.filter(product => product.title.toLowerCase().includes(filterValue.toLowerCase()));
        console.log(filterTitle)
        filterTitle.forEach((product) => {
            container.innerHTML += showProducts(product);
        })
        

        // if(container.innerHTML = ""){
        //     container.innerHTML = "jfoijjÆOKdj"
        // }
        
    }

    else {
        for (const product of data) {
            container.innerHTML += showProducts(product);
        }
        // if(filterTitle === []){
        //     container.innerHTML = "bitch du er en bitch"
        // }

    }
    // console.log(filterTitle)
    // if(filterTitle === []){
    //     container.innerHTML = "Dude bare funger din fitte"
    // }
    
    window.sessionStorage.removeItem('fubar');

    addToCart(filterTitle);
    addToCart(data)
}

getProducts();

const shoppingCart = JSON.parse(window.localStorage.getItem('cart'));
if(!shoppingCart){
    localStorage.setItem("cart", JSON.stringify([]))
}

const addToCart = (array) => {
    array.forEach((item) => {
        document.getElementById(`${item.id}`).addEventListener('click', () => {
        shoppingCart.push(data[findIndex(data,item)]);
        window.localStorage.setItem('cart', JSON.stringify(shoppingCart));
    })
    })
}