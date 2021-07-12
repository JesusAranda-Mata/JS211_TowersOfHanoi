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
  a: [4, 3, 2, 1],
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
* 
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
  //console.log(toMove);
}



// let a = stacks[a]
// let b = stacks[b]
// let c = stacks[c]

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
/**
 * If move is allow check for win
 * if not allow request a legal move 
 */
const isLegal = (startStack, endStack) => {
  // Your code here
  startStack = stacks[startStack]
  //console.log("this is the startStack" + startStack);
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
const checkForWin = () => {
  // Your code here
  if((stacks.a[0] == 4 && stacks.a[1] == 3 && stacks.a[2] == 2 && stacks.a[3] == 1) || 
     (stacks.b[0] == 4 && stacks.b[1] == 3 && stacks.b[2] == 2 && stacks.b[3] == 1) ||
     (stacks.c[0] == 4 && stacks.c[1] == 3 && stacks.c[2] == 2 && stacks.c[3] == 1)) {
      console.log("You Won!!!!!"); 
      return true
     }
     else {
       return false
     }
}

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  console.log(isLegal(startStack, endStack));
  if(isLegal(startStack, endStack)){
     movePiece(startStack, endStack)
  }

}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    startStack = startStack.trim()
    rl.question('end stack: ', (endStack) => {
      endStack = endStack.trim()
      towersOfHanoi(startStack, endStack);
      getPrompt();
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
  //-------------It is suppose to check if the startStack and end stack are taking the inputs with spaces around them.--> Not working
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

}

