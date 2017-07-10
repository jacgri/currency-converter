var currencyConverter = new CurrencyConverter()
var request = new XMLHttpRequest()

request.open('GET','http://api.fixer.io/latest?base=GBP')

request.onreadystatechange = function () {
    if (this.readyState ===4 && this.status === 200){
    var responseJSON = JSON.parse(this.response)
    var rates = responseJSON.rates
    
    currencyConverter.setRates(rates)

        for (var rate in rates){
            $('#rates').append('<li><strong>' + rate + ':</strong> ' + rates[rate] + '</li>')
        }
        
        var amount = prompt('How much GBP are you looking to convert?')
        var currency = prompt('What currency would you like to convert to(enter 3 digit code in caps e.g. EUR)?')
        var convertedAmount = currencyConverter.convertTo(currency, amount)
        alert(amount + ' GBP in ' + currency + ' is ' + Number(convertedAmount).toFixed(2))
    }
}
request.send()
