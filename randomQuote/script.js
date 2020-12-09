// 1. Navigation by DOM elements - done
// 2. Add event listener - done
// 3. Create data structure for quotes -done
// 4. Implement business logic for random quotes -done
// 5. Display random quotes -done

var p = document.querySelector('p');
var btn = document.querySelector('button');
var quotes = [ 
    "Navigation by DOM elements - done",
    "Add event listener - done",
    "Create data structure for quotes",
    "Implement business logic for random quotes",
    "Display random quotes"
]
var randomNum ;

function getRandomQuote() {

randomNum = +new Date().getSeconds().toString()[1]
 if (randomNum >= quotes.length ) {
    p.innerText = quotes[randomNum - quotes.length];
 }else {
    p.innerText = quotes[randomNum];
 }   
}

btn.addEventListener('click', getRandomQuote);