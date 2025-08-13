import React from "react";
import './CLang.css'

const Recursion=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Recursion in C</h1>

            </header>
            <section className="section">
                <h2>C Recursion</h2>
<p>In C programming language, you may have heard of the concept of recursion. You may also have heard that recursion is difficult and complex to understand and implement. Do not worry! In this article, we are going to cover the basics of recursion in C, recursive functions, recursive calls, and how it is different from iteration.</p>

<h3>What is Recursion in C?</h3>
<p>First, let’s start with the recursion definition,</p>
<p>Recursion is the process of a function calling itself repeatedly till the given condition is satisfied. A function that calls itself directly or indirectly is called a recursive function and such kind of function calls are called recursive calls.</p>
<p>In C, recursion is used to solve complex problems by breaking them down into simpler sub-problems. We can solve large numbers of problems using recursion in C. For example, factorial of a number, generating Fibonacci series, generating subsets, etc.</p>
<p>Let’s discuss some basic terminologies and fundamentals of recursion before going into working and implementation.</p>

<h3>Recursive Functions in C</h3>
<p>In C, a function that calls itself is called Recursive Function. The recursive functions contain a call to themselves somewhere in the function body. Moreover, such functions can contain multiple recursive calls.</p>

<h3>Basic Structure of Recursive Functions</h3>
<p>The basic syntax structure of the recursive functions is:</p>
<pre>{`
type function_name (args) {
    // function statements
    // base condition
    // recursion case (recursive call)
}
`}</pre>

<h3>Example: C Program to Implement Recursion</h3>
<p>In the below C program, recursion is used to calculate the sum of the first N natural numbers.</p>
<pre>{`
#include <stdio.h>

int nSum(int n)
{
    // base condition to terminate the recursion when N = 0
    if (n == 0) {
        return 0;
    }

    // recursive case / recursive call
    int res = n + nSum(n - 1);

    return res;
}

int main()
{
    int n = 5;

    // calling the function
    int sum = nSum(n);

    printf("Sum of First %d Natural Numbers: %d", n, sum);
    return 0;
}
`}</pre>
<div className="output">
    <h4>Output:</h4>
    <p>Sum of First 5 Natural Numbers: 15
    </p>
</div>
<p>We will understand the different concepts of recursion using this example.</p>

<h3>Fundamentals of C Recursion</h3>
<p>The fundamental of recursion consists of two objects which are essential for any recursive function. These are:</p>
<ul>
    <li>Recursion Case</li>
    <li>Base Condition</li>
</ul>

<h3>1. Recursion Case</h3>
<p>The recursion case refers to the recursive call present in the recursive function. It decides what type of recursion will occur and how the problem will be divided into smaller subproblems.</p>
<p>The recursion case defined in the nSum() function of the above example is:</p>
<pre>{`
int res = n + nSum(n - 1);
`}</pre>
<p>The recursion case is often represented mathematically as a recurrence relation. For the above case:</p>
<pre>{`
f(N) = N + f(N - 1);
`}</pre>
<p>This recurrence relation is used for the complexity analysis of the method.</p>

<h3>2. Base Condition</h3>
<p>The base condition specifies when the recursion is going to terminate. It is the condition that determines the exit point of the recursion.</p>
<p><strong>Note:</strong> It is important to define the base condition before the recursive case otherwise, the base condition may never be encountered and recursion might continue till infinity.</p>
<p>Considering the above example again, the base condition defined for the nSum() function:</p>
<pre>{`
if (n == 0) {
    return 0;
}
`}</pre>
<p>Now that the basic terminologies and fundamentals are out of the way, let’s move on to understand how the recursion works in C.</p>

