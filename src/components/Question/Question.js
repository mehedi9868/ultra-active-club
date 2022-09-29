import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='blog'>
            <h3>Q1. How does react works?</h3>
            <p>React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM.
                When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects.</p><br />

            <h3>Q2. Props Vs State</h3>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.Props are immutable while State is mutable.</p><br />

            <h3>Q3. When and where we use useEffect?</h3>
            <p>We perform a side effect when we need to reach outside of our React components to do something. like run Timer, settimeout, setinterval, Dom manupulation, data fetch etc.</p><br />
        </div>
    );
};

export default Question;