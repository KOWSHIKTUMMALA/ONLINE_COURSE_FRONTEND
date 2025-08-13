import React from "react";
import './Python.css';
import { Link } from "react-router-dom";

const Python = () => {
    return(
        <div>
            <header className="header">
                <h1>Python Tutorial | Learn Python Programming Language</h1>
            </header>
            <section className="section">
                <p><strong>Python Tutorial:</strong>- Python is one of the most popular programming languages today, known for its simplicity, extensive features and library support. Its clean and straightforward syntax makes it beginner-friendly, while its powerful libraries and frameworks makes it perfect for developers. <strong>Python is:</strong></p>
                <ul>
                    <li>A versatile, high-level programming language.
                    </li>
                    <li>Easy-to-learn syntax, perfect for beginners and experts.
                    </li>
                    <li>Known for its readability and extensive library support.
                    </li>
                </ul>

                <h3>First Python Program</h3>
                <p>Here is a simple Python code, printing a string. We recommend we to edit the code and try to print our own name.</p>
                <pre>
                    {
                        `print("Hello World")`
                    }
                </pre>
                <div className="output">
                    <h4>Output:</h4>
                    <p>Hello World</p>
                </div>
            </section>
            <section className="section">
                <h2>1. Python Fundamentals</h2>
                <p>In this section, we’ll cover the basics of Python programming, including installing Python, writing first program, understanding comments and working with variables, keywords and operators. These are essential building blocks to get started with Python coding.</p>
                <ul>
                    <li><Link to="/Pintroduction">Introduction</Link></li>
                    <li><Link to="/PInput">Input and Output</Link></li>
                    <li><Link to="/Pvariable">Variables</Link></li>
                    <li><Link to="/Poperator">Operators</Link></li>
                    <li><Link to="/Pkeyword">Keywords</Link></li>
                    <li><Link to="/Pdatatype">Data Types</Link></li>
                    <li><Link to="/Pconditional">Conditional Statements</Link></li>
                    <li><Link to="/Ploop">Python Loops</Link></li>
                </ul>

            </section>

            <section className="section">
                <h2>Python Function</h2>
                <p>Python Functions are the backbone of organized and efficient code in Python. Here, in this section of Python 3 tutorial we'll explore their syntax, parameter handling, return values and variable scope. From basic concepts to advanced techniques like closures and decorators. Along the way, we'll also introduce versatile functions like range(), map, filter and lambda functions.</p>

                <ul>
                    <li><Link to="/PDef">def keyword</Link></li>
                    <li><Link to="/PUse">Use of pass Statement in Function</Link></li>
                    <li><Link to="/Preturn">Return statement</Link></li>
                    <li><Link to="/Pglobal">Global and Local Variables</Link></li>
                    <li><Link to="/Precursion">Recursion in Python</Link></li>
                    <li><Link to="/Pargs">*args and **kwargs in Function</Link></li>
                    <li><Link to="/Pself">‘Self’ as Default Argument</Link></li>
                    <li><Link to="/Pfirst">First Class Function</Link></li>
                    <li><Link to="/Plambda">Lambda Function</Link></li>
                    <li><Link to="/Pmap">Map, Reduce and Filter Function</Link></li>
                    <li><Link to="/Pinner">Inner Function</Link></li>
                    <li><Link to="/Pdeco">Decorators</Link></li>
                </ul>
            </section>

            <section className="section">
                <h2>3. Python Data Structures</h2>
                <p>Python offers versatile collections of data types, including lists, string, tuples, sets, dictionaries and arrays. In this section, we will learn about each data types in detail.</p>
                <ul>
                    <li><Link to="/Pstring">Strings</Link></li>
                    <li><Link to="/Plist">List</Link></li>
                    <li><Link to="/Ptuple">Tuples</Link></li>
                    <li><Link to="/Pdict">Dictionary</Link></li>
                    <li><Link to="/Pset">Sets</Link></li>
                    <li><Link to="/Parray">Arrays</Link></li>
                    <li><Link to="/Pcom">List Comprehension</Link></li>
                </ul>
            </section>

    
        </div>
    );
};

export default Python;
