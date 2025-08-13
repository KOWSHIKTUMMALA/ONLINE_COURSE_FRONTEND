import React from 'react';
import './CLang.css';
const Loops = () => {
    return (
        <>
            <div>
                <header className="header">
                    <h1>Loops in C</h1>
                </header>

<section className="section" id="C loops">
<h2>C – Loops</h2>
    
    <p>Loops in programming are used to repeat a block of code until the specified condition is met. A loop statement allows programmers to execute a statement or group of statements multiple times without repetition of code.</p>

    <h3>Example: Need of Loops</h3>
    <pre>{`
// C program to illustrate need of loops
#include <stdio.h>

int main() {
    printf("Hello World\n");
    printf("Hello World\n");
    printf("Hello World\n");
    printf("Hello World\n");
    printf("Hello World\n");
    printf("Hello World\n");
    printf("Hello World\n");
    printf("Hello World\n");
    printf("Hello World\n");
    printf("Hello World\n");

    return 0;
}`}</pre>
    <div class="output">
        <h4>Output:</h4>
        <p>Hello World<br/>Hello World<br/>Hello World<br/>Hello World<br/>Hello World<br/>Hello World<br/>Hello World<br/>Hello World<br/>Hello World<br/>Hello World</p>
    </div>

    <h3>Types of Loops in C</h3>
    <p>There are mainly two types of loops in C Programming:</p>
    <ul>
        <li><strong>Entry Controlled loops:</strong> In Entry controlled loops, the test condition is checked before entering the main body of the loop. <code>for</code> Loop and <code>while</code> Loop are Entry-controlled loops.</li>
        <li><strong>Exit Controlled loops:</strong> In Exit controlled loops, the test condition is evaluated at the end of the loop body. The loop body will execute at least once, irrespective of whether the condition is true or false. <code>do-while</code> Loop is an Exit Controlled loop.</li>
    </ul>

    <h3>Loop Types and Descriptions</h3>
    <table>
        <tr>
            <th>Loop Type</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>for loop</td>
            <td>First initializes, then condition check, then executes the body, and at last, the update is done.</td>
        </tr>
        <tr>
            <td>while loop</td>
            <td>First initializes, then condition checks, and then executes the body. Updating can be inside the body.</td>
        </tr>
        <tr>
            <td>do-while loop</td>
            <td>First executes the body and then the condition check is done.</td>
        </tr>
    </table>

    <h3>for Loop</h3>
    <p>The <code>for</code> loop in C programming is a repetition control structure that allows programmers to write a loop that will be executed a specific number of times. It enables programmers to perform n number of steps together in a single line.</p>

    <h3>Syntax of for Loop</h3>
    <pre>{`
for (initialize expression; test expression; update expression) {
    // body of for loop
}`}</pre>

    <h3>Example of for Loop</h3>
    <pre>{`
// C program to illustrate for loop
#include <stdio.h>

// Driver code
int main() {
    int i = 0;

    for (i = 1; i <= 10; i++) {
        printf("Hello World\n");
    }
    return 0;
}`}</pre>
    <div class="output">
        <h4>Output:</h4>
        <p>Hello World<br/>Hello World<br/>Hello World<br/>Hello World<br/>Hello World<br/>Hello World<br/>Hello World<br/>Hello World<br/>Hello World<br/>Hello World</p>
    </div>

    <h3>while Loop</h3>
    <p>The <code>while</code> loop does not depend upon the number of iterations. In a <code>for</code> loop, the number of iterations is previously known, but in a <code>while</code> loop, the execution is terminated based on the test condition. If the test condition becomes false, it will break from the loop; otherwise, the body will be executed.</p>

    <h3>Syntax of while Loop</h3>
    <pre>{`
initialization_expression;

while (test_expression) {
    // body of the while loop
    update_expression;
}`}</pre>

    <h3>Example of while Loop</h3>
    <pre>{`
// C program to illustrate while loop
#include <stdio.h>

// Driver code
int main() {
    // Initialization expression
    int i = 2;

    // Test expression
    while (i < 10) {
        // loop body
        printf("Hello World\n");

        // update expression
        i++;
    }

    return 0;
}`}</pre>
    <div class="output">
        <h4>Output:</h4>
        <p>Hello World<br/>Hello World<br/>Hello World<br/>Hello World<br/>Hello World<br/>Hello World<br/>Hello World<br/>Hello World</p>
    </div>

    <h3>do-while Loop</h3>
    <p>The <code>do-while</code> loop is similar to a <code>while</code> loop, but the only difference is that the test condition is evaluated at the end of the body. In the <code>do-while</code> loop, the loop body will execute at least once, irrespective of the test condition.</p>

    <h3>Syntax of do-while Loop</h3>
    <pre>{`
initialization_expression;
do {
    // body of do-while loop
    update_expression;
} while (test_expression);`}</pre>

    <h3>Example of do-while Loop</h3>
    <pre>{`
// C program to illustrate do-while loop
#include <stdio.h>

// Driver code
int main() {
    // Initialization expression
    int i = 2;

    do {
        // loop body
        printf("Hello World\n");

        // Update expression
        i++;
    } while (i < 1); // Test expression

    return 0;
}`}</pre>
    <div class="output">
        <h4>Output:</h4>
        <p>Hello World</p>
    </div>

    <h3>Loop Control Statements</h3>
    <p>Loop control statements in C programming are used to change execution from its normal sequence.</p>
    <table>
        <tr>
            <th>Name</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>break statement</td>
            <td>Terminates the loop or switch statement and transfers execution to the statement immediately following the loop or switch.</td>
        </tr>
        <tr>
            <td>continue statement</td>
            <td>Skips the remainder of the loop body and immediately resets the condition before reiterating.</td>
        </tr>
        <tr>
            <td>goto statement</td>
            <td>Transfers control to the labeled statement.</td>
        </tr>
    </table>

    <h3>Infinite Loop</h3>
    <p>An infinite loop is executed when the test expression never becomes false, and the body of the loop is executed repeatedly. A program is stuck in an infinite loop when the condition is always true. Mostly, this is an error that can be resolved using Loop Control statements.</p>

    <h3>Example of Infinite Loop using for Loop</h3>
    <pre>{`
// C program to demonstrate infinite loops using for loop
#include <stdio.h>

// Driver code
int main() {
    int i;

    // This is an infinite for loop as the condition expression is blank
    for ( ; ; ) {
        printf("This loop will run forever.\n");
    }

    return 0;
}`}</pre>
    <div class="output">
        <h4>Output:</h4>
        <p>This loop will run forever.<br/>This loop will run forever.<br/>This loop will run forever.<br/>...</p>
    </div>

    <h3>Example of Infinite Loop using while Loop</h3>
    <pre>{`
// C program to demonstrate infinite loop using while loop
#include <stdio.h>

// Driver code
int main() {
    while (1) {
        printf("This loop will run forever.\n");
    }
    return 0;
}`}</pre>
    <div class="output">
        <h4>Output:</h4>
        <p>This loop will run forever.<br/>This loop will run forever.<br/>This loop will run forever.<br/>...</p>
    </div>

    <h3>Example of Infinite Loop using do-while Loop</h3>
    <pre>{`
// C program to demonstrate infinite loop using do-while loop
#include <stdio.h>

// Driver code
int main() {
    do {
        printf("This loop will run forever.\n");
    } while (1);

    return 0;
}`}</pre>
    <div class="output">
        <h4>Output:</h4>
        <p>This loop will run forever.<br/>This loop will run forever.<br/>This loop will run forever.<br/>...</p>
    </div>
</section>
            </div>
        </>
    );
};
export default Loops;