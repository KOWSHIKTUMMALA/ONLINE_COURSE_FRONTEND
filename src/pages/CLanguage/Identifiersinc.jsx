import React from 'react';
import './CLang.css';

const Identifier = () => {
    return (
        <>
            <div>
                <header className="header">
                    <h1>Identifiers in C</h1>
                </header>

                <section className="section" id="c-identifiers">
                    <h2>C Identifiers</h2>
                    <p>
                        In C programming, identifiers are the names used to identify variables, functions, arrays, 
                        structures, or any other user-defined items. It is a name that uniquely identifies a program 
                        element and can be used to refer to it later in the program.
                    </p>

                    <pre>
                        {`// Creating a variable
int val = 10;

// Creating a function
void func() {}`}
                    </pre>

                    <p>In the above code snippet, <code>val</code> and <code>func</code> are identifiers.</p>

                    <h3>Rules for Naming Identifiers in C</h3>
                    <p>A programmer must follow a set of rules to create an identifier in C:</p>
                    
                    <ul>
                        <li>Identifiers can contain the following characters:
                            <ul>
                                <li>Uppercase (A-Z) and lowercase (a-z) alphabets.</li>
                                <li>Numeric digits (0-9).</li>
                                <li>Underscore (_).</li>
                            </ul>
                        </li>
                        <li>The first character of an identifier must be a letter or an underscore.</li>
                        <li>Identifiers are case-sensitive.</li>
                        <li>Identifiers cannot be keywords in C (such as <code>int</code>, <code>return</code>, <code>if</code>, <code>while</code>, etc.).</li>
                    </ul>
                </section>
            </div>
        </>
    );
};

export default Identifier;
