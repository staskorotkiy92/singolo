const MENU = document.querySelector('.navbar__list');
const BUTTON = document.getElementById('submit');
const CLOSE_BUTTON = document.getElementById('close_btn');
const FORM = document.getElementById('order-form');

//Navigation menu
/*
MENU.addEventListener('click', function (event) {
    MENU.querySelectorAll('li').forEach((item) => {
        item.classList.remove('active');
    });
    event.target.closest('.navbar__item').classList.add('active');
});
*/

document.addEventListener('scroll', onScroll);

function onScroll(event) {
    let currentPos = window.scrollY;
    let sections = document.querySelectorAll('.main-part__item');
    let links = document.querySelectorAll('.navbar a');
    console.log(sections);
    console.log(links);
    sections.forEach(item => {
        if (item.offsetTop <= (currentPos + 95) && (item.offsetTop + item.offsetHeight) > currentPos) {
            links.forEach(link => {
                link.classList.remove('active');
                if (item.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            });
        }
    });
}


//        Form processing
function submitAction(event) {
    event.preventDefault();
    let subject;
    let description;
    if (!document.getElementById('subject').value) {
        subject = 'Без темы';
    }
    else {
        subject = 'Тема: ' + document.getElementById('subject').value;
    }
    if (!document.getElementById('desc').value) {
        description = 'Без описания';
    }
    else {
        description = 'Описание: ' + document.getElementById('desc').value;
    }
    document.getElementById('theme').innerText = subject;
    document.getElementById('description').innerText = description;
    document.getElementById('msg_after_submit').classList.remove('hidden');
}

FORM.addEventListener('submit', submitAction);

CLOSE_BUTTON.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('order-form').reset();
    document.getElementById('msg_after_submit').classList.add('hidden');
});

// Slider

let isEnabled = true;
let slideItems = document.querySelectorAll('.slider-item');
let currentItem = 0;

function changeCurrentSlideItem(n) {
    currentItem = (n + slideItems.length) % slideItems.length;
}

function hideSlideItem(direction) {
    isEnabled = false;
    slideItems[currentItem].classList.add(direction);
    slideItems[currentItem].addEventListener('animationend', function () {
        this.classList.remove('slide-item_active', direction);
    });
}

function showSlideItem(direction) {
    slideItems[currentItem].classList.add('slide-item_next', direction);
    slideItems[currentItem].addEventListener('animationend', function () {
        this.classList.remove('slide-item_next', direction);
        this.classList.add('slide-item_active');
        isEnabled = true;
    });
}

function previousSlideItem(n) {
    hideSlideItem('to-left');
    changeCurrentSlideItem(n - 1);
    showSlideItem('from-right');
}

function nextSlideItem(n) {
    hideSlideItem('to-right');
    changeCurrentSlideItem(n + 1);
    showSlideItem('from-left');
}

document.querySelector('.slider__arrow_left').addEventListener('click', function (event) {
    if (isEnabled) {
        previousSlideItem(currentItem);
    }
});

document.querySelector('.slider__arrow_right').addEventListener('click', function (event) {
    if (isEnabled) {
        nextSlideItem(currentItem);
    }
});





/* BUTTON.addEventListener('click', function (event) {
   // if (!document.getElementById('name').required.value === true)  return;

   event.preventDefault();
    let subject;
    let description;
    if (!document.getElementById('subject').value) {
        subject = 'Без темы';
    }
    else {
        subject = 'Тема: ' + document.getElementById('subject').value;
    }
    if (!document.getElementById('desc').value) {
        description = 'Без описания';
    }
    else {
        description = 'Описание: ' + document.getElementById('desc').value;
    }
    document.getElementById('theme').innerText = subject;
    document.getElementById('description').innerText = description;
    document.getElementById('msg_after_submit').classList.remove('hidden');

});
*/
