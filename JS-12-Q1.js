//! OPTIONAL
// ? Question-1:Using lexical scope, Write a function that displays the following outputs in order:
/**
 * Action
 * Potential
 * Signals
 */
// !Answer:
function fun1() {
    const words = ["Action", "Potential", "Signals"];
    let i = 0;
  return function() {
      console.log(words[i]);
      i++
    };
  }
  
 const log= fun1()
 log()
 log()
 log()