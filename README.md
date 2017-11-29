# Currency Converter
A currency converter website, which will allow users to specify an amount in GBP (Great British Pounds), and to convert that amount to a specified currency.
Using the XMLHttpRequest constructor The website uses a GET request to the [Fixer.io](http://fixer.io/) API in order to retrieve up-to-date exchange rates.

Using the `onreadystatechange` method to ensure the server has finished responding before a response is handled.  Once the server has successfully retrieved the JSON from the API it is parsed into a JavaScript object and the exchange rates are  extracted. The user inputs the amount they want to convert and selects the relevant currency from a dropdown menu which has the rates appended. When the user submits the form a method `convertTo` works out the calculated rate and this is passed back to the user. AN Error message is presented if nothing is entered when the form is submitted.

Bootstrap has been used to style the application.

# Why Created?
Assignment for week 6 of MCRcodes to embed learning on APIs, AJAX requests and extracting data from a JSON.

# Set Up and Running
Clone this repository.

To run open index.html in your browser