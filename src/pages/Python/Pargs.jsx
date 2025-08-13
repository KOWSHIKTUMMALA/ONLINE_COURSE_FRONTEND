import React from "react";
import './Python.css'

const  Pargs=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>*args and **kwargs in Function</h1>

            </header>
            <section className="section">
                <h2>Python *args and **kwargs in Function</h2>
                <p>In Python, *args and **kwargs are used to allow functions to accept an arbitrary number of arguments. These features provide great flexibility when designing functions that need to handle a varying number of inputs.</p>

<h3>Example:</h3>

<pre>{`
# *args example
def fun(*args):
    return sum(args)

print(fun(1, 2, 3, 4))
print(fun(5, 10, 15))

# **kwargs example
def fun(**kwargs):
    for k, val in kwargs.items():
        print(k, val)

fun(a=1, b=2, c=3)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>10</p>
  <p>30</p>
  <p>a 1</p>
  <p>b 2</p>
  <p>c 3</p>
</div>

<p>Let’s explore *args and **kwargs in detail:</p>

<h3>Table of Content</h3>
<ul>
  <li>Python *args?</li>
  <li>Python **kwargs?</li>
  <li>Using both *args and **kwargs in Python</li>
</ul>

<p>There are two special symbols to pass multiple arguments:</p>
<ul>
  <li>*args (Non-Keyword Arguments)</li>
  <li>**kwargs (Keyword Arguments)</li>
</ul>

<p><strong>Note:</strong> “We use the “wildcard” or “*” notation like this – *args OR **kwargs – as our function’s argument when we have doubts about the number of arguments we should pass in a function.”</p>

<h3>Python *args</h3>
<p>The special syntax <code>*args</code> in function definitions is used to pass a variable number of arguments to a function. It is used to pass a non-keyworded, variable-length argument list.</p>

<p>For example, we want to make a multiply function that takes any number of arguments and is able to multiply them all together. It can be done using *args.</p>

<p>Using * the variable that we associate with the * becomes iterable, meaning you can do things like iterate over it, run some higher-order functions such as map and filter, etc.</p>

<h3>Example 1:</h3>
<p>Python program to illustrate *args for a variable number of arguments</p>

<pre>{`
def myFun(*argv):
    for arg in argv:
        print(arg)

myFun('Hello', 'Welcome', 'to', 'GeeksforGeeks')
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>Hello</p>
  <p>Welcome</p>
  <p>to</p>
  <p>GeeksforGeeks</p>
</div>

<h3>Example 2:</h3>
<p>Python program to illustrate *args with a first extra argument.</p>

<pre>{`
def fun(arg1, *argv):
    print("First argument :", arg1)
    for arg in argv:
        print("Argument *argv :", arg)

fun('Hello', 'Welcome', 'to', 'GeeksforGeeks')
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>First argument : Hello</p>
  <p>Argument *argv : Welcome</p>
  <p>Argument *argv : to</p>
  <p>Argument *argv : GeeksforGeeks</p>
</div>

<h3>Python **kwargs</h3>
<p>The special syntax <code>**kwargs</code> in function definitions is used to pass a variable length argument list. We use the name <code>kwargs</code> with the double star **.</p>

<p>A keyword argument is where you provide a name to the variable as you pass it into the function.</p>

<p>It collects all the additional keyword arguments passed to the function and stores them in a dictionary.</p>

<h3>Example 1:</h3>

<pre>{`
def fun(**kwargs):
    for k, val in kwargs.items():
        print("%s == %s" % (k, val))

# Driver code
fun(s1='Geeks', s2='for', s3='Geeks')
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>s1 == Geeks</p>
  <p>s2 == for</p>
  <p>s3 == Geeks</p>
</div>

<p>For s1=’Geeks’, s1 is key and ‘Geeks’ is a value. In simple words, what we assign is value and to whom we assign is key.</p>

<h3>Example 2:</h3>

<pre>{`
def fun(arg1, **kwargs):
    for k, val in kwargs.items():
        print("%s == %s" % (k, val))

# Driver code
fun("Hi", s1='Geeks', s2='for', s3='Geeks')
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>s1 == Geeks</p>
  <p>s2 == for</p>
  <p>s3 == Geeks</p>
</div>

<h3>Using both *args and **kwargs</h3>
<p>We can use both *args and **kwargs in the same function to accept a mix of positional and keyword arguments.</p>

<h3>Example:</h3>

<pre>{`
def fun(*args, **kwargs):
    print("Positional arguments:", args)
    print("Keyword arguments:", kwargs)

fun(1, 2, 3, a=4, b=5)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>Positional arguments: (1, 2, 3)</p>
  <p>Keyword arguments: a: 4, b: 5</p>
</div>


            </section>

        </div>
        </>
    );
};
export default Pargs;
