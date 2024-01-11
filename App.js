import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));
//React Core - Element
const heading = React.createElement('h1', { id: "heading" }, "This is Create using react core");


//Jsx
const jsHeading = (<div className="root1">
    <h1 id="heading1">Namaste React using Jsx</h1>
</div>)

//Component in React
//Class-Based Component - Old
//Function - Based Component -New
const Heading=()=>{
    return <h1>Namaste React it is a functional Component</h1>
};



root.render(<Heading />);