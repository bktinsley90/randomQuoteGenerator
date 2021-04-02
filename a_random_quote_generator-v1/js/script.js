/**
 * Functions to change the background color
 */
function rgbRandom() {
  let random = Math.floor(Math.random() * 256);
  return random;
}

function bodyChange() {
  let newColor = document.getElementsByTagName('body')[0].style.backgroundColor = `rgb(${rgbRandom()}, ${rgbRandom()}, ${rgbRandom()})`
  return newColor
}
/**
 * Importing array
 */
import { quotes } from './quotes.js'

/***
 * `getRandomQuote` function
 * this is generating a random number from the array of objects and then returning the associated object
 * @params quotes array
 ***/
function getRandomQuote(quotes) {
  let random = Math.ceil(Math.random() * quotes.length)
  return quotes[random]
}


/***
 * `printQuote` function
 * updated setinterval
 ***/
setInterval(printQuote, 5000);

function printQuote() {
  //to change the color automatically 
  bodyChange()
  // call the getRandomQuote function
  let randomQ = getRandomQuote(quotes);
  // use the returned quote object to build a string of HTML and quote properties
  let HTML = `<p class="quote">${randomQ.quote} </p> 
    <p class="source">${randomQ.source}`

  if ('citation' in randomQ === true) {
    HTML += `<span class="citation"> ${randomQ.citation}</span>`
  }
  if ('year' in randomQ === true) {
    HTML += `<span class="year"> ${randomQ.year}</span>`
  }
  HTML += `</p>`
  // then use that string to display a random quote in the browser.
  return document.getElementById('quote-box').innerHTML = HTML
}
/***
 * click event listener for the print quote button
 *
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);