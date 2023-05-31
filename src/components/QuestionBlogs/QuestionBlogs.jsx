import React from 'react';
import './QuestionBlogs.css'

const QuestionBlogs = () => {
    return (
        <div>
            <h2 className='title'><span>Question?</span> Look here.</h2>

            <div className="qna-wrapper">
                <h2 className="qstn">Props VS State: What are the differences between props and state?</h2>
                <div className="ans">
                    <ol>
                        <li>
                            Props are used to pass data from a parent component to a child component. On the other hand, sates are used to manage data within a single component.
                        </li>
                        <li>
                            State can only be modified by the component that owns it since it is fully private. But incoming props cannot be changed by the component. The child component's props can only be changed by a parent.
                        </li>
                        <li>
                            States have an initial value. A parent component can provide the initial value. But props may be empty.
                        </li>
                    </ol>
                </div>
            </div>

            <div className="qna-wrapper">
                <h2 className="qstn">How does state work?</h2>
                <div className="ans">A component's internal state is represented by an object known as "state" in the React framework. Initially it has a value. For example <code>const [count, setCount] = useState(0)</code> declares a state called count with the inital value 0. Whenever we need to change the value of count we can call the setCount method, for example <code>setCount(count + 1)</code> increases the value of count by 1. React automatically re-renders a component to reflect a component's new state whenever the state of the component changes. So, after changing the value of count, React will update value of this state from every components which share this state.</div>
            </div>

            <div className="qna-wrapper">
                <h2 className="qstn">What is the purpose of useEffect other than fetching data?</h2>
                <div className="ans">
                The 'useEffect' hook is useful for more than just data fetching; for instance:
                    <ol>
                        <li>When a component has been rendered, the 'useEffect' hook can be used to update the DOM.</li>
                        <li>The title of the browser window and other metadata can also be updated using the 'useEffect' hook.</li>
                        <li>It can be used to control other side effects on a webpage.</li>
                    </ol>
                </div>
            </div>

            <div className="qna-wrapper">
                <h2 className="qstn">How does React work?</h2>
                <div className="ans">React is a JavaScript library for constructing user interfaces that updates a "virtual DOM" in response to changes in the state of the application. A React application's state changes when a user interacts with it, and React updates the virtual DOM to reflect those changes. Then, React compares the new virtual DOM to the old one and only makes the necessary adjustments to the real DOM, producing a quicker and more effective update. React is a strong and adaptable framework for creating contemporary online apps since it also includes tools for managing application state, handling user events, and creating reusable components.</div>
            </div>
        </div>
    );
};

export default QuestionBlogs;