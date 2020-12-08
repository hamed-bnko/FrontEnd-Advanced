// 1. Navigation by DOM elements - done
// 2. Add event listener - done
// 3. Create data structure for quotes
// 4. Implement business logic for random quotes
// 5. Display random quotes

var p = document.querySelector('p');
var btn = document.querySelector('button');
var quotes = [ 
    "Navigation by DOM elements - done",
    "Add event listener - done",
    "Create data structure for quotes",
    "Implement business logic for random quotes",
    "Display random quotes"
]
var randomNum 

function getRandomQuote() {

randomNum = +new Date().getSeconds().toString()[1]
console.log(randomNum)
 if (randomNum >= quotes.length ) {
    p.innerText = quotes[randomNum - quotes.length]
 }else {
    p.innerText = quotes[randomNum]
 }   

}


btn.addEventListener('click', getRandomQuote);