// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var count = [];

var quotes = [
{
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    source: "Franklin D. Roosevelt"
},
{
    quote:"It is better to be feared than loved, if you cannot be both.",
    source: "Niccolo Machiavelli"
},
{
    quote:"The only journey is the one within.",
    source:"Rainer Maria Rilke"
},
{
    quote:"Good judgment comes from experience, and a lot of that comes from bad judgment.",
    source:"Will Rogers"
},
{
    quote:"Think in the morning. Act in the noon. Eat in the evening. Sleep in the night.",
    source:"William Blake"
},
{
    quote:"Life without love is like a tree without blossoms or fruit.",
    source:"Khalil Gibran"
},
{
    quote:"It is far better to be alone, than to be in bad company.",
    source:"George Washington"
}
];

function getRandomQuote() {
  var ranquote = Math.floor(Math.random() * quotes.length);

  var splquote = quotes.splice(ranquote, 1)[0];
  count.push(splquote);
  if (quotes.length === 0) {
  quotes = count;
  count = [];
  }

  return splquote;
}

function printQuote(show) {

   var transfer = document.getElementById('quote-box');
   transfer.innerHTML = show;

   var retquote = getRandomQuote();
   quotedis = '<p class="quote">' + retquote.quote + '</p>';
   quotedis += '<p class="source">' + retquote.source;

   printQuote(quotedis)
 }