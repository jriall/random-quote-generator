# Random-Quote-Generator

https://jamesriall.co.uk/local-weather-viewer/

## The Project

A Random Quote Generator built as part of the Free Code Camp Front End Curriculum. First utilisation of RESTful web APIs - pulling random quotes from an API onto the page and allowing the user to tweet the author and quote as well as generate a new random quote.

![ScreenShot](http://res.cloudinary.com/jamesriall/image/upload/v1513605316/random-quote-image_z1tsno.png)

## The Logic

The Forasmic API generates a new famous quote along with author at random from a very large pool. When the page loads I use jQuery's getJSON method to pull a random quote from the API and store it as a variable available to display on the page. The two buttons on the page allow for users to click to generate a new quote (calls the API again, overwrites the variables and changes the quote and author HTML on the page), as well as a button which allows users to generate a message to tweet.

Built in April 2017.
