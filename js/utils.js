import { fiveStar, fourStar, oneStar, threeStar, twoStar, zeroStar } from "../media/ratings/svg.js";


export const fetchProducts = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

export const starRating = (rating) => {
    switch(rating) {
        case 0:
            return (
                zeroStar
            )
        
        case 1:
            return (
                oneStar
            )

        case 2:
            return (
                twoStar
            )

        case 3:
            return (
                threeStar
            )   

        case 4:
            return (
                fourStar
            )

        case 5:
            return (
                fiveStar
            )

    }
}

export const showProducts = (item) => {
    const { img_url, title, price, rating, id } = item;

    return `
        <a href="detail.html?id=${id}">
            <div class="card">
                <img src="${img_url}" alt="${title}">
                <h4>${title}</h4>
                <p class="stars">${starRating(rating)}</p>
                <p>£ ${price}</p>
                <button>Add to cart</button>
            </div>
        </a>
    `   
}

export const findIndex = (array, item) => {
    return array.map((x) => {
        return x.id
    }).indexOf(item.id)
};

export const containItem = (obj, array) => {
    for (const item of array) {
        if (item.id === obj.id) {
            return true;
        }
    }
    return false;
};