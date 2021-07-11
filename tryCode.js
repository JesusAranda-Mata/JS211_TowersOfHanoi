let stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
  };
  
  console.log(stacks['a']);
  console.log(stacks.a[0]);

  let newA = stacks.a.slice(1, 2)
  console.log(newA);

//   const isLegal = (startStack, endStack) => {
//     // Your code here
//     if (startStack <= 4 && endStack > startStack){

//         return true
//     }
//     else{
//         console.log("that is not a legal move, try again!");
//     }
//   } 

//   let vary = isLegal()
//   console.log(vary);