Dev Stack
A modern and responsive Technology Stack Builder website. Users can explore different technologies and create their own development stack.

Technologies used:
Vite
React.js
TypeScript
Tailwind CSS
JSON
DaisyUI

Features:
1.Users can browse different technologies with their name, category, description, difficulty level, rating, badge and icon.
2.Technologies can stack, view and remove in the 'Your Stack' section.
3.Navbar is sticky , users will notified if card selected or removed.

Q&A:
i. JSX is a syntax that allows us to write HTML like code inside JavaScript or TS.

ii. Props are data passed from a parent component to a child component. child component can not change parent component. State is data managed inside a component. when state changes react updates the UI.
    
iii. useState allows a React component to store and manage changing data like a short memory. in this project I used useState in the card.tsx file where it track which technologies are selected by the user.

iv. useEffect is used to perform side effects in a React component such as fetching data, working with API or interacting with external systems. I did not use useEffect to load JSON data. I used a promise with React's use() API to read the technology data.

v. A unique key helps react understand which item was added, removed or changed so it can update the UI efficiently. I used technology's id as the key.

vi. Conditional rendering means showing different UI depending on a a condition. I used it in the Your Stack section. when no technology is selected it shows "Your stack is empty."

vii. A parent component passes data to a child using props.
if the child needs to change the parent's data the parent can pass a prop. The child can then call that function to update the parent's state.
