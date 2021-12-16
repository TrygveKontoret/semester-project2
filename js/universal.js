

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

});

const loggedOut = document.querySelector('.loggedOut');
const loggedIn = document.querySelector('.loggedIn');

const logged = () => {
    if (window.localStorage.getItem('user')) {
        loggedOut.style.display = 'none';
        loggedIn.style.display = 'flex';
    }

    else {
        loggedOut.style.display = 'flex';
        loggedIn.style.display = 'none';
    }

}

logged();

const loggedOutBurger = document.querySelector('.loggedOutBurger');
const loggedInBurger = document.querySelector('.loggedInBurger');

const loggedBurger = () => {
    if (window.localStorage.getItem('user')) {
        loggedOutBurger.style.display = 'none';
        loggedInBurger.style.display = 'flex';
    }

    else {
        loggedOutBurger.style.display = 'flex';
        loggedInBurger.style.display = 'none';
    }

}

loggedBurger();
