import { fiveStar, fourStar, oneStar, threeStar, twoStar, zeroStar } from "../media/ratings/svg.js";


export const fetchProducts = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

const starRating = (rating) => {
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
    const { img_url, title, price, rating } = item;

    return `
        <div class="card">
            <img src="${img_url}" alt="${title}">
            <h4>${title}</h4>
            <p>£ ${price}</p>
            <p>${starRating(rating)}</p>
            <button>Add to cart</button>
        </div>
    `

    
}


