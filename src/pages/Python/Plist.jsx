import React from "react";
import './Python.css'

const  Plist=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Lists in Python</h1>

            </header>
            <section className="section">
                <h2>Lists</h2>
                <p>In Python, a list is a built-in dynamic sized array (automatically grows and shrinks). We can store all types of items (including another list) in a list. A list may contain mixed type of items, this is possible because a list mainly stores references at contiguous locations and actual items maybe stored at different locations.</p>
<ul>
  <li>List can contain duplicate items.</li>
  <li>List in Python are Mutable. Hence, we can modify, replace or delete the items.</li>
  <li>List are ordered. It maintain the order of elements based on how they are added.</li>
  <li>Accessing items in List can be done directly using their position (index), starting from 0.</li>
</ul>

<h3>Example :</h3>

<pre>{`# Creating a Python list with different data types
a = [10, 20, "GfG", 40, True]
print(a)

# Accessing elements using indexing
print(a[0])  # 10
print(a[1])  # 20
print(a[2])  # "GfG"
print(a[3])  # 40
print(a[4])  # True

# Checking types of elements
print(type(a[2]))  # str
print(type(a[4]))  # bool
`}</pre>

<p><strong>Explanation:</strong></p>
<ul>
  <li>The list contains a mix of integers (10, 20, 40), a string (“GfG”) and a boolean (True).</li>
  <li>The list is printed and individual elements are accessed using their indexes (starting from 0).</li>
  <li>type(a[2]) confirms “GfG” is a str.</li>
  <li>type(a[4]) confirms True is a bool.</li>
</ul>

<h3>Python List</h3>
<p><strong>Note:</strong> Lists Store References, Not Values</p>
<p>Each element in a list is not stored directly inside the list structure. Instead, the list stores references (pointers) to the actual objects in memory. Example (from the image representation). </p>
<p>The list a itself is a container with references (addresses) to the actual values.<br/>Python internally creates separate objects for 10, 20, “GfG”, 40 and True, then stores their memory addresses inside a.<br/>This means that modifying an element doesn’t affect other elements but can affect the referenced object if it is mutable</p>

<h3>Table of Content</h3>
<ul>
  <li>Creating a List</li>
  <li>Accessing List Elements</li>
  <li>Adding Elements into List</li>
  <li>Updating Elements into List</li>
  <li>Removing Elements from List</li>
  <li>Iterating Over Lists</li>
  <li>Nested Lists in Python</li>
  <li>Python List Operation Programs</li>
  <li>Basic Example on Python List</li>
</ul>

<h3>Creating a List</h3>
<p>Here are some common methods to create a list:</p>

<h3>Using Square Brackets</h3>

<pre>{`# List of integers
a = [1, 2, 3, 4, 5]

# List of strings
b = ['apple', 'banana', 'cherry']

# Mixed data types
c = [1, 'hello', 3.14, True]

print(a)
print(b)
print(c)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>[1, 2, 3, 4, 5]</p>
  <p>['apple', 'banana', 'cherry']</p>
  <p>[1, 'hello', 3.14, True]</p>
</div>

<h3>Using list() Constructor</h3>
<p>We can also create a list by passing an iterable (like a string, tuple or another list) to list() function.</p>

<pre>{`# From a tuple
a = list((1, 2, 3, 'apple', 4.5))
print(a)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>[1, 2, 3, 'apple', 4.5]</p>
</div>

<h3>Creating List with Repeated Elements</h3>
<p>We can create a list with repeated elements using the multiplication operator.</p>

<pre>{`# Create a list [2, 2, 2, 2, 2]
a = [2] * 5

# Create a list [0, 0, 0, 0, 0, 0, 0]
b = [0] * 7

print(a)
print(b)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>[2, 2, 2, 2, 2]</p>
  <p>[0, 0, 0, 0, 0, 0, 0]</p>
</div>

<h3>Accessing List Elements</h3>
<p>Elements in a list can be accessed using indexing. Python indexes start at 0, so a[0] will access the first element, while negative indexing allows us to access elements from the end of the list. Like index -1 represents the last elements of list.</p>

<pre>{`a = [10, 20, 30, 40, 50]

# Access first element
print(a[0])

# Access last element
print(a[-1])
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>10</p>
  <p>50</p>
</div>

<h3>Adding Elements into List</h3>
<p>We can add elements to a list using the following methods:</p>
<ul>
  <li><strong>append():</strong> Adds an element at the end of the list.</li>
  <li><strong>extend():</strong> Adds multiple elements to the end of the list.</li>
  <li><strong>insert():</strong> Adds an element at a specific position.</li>
</ul>

<pre>{`# Initialize an empty list
a = []

# Adding 10 to end of list
a.append(10)
print("After append(10):", a)

# Inserting 5 at index 0
a.insert(0, 5)
print("After insert(0, 5):", a)

# Adding multiple elements  [15, 20, 25] at the end
a.extend([15, 20, 25])
print("After extend([15, 20, 25]):", a)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>After append(10): [10]</p>
  <p>After insert(0, 5): [5, 10]</p>
  <p>After extend([15, 20, 25]): [5, 10, 15, 20, 25]</p>
</div>

<h3>Updating Elements into List</h3>
<p>We can change the value of an element by accessing it using its index.</p>

<pre>{`a = [10, 20, 30, 40, 50]

# Change the second element
a[1] = 25
print(a)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>[10, 25, 30, 40, 50]</p>
</div>

<h3>Removing Elements from List</h3>
<p>We can remove elements from a list using:</p>
<ul>
  <li><strong>remove():</strong> Removes the first occurrence of an element.</li>
  <li><strong>pop():</strong> Removes the element at a specific index or the last element if no index is specified.</li>
  <li><strong>del statement:</strong> Deletes an element at a specified index.</li>
</ul>

<pre>{`a = [10, 20, 30, 40, 50]

# Removes the first occurrence of 30
a.remove(30)
print("After remove(30):", a)

# Removes the element at index 1 (20)
popped_val = a.pop(1)
print("Popped element:", popped_val)
print("After pop(1):", a)

# Deletes the first element (10)
del a[0]
print("After del a[0]:", a)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>After remove(30): [10, 20, 40, 50]</p>
  <p>Popped element: 20</p>
  <p>After pop(1): [10, 40, 50]</p>
  <p>After del a[0]: [40, 50]</p>
</div>

<h3>Iterating Over Lists</h3>
<p>We can iterate the Lists easily by using a for loop or other iteration methods. Iterating over lists is useful when we want to do some operation on each item or access specific items based on certain conditions. Let’s take an example to iterate over the list using for loop.</p>

<h3>Using for Loop</h3>

<pre>{`a = ['apple', 'banana', 'cherry']

# Iterating over the list
for item in a:
    print(item)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>apple</p>
  <p>banana</p>
  <p>cherry</p>
</div>


<h3>Nested Lists in Python</h3>
<p>A nested list is a list within another list, which is useful for representing matrices or tables. We can access nested elements by chaining indexes.</p>

<pre>{`matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Access element at row 2, column 3
print(matrix[1][2])
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>6</p>
</div>


            </section>

        </div>
        </>
    );
};
export default Plist;
