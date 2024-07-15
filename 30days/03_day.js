// Day 3 : Control Structures
// Task/Activities :

// Activity 1 : If-Else Statements 
// Task 1 :

    let num = 11;
    if (num > 0 ){
        console.log(`The number ${num} is positive`);
    }
    else if(num = 0){
        console.log(`The number ${num} is zero`);
    }
    else (num < 0){
        console.log(`The number ${num} is negative`);
    }

// Task 2 :

    let age = 20;
    if (age > 18) {
        console.log(`Person age is ${age} eligible to vote`);
    } else {
        console.log(`Person age is ${age} not eligible to vote`);
    }

// Activity 2 : Nested If-Else Statements
// Task 3 :

    let num1 = 21 , num2 = 31 , num3 = 41 ;
    if (num1 > num2) {
        if (num1 > num3) {
            console.log(`Number 1 is largest`);
        } else {
            console.log(`Number 3 is largest`);
        }
    } else {
        if (num2 > num3) {
            console.log(`Number 2 is largest`);
        } else {
            console.log(`Number 3 is largest`);
        }
    }

// Activity 3 : Switch Case 
// Task 4 : 

   let weekDay = 7;
   switch (weekDay) {
    case 1: 
        console.log(`It's a Monday`);
        break;
    case 2:
        console.log(`It's a Tuesday`);
    case 3:
        console.log(`It's a Wednesday`);
    case 4:
        console.log(`It's a Thursday`);
    case 5:
        console.log(`It's a Friday`);
    case 6:
        console.log(`It's a Saturday`);
    case 7:
        console.log(`It's a Sunday`);
    default:
        console.log(`Enter a valid week day`);
        break;
   }

// Task 5 :

   let marks = 67;
   switch (true) {
    case (marks >=90 && marks <=100):
        console.log(`Grade is A ${marks}`);
        break;
    case (marks >=80 && marks <90):
        console.log(`Grade is B ${marks}`);
        break;
    case (marks >=70 && marks <80):
        console.log(`Grade is C ${marks}`);
        break;
    case (marks >=60 && marks <70):
        console.log(`Grade is D ${marks}`);
        break;
    case (marks >=50 && marks <60):
        console.log(`Grade is E ${marks}`);
        break;
    default:
        console.log(`Enter a valid marks between 0 and 100`);
        break;
   }

// Activity 4 : Conditional (Ternary) Operator
// Task 6 :

   let randomNum = 99;
   (randomNum % 2 == 0 )? console.log(`Number is even ${randomNum}`) : console.log(`Number is odd${randomNum}`);

// Activity 5 : Combining Condition 
// Task 7 :

   let year = 2004;
   if(year % 400 == 0){
    console.log(`${year} is leap year`);
   }else if(year % 4 == 0 && year % 100 != 0){
    console.log(`${year} is a leap year`);
   }else{
    console.log(`${year} is not a leap year`);
   }


// Day 3 is completed ...<3