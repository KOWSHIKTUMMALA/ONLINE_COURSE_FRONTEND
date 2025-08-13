import React from "react";
import './Python.css'

const  Ploop=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Loops in Python</h1>

            </header>
            <section className="section">

            <h2>Loops in Python – For, While and Nested Loops</h2>
<p>Loops in Python are used to repeat actions efficiently. The main types are For loops (counting through items) and While loops (based on conditions). Additionally, Nested Loops allow looping within loops for more complex tasks. While all the ways provide similar basic functionality, they differ in their syntax and condition-checking time. In this article, we will look at Python loops and understand their working with the help of examples.</p>

<h3>While Loop in Python</h3>
<p>In Python, a while loop is used to execute a block of statements repeatedly until a given condition is satisfied. When the condition becomes false, the line immediately after the loop in the program is executed.</p>
<p>Python While Loop Syntax:</p>
<pre>{`
while expression:
    statement(s)
`}</pre>
<p>All the statements indented by the same number of character spaces after a programming construct are considered to be part of a single block of code. Python uses indentation as its method of grouping statements.</p>
<p>Example of Python While Loop:</p>
<pre>{`
cnt = 0
while (cnt < 3):
    cnt = cnt + 1
    print("Hello study")
`}</pre>
<div class="output">
<h4>Output</h4>

  <p>Hello study</p>
  <p>Hello study</p>
  <p>Hello study</p>
</div>

<h3>Using else statement with While Loop in Python</h3>
<p>Else clause is only executed when our while condition becomes false. If we break out of the loop or if an exception is raised then it won’t be executed.</p>
<p>Syntax of While Loop with else statement:</p>
<pre>{`
while condition:
     # execute these statements
else:
     # execute these statements
`}</pre>
<p>Example: The code prints “Hello study” three times using a ‘while’ loop and then after the loop it prints “In Else Block” because there is an “else” block associated with the ‘while’ loop.</p>
<pre>{`
cnt = 0
while (cnt < 3):
    cnt = cnt + 1
    print("Hello study")
else:
    print("In Else Block")
`}</pre>
<div class="output">
<h4>Output</h4>

  <p>Hello study</p>
  <p>Hello study</p>
  <p>Hello study</p>
  <p>In Else Block</p>
</div>

<h3>Infinite While Loop in Python</h3>
<p>If we want a block of code to execute infinite number of times then we can use the while loop in Python to do so.</p>
<p>The code given below uses a ‘while’ loop with the condition (count == 0) and this loop will only run as long as count is equal to 0. Since count is initially set to 0, the loop will execute indefinitely because the condition is always true.</p>
<pre>{`
count = 0
while (count == 0):
    print("Hello study")
`}</pre>
<p>Note: It is suggested not to use this type of loop as it is a never-ending infinite loop where the condition is always true and we have to forcefully terminate the compiler.</p>

<h3>For Loop in Python</h3>
<p>For loops are used for sequential traversal. For example: traversing a list or string or array etc. In Python, there is “for in” loop which is similar to foreach loop in other languages. Let us learn how to use for loops in Python for sequential traversals with examples.</p>
<p>For Loop Syntax:</p>
<pre>{`
for iterator_var in sequence:
    statements(s)
`}</pre>
<pre>{`
n = 4
for i in range(0, n):
    print(i)
`}</pre>
<div class="output">
<h4>Output</h4>

  <p>0</p>
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
<p>Explanation: This code prints the numbers from 0 to 3 (inclusive) using a for loop that iterates over a range from 0 to n-1 (where n = 4).</p>

<h3>Example with List, Tuple, String, and Dictionary Iteration Using for Loops in Python</h3>
<p>We can use for loop to iterate lists, tuples, strings and dictionaries in Python.</p>
<pre>{`
li = ["study", "for", "study"]
for i in li:
    print(i)
tup = ("study", "for", "study")
for i in tup:
    print(i)
s = "study"
for i in s:
    print(i)
d = dict({'x':123, 'y':354})
for i in d:
    print("%s  %d" % (i, d[i]))
set1 = {1, 2, 3, 4, 5, 6}
for i in set1:
    print(i),
`}</pre>
<div class="output">
<h4>Output</h4>

  <p>study</p>
  <p>for</p>
  <p>study</p>
  <p>study</p>
  <p>for</p>
  <p>study</p>
  <p>s</p>
  <p>t</p>
  <p>u</p>
  <p>d</p>
  <p>y</p>
  <p>x  123</p>
  <p>y  354</p>
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>

