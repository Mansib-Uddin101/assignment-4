1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById and getElementsByClassName target elements by specific ID or class name, returning either a single element or a live HTMLCollection.
querySelector and querySelectorAll use CSS selector syntax to find the first match or a static NodeList of all matches
2. How do you create and insert a new element into the DOM?
Ans: To create and insert an element, we use document.createElement('tagName') to generate the node and element.appendChild() or element.prepend() to attach it to a parent.
3. What is Event Bubbling? And how does it work?
Ans: Event bubbling is a type of event propagation where an event triggers on the deepest target element and then bubbles up through its ancestors in the DOM tree.
When we click a button, the click event fires first on that button, then on its parent container, and continues upward until it reaches the document or window.
4. What is Event Delegation in JavaScript? Why is it useful?
Ans: We use event delegation by attaching one listener to a parent to catch events bubbling up from its children.
It is useful because it saves memory and automatically handles new elements added to the DOM without needing extra listeners.
5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: We use preventDefault() to stop the browser's default action, while stopPropagation() prevents an event from bubbling up to parent elements.
