import React from "react";
import './Python.css'

const  Precursion=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Recursion in Python</h1>

            </header>
            <section className="section">
                <h2>Python Recursion Function</h2>
                <p>In Python, a recursive function is defined like any other function, but it includes a call to itself. The syntax and structure of a recursive function follow the typical function definition in Python, with the addition of one or more conditions that lead to the function calling itself.</p>

<h3>Basic Example of Recursion:</h3>
<pre>{`
def factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(5))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>120</p>
</div>

<p><strong>Explanation:</strong> The factorial of a number n (denoted as n!) is the product of all positive integers less than or equal to n. The recursive approach involves the function calling itself with a decremented value of n until it reaches the base case of 1.</p>

<p>Let’s understand recursion in python deeply:</p>

<h3>Table of Content</h3>
<ul>
  <li>Base Case and Recursive Case</li>
  <li>Types of Recursion in Python</li>
  <li>Recursion vs Iteration</li>
  <li>Advantages of using recursion</li>
  <li>Disadvantages of using recursion</li>
</ul>

<h3>Basic Structure of Recursive Function</h3>
<pre>{`
def recursive_function(parameters):
    if base_case_condition:
        return base_result
    else:
        return recursive_function(modified_parameters)
`}</pre>

<h3>Base Case and Recursive Case</h3>
<ul>
  <li><strong>Base Case:</strong> This is the condition under which the recursion stops. It is crucial to prevent infinite loops and to ensure that each recursive call reduces the problem in some manner. In the factorial example, the base case is <code>n == 1</code>.</li>
  <li><strong>Recursive Case:</strong> This is the part of the function that includes the call to itself. It must eventually lead to the base case. In the factorial example, the recursive case is <code>return n * factorial(n-1)</code>.</li>
</ul>

<h3>Example:</h3>
<pre>{`
def fibonacci(n):
    # Base cases
    if n == 0:
        return 0
    elif n == 1:
        return 1
    # Recursive case
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# Example usage
print(fibonacci(10))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>55</p>
</div>

<p><strong>Explanation:</strong></p>
<ul>
  <li><strong>Base Cases:</strong> If <code>n == 0</code>, the function returns 0. If <code>n == 1</code>, the function returns 1. These two cases are necessary to stop the recursion.</li>
  <li><strong>Recursive Case:</strong> The function calls itself twice with the decrements of n (i.e., <code>fibonacci(n-1)</code> and <code>fibonacci(n-2)</code>), summing the results of these calls. This division into smaller subproblems continues until the base cases are reached.</li>
</ul>

<h3>Types of Recursion in Python</h3>
<p>Recursion can be broadly classified into two types: tail recursion and non-tail recursion. The main difference between them is related to what happens after the recursive call.</p>
<ul>
  <li><strong>Tail Recursion:</strong> This occurs when the recursive call is the last operation executed in the function, with no additional work or calculation following the recursive call. In many programming languages, tail recursion can be optimized by the compiler into iterative loops to improve performance and prevent stack overflow.</li>
  <li><strong>Non-Tail Recursion:</strong> This occurs when there are operations or calculations that follow the recursive call. This type prevents the compiler or interpreter from optimizing the recursion into an iteration.</li>
</ul>

<h3>Here is a Python example that demonstrates both tail recursion and non-tail recursion:</h3>
<pre>{`
def tail_fact(n, acc=1):
    # Base case
    if n == 0:
        return acc
    # Tail recursive call with an accumulator
    else:
        return tail_fact(n-1, acc * n)

def nontail_fact(n):
    # Base case
    if n == 1:
        return 1
    # Non-tail recursive call because the multiplication happens after the call
    else:
        return n * nontail_fact(n-1)

# Example usage
print(tail_fact(5))
print(nontail_fact(5))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>120</p>
  <p>120</p>
</div>

<h3>Recursion vs Iteration</h3>
<ul>
  <li><strong>Recursion:</strong>
    <ul>
      <li>Recursion is often more intuitive and easier to implement when the problem is naturally recursive, like tree traversals.</li>
      <li>It can lead to solutions that are easier to understand compared to iterative ones.</li>
    </ul>
  </li>
  <li><strong>Iteration:</strong>
    <ul>
      <li>Iteration involves loops (for, while) to repeat the execution of a block of code.</li>
      <li>It is generally more memory-efficient as it does not involve multiple stack frames like recursion.</li>
    </ul>
  </li>
</ul>

<h3>Advantages of using recursion</h3>
<ul>
  <li><strong>Simplicity:</strong> Recursive code is generally simpler and cleaner, especially for problems inherently recursive in nature (e.g., tree traversals, dynamic programming problems).</li>
  <li><strong>Reduced Code Length:</strong> Recursion can reduce the length of the code since the repetitive tasks are handled through repeated function calls.</li>
</ul>

<h3>Disadvantages of using recursion</h3>
<ul>
  <li><strong>Memory Overhead:</strong> Each recursive call adds a new layer to the stack, which can result in significant memory use, especially for deep recursion.</li>
  <li><strong>Performance Issues:</strong> Recursive functions may lead to slower responses due to overheads like function calls and returns.</li>
  <li><strong>Risk of Stack Overflow:</strong> Excessive recursion can lead to a stack overflow error if the recursion depth exceeds the stack limit.</li>
</ul>


            </section>

        </div>
        </>
    );
};
export default Precursion;
