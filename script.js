window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});




document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = navLinks.querySelectorAll('a');

    hamburgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            }
        });
    });
});







document.addEventListener('mousemove', function (e) {
    const customCursor = document.getElementById('customCursor');
    customCursor.style.left = e.pageX + 'px';
    customCursor.style.top = e.pageY + 'px';

    createNeonSquare(e.pageX, e.pageY);
});

function createNeonSquare(x, y) {
    const neonSquare = document.createElement('div');
    neonSquare.className = 'neon-square';
    neonSquare.style.left = x + 'px';
    neonSquare.style.top = y + 'px';
    document.body.appendChild(neonSquare);

    neonSquare.addEventListener('animationend', () => {
        neonSquare.remove();
    });
}



document.addEventListener('DOMContentLoaded', () => {
    const burgers = document.querySelectorAll('.burger-details');
    if (burgers.length > 0) {
        burgers[0].classList.add('active');
        burgers[0].style.display = 'block';
    }
});
// Array to hold the burger data
const burgers = [
    {
        image: 'images/main img .jpg',
        title: 'Flavours of India McVeggie Burger',
        description: 'Introducing your favourite McVeggie Burger with the new Flavours of India sauce, made with chillies sourced from across different parts of India',
        price: 'Rs150'
    },
    {
        image: 'images/maharaja-mac-veg.png',
        title: 'Maharaja-Veg_Burger',
        description: 'A double-decker toasted Maharaja bun sandwiched with one layer of corn & cheese patty; crunchy iceberg lettuce; shredded onion; and a slice of cheese.',
        price: 'Rs200'
    },
    {
        image: 'images/Smashburger.jpg',
        title: 'Classic Chicken Burger',
        description: 'Enjoy the classic taste of our Chicken Burger with crispy chicken patty, lettuce, and mayo.',
        price: 'Rs250'
    },
    {
        image: 'images/burger2.jpg',
        title: 'Smashburger',
        description: 'These delicious tacos have all the flavors and ingredients of McDonald’s famous burger and special sauce loaded into small tortillas instead of hamburger buns. Perfect for a tasty taco Tuesday or any weeknight meal!',
        price: 'Rs310'
    },
];

let currentIndex = 0;
let transitioning = false;

function showNextBurger() {
    if (transitioning) return; // Prevent multiple clicks during transition

    transitioning = true;
    const menuImage = document.getElementById('menuImage');
    const burgerDetails = document.querySelector('.box1 .burger-details.active');

    // Start reveal-out transition
    menuImage.classList.add('reveal-out');

    // Wait for the reveal-out transition to complete before changing the content
    setTimeout(() => {
        // Update the image
        currentIndex = (currentIndex + 1) % burgers.length; // Cycle through the array
        menuImage.src = burgers[currentIndex].image;

        // Update the text content in box1
        burgerDetails.classList.remove('active');
        burgerDetails.style.display = 'none';

        const newBurgerDetails = document.querySelector(`#burger${currentIndex + 1}`);
        newBurgerDetails.querySelector('h5').textContent = burgers[currentIndex].title;
        newBurgerDetails.querySelector('h6').textContent = burgers[currentIndex].description;
        newBurgerDetails.querySelector('h2').textContent = burgers[currentIndex].price;
        newBurgerDetails.classList.add('active');
        newBurgerDetails.style.display = 'block';

        // Start reveal-in transition
        menuImage.classList.remove('reveal-out');
        menuImage.classList.add('reveal-in');

        // Remove reveal-in class after animation
        setTimeout(() => {
            menuImage.classList.remove('reveal-in');
            transitioning = false; // Allow next transition
        }, 500); // Duration should match the CSS animation time
    }, 500); // Duration should match the CSS animation time
}

document.addEventListener('DOMContentLoaded', () => {
    const burgers = document.querySelectorAll('.burger-details');
    if (burgers.length > 0) {
        burgers[0].classList.add('active');
        burgers[0].style.display = 'block';
    }
});




