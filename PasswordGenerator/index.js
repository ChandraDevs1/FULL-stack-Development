 /* Random Password Generator */

 function generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolsChars = "!@#$%^&*()_+=-";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars :"";
    allowedChars += includeUppercase ? uppercaseChars:"";
    allowedChars += includeNumbers ? numberChars :"";
    allowedChars += includeSymbols ? symbolsChars:"";
  
    if(length <= 0){
        return`(Password length must be atleast 1 )`;
    }
    if(allowedChars.length === 0 ){
        return `(At least 1 set of Character needs to be Selected )`;
    }
    for(let i = 0 ; i < length ; i++){
        const RandomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[RandomIndex];
    }
    return password;
 }

 const passwordlength = 12;
 const includeLowercase = true;
 const includeUppercase = true;
 const includeNumbers = true;
 const includeSymbols = true;

const password = generatePassword(passwordlength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);

console.log(` Generated password: ${password}`);