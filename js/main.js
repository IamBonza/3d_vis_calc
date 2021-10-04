const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input');
const rBstyle = document.querySelectorAll("input[name='style']");
const rBstyle1 = document.querySelector('.radio-1');
const rBstyle2 = document.querySelector('.radio-2');
const rBstyle3 = document.querySelector('.radio-3');
const rBbuilding = document.querySelectorAll("input[name='building']");
const rBrooms = document.querySelectorAll("input[name='rooms']");
const checkBoxs = document.querySelectorAll('input[type="checkbox"]');
const allSliders = document.querySelectorAll('.slider-wrapper');
let img = document.querySelector('img');



let basePrice = 400;


const totalPriceElement = document.querySelector('#total-price');


squareRange.addEventListener('input', () => {
    squareInput.value = squareRange.value
})

squareInput.addEventListener('input', () => {
    squareRange.value = squareInput.value;
})

function calc() {

    // allSliders.forEach(item => {
    //     item.style.display = 'none';
    // });

    $('.slider-wrapper').css('display', 'none');



    if (rBstyle1.checked) {
        document.querySelector('.slider-wrapper_1').style.display = 'block';
    }

    if (rBstyle2.checked) {
        document.querySelector('.slider-wrapper_2').style.display = 'block';
    }
    if (rBstyle3.checked) {
        document.querySelector('.slider-wrapper_3').style.display = 'block';
    }

    $('.slider-wrapper:visible').slick('setPosition')

    for (let item of rBstyle) {
        if (item.checked) {
            basePrice = +item.value;
        }
    }

    let totalPrice = basePrice * +squareRange.value

    const formatter = new Intl.NumberFormat('ru');

    totalPriceElement.innerText = formatter.format(totalPrice);
}

$('.slider-wrapper').slick();

calc();


for (let item of inputs) {
    item.addEventListener('input', () => {
        calc();

    })
}