<h3>How Recursion Works in C?</h3>
<p>Recursion is considered difficult to understand by many people but once you understand the working of recursion, it becomes a powerful weapon in your arsenal to battle complex problems.</p>
<p>To understand how C recursion works, we will again refer to the example above and trace the flow of the program. In the nSum() function, Recursive Case is:</p>
<pre>{`
int res = n + nSum(n - 1);
`}</pre>
<p>In the example, n = 5, so as nSum(5)’s recursive case, we get:</p>
<pre>{`
int res = 5 + nSum(4);
`}</pre>
<p>In nSum(4), the recursion case and everything else will be the same, but n = 4. Let’s evaluate the recursive case for n = 4,</p>
<pre>{`
int res = 4 + nSum(3);
`}</pre>
<p>Similarly, for nSum(3), nSum(2) and nSum(1):</p>
<pre>{`
int res = 3 + nSum(2);    // nSum(3)
int res = 2 + nSum(1);    // nSum(2)
int res = 1 + nSum(0);    // nSum(1)
`}</pre>
<p>Let’s not evaluate nSum(0) and further for now.</p>
<p>Now recall that the return value of the nSum() function is stored in the same integer named res. So, instead of the function, we can put the value returned by these functions. As such, for nSum(5), we get:</p>
<pre>{`
int res = 5 + 4 + nSum(3);
`}</pre>
<p>Similarly, putting return values of nSum() for every n, we get:</p>
<pre>{`
int res = 5 + 4 + 3 + 2 + 1 + nSum(0);
`}</pre>
<p>In nSum() function, the base condition is:</p>
<pre>{`
if (n == 0) {
    return 0;
}
`}</pre>
<p>which means that when nSum(0) will return 0. Putting this value in nSum(5)’s recursive case, we get:</p>
<pre>{`
int res = 5 + 4 + 3 + 2 + 1 + 0 = 15
`}</pre>
<p>At this point, we can see that there are no function calls left. So the recursion will stop here and the final value returned by the function will be 15, which is the sum of the first 5 natural numbers.</p>

<h3>Memory Allocation for C Recursive Function</h3>
<p>To further improve our understanding of recursion in C, we will look into how the recursion is internally handled by the C compiler and how the memory is managed for recursive functions.</p>
<p>As you may know, all the function’s local variables and other stuff are stored inside the stack frame in stack memory, and once the function returns some value, its stack frame is removed from the memory. The recursion follows a similar concept but with a little twist. In Recursion:</p>
<ul>
    <li>A stack frame is created on top of the existing stack frames each time a recursive call is encountered, and the data of each recursive copy of the function will be stored in their respective stack.</li>
    <li>Once some value is returned by the function, its stack frame will be destroyed.</li>
    <li>The compiler maintains an instruction pointer to store the address of the point where the control should return in the function after its progressive copy returns some value. This return point is the statement just after the recursive call.</li>
    <li>After all the recursive copies return some value, we come back to the base function and finally return the control to the caller function.</li>
</ul>
<h3>Stack Overflow</h3>
<p>The program’s call stack has limited memory assigned to it by the operating system and is generally enough for program execution. But if we have a recursive function that goes on for infinite times, sooner or later, the memory will be exhausted and no more data can be stored. This is called stack overflow. In other words,</p>
<p>Stack overflow is the error that occurs when the call stack of the program cannot store more data resulting in program termination.</p>
<p>It is one of the most common errors that is associated with the recursion.</p>

<h3>Types of C Recursion</h3>
<p>In C, recursion can be classified into different types based on what kind of recursive case is present. These types are:</p>
<ul>
    <li>Direct Recursion</li>
    <li>Head Recursion</li>
    <li>Tail Recursion</li>
    <li>Tree Recursion</li>
    <li>Indirect Recursion</li>
</ul>

<h3>1. Direct Recursion</h3>
<p>Direct recursion is the most common type of recursion, where a function calls itself directly within its own body. The recursive call can occur once or multiple times within the function due to which we can further classify the direct recursion:</p>

<h4>A. Head Recursion</h4>
<p>The head recursion is a linear recursion where the position of its only recursive call is at the start of the function. It is generally the first statement in the function.</p>

<h4>B. Tail Recursion</h4>
<p>The tail recursion is also a linear recursion like head recursion but the position of the recursive call is at the end of the function. Due to this, the tail recursion can be optimized to minimize the stack memory usage. This process is called Tail Call Optimization.</p>
<p>In the first example, the nSum() does the tail recursion.</p>

