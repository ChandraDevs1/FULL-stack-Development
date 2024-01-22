//   Number guessing Game

const min = 1;
const max = 100;

const ans = Math.floor(Math.random()*(max-min+1))+min;



let attemps = 0;
let guess;
let running = true;

while(running ){

    guess  =window.prompt(`Guess a number between ${max} - ${min}`)
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert(`Please enter a vaild number`);
    }
    else if(guess < min || guess > max){
   window.alert(`Please enter a vaild Number`)
    }
    else {
        attemps++;
        if(guess < ans){
            window.alert(`too low try again`);
        }
        else if(guess > ans){
      window.alert(`Too high! Try Again`);
    }
    else{
        window.alert(`correct! the answer was ${ans}. it took you many ${attemps} plz correct it..`)
        running  = false; 
    }
}
   
}