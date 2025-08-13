import React from "react";
import './Python.css'

const  Pkeyword=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Keywords in Python</h1>

            </header>
            <section className="section">
            <h2>Python Keywords</h2>

<p>Keywords in Python&nbsp;are reserved words that have special meanings and serve specific purposes in the language syntax.&nbsp;Python&nbsp;keywords cannot be used as the names of&nbsp;variables,&nbsp;functions, and&nbsp;classes&nbsp;or any other identifier.</p>

<h3>List of Keywords in Python</h3>

<p><code>True</code>, <code>False</code>, <code>None</code>, <code>and</code>, <code>or</code>, <code>not</code>, <code>is</code>, <code>if</code>, <code>else</code>, <code>elif</code>, <code>for</code>, <code>while</code>, <code>break</code>, <code>continue</code>, <code>pass</code>, <code>try</code>, <code>except</code>, <code>finally</code>, <code>raise</code>, <code>assert</code>, <code>def</code>, <code>return</code>, <code>lambda</code>, <code>yield</code>, <code>class</code>, <code>import</code>, <code>from</code>, <code>in</code>, <code>as</code>, <code>del</code>, <code>global</code>, <code>with</code>, <code>nonlocal</code>, <code>async</code>, <code>await</code></p>

<h3>Getting List of all Python keywords</h3>

<p>We can also get all the keyword names using the below code.</p>

<pre>{`import keyword

# printing all keywords at once using "kwlist()"
print("The list of keywords is : ")
print(keyword.kwlist)
`}</pre>

