import React from "react";
import './CLang.css'

const Function=()=>{
    return(
        <>
        <div>
        <header className="header">
        <h1>C Functions</h1>
    </header>

<section className="section" id="Function">
<h2>Functions</h2>
    <p>A function in C is a set of statements that when called perform some specific tasks. It is the basic building block of a C program that provides modularity and code reusability. The programming statements of a function are enclosed within <code>{ }</code> braces, having certain meanings and performing certain operations. They are also called subroutines or procedures in other languages.</p>

    <p>In this article, we will learn about functions, function definition, declaration, arguments and parameters, return values, and many more.</p>

    <h3>Syntax of Functions in C</h3>
    <p>The syntax of function can be divided into 3 aspects:</p>
    <ul>
        <li>Function Declaration</li>
        <li>Function Definition</li>
        <li>Function Calls</li>
    </ul>

    <h3>Function Declarations</h3>
    <p>In a function declaration, we must provide the function name, its return type, and the number and type of its parameters. A function declaration tells the compiler that there is a function with the given name defined somewhere else in the program.</p>

    <h3>Syntax</h3>
    <pre>{`
return_type name_of_the_function (parameter_1, parameter_2);
    `}</pre>

    <p>The parameter name is not mandatory while declaring functions. We can also declare the function without using the name of the data variables.</p>

    <h3>Example</h3>
    <pre>{`
int sum(int a, int b);  // Function declaration with parameter names
int sum(int , int);      // Function declaration without parameter names
    `}</pre>

    <h3>Function Declaration</h3>
    <p><strong>Note:</strong> A function in C must always be declared globally before calling it.</p>
        
    <h3>Function Definition</h3>
    <p>
        The function definition consists of actual statements which are executed when the function is called (i.e. when the program control comes to the function).
    </p>
    <p>
        A C function is generally defined and declared in a single step because the function definition always starts with the function declaration, so we do not need to declare it explicitly. The below example serves as both a function definition and a declaration.
    </p>
    <pre>{`
return_type function_name (para1_type para1_name, para2_type para2_name)
{
    // body of the function
}`}</pre>

    <h3>Function Call</h3>
    <p>
        A function call is a statement that instructs the compiler to execute the function. We use the function name and parameters in the function call.
    </p>
    <p>
        In the below example, the first sum function is called, and 10, 30 are passed to the sum function. After the function call, the sum of a and b is returned, and control is also returned back to the main function of the program.
    </p>
    <p>
        <strong>Note:</strong> Function call is necessary to bring the program control to the function definition. If not called, the function statements will not be executed.
    </p>

    <h3>Example of C Function</h3>
    <pre>{`
// C program to show function call and definition
#include <stdio.h>

// Function that takes two parameters a and b as inputs and returns their sum
int sum(int a, int b) 
{ 
    return a + b; 
}

// Driver code
int main()
{
    // Calling sum function and storing its value in add variable
    int add = sum(10, 30);
    
    printf("Sum is: %d", add);
    return 0;
}`}</pre>
    <div class="output">
        <h4>Output:</h4>
        <p>Sum is: 40</p>
    </div>
    <p>
        As we noticed, we have not used explicit function declaration. We simply defined and called the function.
    </p>

    <h3>Function Return Type</h3>
    <p>
        Function return type tells what type of value is returned after the function is executed. When we don’t want to return a value, we can use the <code>void</code> data type.
    </p>
    <p>
        Example:
    </p>
    <pre>{`
int func(parameter_1, parameter_2);`}</pre>
    <p>
        The above function will return an integer value after running statements inside the function.
    </p>
    <p>
        <strong>Note:</strong> Only one value can be returned from a C function. To return multiple values, we have to use pointers or structures.
    </p>

    <h3>Function Arguments</h3>
    <p>
        Function Arguments (also known as Function Parameters) are the data that is passed to a function.
    </p>
    <p>
        Example:
    </p>
    <pre>{`
int function_name(int var1, int var2);`}</pre>

    <h3>Conditions of Return Types and Arguments</h3>
    <p>
        In C programming language, functions can be called either with or without arguments and might return values. They may or might not return values to the calling functions.
    </p>
    <ul>
        <li>Function with no arguments and no return value</li>
        <li>Function with no arguments and with return value</li>
        <li>Function with argument and with no return value</li>
        <li>Function with arguments and with return value</li>
    </ul>

    <h3>How Does C Function Work?</h3>
    <p>
        Working of the C function can be broken into the following steps:
    </p>
    <ol>
        <li>Declaring a function</li>
        <li>Defining a function</li>
        <li>Calling the function</li>
        <li>Executing the function</li>
        <li>Returning a value</li>
    </ol>

    <h3>Types of Functions</h3>
    <p>
        There are two types of functions in C:
    </p>
    <ul>
        <li>Library Functions</li>
        <li>User Defined Functions</li>
    </ul>

    <h3>1. Library Function</h3>
    <p>
        A library function is also referred to as a “built-in function”. A compiler package already exists that contains these functions, each of which has a specific meaning and is included in the package. Built-in functions have the advantage of being directly usable without being defined, whereas user-defined functions must be declared and defined before being used.
    </p>
    <p>
        <strong>Example:</strong> <code>pow()</code>, <code>sqrt()</code>, <code>strcmp()</code>, <code>strcpy()</code>, etc.
    </p>

    <h3>Example of Library Function</h3>
    <pre>{`
// C program to implement the above approach
#include <math.h>
#include <stdio.h>

// Driver code
int main()
{
    double Number;
    Number = 49;

    // Computing the square root with the help of predefined C library function
    double squareRoot = sqrt(Number);
    
    printf("The Square root of %.2lf = %.2lf", Number, squareRoot);
    return 0;
}`}</pre>
    <div class="output">
        <h4>Output:</h4>
        <p>The Square root of 49.00 = 7.00</p>
    </div>

    <h3>2. User Defined Function</h3>
    <p>
        Functions that the programmer creates are known as User-Defined functions or “tailor-made functions”. User-defined functions can be improved and modified according to the need of the programmer. Whenever we write a function that is case-specific and is not defined in any header file, we need to declare and define our own functions according to the syntax.
    </p>

    <h3>Example of User Defined Function</h3>
    <pre>{`
// C program to show user-defined functions
#include <stdio.h>

int sum(int a, int b) 
{ 
    return a + b; 
}

// Driver code
int main()
{
    int a = 30, b = 40;
 
    // function call
    int res = sum(a, b);

    printf("Sum is: %d", res);
    return 0;
}`}</pre>
    <div class="output">
        <h4>Output:</h4>
        <p>Sum is: 70</p>
    </div>

    <h3>Passing Parameters to Functions</h3>
    <p>
        The data passed when the function is being invoked is known as the Actual parameters. In the below program, 10 and 30 are known as actual parameters. Formal Parameters are the variable and the data type as mentioned in the function declaration. In the below program, a and b are known as formal parameters.
    </p>
    <p>
        We can pass arguments to the C function in two ways:
    </p>
    <ol>
        <li>Pass by Value</li>
        <li>Pass by Reference</li>
    </ol>

    <h3>1. Pass by Value</h3>
    <p>
        Parameter passing in this method copies values from actual parameters into formal function parameters. As a result, any changes made inside the functions do not reflect in the caller’s parameters.
    </p>

    <h3>Example of Pass by Value</h3>
    <pre>{`
// C program to show use of call by value
#include <stdio.h>

void swap(int var1, int var2)
{
    int temp = var1;
    var1 = var2;
    var2 = temp;
}

// Driver code
int main()
{
    int var1 = 3, var2 = 2;
    printf("Before swap Value of var1 and var2 is: %d, %d\n", var1, var2);
    swap(var1, var2);
    printf("After swap Value of var1 and var2 is: %d, %d", var1, var2);
    return 0;
}`}</pre>
    <div class="output">
        <h4>Output:</h4>
        <p>Before swap Value of var1 and var2 is: 3, 2<br/>After swap Value of var1 and var2 is: 3, 2</p>
    </div>

    <h3>2. Pass by Reference</h3>
    <p>
        The caller’s actual parameters and the function’s actual parameters refer to the same locations, so any changes made inside the function are reflected in the caller’s actual parameters.
    </p>

    <h3>Example of Pass by Reference</h3>
    <pre>{`
// C program to show use of call by Reference
#include <stdio.h>

void swap(int *var1, int *var2)
{
    int temp = *var1;
    *var1 = *var2;
    *var2 = temp;
}

// Driver code
int main()
{
    int var1 = 3, var2 = 2;
    printf("Before swap Value of var1 and var2 is: %d, %d\n", var1, var2);
    swap(&var1, &var2);
    printf("After swap Value of var1 and var2 is: %d, %d", var1, var2);
    return 0;
}`}</pre>
    <div class="output">
        <h4>Output:</h4>
        <p>Before swap Value of var1 and var2 is: 3, 2<br/>After swap Value of var1 and var2 is: 2, 3</p>
    </div>

    <h3>Advantages of Functions in C</h3>
    <ul>
        <li>The function can reduce the repetition of the same statements in the program.</li>
        <li>The function makes code readable by providing modularity to our program.</li>
        <li>There is no fixed number of calling functions; it can be called as many times as you want.</li>
        <li>The function reduces the size of the program.</li>
        <li>Once the function is declared, you can just use it without thinking about the internal working of the function.</li>
    </ul>

    <h3>Disadvantages of Functions in C</h3>
    <ul>
        <li>Cannot return multiple values.</li>
        <li>Memory and time overhead due to stack frame allocation and transfer of program control.</li>
    </ul>

    <h3>Conclusion</h3>
    <p>
        In this article, we discussed the following points about the function:
    </p>
    <ul>
        <li>The function is the block of code that can be reused as many times as we want inside a program.</li>
        <li>To use a function, we need to call a function.</li>
        <li>Function declaration includes function_name, return type, and parameters.</li>
        <li>Function definition includes the body of the function.</li>
        <li>The function is of two types: user-defined function and library function.</li>
        <li>In function, we can pass arguments in two ways: call by value and call by reference.</li>
    </ul>
    </section>
        </div>
        
        </>
    );
};
export default Function;