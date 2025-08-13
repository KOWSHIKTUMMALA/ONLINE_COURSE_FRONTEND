import React from "react";
import './Python.css'

const  Pfirst=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>First Class functions in Python</h1>

            </header>
            <section className="section">
                <h2>First Class functions</h2>
                <p>First-class function is a concept where functions are treated as first-class citizens. By treating functions as first-class citizens, Python allows you to write more abstract, reusable, and modular code. This means that functions in such languages are treated like any other variable. They can be passed as arguments to other functions, returned as values from other functions, assigned to variables and stored in data structures.</p>

<h3>Characteristics of First-Class Functions</h3>
<ul>
  <li><strong>Assigned to Variables:</strong> We can assign functions to variables.</li>
  <li><strong>Passed as Arguments:</strong> We can pass functions as arguments to other functions.</li>
  <li><strong>Returned from Functions:</strong> Functions can return other functions.</li>
  <li><strong>Stored in Data Structures:</strong> Functions can be stored in data structures such as lists, dictionaries, etc.</li>
</ul>

<h3>Assigning Functions to Variables</h3>
<p>We can assign a function to a variable and use the variable to call the function.</p>

<h3>Example:</h3>
<pre>{`
def msg(name):
    return f"Hello, {name}!"

# Assigning the function to a variable
f = msg

# Calling the function using the variable
print(f("Anurag"))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>Hello, Anurag!</p>
</div>

<p><strong>Explanation:</strong></p>
<ul>
  <li>function greet is assigned to the variable f.</li>
  <li>f is then used to call the function, demonstrating that functions can be treated like any other variable.</li>
</ul>

<h3>Passing Functions as Arguments</h3>
<p>Functions can be passed as arguments to other functions, enabling higher-order functions.</p>

<h3>Example:</h3>
<pre>{`
def msg(name):
    return f"Hello, {name}!"

def fun1(fun2, name):
    return fun2(name)

# Passing the greet function as an argument
print(fun1(msg, "Bob"))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>Hello, Bob!</p>
</div>

<p><strong>Explanation:</strong></p>
<ul>
  <li>The fun1 function takes another function fun2 and a name as arguments.</li>
  <li>The msg function is passed to fun1, which then calls greet with the given name.</li>
</ul>

<h3>Returning Functions from Other Functions</h3>
<p>A function can return another function, allowing for the creation of function factories.</p>

<h3>Example:</h3>
<pre>{`
def fun1(msg):
    def fun2():
        return f"Message: {msg}"
    return fun2

# Getting the inner function
func = fun1("Hello, World!")
print(func())
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>Message: Hello, World!</p>
</div>

<p><strong>Explanation:</strong></p>
<ul>
  <li>The fun1 defines an fun2 and returns it.</li>
  <li>func stores the returned fun2, which can then be called later.</li>
</ul>

<h3>Storing Functions in Data Structures</h3>
<p>Functions can be stored in data structures like lists or dictionaries.</p>

<h3>Example:</h3>
<pre>{`
def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

# Storing functions in a dictionary
d = {
    "add": add,
    "subtract": subtract
}

# Calling functions from the dictionary
print(d["add"](5, 3))
print(d["subtract"](5, 3))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>8</p>
  <p>2</p>
</div>

<p><strong>Explanation:</strong></p>
<ul>
  <li>Functions add and subtract are stored in a dictionary operations.</li>
  <li>Functions are accessed and called from the dictionary using their respective keys.</li>
</ul>


            </section>

        </div>
        </>
    );
};
export default Pfirst;
