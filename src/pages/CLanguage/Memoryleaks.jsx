import React from "react";
import './CLang.css'

const Leaks =()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Memory Leaks in C</h1>

            </header>
            <section className="section">
                <h2>Memory Leaks</h2>
                <h3>What is Memory Leak? How can we avoid?</h3>

<p>In C, <b>memory leak</b> occurs when a program allocates memory dynamically (using functions like <b>malloc()</b>, <b>calloc()</b>, or <b>realloc()</b>) but fails to deallocate it using <b>free()</b> when the memory is no longer needed. Eventually, in the worst case, too much of the available memory may become allocated, all or part of the system or device stops working correctly, the application fails, or the system slows down vastly.</p>

<h3>Example of Memory Leak</h3>

<p>The below example shows the memory leak concept.</p>

<pre>{`
#include <stdlib.h>

void f() {
    // Allocate memory
    int* ptr = (int*)malloc(sizeof(int));
    // Return without freeing ptr
    return;
}
`}</pre>

<div class="output">
<h4>Output</h4>
<p>Memory allocated successfully</p>
</div>

<p><b>Explanation:</b> Memory for an array of 10 integers is allocated using malloc(), but the memory is never freed using free(). This results in a memory leak since the allocated memory is no longer accessible but remains occupied.</p>

<h3>Common Causes of Memory Leak</h3>

<p>Following are the most common causes of memory leak in C:</p>

<ul>
    <li>When dynamically allocated memory is not freed up by calling free then it leads to memory leaks. Always make sure that for every dynamic memory allocation using <b>malloc</b> or <b>calloc</b>, there is a corresponding free call.</li>
    <li>When track of pointers that references to the allocated memory is lost then it may happen that memory is not freed up. Hence keep the track of all pointers and make ensure that memory is freed.</li>
    <li>When the program terminates abruptly and the allocated memory is not freed or if any part of code prevents the call of free then memory leaks may happen.</li>
</ul>

<h3>How to avoid memory leaks?</h3>

<ul>
    <li><b>Manual memory management:</b> Always ensure that free() is called for each dynamically allocated memory block once it is no longer needed. This is a fundamental practice for avoiding memory leaks.</li>
    <li><b>Use memory analysis tools:</b> Tools like Valgrind and AddressSanitizer can help detect memory leaks by analyzing a program’s memory usage during runtime.</li>
    <li><b>Code review:</b> Regular code reviews and static analysis tools can help spot potential issues related to memory management.</li>
    <li><b>Avoid unnecessary allocations:</b> Only allocate memory when necessary, and ensure that every allocation has a corresponding deallocation.</li>
</ul>

<h3>Example</h3>

<p>The below program shows the memory allocated in the heap is released to avoid memory leak.</p>

<pre>{`
#include <stdlib.h>

void f() {
    int* ptr = (int*)malloc(sizeof(int));
    // Do some work
    // Memory allocated by malloc is released
    free(ptr);
    return;
}
`}</pre>

<div class="output">
<h4>Output</h4>
<p>Memory allocated successfully</p>
</div>

<p><b>Explanation:</b> This code dynamically allocates memory for an array of 10 integers using malloc(). It checks if the memory allocation is successful and prints a message accordingly. After using the memory, it is freed using free() to prevent memory leaks, and the program exits successfully with a return value of 0.</p>

<h3>Conclusion</h3>

<p>In conclusion, memory leaks can occur when we allocate memory on the heap but forget to release it or free it. Due to memory leaks, we may experience performance degradation and system becomes unstable. Memory leaks cause more damage for long-running programs like servers. To avoid memory leaks we must free dynamically allocated memory by calling functions like free().</p>


            </section>

        </div>
        </>
    );
};
export default Leaks;
