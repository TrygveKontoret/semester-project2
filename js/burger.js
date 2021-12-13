

const burger = document.querySelector('.burger');
const burgerNav = document.querySelector('.burgerNav');


burger.addEventListener('click', () => {
    burger.classList.toggle("change");
    if (burgerNav.style.display === 'block') {
            burgerNav.style.display = 'none';
    }
    else {
        burgerNav.style.display = 'block';
    }

})
