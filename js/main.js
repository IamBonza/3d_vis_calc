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
let img = document.querySelector('img');
console.log(img.attributes.src)
console.log(rBstyle2)


let basePrice = 400;


const totalPriceElement = document.querySelector('#total-price');


squareRange.addEventListener('input', () => {
    squareInput.value = squareRange.value
})

squareInput.addEventListener('input', () => {
    squareRange.value = squareInput.value;
})

function calc() {

    if (rBstyle1.checked) {
        img.attributes.src.value = './images/minimal.jpg';
    }

    if (rBstyle2.checked) {
        img.attributes.src.value = './images/loft.jpg';
    }
    if (rBstyle3.checked) {
        img.attributes.src.value = './images/classic.jpg';
    }

    for (let item of rBstyle) {
        if (item.checked) {
            basePrice = +item.value;
        }
    }

    let totalPrice = basePrice * +squareRange.value



    // for (let item of rBtype) {
    //     if (item.checked) {
    //         totalPrice *= +item.value;
    //     }
    // }
    // for (let item of rBbuilding) {
    //     if (item.checked) {
    //         totalPrice *= +item.value;
    //     }
    // }
    // for (let item of rBrooms) {
    //     if (item.checked) {
    //         totalPrice *= +item.value;
    //     }
    // }
    // for (let item of checkBoxs) {
    //     if (item.checked) {
    //         totalPrice *= +item.value;
    //     }
    // }


    const formatter = new Intl.NumberFormat('ru');

    totalPriceElement.innerText = formatter.format(totalPrice);
}

calc();


for (let item of inputs) {
    item.addEventListener('input', () => {
        calc();

    })
}
