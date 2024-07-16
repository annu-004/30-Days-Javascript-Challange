// Day 4 : Loops 
// Task /Activities

// Activity 1 : For Loop 
// Task 1 :

   for(let i = 1 ; i <= 10 ; i++){
    console.log(`Number from  1 to 10 ${i}`);
   }

// Task 2 :

   for(let i=1; i<=10; i++){
    console.log(`5 * ${i} = ${5 * i}`);
   }

// Activity 2 : While Loop 
// Task 3 :

    let sum = 0 , i = 1;
    while(i <= 10){
        sum += i ;
        i++;
    }
    console.log(`sum of number ${sum}`);

// Task 4 :

   let num = 10 ;
   while(num>= 1){
    console.log(num);
    num--;
   }

// Activity 3 : Do While Loop
// Task 5 :

    let j = 1;
    do {
        console.log(j);
        j++;
    } while (j<=5);

// Task 6 :

    let fact = 1 , k = 1;
    do {
        fact *= k;
        k++;
    } while (k<=5);
    console.log(`Factorial of num ${fact}`);

// Activity 4 : Nested Loop
// Task 7 :
  
   for (let i=1 ; i<=5 ; i++){
     let rowstar = '';
    for(let j=1; j<=i ; j++){
       rowstar += '*'  
    }console.log(rowstar);
   }

// Activity 5 : Loop Control Statement
// Task 8 :

   for(let i = 1 ; i<= 10 ; i++){
    if(i===5){
        continue;
    }console.log(i);
   }

// Task 9 :

   for(let i=1 ; i<=10 ; i++){
    if(i===7){
        break;
    }console.log(i);
   }

// Day 4 Completed ...<3