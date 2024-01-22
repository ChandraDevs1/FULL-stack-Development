const mytext = document.getElementById("mytext");

const mysubmit = document.getElementById("mysubmit");

const resultelement = document.getElementById("resultelement");

let age;

mysubmit.onclick = function(){
    age = mytext.value;
    age = Number(age);
    if(age < 100){
        console.log(`You are too old to Enter this site`)
        resultelement.textContent = `You are too old to Enter this site`;
    }
    else if(age <18){
        console.log(`You are old enough to enter this site`)
        resultelement.textContent =`You are old enough to enter this site`;
    }
    else if(age < 50){
        console.log(`You are Can Enter it..`)
        resultelement.textContent =`You are Can Enter it..`;
    }
    else if(age<18){
        console.log(`You can Enter with Adhar Card`)
        resultelement.textContent =`You can Enter with Adhar Card`;
    }
    else{
    
            resultelement.textContent =`NAN Cs50`; 
        }
    }
