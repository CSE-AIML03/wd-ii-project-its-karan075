const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function isArmstrong(num) {
    const numStr = num.toString();
    const numDigits = numStr.length;
    let sum = 0;
    
    for (let i = 0; i < numDigits; i++) {
        const digit = parseInt(numStr[i]);
        sum += Math.pow(digit, numDigits);
    }
    
    return sum === num;
}


rl.question('Enter a number to check: ', (answer) => {
    const number = parseInt(answer);

    
    if (isNaN(number)) {
        console.log("❌ Error: Please enter a valid number!");
    } else {
        if (isArmstrong(number)) {
            console.log(`✅ ${number} is an Armstrong number.`);
        } else {
            console.log(`❌ ${number} is NOT an Armstrong number.`);
        }
    }
    
    
    rl.close();
});