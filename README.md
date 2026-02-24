1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
.getElementById : Using getElementById when i need one specific element by ID  
.getElementsByClassName : Using getElementByClassName When i need some element that have a specific ClassName
.querySelector : Using querySelector i can get any element like tag, classname,id etc but querySelector selects the first element that matches a CSS selector.

. querySelectorAll :Using querySelectorAll i can get any element like tag, classname,id etc querySelectorAll() selects all elements that match a CSS selector.

2. How do you create and insert a new element into the DOM?
 .Using createElement() method we create an element and use appendChild() method we insert a new element into dom.
3. What is Event Bubbling? And how does it work?
.Event Bubbling is a process where an event starts from the child target element and then propagates to its parent elements step by step.
how does it work :
like i clik a delete button the 
it runs delete button first then 
it runs delete button parent like div or something then
it runs step by step ut to body element then 
it runs htm element then final it runs document 

4. What is Event Delegation in JavaScript? Why is it useful?
.Event delegation is a technique where we  a single event listener to the parent element and handle event for his child element 
Why is it useful?
.Improves performance
.Small code 
.Works dynamically 
.Cleaner and more efficient code
5. What is the difference between preventDefault() and stopPropagation() methods?
.preventDefault() Stops the default browser behavior.
.stopPropagation()Stops the event bubbling up to parent elements.