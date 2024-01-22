
const checkbox = document.getElementById("checkbox");
const visaBtn = document.getElementById("visaBtn");
const paytamBtn = document.getElementById("paytamBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mysubmit = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

mysubmit.onclick = function(){

    if(checkbox.checked){
        subresult.textContent = "You are Subscribe"
    }
    else{
        subresult.textContent = "You are not Subscribe"

    }

    if(visaBtn.checked){
        paymentresult.textContent = "You are Paying With Visa";
    }
    else if(paytamBtn.checked){
        paymentresult.textContent = "You are Paying With Paytam";
    }
    else{
        paymentresult.textContent = "You are Paying With PayPal"; 
    }
}