<div className="output">
<h4>Output</h4>
<p>
The list of keywords are:&nbsp;<br/>
['False', 'None', 'True', "__peg_parser__", 'and', 'as', 'assert', 'async', 'await', 'break',<br/>
'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if',<br/>
'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
</p>
</div>

<h3>How to Identify Python Keywords ?</h3>

<ul>
    <li><b>With Syntax Highlighting</b> – Most of IDEs provide syntax-highlight feature. You can see Keywords appearing in different color or style.</li>
    <li><b>Look for SyntaxError</b> – This error will encounter if you have used any keyword incorrectly. Note that keywords can not be used as identifiers (variable or a function name).</li>
</ul>

<p>Let’s categorize all keywords based on context and understand each with help of example.</p>

<table>
    <tr>
        <th>Category</th>
        <th>Keywords</th>
    </tr>
    <tr>
        <td>Value Keywords</td>
        <td><code>True</code>, <code>False</code>, <code>None</code>, <code>del</code></td>
    </tr>
    <tr>
        <td>Operator Keywords</td>
        <td><code>and</code>, <code>or</code>, <code>not</code>, <code>in</code>, <code>is</code></td>
    </tr>
    <tr>
        <td>Control Flow Keywords</td>
        <td><code>if</code>, <code>else</code>, <code>elif</code>, <code>for</code>, <code>while</code>, <code>break</code>, <code>continue</code>, <code>pass</code>, <code>try</code>, <code>except</code>, <code>finally</code>, <code>raise</code>, <code>assert</code></td>
    </tr>
    <tr>
        <td>Function and Class</td>
        <td><code>def</code>, <code>return</code>, <code>lambda</code>, <code>yield</code>, <code>class</code></td>
    </tr>
    <tr>
        <td>Context Management</td>
        <td><code>with</code>, <code>as</code></td>
    </tr>
    <tr>
        <td>Import and Module</td>
        <td><code>import</code>, <code>from</code>, <code>as</code></td>
    </tr>
    <tr>
        <td>Scope and Namespace</td>
        <td><code>global</code>, <code>nonlocal</code></td>
    </tr>
        <tr>
        <td>Async Programming</td>
        <td><code>async</code>, <code>await</code></td>
    </tr>
</table>

<h3>Value Keywords: True, False, None Keyword, del</h3>

<p><b>True, False:</b>&nbsp;These represent a boolean values.</p>
<p><b>None:</b>&nbsp;This is a special constant used to denote a null value or a void. It’s important to remember that 0, any empty container(e.g. empty list) does not compute to None. It is an object of its datatype – NoneType. It is not possible to create multiple None objects and can assign them to variables.</p>

<pre>{`print(False == 0)
print(True == 1)
# True + True + True is  3
print(True + True + True)
# True + False + False is  1
print(True + False + False)
# None isn't equal to  0  or an empty list []
print(None == 0)
print(None == [])
`}</pre>

<div className="output">
<h4>Output</h4>
<p>
True<br/>
True<br/>
3<br/>
1<br/>
False<br/>
False
</p>
</div>

<h3>Operator Keywords: and, or, not, in, is</h3>

<p><b>and Keyword</b> –&nbsp;return ‘True’ if both the operands are ‘True’</p>
<p><b>or Keyword</b> –&nbsp;return ‘True’ if at least one operand is ‘True’</p>
<p><b>not keyword</b> –&nbsp;returns ‘True’ if the expression is ‘False’, and vice versa.</p>

<pre>{`a = True
b = False

# Logical operations
print(a and b)  # AND: True if both a and b are True
print(a or b)   # OR: True if at least one of a or b is True
print(not a)    # NOT: Inverts the value of a
`}</pre>

<p><b>in keyword</b>&nbsp;(membership operator)&nbsp;– Check if a value exists in a sequence (like a list, tuple, or string). It returns True if value is found.</p>

<pre>{`# example 1
print(3 in [1,2,3])

# example 2
if 's' in 'geeksforgeeks':
    print("s is part of geeksforgeeks")
else:
    print("s is not part of geeksforgeeks")
`}</pre>

<p><b>is keyword</b> –&nbsp;Check if two variables point to the same object in memory. It returns True if the objects are identical.</p>

<pre>{`# example 1
print(2 is 2)

# example 2
a = [1, 2, 3]
b = a
c = [1, 2, 3]

# True: a and b refer to the same object
print(a is b)

# False: a and c have same value but are different objects
print(a is c)
`}</pre>

<h3>Conditional keywords in Python: if, else, elif</h3>

<p><b>if</b>&nbsp;:Truth expression forces control to go in “if” statement block.</p>
<p><b>else</b>&nbsp;:False expression forces control to go in “else” statement block.</p>
<p><b>elif</b>&nbsp;: It is short for “else if”</p>

<pre>{`x = 0

# python if elif else statement
if x > 0:
    print("Positive")
elif x < 0:
    print("Negative")
else:
    print("Zero")
`}</pre>

<h3>Iteration Keywords: for, while, break, continue,&nbsp;pass&nbsp;in Python</h3>

<p><b>for:</b>&nbsp;This keyword is used to control flow and for looping.</p>
<p><b>while:</b>&nbsp;Has a similar working like “for”, used to control flow and for looping.</p>
<p><b>break:</b>&nbsp;“break” is used to control the flow of the loop. The statement is used to break out of the loop and passes the control to the statement following immediately after loop.</p>
<p><b>continue:</b>&nbsp;“continue” is also used to control the flow of code. The keyword skips the current iteration of the loop but does not end the loop.</p>

<pre>{`# 'for' loop example
for num in range(3):
    if num == 2:
        continue  # Skip number 2
    print(num)

# Output: 0 1

# 'while' loop example
count = 0
while count < 4:
    count += 1
    if count == 3:
        break  # Exit the loop when count reaches 4
    print(count)

# Output: 1 2
`}</pre>

<p><b>pass keyword:</b>&nbsp;<code>pass</code>&nbsp;is the null statement in python. Nothing happens when this is encountered. This is used to prevent indentation errors and used as a placeholder.</p>

<p>The code contains a&nbsp;<code>for</code>&nbsp;loop that iterates 10 times with a placeholder statement&nbsp;‘pass', indicating no specific action is taken within the loop.</p>

<pre>{`n = 10
for i in range(n):
    # pass can be used as placeholder
    # when code is to added later
    pass
`}</pre>

<h3>Exception Handling Keywords</h3>

<p><b>try :</b>&nbsp;This keyword is used for exception handling, used to catch the errors in the code using the keyword&nbsp;<code>except</code>. Code in “try” block is checked, if there is any type of error, except block is executed.</p>
<p><b>except :</b>&nbsp;As explained above, this works with “try” to catch exceptions.</p>
<p><b>finally :</b>&nbsp;No matter what is result of the “try” block, “finally” is always executed.</p>
<p><b>raise:</b>&nbsp;We can raise an exception explicitly with the&nbsp;<code>raise</code>&nbsp;keyword</p>
<p><b>assert:</b>&nbsp;This function is used for&nbsp;debugging purposes. Usually used to check the correctness of code. If a statement is evaluated to be true, nothing happens but when it is false, ”&nbsp;AssertionError&nbsp;” is raised. One can also&nbsp;print a message with the error, separated by a comma&nbsp;.</p>

<h4>Example 1:&nbsp;The provided code demonstrates the use of several keywords in Python:</h4>

<p><code>try</code>&nbsp;and&nbsp;<code>except</code>&nbsp;:&nbsp;Used to handle exceptions, particularly the&nbsp;<code>ZeroDivisionError</code>&nbsp;, and print an error message if it occurs.</p>
<p><code>finally</code>&nbsp;:&nbsp;This block is always executed, and it prints “This is always executed” regardless of whether an exception occurs.</p>
<p><code>assert</code>&nbsp;:&nbsp;Checks a condition, and if it’s&nbsp;<code>False</code>&nbsp;, raises an&nbsp;<code>AssertionError</code>&nbsp;with the message “Divide by 0 error.”</p>
<p><code>raise</code>&nbsp;:&nbsp;Raises a custom exception (<code>TypeError</code>) with a specified error message if a condition is not met.</p>

<pre>{`a, b = 4, 0
try:
    k = a // b  # Attempt integer division (4 // 0)
    print(k)
    # This block catches the ZeroDivisionError
except ZeroDivisionError: 
    print("Can't divide by zero")
finally:
    # This block is always executed regardless of the exception
    print('This is always executed')

print("The value of a / b is : ")
# Will raise an AssertionError because b == 0
assert b != 0, "Divide by 0 error"  # Division is attempted but will not reach due to assert
print(a / b)

# Raise a TypeError if the strings are different
temp = "geeks for geeks"
if temp != "geeks":
    raise TypeError("Both the strings are different.")
`}</pre>

<div className="output">
<h4>Output</h4>
<p>
Can't divide by zero<br/>
This is always executed<br/>
The value of a / b is :<br/>
AssertionError: Divide by 0 error
</p>
</div>

<h4>Example 2:&nbsp;This code uses the&nbsp;<code>raise</code>&nbsp;keyword to raise a custom&nbsp;<code>TypeError</code>&nbsp;exception if two strings are not equal.</h4>

<pre>{`temp = "geeks for geeks"
if temp != "geeks":
    raise TypeError("Both the strings are different.")
`}</pre>

<div className="output">
<h4>Output</h4>
<p>TypeError: Both the strings are different.</p>
</div>


<h3>del Keyword in Python</h3>

<p><code>del</code>&nbsp;is used to delete a reference to an object. Any variable or list value can be deleted using del.</p>

<pre>{`s = "GeeksForGeeks"
print(s)
del s
print(s)
`}</pre>

<div className="output">
<h4>Output</h4>
<p>NameError: name 's' is not defined</p>
</div>

<h3>Structure Keywords :&nbsp;def,&nbsp;class, return,&nbsp;lambda</h3>

<p><b>def keyword</b>&nbsp;–&nbsp;Defines a function named&nbsp;<code>fun</code>&nbsp;using the&nbsp;<code>def</code>&nbsp;keyword. When the function is called using&nbsp;<code>fun()</code>.</p>

<pre>{`def fun():
    print("Inside Function")

fun()
`}</pre>

<div className="output">
<h4>Output</h4>
<p>Inside Function</p>
</div>

<p><b>class</b> –&nbsp;<code>class</code>&nbsp;keyword is used to declare user defined classes.</p>

<p>This code defines a Python class named&nbsp;<code>Dog</code>&nbsp;with two class attributes,&nbsp;<code>attr1</code>&nbsp;and&nbsp;<code>attr2</code>.</p>

<pre>{`class Dog:
    attr1 = "mammal"
    attr2 = "dog"
`}</pre>


<h3>Return Keywords – Return, Yield</h3>

<p><b>return :</b>&nbsp;This keyword is used to return from the function.</p>
<p><b>yield :</b>&nbsp;This keyword is used like return statement but is used to return a generator.</p>

<h4>Return and Yield Keyword use in Python</h4>

<p>The&nbsp;‘return'&nbsp;keyword is used to return a final result from a function, and it exits the function immediately. In contrast, the ‘yield'&nbsp;keyword is used to create a generator, and it allows the function to yield multiple values without exiting. When ‘return'&nbsp;is used, it returns a single value and ends the function, while ‘yield'&nbsp;returns multiple values one at a time and keeps the function’s state.</p>

<pre>{`# Return keyword
def fun():
    # Assign the value 2 to variable S
    s = 2
    # Return the value of S
    return s

# Call the function and print the result
print(fun())

# Yield Keyword
def fun():
    # Yield the value 1, pausing the function here
    yield 1
    # Yield the value 2, pausing the function again
    yield 2
    # Yield the value 3, pausing the function once more
    yield 3

# Iterate through the values yielded by the function
for value in fun():
    print(value)
`}</pre>

<div className="output">
<h4>Output</h4>
<p>
2<br/>
1<br/>
2<br/>
3
</p>
</div>

<h3>Lambda Keyword in Python</h3>

<p><code>Lambda</code>&nbsp;keyword is used to make inline returning functions with no statements allowed internally.&nbsp;</p>

<pre>{`# Lambda keyword
g = lambda x: x*x*x
print(g(7))
`}</pre>

<div className="output">
<h4>Output</h4>
<p>343</p>
</div>
<h3>Context Keywords: With, as Keyword in Python</h3>

<h4>with Keyword in Python</h4>

<p><code>with</code>&nbsp;keyword&nbsp;is used to wrap the execution of block of code within methods defined by context manager. This keyword is not used much in day to day programming.</p>

<p>This code demonstrates how to use the&nbsp;<code>with</code>&nbsp;statement to open a file named&nbsp;<code>'file_path'</code>&nbsp;in write mode&nbsp;<code>('w')</code>. It writes the text&nbsp;<code>'hello world !'</code>&nbsp;to the file and automatically handles the opening and closing of the file.&nbsp;<code>with</code>&nbsp;statement is used for better resource management and ensures that the file is properly closed after the block is executed.</p>

<pre>{`# using with statement
with open('file_path', 'w') as file:
    file.write('hello world !')
`}</pre>

<h4>as Keyword In Python</h4>

<p><code>as</code>&nbsp;keyword&nbsp;is used to create the alias for the module imported. i.e giving a new name to the imported module. E.g import math as mymath.</p>

<p>This code uses the Python&nbsp;<code>math</code>&nbsp;module, which has been imported with the alias&nbsp;<code>gfg</code>. It calculates and prints the factorial of 5. The&nbsp;<code>math.factorial()</code>&nbsp;function is used to calculate the factorial of a number, and in this case, it calculates the factorial of 5, which is 120.</p>

<pre>{`import math as gfg
print(gfg.factorial(5))
`}</pre>

<div className="output">
<h4>Output</h4>
<p>120</p>
</div>

<h3>Import and Module: Import, From&nbsp;in Python</h3>

<p><b>import</b>&nbsp;:&nbsp;This statement is used to include a particular module into current program.</p>
<p><b>from</b> :&nbsp;Generally used with import, from is used to import particular functionality from the module imported.</p>

<h4>Import, From Keyword uses in Python</h4>

<p>The&nbsp;‘import'&nbsp;keyword is used to import modules or specific functions/classes from modules, making them accessible in your code. The&nbsp;‘from'&nbsp;keyword is used with‘import'&nbsp;to specify which specific functions or classes you want to import from a module. In your example, both approaches import the&nbsp;‘factorial'&nbsp;function from the&nbsp;‘math'&nbsp;module, allowing you to use it directly in your code.</p>

<pre>{`# import keyword
from math import factorial
import math
print(math.factorial(10))

# from keyword
print(factorial(10))
`}</pre>

<div class="output">
<h4>Output</h4>
<p>
3628800<br/>
3628800
</p>
</div>

<h3>Scope and Namespace: Global, Nonlocal in Python</h3>

<p><b>global:</b>&nbsp;This keyword is used to define a variable inside the function to be of a global scope.</p>
<p><b>non-local :</b>&nbsp;This keyword works similar to the global, but rather than global, this keyword declares a variable to point to variable of outside enclosing function, in case of nested functions.</p>

<h4>Global and nonlocal keyword uses in Python</h4>

<p>In this code, the&nbsp;‘global'&nbsp;keyword is used to declare global variables&nbsp;‘a'&nbsp;and&nbsp;‘b'. Then, there’s a function&nbsp;‘add'&nbsp;that adds these global variables and prints the result.</p>

<p>The second part of the code demonstrates the&nbsp;‘nonlocal'&nbsp;keyword. The function&nbsp;<code>fun</code>&nbsp;contains a variable&nbsp;<code>var1</code>, and within the nested function&nbsp;<code>gun</code>, we use&nbsp;<code>nonlocal</code>&nbsp;to indicate that we want to modify the&nbsp;<code>var1</code>&nbsp;defined in the outer function&nbsp;<code>fun</code>. It increments the value of&nbsp;<code>var1</code>&nbsp;and prints it.</p>

<pre>{`a = 15
b = 10

def add():
    # Add global variables a and b
    c = a + b
    print(c)

add()  # Output: 25

def fun():
    # Local variable in fun()
    var = 10

    def gun():
        # Modify var1 in the enclosing scope (fun)
        nonlocal var
        var += 10
        print(var)

    gun()

fun() # Output: 20
`}</pre>

<div className="output">
<h4>Output</h4>
<p>
25<br/>
20
</p>
</div>


<h3>Async Programming: async, await</h3>

<p>Async programming allows you to run tasks concurrently, improving efficiency, especially when dealing with I/O-bound operations. The&nbsp;<code>async</code>&nbsp;and&nbsp;<code>await</code>&nbsp;keywords in Python are used to define and manage asynchronous functions.</p>

<p><b>async:</b> Used to declare a function as asynchronous, allowing it to run concurrently with other tasks.</p>

<pre>{`import asyncio

async def func():
    print("Hello, async world!")
`}</pre>

<p><b>await:</b> Used to pause the execution of an async function until the awaited task is complete.</p>

<pre>{`import asyncio

# Define an asynchronous main function
async def main():
    await func()

# Define another async function that prints a message
async def func():
    print("Hello, async world!")

# Run the main function using asyncio.run
asyncio.run(main())
`}</pre>



            </section>

        </div>
        </>
    );
};
export default Pkeyword;
