const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //Nav Toggle
        nav.classList.toggle('nav-active');

        //Animated Links
        navLinks.forEach((link, index) => {
            if (link.getElementsByClassName.animation) {
                link.style.animation = '';
            }
            else {
                link.getElementsByClassName.animation = `navLinkFade 0.5s ease forwards $(index /5 = 1.5}s`;
            }
            console.log(index / 5);
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });

}

navSlide();
