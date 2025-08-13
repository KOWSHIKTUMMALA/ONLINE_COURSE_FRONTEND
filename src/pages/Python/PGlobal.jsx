import React from "react";
import './Python.css'

const  PGlobal=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Global and Local Variables</h1>

            </header>
            <section className="section">
                <h2>Global and Local Variables</h2>
                <p>Python Global variables are those which are not defined inside any function and have a global scope whereas Python local variables are those which are defined inside a function and their scope is limited to that function only. In other words, we can say that local variables are accessible only inside the function in which it was initialized whereas the global variables are accessible throughout the program and inside every function.</p>

<h3>Python Local Variables</h3>
<p>Local variables in Python are those which are initialized inside a function and belong only to that particular function. It cannot be accessed anywhere outside the function. Let’s see how to create a local variable.</p>

<h4>Creating local variables in Python</h4>
<p>Defining and accessing local variables</p>

<pre>{`
def f():
    # local variable
    s = "I love Geeksforgeeks"
    print(s)

# Driver code
f()
`}</pre>

<div className="output">
  <h4>Output</h4>
  <p>I love Geeksforgeeks</p>
</div>

<h4>Can a local variable be used outside a function?</h4>
<p>If we will try to use this local variable outside the function then let’s see what will happen.</p>

<pre>{`
def f():
    # local variable
    s = "I love Geeksforgeeks"
    print("Inside Function:", s)

# Driver code
f()
print(s)
`}</pre>

<div className="output">
  <h4>Output</h4>
  <p>NameError: name 's' is not defined</p>
</div>

<h3>Python Global Variables</h3>
<p>These are those which are defined outside any function and which are accessible throughout the program, i.e., inside and outside of every function. Let’s see how to create a Python global variable.</p>

<h4>Create a global variable in Python</h4>
<p>Defining and accessing Python global variables.</p>

<pre>{`
# This function uses global variable s
def f():
    print("Inside Function", s)

# Global scope
s = "I love Geeksforgeeks"
f()
print("Outside Function", s)
`}</pre>

<div className="output">
  <h4>Output</h4>
  <p>Inside Function I love Geeksforgeeks</p>
  <p>Outside Function I love Geeksforgeeks</p>
</div>

<p>The variable s is defined as the global variable and is used both inside the function as well as outside the function.</p>
<p><strong>Note:</strong> As there are no locals, the value from the globals will be used but make sure both the local and the global variables should have same name.</p>

<h3>Why do we use Local and Global variables in Python?</h3>
<p>Now, what if there is a Python variable with the same name initialized inside a function as well as globally? Now the question arises, will the local variable will have some effect on the global variable or vice versa, and what will happen if we change the value of a variable inside of the function f()? Will it affect the globals as well? We test it in the following piece of code:</p>

<h4>Example</h4>
<p>If a variable with the same name is defined inside the scope of the function as well then it will print the value given inside the function only and not the global value.</p>

<pre>{`
# This function has a variable with
# name same as s.
def f():
    s = "Me too."
    print(s)

# Global scope
s = "I love Geeksforgeeks"
f()
print(s)
`}</pre>

<div className="output">
  <h4>Output</h4>
  <p>Me too.</p>
  <p>I love Geeksforgeeks</p>
</div>

<p>Now, what if we try to change the value of a global variable inside the function? Let’s see it using the below example.</p>

<pre>{`
# This function uses global variable s
def f():
    s += 'GFG'
    print("Inside Function", s)

# Global scope
s = "I love Geeksforgeeks"
f()
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>UnboundLocalError: local variable 's' referenced before assignment</p>
</div>

<p>To make the above program work, we need to use the “global” keyword in Python. Let’s see what this global keyword is.</p>

<h3>The global Keyword</h3>
<p>We only need to use the global keyword in a function if we want to do assignments or change the global variable. global is not needed for printing and accessing. Python “assumes” that we want a local variable due to the assignment to s inside of f(), so the first statement throws the error message. Any variable which is changed or created inside of a function is local if it hasn’t been declared as a global variable. To tell Python, that we want to use the global variable, we have to use the keyword “global”, as can be seen in the following example:</p>

<h3>Example 1: Using Python global keyword</h3>

<pre>{`
# This function modifies the global variable 's'
def f():
    global s
    s += ' GFG'
    print(s)
    s = "Look for Geeksforgeeks Python Section"
    print(s)

# Global Scope
s = "Python is great!"
f()
print(s)
`}</pre>

<div className="output">
  <h4>Output</h4>
  <p>Python is great! GFG</p>
  <p>Look for Geeksforgeeks Python Section</p>
  <p>Look for Geeksforgeeks Python Section</p>
</div>

<p>Now there is no ambiguity.</p>

<h4>Example 2: Using Python global and local variables</h4>

<pre>{`
a = 1

# Uses global because there is no local 'a'
def f():
    print('Inside f() : ', a)

# Variable 'a' is redefined as a local
def g():
    a = 2
    print('Inside g() : ', a)

# Uses global keyword to modify global 'a'
def h():
    global a
    a = 3
    print('Inside h() : ', a)

# Global scope
print('global : ', a)
f()
print('global : ', a)
g()
print('global : ', a)
h()
print('global : ', a)
`}</pre>

<div className="output">
  <h4>Output</h4>
  <p>global :  1</p>
  <p>Inside f() :  1</p>
  <p>global :  1</p>
  <p>Inside g() :  2</p>
  <p>global :  1</p>
  <p>Inside h() :  3</p>
  <p>global :  3</p>
</div>

<h3>Difference b/w Local Variable Vs. Global Variables</h3>
<table>
  <tr>
    <th>Comparision Basis</th>
    <th>Global Variable</th>
    <th>Local Variable</th>
  </tr>
  <tr>
    <td>Definition</td>
    <td>declared outside the functions</td>
    <td>declared within the functions</td>
  </tr>
  <tr>
    <td>Lifetime</td>
    <td>They are created the execution of the program begins and are lost when the program is ended</td>
    <td>They are created when the function starts its execution and are lost when the function ends</td>
  </tr>
  <tr>
    <td>Data Sharing</td>
    <td>Offers Data Sharing</td>
    <td>It doesn’t offers Data Sharing</td>
  </tr>
  <tr>
    <td>Scope</td>
    <td>Can be access throughout the code</td>
    <td>Can access only inside the function</td>
  </tr>
  <tr>
    <td>Parameters needed</td>
    <td>parameter passing is not necessary</td>
    <td>parameter passing is necessary</td>
  </tr>
  <tr>
    <td>Storage</td>
    <td>A fixed location selected by the compiler</td>
    <td>They are kept on the stack</td>
  </tr>
  <tr>
    <td>Value</td>
    <td>Once the value changes it is reflected throughout the code</td>
    <td>once changed the variable don’t affect other functions of the program</td>
  </tr>
</table>



            </section>

        </div>
        </>
    );
};
export default PGlobal;
