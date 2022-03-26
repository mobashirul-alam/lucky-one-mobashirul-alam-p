import React from 'react';
import './QuestionAnswer.css'

const QuestionAnswer = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', marginBlock: '30px' }}>Conceptual Question and Answer</h1>
            <div className='question-answer'>
                <article>
                    <h2>Q1: How React works?</h2>
                    <p>
                        Ans: React is basically a JavaScript library(not framework), which helps a developer to create websites User Interface(UI). Mainly, it creates UI with the help of components and states. When the developer create a react app, then react make a ReactDOM. When the developer make any changes in a component though changing state, React make a Virtual DOM. After making Virtual DOM, it matches the virtual DOM with real DOM and figure out what state is changed. Then it make changes in Real DOM and updates the UI of a website.
                    </p>
                </article>
                <article>
                    <h2>Q2: Props Vs State.</h2>
                    <div>
                        Ans:
                        <p className='answer2'>
                            <span>Props:</span>
                            1. Props are immutable and read only object.<br />
                            2. We can pass data from one component to another though props.<br />
                            3. We can modify Props outside of the components.
                            <span>State:</span>
                            1. State is mutable and can be changed.<br />
                            2. State stores the data of components.<br />
                            3. We can modify state inside the component or by the component.
                        </p>
                    </div>
                </article>
                <article>
                    <h2>Q3: How useState works?</h2>
                    <p>Ans: "useState" is a function which declares state variable. In this state variable we can store necessary data of a components. It declares a state variable and function to set the value of state variable. After making changes in a component we can set these changes as the value of state variable though setState function created by useState function.</p>
                </article>
            </div>
        </div>
    );
};

export default QuestionAnswer;