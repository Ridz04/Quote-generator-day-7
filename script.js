const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote(api_url);

function tweet(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.innerText} - ${author.innerText}`;
    window.open(twitterUrl,"Tweet Window","width=600,height=300");
}