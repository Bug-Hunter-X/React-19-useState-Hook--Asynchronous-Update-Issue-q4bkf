# React 19 useState Hook: Asynchronous Update Issue

This repository demonstrates an uncommon issue related to the `useState` hook in React 19. When logging the state variable *inside* the setter function, the logged value reflects the *previous* state, not the updated one. This is due to the asynchronous nature of state updates in React.  The solution involves using the functional update pattern or accessing the updated state from outside the setter function after a `useEffect` hook that tracks state changes.

## Bug Description:
The provided `bug.js` file shows a simple counter component.  When the increment button is clicked, the console log inside `incrementCount` displays the *old* count value instead of the incremented one, even though the UI updates correctly. This is counterintuitive behavior.

## Solution:
The `bugSolution.js` file shows two approaches to resolve this issue: 

1. **Functional Update:** Using a function within `setCount` ensures the latest state is used.
2. **useEffect Hook:** Accessing the updated state from outside the setter function after the update has completed.