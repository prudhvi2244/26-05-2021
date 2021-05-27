function add(...numbers) //Rest Parameter passed as an argument at the time of Function Definition
{
  let sum = 0;
  for (let number of numbers) {
    sum = sum + number;
  }
  console.log(`Sum :${sum}`)
}

add(10, 10);
add();
add(1);
add(1, 2, 3, 4);


//Spread Operator

let numbers=[200,300,400]
function f1(a,b,c)
{
    console.log(a)    
    console.log(b)    
    console.log(c)    
}



f1(...numbers) // Spread Operator used as an argument at the time of function calling

