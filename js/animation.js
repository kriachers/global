let lastAnimation = document.querySelector('.main-graphics-counties__five');
let firstAnimation = document.querySelector('.main-graphics-counties__first');
let secondAnimation = document.querySelector('.main-graphics-counties__second');
let thirdAnimation = document.querySelector('.main-graphics-counties__third');
let fourAnimation = document.querySelector('.main-graphics-counties__four');
let mainAnimation = document.querySelector('.main-graphic__animation')

// animation 
lastAnimation.addEventListener('animationend', () => {
    mainAnimation.classList.add('rotate');
})

// burger menu
let hamburgerButton = document.querySelector('.hamburger');
let hamburgerMenu = document.querySelector('.hamburger__menu');
let HamburgerIcon = document.querySelector('.hamburger')

hamburgerButton.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('active');
    HamburgerIcon.classList.toggle('active');
})

// search
let inputData = document.querySelector('.main-wrapper-search__input');
let inputBtn = document.querySelector('.main-wrapper-search__button');
let warning = document.querySelector('.main__warning');
let reg = /[!@#\$%\^&\*()]/g;

inputData.oninput = function() {
    this.value = this.value.replace(reg, '')

    const textLength = inputData.value.length;
    if (textLength > 4 & textLength < 10) {
        inputBtn.classList.remove('disabled')
        warning.classList.remove('active')
    } else { 
        inputBtn.classList.add('disabled')
        warning.classList.add('active')
    }    
}

