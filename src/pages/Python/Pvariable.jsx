import React from "react";
import './Python.css'

const  Pvariable=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Variables in Python</h1>

            </header>
            <section className="section">
            <h2>Python Variables</h2>

<p>In&nbsp;Python, variables are used to store data that can be referenced and manipulated during program execution. A variable is essentially a name that is assigned to a value. Unlike many other programming languages, Python variables do not require explicit declaration of type. The type of the variable is inferred based on the value assigned.</p>

<p>Variables act as placeholders for data. They allow us to store and reuse values in our program.</p>

<h4>Example:</h4>

<pre>{`# Variable 'x' stores the integer value 10
x = 5

# Variable 'name' stores the string "Samantha"
name = "Samantha"

print(x)
print(name)
`}</pre>

<div class="output">
<h4>Output</h4>
<p>
5<br/>
Samantha
</p>
</div>

<p>In this article, we’ll explore the concept of variables in Python, including their syntax, characteristics and common operations.</p>

<h3>Rules for Naming Variables</h3>

<p>To use variables effectively, we must follow Python’s naming rules:</p>

<ul>
    <li>Variable names can only contain letters, digits and underscores (_).</li>
    <li>A variable name cannot start with a digit.</li>
    <li>Variable names are case-sensitive (myVar&nbsp;and&nbsp;myvar&nbsp;are different).</li>
    <li>Avoid using&nbsp;Python keywords&nbsp;(e.g.,&nbsp;if,&nbsp;else,&nbsp;for) as variable names.</li>
</ul>

<h4>Valid Example:</h4>

<pre>{`age = 21
_colour = "lilac"
total_score = 90
`}</pre>

<h4>Invalid Example:</h4>

<pre>{`1name = "Error"  # Starts with a digit
class = 10       # 'class' is a reserved keyword
user-name = "Doe"  # Contains a hyphen
`}</pre>

<h3>Assigning Values to Variables</h3>

<h3>Basic Assignment</h3>

<p>Variables in Python are assigned values using the&nbsp;=&nbsp;operator.</p>

<pre>{`x = 5
y = 3.14
z = "Hi"
`}</pre>

<h3>Dynamic Typing</h3>

<p>Python variables are dynamically typed, meaning the same variable can hold different types of values during execution.</p>

<pre>{`x = 10
x = "Now a string"
`}</pre>

<h3>Multiple Assignments</h3>

<p>Python allows multiple variables to be assigned values in a single line.</p>

<h3>Assigning the Same Value</h3>

<p>Python allows assigning the same value to multiple variables in a single line, which can be useful for initializing variables with the same value.</p>

<pre>{`a = b = c = 100
print(a, b, c)
`}</pre>

<div class="output">
<h4>Output</h4>
<p>100 100 100</p>
</div>

<h3>Assigning Different Values</h3>

<p>We can assign different values to multiple variables simultaneously, making the code concise and easier to read.</p>

<pre>{`x, y, z = 1, 2.5, "Python"
print(x, y, z)
`}</pre>

<div className="output">
<h4>Output</h4>
<p>1 2.5 Python</p>
</div>

<h3>Type Casting a Variable</h3>

<p>Type casting&nbsp;refers to the process of converting the value of one data type into another. Python provides several built-in functions to facilitate casting, including int(), float() and str() among others.</p>

<h4>Basic Casting Functions</h4>

<ul>
    <li><code>int()</code>&nbsp;– Converts compatible values to an integer.</li>
    <li><code>float()</code>&nbsp;– Transforms values into floating-point numbers.</li>
    <li><code>str()</code>&nbsp;– Converts any data type into a string.</li>
</ul>

<h4>Examples of Casting:</h4>

<pre>{`# Casting variables
s = "10"  # Initially a string
n = int(s)  # Cast string to integer
cnt = 5
f = float(cnt)  # Cast integer to float
age = 25
s2 = str(age)  # Cast integer to string

# Display results
print(n)
print(f)
print(s2)
`}</pre>

<div class="output">
<h4>Output</h4>
<p>
10<br/>
5.0<br/>
25
</p>
</div>

<h3>Getting the Type of Variable</h3>

<p>In Python, we can determine the type of a variable using the <code>type()</code> function. This built-in function returns the type of the object passed to it.</p>

<h4>Example Usage of type()</h4>

