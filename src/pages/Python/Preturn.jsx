import React from "react";
import './Python.css'

const  Preturn=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Return Statement</h1>

            </header>
            <section className="section">
            <h2>Python return Statement</h2>

<p>A <strong>return statement</strong> is used to end the execution of the function call and it “returns” the value of the expression following the return keyword to the caller. The statements after the return statements are not executed. If the return statement is without any expression, then the special value None is returned. A <strong>return</strong> statement is overall used to invoke a function so that the passed statements can be executed.</p>

<h3>Example:</h3>
<pre>{`def add(a, b):
    # returning sum of a and b
    return a + b

def is_true(a):
    # returning boolean of a
    return bool(a)

# calling function
res = add(2, 3)
print(res)

res = is_true(2 &lt; 5)
print(res)
`}</pre>

<div class="output">
<h4>Output</h4>
  <p>5</p>
  <p>True</p>
</div>

<h3>Explanation:</h3>
<ul>
  <li><strong>add(a, b) Function:</strong> Takes two arguments a and b. Returns the sum of a and b.</li>
  <li><strong>is_true(a) Function:</strong> Takes one argument a. Returns the boolean value of a.</li>
  <li><strong>Function Calls:</strong> res = add(2, 3) computes the sum of 2 and 3, storing the result (5) in res. res = is_true(2 &lt; 5) evaluates the expression 2 &lt; 5 (which is True) and stores the boolean value True in res.</li>
</ul>

<p>Let’s explore python return statement in detail:</p>

<h3>Table of Content</h3>
<ul>
  <li>Syntax:</li>
  <li>Returning Multiple Values</li>
  <li>Returning a List or Dictionary</li>
  <li>Function returning another function</li>
</ul>

<h3>Syntax:</h3>
<pre>
def function_name(parameters):
    # Function body
    return value
</pre>
<p>When the return statement is executed, the function terminates and the specified value is returned to the caller. If no value is specified, the function returns None by default.</p>

<p><strong>Note:</strong> Return statement can not be used outside the function.</p>

<h3>Returning Multiple Values</h3>
<p>Python allows you to return multiple values from a function by returning them as a tuple:</p>

<h3>Example:</h3>
<pre>{`def fun():
    name = "Alice"
    age = 30
    return name, age

name, age = fun()
print(name)
print(age)  # Output: 30
`}</pre>

<div class="output">
<h4>Output</h4>
  <p>Alice</p>
  <p>30</p>
</div>

<p>In this example, the fun() function returns two values: name and age. The caller unpacks these values into separate variables.</p>

<h2>Returning List</h2>
<p>We can also return more complex data structures such as lists or dictionaries from a function:</p>

<pre>{`def fun(n):
    return [n**2, n**3]

res = fun(3)
print(res)
`}</pre>

<div class="output">
    <h4>Output</h4>
  <p>[9, 27]</p>
</div>

<p>In this case, the function fun() returns a list containing the square and cube of the input number.</p>

<h3>Function returning another function</h3>
<p>In Python, functions are first-class citizens, meaning you can return a function from another function. This is useful for creating higher-order functions.</p>

<p>Here’s an example of a function that returns another function:</p>

<pre>{`def fun1(msg):
    def fun2():
        # Using the outer function's message
        return f"Message: {msg}"
    return fun2

# Getting the inner function
fun3 = fun1("Hello, World!")

# Calling the inner function
print(fun3())
`}</pre>

<div class="output">
    <h4>Output</h4>
  <p>Message: Hello, World!</p>
</div>

<h3>Python return statement – FAQs</h3>

<h3>What will <code>type()</code> return in Python?</h3>
<p>The type() function returns the type of an object. It can be used to determine the class or data type of a variable, or to create new types and classes.</p>

<h3>Examples:</h3>
<pre>{`print(type(10))        # Output: &lt;class 'int'&gt;
print(type(3.14))      # Output: &lt;class 'float'&gt;
print(type("hello"))   # Output: &lt;class 'str'&gt;
print(type([1, 2, 3])) # Output: &lt;class 'list'&gt;

# Creating a new class
MyClass = type('MyClass', (object,), {'attr': 5})
print(type(MyClass))   # Output: &lt;class 'type'&gt;
`}</pre>

<h3>What is a return function?</h3>
<p>In Python, there is no specific “return function.” The term “return” refers to the return statement used in functions and methods to exit the function and optionally pass a value back to the caller.</p>

<h3>Example:</h3>
<pre>{`def add(a, b):
    return a + b  # The function returns the result of a + b

result = add(5, 3)
print(result)  # Output: 8
`}</pre>

<h3>What is the use of the <code>return</code> statement?</h3>
<p>The return statement is used to exit a function and send a value back to the caller. It can also terminate the function early if needed.</p>

<h3>Uses of return:</h3>
<ul>
  <li>Send a result back to the function caller.</li>
  <li>Terminate the function execution and optionally pass data out of the function.</li>
</ul>

<h3>Example:</h3>
<pre>{`def multiply(x, y):
    return x * y  # Returns the product of x and y

result = multiply(4, 5)
print(result)  # Output: 20
`}</pre>

<h3>How many <code>return</code> statements can you have in Python?</h3>
<p>You can have multiple return statements in a Python function. The function will exit as soon as the first return statement is executed, and any code after that return statement will be skipped.</p>

<h3>Examples:</h3>
<pre>{`def check_number(num):
    if num > 0:
        return "Positive"
    elif num < 0:
        return "Negative"
    return "Zero"  # This return statement is reached only if num is 0

print(check_number(5))   # Output: Positive
print(check_number(-3))  # Output: Negative
print(check_number(0))   # Output: Zero
`}</pre>



            </section>

        </div>
        </>
    );
};
export default Preturn;
