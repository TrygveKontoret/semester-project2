import { url } from './api.js';
import { showMessage, token } from './utils.js';

// const token = JSON.parse(localStorage.getItem('token'));

const addTitle = document.querySelector('#addTitle');
const addPrice = document.querySelector('#addPrice');
const addRating = document.querySelector('#addRating');
const addImage = document.querySelector('#addImage');
const addFeatured = document.querySelector('#addFeatured');
const addDesc = document.querySelector('#addDesc');
const addButton = document.querySelector('#addButton');

// const editTitle = document.querySelector('#editTitle');
// const editPrice = document.querySelector('#editPrice');
// const editRating = document.querySelector('#editRating');
// const editImage = document.querySelector('#editImage');
// const editFeatured = document.querySelector('#editFeatured');
// const editDesc = document.querySelector('#editDesc');
// const editButton = document.querySelector('#editButton');

// const showMessage = (message, messageType, target) => {
//     const item = document.querySelector(target);
//     item.innerHTML = `
//     <div class="${messageType}">${message}</div>
//     `;
// }

addButton.addEventListener('click', () => {
    submit();
})



const submit = () => {

    const title = addTitle.value.trim();
    const price = parseFloat(addPrice.value);
    const rating = addRating.value.trim();
    const image = addImage.value.trim();
    const featured = addFeatured.checked;
    const desc = addDesc.value.trim();

    if (title.length === 0 || price.length === 0 || isNaN(price) || image.length === 0 || desc.length === 0) {
        return showMessage("Please input proper values", "invalid", ".errorMessage")
    };

    addProduct(title, price, rating, image, featured, desc);
};

const addProduct = async (title, price, rating, image, featured, desc) => {
    const addUrl = url + 'products';

    const data = JSON.stringify({title: title, price: price, rating: rating, img_url: image, featured: featured, description: desc})

    console.log(token)

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(addUrl, options);
    const json = await response.json();
}