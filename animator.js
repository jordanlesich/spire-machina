'use strict';

export function createAnimation_JS(delay){
    //This function is a closure that solves two major problems with JS animations
      //1. JS is single threaded and makes async calls to the browser to handle time
      //2. Timeout calls do not use a fetch API, I have no way of telling JS that a
      // timeout has finsihed running once it returns from the browser.
  
      //This solution creates the illusion that we are running an animation one after
      //the other. In reality, we set the delay higher for each action. When we run
      //a new animation, the delay is still set to the value of the animation before it.
      //This only works if the delay is completely iolated to its own animation function
  
      //This counter variable remains inside the closure.
      let timeoutDelay = delay ? delay : 0;
      //We define a higher order function that takes in the amount actions
      //the function to call (action), and the delay increment,
      function animationClosure(qty, fn, increment) {
        for (let i = 0; i < qty; i++) {
          setTimeout(fn, timeoutDelay);
          timeoutDelay += increment;
        }
      }
      //By using a closure, we isolate the counter variable to the original caller
      //function saved to a variable (custom animation)
      return animationClosure;
}