<h4>C. Tree Recursion</h4>
<p>In tree recursion, there are multiple recursive calls present in the body of the function. Due to this, while tracing the program flow, it makes a tree-like structure, hence the name Tree Recursion.</p>

<h3>2. Indirect Recursion</h3>
<p>Indirect recursion is an interesting form of recursion where a function calls another function, which eventually calls the first function or any other function in the chain, leading to a cycle of function calls. In other words, the functions are mutually recursive. This type of recursion involves multiple functions collaborating to solve a problem.</p>

<h3>Examples of Recursion in C</h3>

<h4>Example 1: C Program to Find the Factorial of a Natural Number using Tail Recursion</h4>
<pre>{`
#include <stdio.h>

int factorialTail(int n, int res)
{
    // Base case
    if (n == 1 || n == 0) {
        return res;
    }
    else {
        res = res * n;
        // Tail recursive call
        return factorialTail(n - 1, res);
    }
}

int main() {

    int n = 5;

    int fact1 = factorialTail(n, 1);
    printf("Recursive Factorial of %d: %d \n", n, fact1);

    return 0;
}
`}</pre>
<div className="output">
    <h4>Output:</h4>
    <p>Recursive Factorial of 5: 120</p>
</div>

<h4>Example 2: C Program to Find the Fibonacci Number using Tree Recursion</h4>
<pre>{`
#include <stdio.h>

int fibonacci(int n)
{
    // Base case
    // Fibonacci of 0 and 1 is the number itself
    if (n <= 1) {
        return n;
    }
    else {
        // Tree recursive calls
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

int main()
{
    // function call
    int n = fibonacci(3);

    // print 5th fibonacci number
    printf("%d", n);

    return 0;
}
`}</pre>
<div className="output">
    <h4>Output:</h4>
    <p>2</p>

</div>


<h4>Example 3: C Program to Illustrate the Indirect Recursion</h4>
<pre>{`
#include <stdio.h>

void functionA(int n)
{
    if (n < 1) {
        return;
    }
    printf("%d ", n);
    n = n - 1;

    // Indirect recursive call to functionB
    functionB(n);
}

void functionB(int n)
{
    if (n < 2) {
        return;
    }

    printf("%d ", n);
    n = n / 2;

    // Indirect recursive call to functionA
    functionA(n);
}

int main()
{
    // Function call
    functionB(20);

    return 0;
}
`}</pre>
<div className="output">
    <h4>Output:</h4>
    <p>20 10 9 4 3 1
    </p>
</div>


<h3>Applications of Recursion in C</h3>
<p>Recursion is widely used to solve different kinds of problems from simple ones like printing linked lists to being extensively used in AI. Some of the common uses of recursion are:</p>
<ul>
    <li>Tree-Graph Algorithms</li>
    <li>Mathematical Problems</li>
    <li>Divide and Conquer</li>
    <li>Dynamic Programming</li>
    <li>In Postfix to Infix Conversion</li>
    <li>Searching and Sorting Algorithms</li>
</ul>

<h3>Advantages of C Recursion</h3>
<p>The advantages of using recursive methods over other methods are:</p>
<ul>
    <li>Recursion can effectively reduce the length of the code.</li>
    <li>Some problems are easily solved by using recursion like the tower of Hanoi and tree traversals.</li>
    <li>Data structures like linked lists, trees, etc. are recursive by nature so recursive methods are easier to implement for these data structures.</li>
</ul>

<h3>Disadvantages of C Recursion</h3>
<p>As with almost anything in the world, recursion also comes with certain limitations some of which are:</p>
<ul>
    <li>Recursive functions make our program a bit slower due to function call overhead.</li>
    <li>Recursion functions always take extra space in the function call stack due to separate stack frames.</li>
    <li>Recursion methods are difficult to understand and implement.</li>
</ul>

<h3>Conclusion</h3>
<p>It is said that,</p>
<p>Any problem that can be solved using iteration can also be solved with recursion and vice versa.</p>
<p>So, C recursion is just one of the methods to solve problems of different kinds. It provides a lot of benefits but also comes with certain limitations. It should be used when its benefits outweigh its limitations.</p>



            </section>

        </div>
        </>
    );
};
export default Recursion;
