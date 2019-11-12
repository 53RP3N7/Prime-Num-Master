const readlineSync = require('readline-sync');

const util = require("./myUtils.js");

let num1, num2; 

let input = false;

// Ask for two  positive values. 

while (!input) 

{
    
    num1 = readlineSync.question(" Input the first number: ");
    
    num2 = readlineSync.question(" Input the second number: ");


    if ((!isNaN(num1) && num1 > 0) && (!isNaN(num2) && num2 > 0))
    
    {
        
        num1 *= 1;
        
        num2 *= 1;
        
        num1 = Math.min(num1, num2);
        
        num2 = Math.max(num1, num2);

        
        input = true;
    } 
    
    else 
    
    {
        
        console.log("One of the entered numbers, is not a positive");
        
    }
    
}

let primeNums = [];

// Check if numbers in the range are positive and push it to array

for (let i = num1; i <= num2; i++) 

{
    if (util.isPrime(i)) 
    
    {
        primeNums.push(i);
        
    }
    
}

util.printAll(primeNums); // Prints all the elements of the array
