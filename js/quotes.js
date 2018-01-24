$(document).ready(function() {
  // set url variable
  var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

  //define function to get new quote
  var newQuote = function(data) {
    var text = data.quoteText;
    var author = data.quoteAuthor;
    $(".quote-text").html("\"" + text + "\"");
    var twitterQuote = "https://twitter.com/intent/tweet?text=" + "\"" + text + "\" " + author + " via @JamesRiall";
    if (author === '') {
      author = 'Unknown';
    }
    $(".quote-author").text(author);
    $(".twitter-share-button").attr("href", twitterQuote);
  };

//call new quote on page load
  $.getJSON(url, newQuote);

//get new quote on button click
  $("#quote-button").click(function() {
    $.getJSON(url, newQuote);
  });
});