<pre>{`# Define variables with different data types
n = 42
f = 3.14
s = "Hello, World!"
li = [1, 2, 3]
d = {'key': 'value'}
bool = True

# Get and print the type of each variable
print(type(n))
print(type(f))
print(type(s))
print(type(li))
print(type(d))
print(type(bool))
`}</pre>

<div className="output">
<h4>Output</h4>
<p>
&lt;class 'int'&gt;<br/>
&lt;class 'float'&gt;<br/>
&lt;class 'str'&gt;<br/>
&lt;class 'list'&gt;<br/>
&lt;class 'dict'&gt;<br/>
&lt;class 'bool'&gt;
</p>
</div>

<h3>Scope of a Variable</h3>

<p>There are two methods how we define scope of a variable in python which are&nbsp;local and global.</p>

<h3>Local Variables:</h3>

<p>Variables defined inside a function are local to that function.</p>

<pre>{`def f():
    a = "I am local"
    print(a)

f()
# print(a)  # This would raise an error since 'local_var' is not accessible outside the function
`}</pre>

<div className="output">
<h4>Output</h4>
<p>I am local</p>
</div>

<h3>Global Variables:</h3>

<p>Variables defined outside any function are global and can be accessed inside functions using the&nbsp;global&nbsp;keyword.</p>

<pre>{`a = "I am global"

def f():
    global a
    a = "Modified globally"
    print(a)

f()
print(a)
`}</pre>

<div className="output">
<h4>Output</h4>
<p>
Modified globally<br/>
Modified globally
</p>
</div>

<h3>Object Reference in Python</h3>

<p>Let us assign a variable x to value 5.</p>

<pre>{`x = 5
`}</pre>

<p>When&nbsp;x = 5&nbsp;is executed, Python creates an object to represent the value&nbsp;5&nbsp;and makes&nbsp;x&nbsp;reference this object.</p>

<p>Now, if we assign another variable&nbsp;y&nbsp;to the variable&nbsp;x.</p>

<pre>{`y = x
`}</pre>

<h4>Explanation:</h4>

<p>Python encounters the first statement, it creates an object for the value&nbsp;5&nbsp;and makes&nbsp;x&nbsp;reference it. The second statement creates&nbsp;y&nbsp;and references the same object as&nbsp;x, not&nbsp;x&nbsp;itself. This is called a&nbsp;Shared Reference, where multiple variables reference the same object.</p>

<p>Now, if we write</p>

<pre>{`x = 'Shiva'
`}</pre>

<p>Python creates a new object for the value&nbsp;"Geeks"&nbsp;and makes&nbsp;x&nbsp;reference this new object.</p>

<h3>Explanation:</h3>

<p>The variable&nbsp;y&nbsp;remains unchanged, still referencing the original object&nbsp;5.</p>

<p>If we now assign a new value to&nbsp;y:</p>

<pre>{`y = "Computer"
`}</pre>
<p>Python creates yet another object for&nbsp;"Computer"&nbsp;and updates&nbsp;y&nbsp;to reference it.</p>

<p>The original object&nbsp;5&nbsp;no longer has any references and becomes eligible for garbage collection.</p>

<h4>Key Takeaways:</h4>

<ul>
    <li>Python variables hold references to objects, not the actual objects themselves.</li>
    <li>Reassigning a variable does not affect other variables referencing the same object unless explicitly updated.</li>
</ul>

<h3>Delete a Variable Using&nbsp;del&nbsp;Keyword</h3>

<p>We can remove a variable from the namespace using the&nbsp;del&nbsp;keyword. This effectively deletes the variable and frees up the memory it was using.</p>

<h4>Example:</h4>

<pre>{`# Assigning value to variable
x = 10
print(x)

# Removing the variable using del
del x

# Trying to print x after deletion will raise an error
# print(x)  # Uncommenting this line will raise NameError: name 'x' is not defined
`}</pre>

<h3>Explanation:</h3>

<ul>
    <li><code>del x</code>&nbsp;removes the variable&nbsp;x&nbsp;from memory.</li>
    <li>After deletion, trying to access the variable&nbsp;x&nbsp;results in a&nbsp;NameError, indicating that the variable no longer exists.</li>
</ul>




            </section>

        </div>
        </>
    );
};
export default Pvariable;