<h3>Iterating by the Index of Sequences</h3>
<p>We can also use the index of elements in the sequence to iterate. The key idea is to first calculate the length of the list and in iterate over the sequence within the range of this length.</p>
<pre>{`
list = ["study", "for", "study"]
for index in range(len(list)):
    print(list[index])
`}</pre>
<div class="output">
<h4>Output</h4>

  <p>study</p>
  <p>for</p>
  <p>study</p>
</div>
<p>Explanation: This code iterates through each element of the list using its index and prints each element one by one. The range(len(list)) generates indices from 0 to the length of the list minus 1.</p>

<h3>Using else Statement with for Loop in Python</h3>
<p>We can also combine else statement with for loop like in while loop. But as there is no condition in for loop based on which the execution will terminate so the else block will be executed immediately after for block finishes execution.</p>
<pre>{`
list = ["study", "for", "study"]
for index in range(len(list)):
    print(list[index])
else:
    print("Inside Else Block")
`}</pre>
<div class="output">
<h4>Output</h4>
  <p>study</p>
  <p>for</p>
  <p>study</p>
  <p>Inside Else Block</p>
</div>
<p>Explanation: The code iterates through the list and prints each element. After the loop ends it prints “Inside Else Block” as the else block executes when the loop completes without a break.</p>

<h3>Nested Loops in Python</h3>
<p>Python programming language allows to use one loop inside another loop which is called nested loop. Following section shows few examples to illustrate the concept.</p>
<p>Nested Loops Syntax:</p>
<pre>{`
for iterator_var in sequence:
   for iterator_var in sequence:
       statements(s)
   statements(s)
`}</pre>
<p>The syntax for a nested while loop statement in the Python programming language is as follows:</p>
<pre>{`
while expression:
   while expression: 
       statement(s)
   statement(s)
`}</pre>
<p>A final note on loop nesting is that we can put any type of loop inside of any other type of loops in Python. For example, a for loop can be inside a while loop or vice versa</p>
<pre>{`
from __future__ import print_function
for i in range(1, 5):
    for j in range(i):
        print(i, end=' ')
    print()
`}</pre>
<div class="output">
<h4>Output</h4>

  <p>1 </p>
  <p>2 2 </p>
  <p>3 3 3 </p>
  <p>4 4 4 4 </p>
</div>
<p>Explanation: In the above code we use nested loops to print the value of i multiple times in each row, where the number of times it prints i increases with each iteration of the outer loop. The print() function prints the value of i and moves to the next line after each row.</p>

<h3>Loop Control Statements</h3>
<p>Loop control statements change execution from their normal sequence. When execution leaves a scope, all automatic objects that were created in that scope are destroyed. Python supports the following control statements.</p>

<h3>Continue Statement</h3>
<p>The continue statement in Python returns the control to the beginning of the loop.</p>
<pre>{`
for letter in 'studyforstudy':
    if letter == 'e' or letter == 's':
        continue
    print('Current Letter :', letter)
`}</pre>
<div class="output">
<h4>Output</h4>

  <p>Current Letter : t</p>
  <p>Current Letter : u</p>
  <p>Current Letter : d</p>
  <p>Current Letter : y</p>
  <p>Current Letter : f</p>
  <p>Current Letter : o</p>
  <p>Current Letter : r</p>
  <p>Current Letter : t</p>
  <p>Current Letter : u</p>
  <p>Current Letter : d</p>
  <p>Current Letter : y</p>
</div>
<p>Explanation: The continue statement is used to skip the current iteration of a loop and move to the next iteration. It is useful when we want to bypass certain conditions without terminating the loop.</p>

<h3>Break Statement</h3>
<p>The break statement in Python brings control out of the loop.</p>
<pre>{`
for letter in 'studyforstudy':
    if letter == 'e' or letter == 's':
        break
print('Current Letter :', letter)
`}</pre>
<div class="output">
<h4>Output</h4>

  <p>Current Letter : s</p>
</div>
<p>Explanation: break statement is used to exit the loop prematurely when a specified condition is met. In this example, the loop breaks when the letter is either ‘e’ or ‘s’, stopping further iteration.</p>

<h3>Pass Statement</h3>
<p>We use pass statement in Python to write empty loops. Pass is also used for empty control statements, functions and classes.</p>
<pre>{`
for letter in 'studyforstudy':
    pass
print('Last Letter :', letter)
`}</pre>
<div class="output">
<h4>Output</h4>
  <p>Last Letter : y</p>
</div>
<p>Explanation: In this example, the loop iterates over each letter in ‘studyforstudy’ but doesn’t perform any operation, and after the loop finishes, the last letter (‘y’) is printed.</p>


            </section>

        </div>
        </>
    );
};
export default Ploop;
