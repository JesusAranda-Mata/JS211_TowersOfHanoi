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
//Making sure the proper methods is going to be use -----------
  //---------------let cordinates = stacks.a.slice(1, 1)
//console.log(cordinates); ----> 3

// Start here. What is this function doing? 
// This function is logging a visual representation of the stacks object.-------- 
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
/*
*User will input startStack which will splice the array according with the input
*isLegal will check if the input move is correct
*if move is permitted endStack will push the key value according with the input value
*checkForWin will check if "win" or game continues(this function might be move to the towerOfHanoi function)  
*/
const movePiece = (startStack, endStack) => {
  //!----.shift() method to remove the first item in the array.--the first key value will not always be the desire piece
  //!----.unshift() method to remove the first item in the array.
  //----.splice() The splice() method changes the contents of an array by removing or replacing 
  //existing elements and/or adding new elements in place.
  // Your code here
  for(let move = 0; isLegal = true; move++){
    if(startStack == )
  }
}

// let a = stacks[a]
// let b = stacks[b]
// let c = stacks[c]

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
/**
 * the startStack is graving the value of from a key 
 * the endStack is pushing the value from startStack is to a new array
 * the startStack most always be greater then endStark except for zero
 * If move is allow check for win
 * if not allow request a legal move 
 */
const isLegal = (startStack, endStack) => {
  // Your code here
  if (startStack <= 4 && endStack > startStack){
    checkForWin()
    return true
  }
  else
  {
    console.log("that is not a legal move, try again!");
    getPrompt()
    return false
}
}

let isLegal = isLegal();

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

}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
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

} else {

  getPrompt();

}
