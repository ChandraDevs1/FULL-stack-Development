//  Counter Program

const decreaseBtn = document.getElementById("decreaseBtn");

const resetBtn = document.getElementById("resetBtn");

const increaseBtn = document.getElementById("increaseBtn");

const countlebal = document.getElementById("countlabel");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countlebal.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countlebal.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countlebal.textContent = count;
}