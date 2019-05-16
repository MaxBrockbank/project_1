/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Here is the array of quote objects that will be pulled from at random.
***/

let quotes = [
  {
    quote:'Life\'s not about how hard of a hit you can give... it\'s about how many you can take, and still keep moving forward.',
    source:'Sylvester Stallone',
    citation:'Rocky Balboa ',
    year: 2006

  },
  {
    quote:'Woman weaken knees',
    source:'Burges Meredith',
    citation:'Rocky',
    year: 1976

  },
  {
    quote:' One step at a time. One punch at a time. One round at a time.',
    source:'Sylvester Stallone',
    citation:'Creed',
    year: 2015

  },
  {
    quote:' I\'ve been fighting my whole life. That\'s not a choice for me. Every punch I\'ve ever thrown has been on my own. Nobody\'s shown me how to do this. I\'m ready. ',
    source:'Micheal B Jordan',
    citation:'Creed',
    year: 2015

  },
  {
    quote:'He’s not a human. He’s like a piece of iron. ',
    source:'Dolph Lundgren ',
    citation:'Rocky IV',
    year: 1985

  },
]


/***
This function will generate a ranodom number, and then use that number to return the quote at that index number in the quotePool array.
***/

function getRandomQuote(){
  let randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
  return randomQuote;
}


/***
This function will call the getRandomQuote function, store that in the selectedQuote variable and then populate the html variable in the desired format and then get printed to the html doc.
***/
function printQuote(){
  let html = ' ';
  let selectedQuote = getRandomQuote();

  html+= '<p class="quote">' + selectedQuote.quote + '</p>';

  html+= '<p class="source">' + selectedQuote.source ;

  if(selectedQuote.citation){

    html+= '<span class="citation">' + selectedQuote.citation + '</span>'
  }

  if(selectedQuote.year){

    html+='<span class="year">' + selectedQuote.year + '</span>'
  };
  html+= '</p>'

 document.getElementById("quote-box").innerHTML = html;
}

printQuote();

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
