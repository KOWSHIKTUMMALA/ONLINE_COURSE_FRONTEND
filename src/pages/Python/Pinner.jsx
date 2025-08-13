import React from "react";
import './Python.css'

const  Pinner=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Python Inner Functions</h1>

            </header>
            <section className="section">
            <h2>Python Inner Functions</h2>

<p>In Python, a function inside another function is called an inner function or nested function. Inner functions help in organizing code, improving readability and maintaining encapsulation. They can access variables from the outer function, making them useful for implementing closures and function decorators.</p>

<h3>Example:</h3>

<pre>{`def fun1(msg): # outer function
    
    def fun2(): # inner function
        print(msg)
    fun2()

fun1("Hello")
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>Hello</p>
</div>

<p><strong>Explanation:</strong> Here, fun2() is defined inside fun1() and it accesses the variable msg from the enclosing scope.</p>

<h3>Why Use Inner functions?</h3>
<p>Inner functions provide several advantages:</p>
<ul>
  <li><strong>Encapsulation:</strong> They help hide the inner logic from external access.</li>
  <li><strong>Code Organization:</strong> They make the code cleaner by grouping related functionality.</li>
  <li><strong>Access to Enclosing Scope:</strong> Inner functions can access variables of the outer function.</li>
  <li><strong>Closures:</strong> They allow functions to retain the state of their enclosing function even after execution.</li>
</ul>

<h3>Scope of variables in inner functions</h3>
<p>Inner functions can access variables from their enclosing (outer) function, but modifying them requires special handling. This follows Python’s LEGB rule (Local, Enclosing, Global, Built-in) for variable scope.</p>

<h3>Example 1: Local Variable Access</h3>

<pre>{`def fun1(): # outer function
    msg = "How are you"
    
    def fun2(): # inner function
        print(msg)  # accessing outer function's variable
    
    fun2()

fun1()
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>How are you</p>
</div>

<p><strong>Explanation:</strong> fun1() defines a local variable msg and an inner function fun2(), which prints msg. Due to lexical scoping, fun2() accesses msg from fun1(). Calling fun1() invokes fun2(), printing the message.</p>

<h3>Example 2: Modifying variables using nonlocal</h3>

<pre>{`def fun1(): # outer function
    a = 45
    
    def fun2(): # inner function
        nonlocal a  # allows modification of \`a\` from fun1
        a=54
        print(a)
    
    fun2()
    print(a)

fun1()
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>54</p>
  <p>54</p>
</div>

<p><strong>Explanation:</strong> nonlocal keyword allows fun2() to modify the variable a from fun1(). Without nonlocal, a inside fun2() would be treated as a new local variable instead of modifying the one in fun1().</p>

<h3>Example 3: closure in inner function</h3>

<pre>{`def fun1(a): # outer function
    
    def fun2(): # inner function
        print(a)
    return fun2  # returning function without parentheses

closure_func = fun1("Hello, Closure!")
closure_func()  # inner function remembers 'a'
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>Hello, Closure!</p>
</div>

<p><strong>Explanation:</strong> Even after fun1() completes execution, the returned fun2() function retains access to a, demonstrating a closure.</p>

<h3>Real – World Applications of inner functions</h3>
<p>Inner functions are useful in real-world scenarios for better code organization, encapsulation and reusability. Below are some practical applications:</p>

<h3>Example 1: Encapsulation of helper functions</h3>

<pre>{`def process_data(data):
    # removes extra spaces from a list
    
    def clean_data():
        return [item.strip() for item in data]  # Strip spaces
    
    return clean_data()  # return cleaned list

print(process_data(["  Python  ", "  Inner Function  "]))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>['Python', 'Inner Function']</p>
</div>

<p><strong>Explanation:</strong> process_data(data) removes leading and trailing whitespace from each string in the input list. It defines a nested function, clean_data(), which trims spaces using .strip() and returns the cleaned list.</p>

<h3>Example 2: Function wrapper and logging</h3>

<pre>{`import logging

logging.basicConfig(level=logging.INFO)  # configure logging

def logger(func):
    # logs function execution details 
    
    def wrapper(*args, **kwargs):
        logging.info(f"Executing {func.__name__} with {args}, {kwargs}")  # log function call
        return func(*args, **kwargs)  # call original function
    return wrapper

@logger
def add(a, b):
    return a + b  # return sum

print(add(3, 4))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>INFO:root:Executing add with arguments (3, 4), {}</p>
  <p>7</p>
</div>

<p><strong>Explanation:</strong> logger function, *args captures positional arguments, and **kwargs captures keyword arguments, allowing the wrapper to handle any function signature.</p>

<h3>Best Practices for using inner functions</h3>
<p>Inner functions are powerful but should be used wisely to maintain code readability, efficiency and maintainability. Below are some best practices:</p>
<ul>
  <li><strong>Use inner functions only when necessary:</strong> Avoid excessive nesting, as it can reduce readability.</li>
  <li><strong>Use closures wisely:</strong> Ensure that captured variables are managed properly to prevent unintended side effects.</li>
  <li><strong>Prefer nonlocal over global variables:</strong> If modifying outer function variables, use nonlocal instead of global.</li>
  <li><strong>Use inner functions in decorators:</strong> This is a common and effective use case.</li>
</ul>


            </section>

        </div>
        </>
    );
};
export default Pinner;
