import React from "react";
import './CLang.css'

const Parameter=()=>{
    return(
        <>
        <div>
            <header className="header">
           <h1> Parameter Passing Techniques in C</h1>

            </header>
            <section className="section">
            <h2>Parameter Passing Techniques in C</h2>
    <p><strong>Last Updated : 10 Jan, 2025</strong></p>

    <p>In C, there are different ways in which parameter data can be passed into and out of methods and functions. Let us assume that a function <code>B()</code> is called from another function <code>A()</code>. In this case, <code>A</code> is called the “caller function” and <code>B</code> is called the “called function or callee function”. Also, the arguments which <code>A</code> sends to <code>B</code> are called actual arguments and the parameters of <code>B</code> are called formal arguments.</p>

    <h3>Terminology</h3>
    <ul>
        <li><strong>Formal Parameter:</strong> A variable and its type as it appears in the prototype of the function or method.</li>
        <li><strong>Actual Parameter:</strong> The variable or expression corresponding to a formal parameter that appears in the function or method call in the calling environment.</li>
    </ul>

    <h3>Modes:</h3>
    <ul>
        <li><strong>IN:</strong> Passes info from caller to the callee.</li>
        <li><strong>OUT:</strong> Callee writes values in the caller.</li>
        <li><strong>IN/OUT:</strong> The caller tells the callee the value of the variable, which the callee may update.</li>
    </ul>

    <p>Parameter passing techniques in C, such as pass by value and pass by reference, are fundamental for controlling data flow.</p>

    <h3>Methods of Parameter Passing in C</h3>
    <p>There are two ways in which we can pass the parameters to the function in C:</p>

    <h3>1. Pass By Value</h3>
    <p>This method uses in-mode semantics. Changes made to formal parameters do not get transmitted back to the caller. Any modifications to the formal parameter variable inside the called function or method affect only the separate storage location and will not be reflected in the actual parameter in the calling environment. This method is also called <strong>call by value</strong>.</p>

    <h3>Example of Pass by Value</h3>
    <pre>{`
#include <stdio.h>

void func(int a, int b)
{
    a += b;
    printf("In func, a = %d b = %d\n", a, b);
}
int main(void)
{
    int x = 5, y = 7;

    // Passing parameters
    func(x, y);
    printf("In main, x = %d y = %d\n", x, y);
    return 0;
}
    `}</pre>
<div className="output">
    <h4>Output:</h4>
    <p>In func, a = 12 b = 7<br/>
    In main, x = 5 y = 7</p>
</div>
    

    <h3>Shortcomings of Pass By Value:</h3>
    <ul>
        <li>Inefficiency in storage allocation</li>
        <li>For objects and arrays, the copy semantics are costly</li>
    </ul>

    <p><strong>Note:</strong> Languages like C, C++, and Java support this type of parameter passing. Java, in fact, is strictly call by value.</p>

    <p><strong>C doesn’t support call by reference.</strong></p>

    <h3>2. Pass by Pointers</h3>
    <p>This technique uses a pointer. In function, we pass the memory address (pointer) of a variable rather than passing the actual value of the variable. This passing technique allows the function to access and modify the content at that particular memory location.</p>
    <h1>Pass by Pointers and Other Parameter Passing Methods in C</h1>

    <h3>Example of Pass by Pointers</h3>
    <p>The below example demonstrates passing by pointer in a function.</p>

    <pre>{`
#include <stdio.h>

// Function to modify the value passed as pointer to an int
void modifyVal(int* myptr)
{
    // Access and modifying the value pointed by myptr
    *myptr = *myptr + 5;
}

int main()
{
    int x = 5;
    int* myptr = &x;

    // Passing the pointer ptr to the function
    modifyVal(myptr);

    // Printing the modified value of x
    printf("Modified value of x is: %d\n", x);
    return 0;
}
    `}</pre>
<div className="output">
    <h4>Output:</h4>
    <p>Modified value of x is: 10</p>
</div>


    <h3>Shortcomings of Pass by Pointers</h3>
    <ul>
        <li>Pointers can be null, so null pointer issues arise if not properly checked.</li>
        <li>If more than one pointer points to the same memory location, changes made by one pointer affect the others.</li>
        <li>Memory management should be done effectively using functions like <code>malloc</code> and <code>free</code>.</li>
    </ul>

    <h3>Other Methods of Parameter Passing</h3>
    <p>These techniques were used in earlier programming languages like Pascal, Algol, and Fortran. They are not commonly used in high-level languages.</p>

    <h3>1. Pass by Result</h3>
    <p>This method uses out-mode semantics. Just before control is transferred back to the caller, the value of the formal parameter is transmitted back to the actual parameter. This method is sometimes called <strong>call by result</strong>. It is implemented by copying.</p>

    <h3>2. Pass by Value-Result</h3>
    <p>This method uses in/out-mode semantics, combining Pass-by-Value and Pass-by-Result. Before control is transferred back to the caller, the value of the formal parameter is transmitted back to the actual parameter. It is sometimes called <strong>call by value-result</strong>.</p>

    <h3>3. Pass by Name</h3>
    <p>This technique is used in programming languages such as Algol. In this technique, the symbolic “name” of a variable is passed, which allows it to be accessed and updated.</p>

    <h3>Example of Pass by Name</h3>
    <pre>{`
procedure double(x);
  real x;
begin 
  x := x * 2;
end;
    `}</pre>

    <h3>Implications of Pass-by-Name Mechanism:</h3>
    <ul>
        <li>The argument expression is re-evaluated each time the formal parameter is passed.</li>
        <li>The procedure can change the values of variables used in the argument expression and hence change the expression’s value.</li>
    </ul>

            </section>
        </div>
        </>
    );
};
export default Parameter;