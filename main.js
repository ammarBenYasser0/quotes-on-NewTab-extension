function getQuote() {
  return new Promise((reslove) => {
    fetch("https://api.quotable.io/random", {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        reslove(data);
      });
  });
}

async function displayQuote() {
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");

  const quote = await getQuote();
  quoteElement.innerHTML = quote.content;
  authorElement.innerHTML = quote.author;
}

displayQuote();
