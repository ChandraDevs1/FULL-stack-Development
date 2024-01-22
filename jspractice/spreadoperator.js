let num = [1,2,3,4,5]
console.log(Math.max(...num));
console.log(Math.min(...num));

function sum(...n){
    let res = 0;
   
    for(let i of n){
        res+=i;
   }
    return res;
}

console.log(sum(45,67,54,23,21,984,6345,3434));

function avg(...num){
    let res = 0;
    for(let i of num){
        res += i;
    }
    return res / num.length;
}

const total = avg(75,100,99,85,50);

console.log(total);