// fizzBizz print numbers 1-100 if # is div by 3 print fizz
//if # is div by 5 print Buzz
// By Kyle Ream



for (var number = 1; number <= 100; number += 1) { // print 1-100

   if (number % 3 == 0){ // check if div by 3 print fizz
     console.log('Fizz');
   }
   else if (number % 5 ==0){ // check if div by print Buzz
     console.log('Buzz');
   }
   else {                  // print number
     console.log(number);
   }
}
