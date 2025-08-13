import React from 'react';
import './CLang.css';
const Conditional = () => {
    return (
        <>
            <div>
                <header className="header">
                    <h1>Conditional Statements in C</h1>
                </header>
<section className="section" id="Conditional statements">
<h2>Decision Making in C (if, if..else, Nested if, if-else-if)</h2>


    <p>The conditional statements (also known as decision control structures) such as <code>if</code>, <code>if else</code>, <code>switch</code>, etc. are used for decision-making purposes in C programs.</p>

    <p>They are also known as <strong>Decision-Making Statements</strong> and are used to evaluate one or more conditions and make the decision whether to execute a set of statements or not. These decision-making statements in programming languages decide the direction of the flow of program execution.</p>

    <h3>Need of Conditional Statements</h3>
    <p>There come situations in real life when we need to make some decisions and based on these decisions, we decide what should we do next. Similar situations arise in programming also where we need to make some decisions and based on these decisions we will execute the next block of code. For example, in C if <code>x</code> occurs then execute <code>y</code> else execute <code>z</code>. There can also be multiple conditions like in C if <code>x</code> occurs then execute <code>p</code>, else if condition <code>y</code> occurs execute <code>q</code>, else execute <code>r</code>. This condition of C <code>else-if</code> is one of the many ways of importing multiple conditions.</p>

    <h3>Types of Conditional Statements in C</h3>
    <p>Following are the decision-making statements available in C:</p>
    <ul>
        <li><strong>if Statement</strong></li>
        <li><strong>if-else Statement</strong></li>
        <li><strong>Nested if Statement</strong></li>
        <li><strong>if-else-if Ladder</strong></li>
        <li><strong>switch Statement</strong></li>
        <li><strong>Conditional Operator</strong></li>
        <li><strong>Jump Statements:</strong>
            <ul>
                <li><code>break</code></li>
                <li><code>continue</code></li>
                <li><code>goto</code></li>
                <li><code>return</code></li>
            </ul>
        </li>
    </ul>

    <p>Let’s discuss each of them one by one.</p>

    <h3>1. if in C</h3>
    <p>The <code>if</code> statement is the most simple decision-making statement. It is used to decide whether a certain statement or block of statements will be executed or not, i.e., if a certain condition is true, then a block of statements is executed; otherwise, it is not.</p>

    <h3>Syntax of if Statement</h3>
    <pre>{`if (condition) {
    // Statements to execute if
    // condition is true
`}</pre>
    <p>Here, the condition after evaluation will be either true or false. The <code>if</code> statement accepts boolean values – if the value is true, then it will execute the block of statements below it; otherwise, it will not. If we do not provide the curly braces <code>{}</code> after <code>if (condition)</code>, then by default, the <code>if</code> statement will consider the first immediately below statement to be inside its block.</p>

    

    <h3>Example of if in C</h3>
    <pre>{`// C program to illustrate If statement
#include <stdio.h>

int main() {
    int i = 10;

    if (i > 15) {
        printf("10 is greater than 15");
    }

    printf("I am Not in if");
`}</pre>
    <div class="output">
        <h4>Output:</h4>
        <p>I am Not in if</p>
    </div>
    <p>As the condition present in the <code>if</code> statement is false, the block below the <code>if</code> statement is not executed.</p>

    <h3>2. if-else in C</h3>
    <p>The <code>if</code> statement alone tells us that if a condition is true, it will execute a block of statements, and if the condition is false, it won’t. But what if we want to do something else when the condition is false? Here comes the <code>else</code> statement. We can use the <code>else</code> statement with the <code>if</code> statement to execute a block of code when the condition is false. The <code>if-else</code> statement consists of two blocks, one for false expression and one for true expression.</p>

    <h3>Syntax of if-else in C</h3>
    <pre>{`if (condition) {
    // Executes this block if
    // condition is true
} else {
    // Executes this block if
    // condition is false
`}</pre>


    <h3>Example of if-else</h3>
    <pre>{`// C program to illustrate If statement
#include &lt;stdio.h&gt;

int main() {
    int i = 20;

    if (i < 15) {
        printf("i is smaller than 15");
    } else {
        printf("i is greater than 15");
    }
    return 0;
`}</pre>
    <div class="output">
        <h4>Output:</h4>
        <p>i is greater than 15</p>
    </div>
    <p>The block of code following the <code>else</code> statement is executed as the condition present in the <code>if</code> statement is false.</p>

    <h3>3. Nested if-else in C</h3>
    <p>A nested <code>if</code> in C is an <code>if</code> statement that is the target of another <code>if</code> statement. Nested <code>if</code> statements mean an <code>if</code> statement inside another <code>if</code> statement. Yes, C allows us to nest <code>if</code> statements within <code>if</code> statements, i.e., we can place an <code>if</code> statement inside another <code>if</code> statement.</p>

    <h3>Syntax of Nested if-else</h3>
    <pre>{`if (condition1) {
    // Executes when condition1 is true
    if (condition2) {
        // statement 1
    } else {
        // Statement 2
    }
} else {
    if (condition3) {
        // statement 3
    } else {
        // Statement 4
    }
`}</pre>
    

    <h3>Example of Nested if-else</h3>
    <pre>{`// C program to illustrate nested-if statement
#include <stdio.h>;

int main() {
    int i = 10;

    if (i == 10) {
        // First if statement
        if (i < 15)
            printf("i is smaller than 15\n");

        // Nested - if statement
        // Will only be executed if statement above
        // is true
        if (i < 12)
            printf("i is smaller than 12 too\n");
        else
            printf("i is greater than 15");
    } else {
        if (i == 20) {
            // Nested - if statement
            // Will only be executed if statement above
            // is true
            if (i < 22)
                printf("i is smaller than 22 too\n");
            else
                printf("i is greater than 25");
        }
    }

    return 0;
`}</pre>
    <div class="output">
        <h4>Output:</h4>
        <p>i is smaller than 15<br/>i is smaller than 12 too</p>
    </div>

    <h3>4. if-else-if Ladder in C</h3>
    <p>The <code>if-else-if</code> statements are used when the user has to decide among multiple options. The C <code>if</code> statements are executed from the top down. As soon as one of the conditions controlling the <code>if</code> is true, the statement associated with that <code>if</code> is executed, and the rest of the C <code>else-if</code> ladder is bypassed. If none of the conditions is true, then the final <code>else</code> statement will be executed. The <code>if-else-if</code> ladder is similar to the <code>switch</code> statement.</p>

    <h3>Syntax of if-else-if Ladder</h3>
    <pre>{`if (condition)
    statement;
else if (condition)
    statement;
.
.
else
    statement;`}</pre>

    

    <h3>Example of if-else-if Ladder</h3>
    <pre>{`// C program to illustrate nested-if statement
#include &lt;stdio.h&gt;

int main() {
    int i = 20;

    if (i == 10)
        printf("i is 10");
    else if (i == 15)
        printf("i is 15");
    else if (i == 20)
        printf("i is 20");
    else
        printf("i is not present");
`}</pre>
    <div class="output">
        <h4>Output:</h4>
        <p>i is 20</p>
    </div>

    <h3>5. switch Statement in C</h3>
    <p>The <code>switch</code> case statement is an alternative to the <code>if-else-if</code> ladder that can be used to execute the conditional code based on the value of the variable specified in the <code>switch</code> statement. The <code>switch</code> block consists of cases to be executed based on the value of the <code>switch</code> variable.</p>

    <h3>Syntax of switch</h3>
    <pre>{`
switch (expression) {
    case value1:
        statements;
    case value2:
        statements;
    ....
    ....
    ....
    default:
        statements;
}`}</pre>
    <p><strong>Note:</strong> The <code>switch</code> expression should evaluate to either integer or character. It cannot evaluate any other data type.</p>

    <h3>Example of switch Statement</h3>
    <pre>{`
// C Program to illustrate the use of switch statement
#include <stdio.h>

int main() {
    // variable to be used in switch statement
    int var = 2;

    // declaring switch cases
    switch (var) {
    case 1:
        printf("Case 1 is executed");
        break;
    case 2:
        printf("Case 2 is executed");
        break;
    default:
        printf("Default Case is executed");
        break;
    }

    return 0;
}`}</pre>
    <div class="output">
        <h4>Output:</h4>
        <p>Case 2 is executed</p>
    </div>

    <h3>6. Conditional Operator in C</h3>
    <p>The conditional operator is used to add conditional code in our program. It is similar to the <code>if-else</code> statement. It is also known as the ternary operator as it works on three operands.</p>

    <h3>Syntax of Conditional Operator</h3>
    <pre>{`
(condition) ? [true_statements] : [false_statements];`}</pre>

    <h3>Example of Conditional Operator</h3>
    <pre>{`
// C Program to illustrate the use of conditional operator
#include <stdio.h>

// driver code
int main() {
    int var;
    int flag = 0;

    // using conditional operator to assign the value to var
    // according to the value of flag
    var = flag == 0 ? 25 : -25;
    printf("Value of var when flag is 0: %d\n", var);

    // changing the value of flag
    flag = 1;
    // again assigning the value to var using same statement
    var = flag == 0 ? 25 : -25;
    printf("Value of var when flag is NOT 0: %d", var);

    return 0;
}`}</pre>
    <div class="output">
        <h4>Output:</h4>
        <p>Value of var when flag is 0: 25<br/>Value of var when flag is NOT 0: -25</p>
    </div>

    <h3>7. Jump Statements in C</h3>
    <p>These statements are used in C for the unconditional flow of control throughout the functions in a program. They support four types of jump statements:</p>

    <h3>A) break</h3>
    <p>This loop control statement is used to terminate the loop. As soon as the <code>break</code> statement is encountered from within a loop, the loop iterations stop there, and control returns from the loop immediately to the first statement after the loop.</p>

    <h3>Syntax of break</h3>
    <pre>{`
break;`}</pre>
    <p>Basically, <code>break</code> statements are used in situations when we are not sure about the actual number of iterations for the loop or we want to terminate the loop based on some condition.</p>

    <h3>Example of break</h3>
    <pre>{`
// C program to illustrate
// to show usage of break
// statement
#include <stdio.h>

void findElement(int arr[], int size, int key) {
    // loop to traverse array and search for key
    for (int i = 0; i < size; i++) {
        if (arr[i] == key) {
            printf("Element found at position: %d", (i + 1));
            break;
        }
    }
}

int main() {
    int arr[] = { 1, 2, 3, 4, 5, 6 };

    // no of elements
    int n = 6;

    // key to be searched
    int key = 3;

    // Calling function to find the key
    findElement(arr, n, key);

    return 0;
}`}</pre>
    <div class="output">
        <h4>Output:</h4>
        <p>Element found at position: 3</p>
    </div>

    <h3>B) continue</h3>
    <p>This loop control statement is just like the <code>break</code> statement. The <code>continue</code> statement is opposite to that of the <code>break</code> statement; instead of terminating the loop, it forces the execution of the next iteration of the loop.</p>

    <h3>Syntax of continue</h3>
    <pre>{`
continue;`}</pre>

    <h3>Example of continue</h3>
    <pre>{`
// C program to explain the use
// of continue statement
#include <stdio.h>

int main() {
    // loop from 1 to 10
    for (int i = 1; i <= 10; i++) {

        // If i is equals to 6,
        // continue to next iteration
        // without printing
        if (i == 6)
            continue;

        else
            // otherwise print the value of i
            printf("%d ", i);
    }

    return 0;
}`}</pre>
    <div class="output">
        <h4>Output:</h4>
        <p>1 2 3 4 5 7 8 9 10</p>
    </div>

    <h3>C) goto</h3>
    <p>The <code>goto</code> statement in C, also referred to as the unconditional jump statement, can be used to jump from one point to another within a function.</p>

    <h3>Syntax of goto</h3>
    <pre>{`
Syntax1      |   Syntax2
----------------------------
goto label;  |    label:  
.            |    .
.            |    .
.            |    .
label:       |    goto label;`}</pre>
    <p>In the above syntax, the first line tells the compiler to go to or jump to the statement marked as a label. Here, a label is a user-defined identifier that indicates the target statement. The statement immediately followed after <code>label:</code> is the destination statement. The <code>label:</code> can also appear before the <code>goto label;</code> statement in the above syntax.</p>

    <h3>Example of goto</h3>
    <pre>{`
// C program to print numbers
// from 1 to 10 using goto
// statement
#include <stdio.h>

// function to print numbers from 1 to 10
void printNumbers() {
    int n = 1;
label:
    printf("%d ", n);
    n++;
    if (n <= 10)
        goto label;
}

// Driver program to test above function
int main() {
    printNumbers();
    return 0;
}`}</pre>
    <div class="output">
        <h4>Output:</h4>
        <p>1 2 3 4 5 6 7 8 9 10</p>
    </div>

    <h3>D) return</h3>
    <p>The <code>return</code> statement in C returns the flow of the execution to the function from where it is called. This statement does not mandatorily need any conditional statements. As soon as the statement is executed, the flow of the program stops immediately and returns the control from where it was called. The <code>return</code> statement may or may not return anything for a void function, but for a non-void function, a return value must be returned.</p>

    <h3>Syntax of return</h3>
    <pre>{`
return [expression];`}</pre>

    <h3>Example of return</h3>
    <pre>{`
// C code to illustrate return
// statement
#include <stdio.h>

// non-void return type
// function to calculate sum
int SUM(int a, int b) {
    int s1 = a + b;
    return s1;
}

// returns void
// function to print
void Print(int s2) {
    printf("The sum is %d", s2);
    return;
}

int main() {
    int num1 = 10;
    int num2 = 10;
    int sum_of = SUM(num1, num2);
    Print(sum_of);
    return 0;
}`}</pre>
    <div class="output">
        <h4>Output:</h4>
        <p>The sum is 20</p>
    </div>

</section>
</div>
</>
    );
};
export default Conditional;