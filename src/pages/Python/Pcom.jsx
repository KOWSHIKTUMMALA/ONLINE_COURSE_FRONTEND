import React from "react";
import './Python.css'

const  Pcom=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>List Comprehension in Python</h1>

            </header>
            <section className="section">
                <h2>List Comprehension in Python</h2>
                <p>List comprehension is a way to create lists using a concise syntax. It allows us to generate a new list by applying an expression to each item in an existing iterable (such as a list or range). This helps us to write cleaner, more readable code compared to traditional looping techniques.</p>

<p>For example, if we have a list of integers and want to create a new list containing the square of each element, we can easily achieve this using list comprehension.</p>

<pre>{`
a = [2,3,4,5]
res = [val ** 2 for val in a]
print(res)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>[4, 9, 16, 25]</p>
</div>

<h3>Table of Content</h3>
<ul>
  <li>Syntax of list comprehension</li>
  <li>for loop vs. list comprehension</li>
  <li>Conditional statements in list comprehension</li>
  <li>Examples of list comprehension</li>
</ul>

<h3>Syntax of list comprehension</h3>
<pre>{`
[expression for item in iterable if condition]
`}</pre>
<ul>
  <li><strong>expression:</strong> The transformation or value to be included in the new list.</li>
  <li><strong>item:</strong> The current element taken from the iterable.</li>
  <li><strong>iterable:</strong> A sequence or collection (e.g., list, tuple, set).</li>
  <li><strong>if condition (optional):</strong> A filtering condition that decides whether the current item should be included.</li>
</ul>
<p>This syntax allows us to combine iteration, modification, and conditional filtering all in one line.</p>

<h3>for loop vs. list comprehension</h3>
<p>The main difference is that a for loop requires multiple lines to create a new list by iterating over items and manually adding each one. Whereas, list comprehension do the same task in a single line, this makes the code simpler and easier to read.</p>

<h3>Example:</h3>
<p>Let’s take an example, where we want to double each number of given list into a new list</p>

<h3>Using a for loop:</h3>
<pre>{`
a = [1, 2, 3, 4, 5]

# Create an empty list 'res' to store results
res = []

# Iterate over each element in list 'a'
for val in a:
    # Multiply each element by 2 and append it to 'res'
    res.append(val * 2)

print(res)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>[2, 4, 6, 8, 10]</p>
</div>

<p><strong>Explanation:</strong> Create an empty list ‘res‘ to store results and iterate over each element in list ‘a‘ and for each items in list ‘a‘, multiply it by 2 and append it to ‘res‘ using append() method.</p>

<h3>Using list comprehension:</h3>
<pre>{`
a = [1, 2, 3, 4, 5]
res = [val * 2 for val in a]
print(res)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>[2, 4, 6, 8, 10]</p>
</div>

<p><strong>Explanation:</strong> In the above list comprehension, the iterable is a list ‘a’, and the expression is val * 2, which multiplies each value from the list by 2.</p>

<h3>Conditional statements in list comprehension</h3>
<p>List comprehensions can include conditional statements to filter or modify items based on specific criteria. These conditionals help us create customized lists quickly and making the code cleaner and more efficient.</p>

<h3>Example:</h3>
<p>Suppose we want to filter all even list from the given list.</p>

<pre>{`
a = [1, 2, 3, 4, 5]
res = [val for val in a if val % 2 == 0]
print(res)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>[2, 4]</p>
</div>

<p>To learn more about filtering conditions in list comprehensions, please refer to <a href="https://www.geeksforgeeks.org/python-list-comprehension-using-if-else/">“Python List Comprehension Using If-Else“</a></p>

<h3>Examples of list comprehension</h3>

<h3>Creating a list from a range</h3>
<p>A simple example is creating a list of numbers from 0 to 9.</p>

<pre>{`
# Creates a list of numbers from 0 to 9
a = [i for i in range(10)]
print(a)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]</p>
</div>

<h3>Using nested loops</h3>
<p>List comprehension can also be used with nested loops. Here, we generate a list of coordinate pairs for a simple 3×3 grid.</p>

<pre>{`
# Creates a list of tuples representing all combinations of (x, y)
# where both x and y range from 0 to 2.
coordinates = [(x, y) for x in range(3) for y in range(3)]
print(coordinates)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>[(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2), (2, 0), (2, 1), (2, 2)]</p>
</div>

<h3>Flattening a list of lists</h3>
<p>Suppose we have a list of lists and we want to convert it into a single list.</p>

<pre>{`
mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
res = [val for row in mat for val in row]
print(res)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>[1, 2, 3, 4, 5, 6, 7, 8, 9]</p>
</div>

<p><strong>Explanation:</strong> The line [val for row in mat for val in row] uses nested list comprehension to iterate through each row in mat. For each row, it iterates through each val in that row and collecting all values into a single list.</p>



            </section>

        </div>
        </>
    );
};
export default Pcom;
