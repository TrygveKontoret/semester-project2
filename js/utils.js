import { oneStar } from "../media/ratings/svg.js";

export const fetchProducts = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

export const showProducts = (item) => {
    const { img_url, title, price, rating } = item;

    const starRating = (rating) => {
        switch(rating) {
            case 0:
                return (
                    oneStar
                )
            
            case 1:
                return (
                    "two"
                )

            case 2:
                return (
                    "three"
                )

            case 3:
                return (
                    "four"
                )   

            case 4:
                return (
                    "five"
                )

            case 5:
                return (
                    "null"
                )

        }
    }


    return `
        <div class="card">
            <img src="${img_url}" alt="${title}">
            <h4>${title}</h4>
            <p>£ ${price}</p>
            <p>${starRating(rating)}
            <button>Add to cart</button>
        </div>
    `

    
}