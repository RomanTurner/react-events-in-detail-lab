// Code DelayedButton Component Here
/* 
function handleChange(e) {
 Prevents React from resetting its properties:
  e.persist();

  setTimeout(() => {
    console.log(e.target.value); // Works
  }, 100);
}
*/

import React from 'react'

export default function DelayedButton(props) {
  console.log(props);
  return (
    <div>
      <button onClick={(e) => setTimeout(() => {
        e.persist();
        props.onDelayedClick(e);
      },props.delay)}>Y</button>
    </div>
  )
}



/* 
DelayedButton
In the components/DelayedButton.js file, 
create a DelayedButton React component

This component takes two props: onDelayedClick 
(a function), and delay (a number).

Create a button that, when clicked, will pass 
the click event to the onDelayedClick prop within a setTimeout(). 
The setTimeout() should be set to this.props.delay.

If successful, the event will be logged to the 
console once the timeout has finished.

Hint: If you having trouble with this feature, 
remember event pooling in React. By the time the setTimeout fires, 
the event object will have already been returned to the pool. 
So how can we fix that?
*/