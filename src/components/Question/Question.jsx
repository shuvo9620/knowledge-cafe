import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <h2>Questions and Answer</h2>
            <p>Question: What is the difference between props and state?</p>
            <p>Answer: props and state are used to manage data in a component. props are use to pass data from a parent component to its child component, while state is a memory within a component that can change over time. props are read-only, while state can be changed using the setState method.</p>
            <p>Question: How useState works?</p>
            <p>Answer: useState is a built-in function in React that allows you to manage state in functional components. The useState function takes an initial value and returns an array with two values: the current state value and a function to update it. we can access and update the state using these values, and use the state value in your component just like you would in a class component.</p>
            
        </div>
    );
};

export default Question;