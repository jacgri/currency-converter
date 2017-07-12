$(document).ready(function (){
$('#js-convert-gbp').submit(function(event){
    event.preventDefault()
    var target = event.target
    var amount = Number(target.amount.value)
    var currency = target.currency.value
    
    var convertedAmount = currencyConverter.convertTo(currency, amount)
    $("#convertedRate").html(function(){
    return(amount + ' GBP in ' + currency + ' is ' + Number(convertedAmount).toFixed(2))

    })
})
})