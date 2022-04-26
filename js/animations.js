const INCREASE_NUMBER_ANIMATION_SPEED = 50;
let animationInited = false;

function increaseNumberAnimationStep(i, element, endNumber) {
    if (i <= endNumber) {
        if (i === endNumber) {
            element.innerText = i + '+';
        } else {
            element.innerText = i;
        }
        i += 100;

        setTimeout(function () {
            increaseNumberAnimationStep(i, element, endNumber);
        }, INCREASE_NUMBER_ANIMATION_SPEED);
    }
}

function initIncreaseNumberAnimation() {

    let element = document.querySelector(".features__clients-count");


    increaseNumberAnimationStep(0, element, 5000);
}
// initIncreaseNumberAnimation();



// 
document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
    if (event.target.value === 'other') {
        let formContainer = document.createElement("div");
        formContainer.classList.add("form__group", "form__other-input");

        let input = document.createElement("input");
        input.placeholder = "Введите ваш вариант";
        input.type = "text";
        formContainer.appendChild(input);
        document.querySelector("#form form").insertBefore(formContainer, document.querySelector('.form__submit'));

    } else {
        let otherInput = document.querySelector(".form__other-input");
        if (Boolean(otherInput)) {
            otherInput.parentElement.removeChild(otherInput);
        }
    }
});
// 

function updateScroll() {
    let header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.className = "header__scrolled";
    } else {
        if (header.className === "header__scrolled") {
            header.className = ""
        }
    }
    let windowBottomPosition = window.scrollY + window.innerHeight;
    let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
    if (windowBottomPosition >= countElementPosition && !animationInited) {
        animationInited = true;
        initIncreaseNumberAnimation();
    }
};

window.addEventListener("scroll", updateScroll)

//

function addSmoothScroll(anchor) {
    anchor.addEventListener('click', onLinkClick);
      

  }

  function onLinkClick(event) {
    event.preventDefault();
   
    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  }

let aCollection=document.querySelectorAll('[href^="#"]');
aCollection.forEach(element => addSmoothScroll(element));

