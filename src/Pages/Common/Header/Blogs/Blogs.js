import React from 'react';

const Blogs = () => {

    return (

        <div>
            <h1 className='text-4xl text-center my-5 font-bold'> Some Questions / Answers !</h1>
            <div className="divider"></div> 

            <div className=' mx-auto w-1/2 mb-10'>


                <div className="stack">
                    <div className="card shadow-md bg-black text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title font-bold text-2xl"> What are the different ways to manage a state in a React application?</h2>
                            <p>The Four Kinds of React State to Manage<br/>

                                1. Local state.<br/>
                                2. Global state.<br/>
                                3. Server state. <br/>
                                4. URL state.</p>
                        </div>
                    </div>
                    <div className="card shadow bg-primary">
                        <div className="card-body">
                        </div>
                    </div>
                    <div className="card shadow-sm bg-error">
                        <div className="card-body">
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mx-auto w-1/2 mb-10'>


                <div className="stack">
                    <div className="card shadow-md bg-black text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title font-bold text-2xl"> How does prototypical inheritance work?</h2>
                            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                        </div>
                    </div>
                    <div className="card shadow bg-primary ">
                        <div className="card-body">
                        </div>
                    </div>
                    <div className="card shadow-sm bg-error">
                        <div className="card-body">
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mx-auto w-1/2 mb-10'>


                <div className="stack">
                    <div className="card shadow-md bg-black text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title font-bold text-2xl"> What is a unit test? Why should we write unit tests?</h2>
                            <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                        </div>
                    </div>
                    <div className="card shadow bg-primary ">
                        <div className="card-body">
                        </div>
                    </div>
                    <div className="card shadow-sm bg-error">
                        <div className="card-body">
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mx-auto w-1/2 mb-10'>


                <div className="stack">
                    <div className="card shadow-md bg-black text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title font-bold text-2xl"> React vs. Angular vs. Vue?</h2>
                            <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                        </div>
                    </div>
                    <div className="card shadow bg-primary ">
                        <div className="card-body">
                        </div>
                    </div>
                    <div className="card shadow-sm bg-error">
                        <div className="card-body">
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Blogs;