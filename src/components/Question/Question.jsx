import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <h2>Questions and Answer</h2>
            <p>Question: What is the difference between props and state?</p>
            <p>Answer: props and state are used to manage data in a component. props are use to pass data from a parent component to its child component, while state is a memory within a component that can change over time. props are read-only, while state can be changed using the setState method.</p>
        </div>
    );
};

export default Question;