import { url } from './api.js';
import { fetchProducts, showMessage, token, findIndex, starRating } from './utils.js';

const query = document.location.search;
const parameter = new URLSearchParams(query);
const id = parameter.get('id');

console.log(await fetchProducts(url + 'products/' + `${id}`));

const editTitle = document.querySelector('#editTitle');
const editPrice = document.querySelector('#editPrice');
const editRating = document.querySelector('#editRating');
const editImage = document.querySelector('#editImage');
const editFeatured = document.querySelector('#editFeatured');
const editDesc = document.querySelector('#editDesc');
const editButton = document.querySelector('#editButton');
const delButton = document.querySelector('#delButton');

const getInputs = async () => {
    const response = await fetch(url + 'products/' + `${id}`);
    const json = await response.json();

    editTitle.value = json.title;
    editPrice.value = json.price;
    editDesc.value = json.description;
    editRating.value = json.rating;
    editImage.value = json.img_url;
    editFeatured.checked = json.featured;

    document.title = `GPU | Edit: ${json.title}`

}

getInputs();

editButton.addEventListener('click', () => {
    submit();
    document.location.href = './editproducts.html';
})

const submit = () => {

    const title = editTitle.value.trim();
    const price = parseFloat(editPrice.value);
    const rating = editRating.value.trim();
    const image = editImage.value.trim();
    const featured = editFeatured.checked;
    const desc = editDesc.value.trim();

    if (title.length === 0 || price.length === 0 || isNaN(price) || image.length === 0 || desc.length === 0) {
        return showMessage("Please input proper values", "invalid", ".errorMessage")
    };

    editProduct(title, price, rating, image, featured, desc);
};

const editProduct = async (title, price, rating, image, featured, desc) => {
    const editUrl = url + 'products/' + id;

    const data = JSON.stringify({title: title, price: price, rating: rating, img_url: image, featured: featured, description: desc})

    console.log(token)

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(editUrl, options);
    const json = await response.json();
};

delButton.addEventListener('click', () => {
    deleteProduct();
    document.location.href = './editproducts.html';

})

const deleteProduct = async (title, price, rating, image, featured, desc) => {
    const deleteUrl = url + 'products/' + id;

    const data = JSON.stringify({title: title, price: price, rating: rating, img_url: image, featured: featured, description: desc})

    console.log(token)

    const options = {
        method: "DELETE",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(deleteUrl, options);
    const json = await response.json();
};