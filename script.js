let container = document.querySelector('.container');
let button = document.querySelector('button');
let nums = document.querySelectorAll('number');
    // const wrapper = document.querySelector('.wrapper');


function generate() {
    let numbers = [];
    let html = '';
    for (let i = 0; i < 5; i++) {
        let add = true;
        let random = Math.floor(Math.random() * 70) + 1;
        for (let j = 0; j < 70; j++) {
            if (numbers[j] == random) {
                add = false;
            }
        }
        if(add) {
            numbers.push(random);
            container.innerHTML += `<div class="number">${random}</div>`
        }
        else {
            i--;
        }
    }

    let mega = Math.floor(Math.random() * 25) + 1;
    numbers.push(mega);
    console.log(numbers);
    container.innerHTML += `<div class="mega number">${mega}</div>
                            <div class="space"></div>`

}

button.addEventListener('click', ()=> {

    container.innerHTML = `<div class="wrapper" style="background-color: white"></div>`


    generate();

})


// container.innerHTML += `<div class="mega number">${mega}</div><br>
//                             <div class="space"></div>`
// container = document.createElement("div");
// container.className = "container";
// document.body.appendChild(container);