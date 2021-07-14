'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

let stacks = {
  a: [4,3,2,1],
  b: [],
  c: []
};



//console.log(stacks['a']);
//console.log(stacks.a[0]); //---- Properly accessing the array.


// Start here. What is this function doing? 
// This function is logging a visual representation of the stacks object.-------- 
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}
/*--------------------Lost the wrong problem but practice -----------------------------
//Loops the a,b,c keys
const threeArrays = () => {
for(let i = 0; i<stacks.length; i++) {
  let place = stacks[i];
  console.log('log the arrays inside the stacks', i)
  //console.log("what does place print" + place)

//Loops inside the a,b,c keys.
for (let pv = 0; pv < place.length; pv++){
  let Value = place[pv];
  console.log("Inside the inner array loop, pv: ", pv, "place: ", Value)
}
}
------------------------------------------------------------------------*/

// Next, what do you think this function should do?
/*
* Takes in a string and stores it in variable starkStack and the same process happens with endStack
*startStack becomes the key for the object stacks
*when the proper key i use on startStack the method pop will take a last value on the key storing it in var fromMove
*Method push is use to place the value of the key from the pop to the last place on the key. 
*/
const movePiece = (startStack, endStack) => {
  //Code here
  startStack = stacks[startStack]
  //console.log("start" + startStack);
  endStack = stacks[endStack]
  //console.log("end" + endStack);
  let fromMove = startStack.pop()
  //console.log("the last value of an array" + fromMove);
  endStack.push(fromMove)
  //console.log(toMove);---This was use to check if push was working.
}
/*
*The idea of the letter function was to only allow a b or c when inputted in startStack or endStack   
*/

const letter = (startStack, endStack) => {
  if ((startStack == 'a' || startStack == 'b' || startStack == 'c') && (endStack == 'a' || endStack == 'b' || endStack == 'c')){
  return true
  }
  else {
    console.log("Most use the correct characters a, b or c")
      return false
  }
}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
/**
 * Checks that if the input string is allow
 * pulls the last value from the array corresponding with its input from startStack and EndStack 
 * if the value of the key is less than undefined or less than the last key value then allow it if is greater is not a legal move.  
 */
const isLegal = (startStack, endStack) => {
  // Your code here
  const goodLetter = letter(startStack, endStack)
  if(!goodLetter){
    //console.log("That's not right!");
    return false
  }
  startStack = stacks[startStack]
  console.log("this is the startStack" + startStack);
  //console.log(startStack.length);
  let startLA = startStack.length
  let indexLA = startLA-1
  //console.log("This is the index at the end of StartStack " + indexLA);
  let valueStartStack = startStack[indexLA] 
  console.log(typeof(valueStartStack));

  endStack = stacks[endStack]
  //console.log("this is the " + endStack);
  //console.log(endStack.length);
  let endLA = endStack.length
  let indexEndLA = endLA-1
  //console.log("This is the index at the end of endStack " + indexEndLA);
  let valueEndStack = endStack[indexEndLA] 
  console.log(valueEndStack);

if(valueStartStack < valueEndStack || valueEndStack == undefined){

  return true
}
else if(valueStartStack > valueEndStack){
  console.log("That's not a legal move, please try again");
  return false
}
}

// What is a win in Towers of Hanoi? When should this function run?
//The key values most be on a specific order and in a different array than the original.  
const checkForWin = (startStack, endStack) => {
  // Your code here
  //startStack = stacks[startStack]
  //endStack = stacks[endStack]
  if((stacks.b[0] == 4 && stacks.b[1] == 3 && stacks.b[2] == 2 && stacks.b[3] == 1) ||
     (stacks.c[0] == 4 && stacks.c[1] == 3 && stacks.c[2] == 2 && stacks.c[3] == 1)) {
      console.log("You Won!!!!!"); 
      return true
     }
     else {
       return false
     }
}

// When is this function called? What should it do with its argument?
//calls and check if the function is legal returns as true 
// if is true calls the function movePiece
const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  //console.log(isLegal(startStack, endStack));
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack)
  }
}

// check if the move is isLegal
// if it is move the pc
// check if win

/*
if(checkForWin()){
  printStacks();
  return console.log('Success!!')
}
else{
  getPrompt();
}
*/
//-----
//Takes the string inputs and executes the game in till the function checkForWin returns as true. 
const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    startStack = startStack.trim()
    rl.question('end stack: ', (endStack) => {
      endStack = endStack.trim()
      towersOfHanoi(startStack, endStack);
      //letter(startStack, endStack)
      if(checkForWin()){
        return
      }
      else{
      getPrompt();
      }
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });
  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
  /*-------------It is suppose to check if the startStack and end stack are taking the inputs with spaces around them.--> Not working
  describe('#getPrompt()', (startStack) => {
    it('should not allow space(s) on input', () => {
      startStack == startStack.trim();
      assert.equal(getPrompt(), true);
      startStack == startStack
      assert.equal(getPrompt(), false) 
    })
  })

} else {

  getPrompt();
*/
}

