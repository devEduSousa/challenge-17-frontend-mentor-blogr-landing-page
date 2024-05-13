const openIconImg = document.querySelector('.hamburger-icon');
const closeIconImg = document.querySelector('.x-icon');
const menuMobileNav = document.querySelector('.menu-mobile');

const titleMobileDiv = document.querySelectorAll('.title-option');
const arrowsMobileImg = document.querySelectorAll('.title-option img');
const suboptionsMobileDiv = document.querySelectorAll('.suboptions');

const titleDesktopDiv = document.querySelectorAll('.title-item');
const arrowsDesktopImg = document.querySelectorAll('.title-item img');
const suboptionsDesktopDiv = document.querySelectorAll('.subitems');

function toggleMenuIcon() {
    openIconImg.classList.toggle('hide');
    closeIconImg.classList.toggle('hide');
    menuMobileNav.classList.toggle('slide');
};

function rotateArrows(arrows) {
    arrows.forEach((arrow) => {
        if(arrow.classList.contains('rotate')) arrow.classList.remove('rotate');
    });
};

function hideSuboptions(options) {
    options.forEach((option) => {
        if(!option.classList.contains('hide')) option.classList.add('hide');
    });
};

function showChosenOption(index, options, arrows) {
    options[index].classList.remove('hide');
    arrows[index].classList.add('rotate');
};

function closeChosenOption(index, options, arrows) {
    options[index].classList.add('hide');
    arrows[index].classList.remove('rotate');
}

function condition(index, options, arrows) {
   return !options[index].classList.contains('hide') && arrows[index].classList.contains('rotate');
}

openIconImg.addEventListener('click', () => {
    document.getElementById('hero-container').style.overflow = 'visible';
    rotateArrows(arrowsMobileImg);
    hideSuboptions(suboptionsMobileDiv);
    toggleMenuIcon();
});

closeIconImg.addEventListener('click', () => {
    document.getElementById('hero-container').style.overflow = 'hidden';
    toggleMenuIcon();
});

titleMobileDiv.forEach((item,index) => {
    item.addEventListener('click', () => {
        if(condition(index, suboptionsMobileDiv, arrowsMobileImg)) {
            closeChosenOption(index, suboptionsMobileDiv, arrowsMobileImg)
        } else {
            rotateArrows(arrowsMobileImg);
            hideSuboptions(suboptionsMobileDiv);
            showChosenOption(index, suboptionsMobileDiv, arrowsMobileImg);
        };
    });
});

titleDesktopDiv.forEach((item,index) => {
    item.addEventListener('click', () => {
        if(condition(index, suboptionsDesktopDiv, arrowsDesktopImg)) {
            closeChosenOption(index, suboptionsDesktopDiv, arrowsDesktopImg)
        } else {
            rotateArrows(arrowsDesktopImg);
            hideSuboptions(suboptionsDesktopDiv);
            showChosenOption(index, suboptionsDesktopDiv, arrowsDesktopImg);
        };
    });
});