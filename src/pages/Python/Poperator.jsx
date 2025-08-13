import React from "react";
import './Python.css'

const  Poperator=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Operator in Python</h1>

            </header>
            <section className="section">
            <h2>Python Operators</h2>

<p>In Python programming, Operators in general are used to perform operations on values and variables. These are standard symbols used for logical and arithmetic operations. In this article, we will look into different types of&nbsp;Python operators.&nbsp;</p>

<p><b>OPERATORS:</b>&nbsp;These are the special symbols. Eg- + , * , /, etc.</p>
<p><b>OPERAND:</b>&nbsp;It is the value on which the operator is applied.</p>

<h3>Types of Operators in Python</h3>

<ul>
    <li>Arithmetic Operators</li>
    <li>Comparison Operators</li>
    <li>Logical Operators</li>
    <li>Bitwise Operators</li>
    <li>Assignment Operators</li>
    <li>Identity Operators and Membership Operators</li>
</ul>

<h3>Arithmetic Operators in Python</h3>

<p>Python&nbsp;Arithmetic operators&nbsp;are used to perform basic mathematical operations like&nbsp;addition, subtraction, multiplication&nbsp;and&nbsp;division.</p>

<p>In Python 3.x the result of division is a floating-point while in Python 2.x division of 2 integers was an integer. To obtain an integer result in Python 3.x floored (// integer) is used.</p>

<h4>Example of Arithmetic Operators in Python:</h4>

<pre>{`# Variables
a = 15
b = 4

# Addition
print("Addition:", a + b)

# Subtraction
print("Subtraction:", a - b)

# Multiplication
print("Multiplication:", a * b)

# Division
print("Division:", a / b)

# Floor Division
print("Floor Division:", a // b)

# Modulus
print("Modulus:", a % b)

# Exponentiation
print("Exponentiation:", a ** b)
`}</pre>

<div className="output">
<h4>Output</h4>
<p>
Addition: 19<br/>
Subtraction: 11<br/>
Multiplication: 60<br/>
Division: 3.75<br/>
Floor Division: 3<br/>
Modulus: 3<br/>
Exponentiation: 50625
</p>
</div>

<h3>Comparison of Python Operators</h3>

<p>In Python&nbsp;Comparison&nbsp;of&nbsp;Relational operators&nbsp;compares the values. It either returns&nbsp;True&nbsp;or&nbsp;False&nbsp;according to the condition.</p>

<h4>Example of Comparison Operators in Python</h4>

<p>Let’s see an example of Comparison Operators in Python.</p>

<pre>{`a = 13
b = 33

print(a > b)
print(a < b)
print(a == b)
print(a != b)
print(a >= b)
print(a <= b)
`}</pre>

<div className="output">
<h4>Output</h4>
<p>
False<br/>
True<br/>
False<br/>
True<br/>
False<br/>
True
</p>
</div>

<h3>Logical Operators in Python</h3>

<p>Python&nbsp;Logical operators&nbsp;perform&nbsp;Logical AND,&nbsp;Logical OR&nbsp;and&nbsp;Logical NOT&nbsp;operations. It is used to combine conditional statements.</p>

<p>The precedence of Logical Operators in Python is as follows:</p>

<ol>
    <li>Logical not</li>
    <li>logical and</li>
    <li>logical or</li>
</ol>

<h4>Example of Logical Operators in Python:</h4>

<pre>{`a = True
b = False

print(a and b)
print(a or b)
print(not a)
`}</pre>

<div className="output">
<h4>Output</h4>
<p>
False<br/>
True<br/>
False
</p>
</div>

<h3>Bitwise Operators in Python</h3>

<p>Python&nbsp;Bitwise operators&nbsp;act on bits and perform bit-by-bit operations. These are used to operate on binary numbers.</p>

<p>Bitwise Operators in Python are as follows:</p>

<ul>
    <li>Bitwise NOT</li>
    <li>Bitwise Shift</li>
    <li>Bitwise AND</li>
    <li>Bitwise XOR</li>
    <li>Bitwise OR</li>
</ul>

<h4>Example of Bitwise Operators in Python:</h4>

<pre>{`a = 10
b = 4

print(a & b)
print(a | b)
print(~a)
print(a ^ b)
print(a >> 2)
print(a << 2)
`}</pre>

<div className="output">
<h4>Output</h4>
<p>
0<br/>
14<br/>
-11<br/>
14<br/>
2<br/>
40
</p>
</div>

<h3>Assignment Operators in Python</h3>

<p>Python&nbsp;Assignment operators&nbsp;are used to assign values to the variables. This operator is used to assign the value of the right side of the expression to the left side operand.</p>

<h4>Example of Assignment Operators in Python:</h4>

<pre>{`a = 10
b = a
print(b)

b += a
print(b)

b -= a
print(b)

b *= a
print(b)

b <<= a
print(b)
`}</pre>

<div className="output">
<h4>Output</h4>
<p>
10<br/>
20<br/>
10<br/>
100<br/>
102400
</p>
</div>

<h3>Identity Operators in Python</h3>

<p>In Python,&nbsp;is&nbsp;and&nbsp;is not&nbsp;are the&nbsp;identity operators&nbsp;both are used to check if two values are located on the same part of the memory. Two variables that are equal do not imply that they are identical.&nbsp;</p>

<ul>
    <li><code>is</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;True if the operands are identical</li>
    <li><code>is not</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;True if the operands are not identical</li>
</ul>

<h4>Example of Identity Operators in Python:</h4>

<pre>{`a = 10
b = 20
c = a

print(a is not b)
print(a is c)
`}</pre>

<div className="output">
<h4>Output:</h4>
<p>
True<br/>
True
</p>
</div>

<h3>Membership Operators in Python</h3>

<p>In Python,&nbsp;in&nbsp;and&nbsp;not in&nbsp;are the&nbsp;membership operators&nbsp;that are used to test whether a value or variable is in a sequence.</p>

<ul>
    <li><code>in</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;True if value is found in the sequence</li>
    <li><code>not in</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;True if value is not found in the sequence</li>
</ul>

<h4>Examples of Membership Operators in Python:</h4>

<pre>{`x = 24
y = 20
list = [10, 20, 30, 40, 50]

if (x not in list):
    print("x is NOT present in given list")
else:
    print("x is present in given list")

if (y in list):
    print("y is present in given list")
else:
    print("y is NOT present in given list")
`}</pre>

<div className="output">
<h4>Output:</h4>
<p>
x is NOT present in given list<br/>
y is present in given list
</p>
</div>

<h3>Ternary Operator in Python</h3>

<p>in Python,&nbsp;Ternary operators&nbsp;also known as conditional expressions are operators that evaluate something based on a condition being true or false. It was added to Python in version 2.5.&nbsp;</p>

<p>It simply allows testing a condition in a&nbsp;single line&nbsp;replacing the multiline if-else making the code compact.</p>

<p><b>Syntax :</b>&nbsp;<code>[on_true] if [expression] else [on_false]</code>&nbsp;</p>


            </section>

        </div>
        </>
    );
};
export default Poperator;
