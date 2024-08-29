let container = document.querySelector('.container');
let button = document.querySelector('button');
let nums = document.querySelectorAll('number');
const list = document.querySelector('.list');

// makes an array for lottery numbers, not including the mega number
function makeArray() {
    let numbers = [];

    for (let i = 0; i < 5; i++) {
        let add = true;
        let random = Math.floor(Math.random() * 70 + 1);
        
            // check for duplicates
            for (let j = 0; j < 5; j++) {
                if (numbers[j] == random) {
                    add = false;
                }
            }

        // if no duplicates, add the random number to the array
        // if duplicate, don't go to next iteration and go back to for loop to generate new number
        if(add) {
            numbers.push(random);
        }
        else {
            i--;
        }
    }

    // sort numbers in array from lowest to highest like the lottery
    numbers.sort((a,b) => a - b);

    return numbers;
}

// generates template strings for the five numbers from the array and one mega number
function generate(numbers) {
    let html = ``

    // generate template for each number in the array
    numbers.forEach(number => {
        html += `<span class="number-bg">${number}</span>`;
    });

    // generate template for mega number at the end
    let mega = Math.floor(Math.random() * 25) + 1;
    html += `<span class="mega">${mega}</span>`;

    // inject HTML template into list
    list.innerHTML += `<li class="list">${html}</li>`
}



let counter = 0;

button.addEventListener('click', ()=> {
    
    generate(makeArray());
    counter++;

    // displays 5 lottery tickets then clears back to 1
    if(counter > 5) {
        list.innerHTML = `<div class="wrapper" style="background-color: white"></div>`
        generate(makeArray());
        counter = 1;
    }
});