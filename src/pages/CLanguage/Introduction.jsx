import React from 'react';
import './CLang.css';

const Introduction = () => {
    return (
        <React.Fragment>
            <div>
                <header className="header">
                    <h1>Introduction to C</h1>
                    
                </header>

                <section className="section" id="introduction-to-c">
                    <h2>Introduction to C</h2>
                    <p>
                        C is a procedural programming language developed by Dennis Ritchie in 1972 at Bell Laboratories.
                        It has become one of the most widely used programming languages, powering many systems and applications.
                        In this course, you'll learn the fundamentals of C programming—from basic concepts to advanced topics.
                    </p>
                    <h3>Why Should We Learn C?</h3>
                    <p>
                        Many later languages have borrowed syntax/features directly or indirectly from the C language, 
                        like Java, PHP, JavaScript, and many others that are mainly based on C. C++ is nearly a superset of C 
                        (only a few programs may compile in C, but not in C++).
                    </p>
                    <p>
                        Learning C programming first helps in understanding modern programming languages. 
                        It also helps to understand a lot of the underlying architecture of operating systems, 
                        such as pointers, memory management, and working with memory locations.
                    </p>
                    <h3>Difference Between C and C++</h3>
                    <p>
                        C++ was created to add object-oriented programming (OOP) concepts to the C language, 
                        so they both have very similar syntax with a few differences. The following are some of the 
                        main differences between C and C++ programming languages:
                    </p>
                    <ul>
                        <li>C++ supports OOP concepts, while C only follows the procedural programming paradigm.</li>
                        <li>C++ has built-in exception handling capabilities, whereas in C, exceptions must be handled manually.</li>
                        <li>There are no references in C, while C++ supports references.</li>
                    </ul>
                </section>
            </div>
        </React.Fragment>
    );
};

export default Introduction;
