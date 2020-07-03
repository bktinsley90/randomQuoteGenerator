/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// my attempt at changeing the bakground color
function rgbRandom(){
  let random = Math.floor(Math.random() * 256);
  return random;
}
function bodyChange() {
let newColor = document.getElementsByTagName('body')[0].style.backgroundColor = `rgb(${rgbRandom()}, ${rgbRandom()}, ${rgbRandom()})`

return newColor
}

/*** 
 * `quotes` array 
***/
let quotes = [
  { quote: "If you don’t like something, change it.  If you can’t change it, change your attitude.", source: "Maya Angelou" },
  { quote: "Find the good. It’s all around you. Find it, showcase it and you’ll start believing in it.", source: "Jesse Owens" },
  { quote: "Every time you state what you want or believe, you’re the first to hear it. It’s a message to both you and others about what you think is possible. Don’t put a ceiling on yourself.", source: "Oprah Winfrey" },
  { quote: "You can’t make decisions based on fear and the possibility of what might happen.", source: "Michelle Obama" },
  { quote: "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.", source: "Harriet Tubman" },
  { quote: "What you’re thinking is what you’re becoming.", source: "Muhammad Ali" },
  { quote: "I have learned over the years that when one’s mind is made up, this diminishes fear; knowing what must be done does away with fear.", source: "Rosa Parks" },
  { quote: "The secret of life is to have no fear; it’s the only way to function.", source: "Stokely Carmichael" },
  { quote: "Instead of looking at the past, I put myself ahead twenty years and try to look at what I need to do now in order to get there then.", source: "Diana Ross" },
  { quote: "I have discovered in life that there are ways of getting almost anywhere you want to go, if you really want to go.", source: "Langston Hughes" },
  { quote: "If I didn’t define myself for myself, I would be crunched into other people’s fantasies for me and eaten alive.", source: "Audre Lorde" },
  { quote: "You are no better than anyone else, and no one is better than you.", source: "Katherine Johnson" },
  { quote: "I don’t have any time to stay up all night worrying about what someone who doesn’t love me has to say about me.", source: "Viola Davis" },
  { quote: "Magic lies in challenging what seems impossible.", source: "Carol Moseley Braun" },
  { quote: "“You can’t separate peace from freedom because no one can be at peace unless he has his freedom.” ", source: "Malcolm X", citation: "Prospects for Freedom", year: 1965 }
]

/***
 * `getRandomQuote` function
 * this is generating a random number from the array of objects and then returning the associated object
***/
function getRandomQuote(quotes) {
  let random = Math.ceil(Math.random() * quotes.length)
  // let randomQ = quotes[random].quote + quotes[random].source decided to change this after reading the instructions
  return quotes[random]
}

// console.log(getRandomQuote(quotes)) test returns random quote + source

/***
 * `printQuote` function
***/
let changeQ = setInterval(printQuote, 5000);

function printQuote() {
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
// through lots of headache and google search i figured this out. IDC what grade i get i'm proud :)


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);