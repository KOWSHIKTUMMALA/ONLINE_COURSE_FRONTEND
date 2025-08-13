import React from "react";
import './CLang.css'

const Inline=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Inline Function in C</h1>

            </header>
            <section className="section">
            <h2>Inline Function</h2>
<p>In C, an inline function is a special type of function whose function call is replaced with the actual code of the function rather than being invoked through the usual function call mechanism, potentially improving performance by reducing function call overhead. It is declared using the <code>inline</code> keyword and is generally used for small and frequently used functions.</p>

<h4>Example:</h4>
<pre>{`
#include <stdio.h>

// Inline function to calculate the square of a number
inline int square(int x) {
    return x * x;
}

int main() {
    int n = 5;
  
    // The compiler will replace square(n) with (n * n)
    int res = square(n);
  
    printf("%d", res);
    return 0;
}
`}</pre>
<div class="output">
<strong>Output:</strong>
<p>
25</p>
</div>
<p>The above function may not compile on some compilers such as GCC. This is because GCC implements inlining as part of its optimization. If all optimization flags are off, the <code>inline</code> keyword behaves differently.</p>

<h3>Table of Content</h3>
<ul>
    <li>Syntax</li>
    <li>Behaviour of Inline Functions</li>
    <li>Inline without GCC Optimization</li>
    <li>Inline With GCC Optimization</li>
    <li>Static Inline Function</li>
    <li>Inline with Forward Declaration</li>
    <li>Extern Inline Function</li>
    <li>Inline Function vs. Macro</li>
</ul>

<h3>Syntax</h3>
<p>To declare a function as inline, the keyword <code>inline</code> is placed before the function’s return type.</p>
<pre>{`
inline return_type function_name(parameters) {
   // Function body
}
`}</pre>

<h3>Behaviour of Inline Functions</h3>
<p>Inline is just a suggestion to the compiler; it does not force the compiler. The behaviour of inline depends on how it is being used and how inline optimization is implemented by the compiler.</p>

<h3>1. Inline without GCC Optimization</h3>
<p>When inline is used for a function in a C source file and compiled without any optimization flag, it throws an error as shown:</p>
<pre>{`
#include <stdio.h>

// Inline function in C
inline int foo() {
    return 2;
}

int main() {
    int res;

    // inline function call
    res = foo();
    printf("%d", res);
    return 0;
}
`}</pre>
<div class="output">
<strong>Output:</strong>
<p>
/usr/bin/ld: /tmp/ccBVKkSP.o: in function `main':<br/>
solution.c:(.text+0x12): undefined reference to `foo'<br/>
collect2: error: ld returned 1 exit status
</p>
</div>
<p>This is one of the side effects of how GCC handles inline functions. When compiled, GCC performs inline substitution as part of its optimization process. As a result, the symbol for the function is not created in the symbol table because the code is directly replaced with the function’s body during compilation.</p>

<h3>2. Inline With GCC Optimization</h3>
<p>The first solution to the above problem is to turn on GCC optimization using an optimization flag passed during the program’s compilation command.</p>
<pre>{`
gcc solution.c -o solution -O1
`}</pre>
<p>Any optimization level greater than <code>O0</code> will turn on the inline optimization in GCC.</p>
<pre>{`
#include <stdio.h>

// Inline function in C
inline int foo() {
    return 2;
}

int main() {
    int res;

    // inline function call
    res = foo();
    printf("%d", res);
    return 0;
}
`}</pre>
<div class="output">
<strong>Output:</strong>
<p>
2</p>
</div>

<h3>3. Static Inline Function</h3>
<p>We can use the <code>static</code> keyword before the inline function. This forces the compiler to treat the function with internal linkage and ensures that it is considered during the linking process, allowing the program to compile and run successfully. Though the inlining still depends on the compiler’s optimization level.</p>
<pre>{`
#include <stdio.h>

// Inline function in C
static inline int foo() {
    return 2;
}

int main() {
    int res;

    // inline function call
    res = foo();
    printf("%d", res);
    return 0;
}
`}</pre>
<div class="output">
<strong>Output:</strong>
<p>
2</p>
</div>

<h3>4. Inline with Forward Declaration</h3>
<p>If the function is declared separately, then it will be added to the symbol table. Later on, it can be defined as inline, and the compiler will consider it for inlining if the optimization level is <code>O1</code> or above. But if the optimization is <code>O0</code>, then this function will not be inlined but still will be able to be executed as a normal function.</p>
<pre>{`
#include <stdio.h>

// Forward declaration
int foo();

// Inline function in C
inline int foo() {
    return 2;
}

int main() {
    int res;

    // Inline function call
    res = foo();
    printf("%d", res);
    return 0;
}
`}</pre>
<div class="output">
<strong>Output:</strong>
<p>
2</p>
</div>

<h3>5. Extern Inline Function</h3>
<p>If the function is defined with external linkage, then the compiler will try to find its definition in other translation units. If found, inlining will still depend on the optimization flag. But the function will be executed in both cases. It will not throw an error.</p>
<p>At the end of the day, inlining is dependent on the compiler optimization schemes. All the other cases are just fallback measures to keep the program from throwing the error.</p>

<h3>Inline Function vs. Macro</h3>
<p>An inline function is similar to a macro in that it can substitute the function call with actual code. However, there are some key differences:</p>
<table>
    <thead>
        <tr>
            <th>Feature</th>
            <th>Inline Function</th>
            <th>Macro</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Type Safety</td>
            <td>Type-checked, respects data types.</td>
            <td>No type-checking, can lead to unexpected results.</td>
        </tr>
        <tr>
            <td>Debugging</td>
            <td>Easier to debug, behaves like a regular function.</td>
            <td>Harder to debug, errors may not be clear.</td>
        </tr>
        <tr>
            <td>Parameter Evaluation</td>
            <td>Parameters are evaluated once.</td>
            <td>Parameters may be evaluated multiple times.</td>
        </tr>
        <tr>
            <td>Recursion Support</td>
            <td>Can be recursive.</td>
            <td>Cannot be recursive.</td>
        </tr>
    </tbody>
</table>

<h3>When to Use Inline Functions?</h3>
<p>The use of inline functions is preferred for:</p>
<ul>
    <li><strong>Small Functions:</strong> Inline functions are best suited for small, frequently used functions where the performance improvement from avoiding function calls is significant.</li>
    <li><strong>Time-Critical Code:</strong> Use inline functions in scenarios where performance is critical, such as embedded systems.</li>
    <li><strong>Type-Sensitive Operations:</strong> Inline functions are preferred over macros because they respect type safety and scope.</li>
</ul>


            </section>

        </div>
        </>
    );
};
export default Inline;
