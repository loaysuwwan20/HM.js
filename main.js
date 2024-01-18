
var registerForm = document.querySelector('form.registerForm');
var res = 0;

registerForm.onsubmit = function(event) {
    event.preventDefault();
    var elements = event.target.elements;
    var currency = elements['exchange'].value;
    var amount = elements['amount'].value;

    if (currency == 'USD') {
        res = amount * 0.26; // Assuming 0.26 is the conversion rate from Shekels to USD
        document.querySelector(".result").textContent = "Converted amount: " + res + " USD";
    }
    else if(currency == 'JOD'){
        res = amount *0.19; // Assuming 0.26 is the conversion rate from Shekels to USD
        document.querySelector(".result").textContent = "Converted amount: " + res + " JOD";

    }else{
        document.querySelector(".result").textContent = "Converted amount: " + amount + " ILS";


    }
}