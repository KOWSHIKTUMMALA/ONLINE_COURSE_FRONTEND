import React from "react";
import './CLang.css';
import { Link } from "react-router-dom";

const CCourse=()=>{
    return(
        <div>
             <header className="header">
                <h1>C Language Course</h1>
            </header>
            <section className="section">
            <h2>C Programming Language Tutorial
            </h2>
            <p>C is a general-purpose programming language referred as the <strong>"mother of all programming languages"</strong> because it influenced many modern programming languages like C++, Java, Python and Go. C is an excellent choice for beginners as it provides a strong foundation in programming concepts.</p>
            <p>In this <strong>C tutorial</strong>, we'll cover everything from basic programming concepts like input/output, loops, etc to advanced topics like memory management, file handling, etc. Each section also includes practice questions and quizzes to test your understanding.</p>
            <p>Let's dive into the world of programming and start learning!</p>
            </section>
            <section className="section">
                <h2>Fundamentals
                </h2>
                <p>Fundamental section teaches you the basic C programming topics such as how to store and output data, perform arithmetic and other operations, control the program flow, etc.</p>
                <ul>
        <li><Link to="/Introduction">Introduction</Link></li>
        <li><Link to="/Identifier">Identifiers</Link></li>
        <li><Link to="/Keywords">Keywords</Link></li>
        <li><Link to="/Variables">Variables</Link></li>
        <li><Link to="/Datatypes">Data Types</Link></li>
        <li><Link to="/Inputoutput">Input and Output</Link></li>
        <li><Link to="/Operators">Operators</Link></li>
        <li><Link to="/Conditional">Conditional Statements</Link></li>
        <li><Link to="/Loops">Loops</Link></li>
    </ul>
            </section>
            <section className="section" id="functions">
                <h2>Functions
                </h2>
            <p>This section explains the functions in C and related concepts which are the building blocks of C programs that allows programmers to write modular and reusable code.</p>
    <ul>
            <li><Link to="/Function">Functions</Link></li>
            <li><Link to="/Parameter">Parameter Passing Techniques</Link></li>
            <li><Link to="/MainFun">Main Function</Link></li>
            <li><Link to="/Recursion">Recursion</Link></li>
            <li><Link to="/Inline">Inline Function</Link></li>
            <li><Link to="/NestedFun">Nested Function</Link></li>
    </ul>
            </section>
            <section className="section">
                <h2>Compound Data Types
                </h2>
                <p>Fundamental data types cannot efficiently store every kind of data, so compound data types are created from them. This section teaches you how to efficiently organize and process real world's complex data.</p>
                <ul>
                    <li><Link to="/Array">Arrays</Link></li>
                    <li><Link to="/Pointer">Pointers</Link></li>
                    <li><Link to="/String">Strings</Link></li>
                    <li><Link to="/Structure">Structures</Link></li>
                    <li><Link to="/Union">Unions</Link></li>
                    <li><Link to="/Enum">Enumeration (or enum)</Link></li>
                </ul>

            </section>

            <section className="section">
                <h2>Memory Management</h2>
                <p>This section covers the manual memory management in C using pointers, malloc(), calloc(), realloc(), and free(), while avoiding errors such as memory leak.</p>
                <ul>
                    <li><Link to="/Layout">Program's Memory Layout</Link></li>
                    <li><Link to="/Allocate">Dynamic Memory Allocation</Link></li>
                    <li><Link to="/Leak">Memory Leaks</Link></li>
                </ul>
            </section>

            <section className="section">
                <h2>Data Structures</h2>
                <p>C does not provide inbuilt implementation of data structures like C++ or Java. This section covers how to implement different data structure in C.</p>
            <ul>
                <li><Link to="/Linked">Linked List</Link></li>
                <li><Link to="/Stack">Stack</Link></li>
                <li><Link to="/Queue">Queue</Link></li>
                <li><Link to="/Hash">Hash Tables</Link></li>
                <li><Link to="/Binarytree">Binary Tree</Link></li>
                <li><Link to="/Heap">Heaps</Link></li>
                <li><Link to="/Graph">Graphs</Link></li>
            </ul>

            </section>
        </div>
    );
};
export default CCourse

