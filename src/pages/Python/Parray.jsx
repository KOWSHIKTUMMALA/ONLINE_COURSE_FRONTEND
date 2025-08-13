import React from "react";
import './Python.css'

const  Parray=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Python Arrays</h1>

            </header>
            <section className="section">
                <h2>Arrays</h2>

<p>Lists in Python are the most flexible and commonly used data structure for sequential storage. They are similar to arrays in other languages but with several key differences:</p>
<ul>
  <li><strong>Dynamic Typing:</strong> Python lists can hold elements of different types in the same list. We can have an integer, a string and even other lists all stored within a single list.</li>
  <li><strong>Dynamic Resizing:</strong> Lists are dynamically resized, meaning you can add or remove elements without declaring the size of the list upfront.</li>
  <li><strong>Built-in Methods:</strong> Python lists come with numerous built-in methods that allow for easy manipulation of the elements within them, including methods for appending, removing, sorting and reversing elements.</li>
</ul>

<h3>Example:</h3>

<pre>{`
a = [1, "Hello", [3.14, "world"]]
a.append(2)  # Add an integer to the end
print(a)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>[1, 'Hello', [3.14, 'world'], 2]</p>
</div>

<p><strong>Note:</strong> Python does not have built-in array support in the same way that languages like C and Java do, but it provides something similar through the array module for storing elements of a single type.</p>

<h3>NumPy Arrays</h3>
<p>NumPy arrays are a part of the NumPy library, which is a powerful tool for numerical computing in Python. These arrays are designed for high-performance operations on large volumes of data and support multi-dimensional arrays and matrices. This makes them ideal for complex mathematical computations and large-scale data processing.</p>

<h3>Key Features:</h3>
<ul>
  <li><strong>Multi-dimensional support:</strong> NumPy arrays can handle more than one dimension, making them suitable for matrix operations and more complex mathematical constructs.</li>
  <li><strong>Broad broadcasting capabilities:</strong> They can perform operations between arrays of different sizes and shapes, a feature known as broadcasting.</li>
  <li><strong>Efficient storage and processing:</strong> NumPy arrays are stored more efficiently than Python lists and provide optimized performance for numerical operations.</li>
</ul>

<h3>Example Code:</h3>

<pre>{`
import numpy as np

# Creating a NumPy array
arr = np.array([1, 2, 3, 4])

# Element-wise operations
print(arr * 2)

# Multi-dimensional array
arr2d = np.array([[1, 2], [3, 4]])
print(arr2d * 2)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>[2 4 6 8]</p>
  <p>[[2 4]<br/> [6 8]]</p>
</div>

<p><strong>Note:</strong> Choose NumPy arrays for scientific computing, where you need to handle complex operations or work with multi-dimensional data.</p>
<p>Use Python’s array module when you need a basic, memory-efficient container for large quantities of uniform data types, especially when your operations are simple and do not require the capabilities of NumPy.</p>

<h3>Python Arrays</h3>
<p>In Python, array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. Unlike Python lists (can store elements of mixed types), arrays must have all elements of same type. Having only homogeneous elements makes it memory-efficient.</p>

<h3>Python Array Example:</h3>

<pre>{`
import array as arr

# creating array of integers
a = arr.array('i', [1, 2, 3])

# accessing First Araay
print(a[0])

# Adding element to array
a.append(5)
print(a)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>1</p>
  <p>array('i', [1, 2, 3, 5])</p>
</div>

<h3>Create an Array in Python</h3>
<p>Array in Python can be created by importing an array module. array( data_type , value_list ) is used to create array in Python with data type and value list specified in its arguments.</p>

<pre>{`
import array as arr

# creating array
a = arr.array('i', [1, 2, 3])

# iterating and printing each item
for i in range(0, 3):
    print(a[i], end=" ")
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>1 2 3 </p>
</div>

<h3>Python Array Index</h3>

<h3>Adding Elements to an Array</h3>
<p>Elements can be added to the Python Array by using built-in insert() function. Insert is used to insert one or more data elements into an array. Based on the requirement, a new element can be added at the beginning, end, or any given index of array. append() is also used to add the value mentioned in its arguments at the end of the Python array.</p>

<pre>{`
import array as arr

# Integer array example
a = arr.array('i', [1, 2, 3])
print("Integer Array before insertion:", *a)

a.insert(1, 4)  # Insert 4 at index 1
print("Integer Array after insertion:", *a)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>Integer Array before insertion: 1 2 3</p>
  <p>Integer Array after insertion: 1 4 2 3</p>
</div>

<p><strong>Note:</strong> We have used *a and *b for unpacking the array elements.</p>

<h3>Accessing Array Items</h3>
<p>In order to access the array items refer to the index number. Use the index operator [ ] to access an item in a array in Python. The index must be an integer.</p>

<pre>{`
import array as arr

a = arr.array('i', [1, 2, 3, 4, 5, 6])
print(a[0])
print(a[3])

b = arr.array('d', [2.5, 3.2, 3.3])
print(b[1])
print(b[2])
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>1</p>
  <p>4</p>
  <p>3.2</p>
  <p>3.3</p>
</div>

<h3>Removing Elements from the Array</h3>
<p>Elements can be removed from the Python array by using built-in remove() function. It will raise an Error if element doesn’t exist. Remove() method only removes the first occurrence of the searched element. To remove range of elements, we can use an iterator.</p>
<p>pop() function can also be used to remove and return an element from the array. By default it removes only the last element of the array. To remove element from a specific position, index of that item is passed as an argument to pop() method.</p>

<pre>{`
import array

arr = array.array('i', [1, 2, 3, 1, 5])

# using remove() method to remove first occurance of 1
arr.remove(1)
print(arr)

# pop() method - remove item at index 2
arr.pop(2)
print(arr)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>array('i', [2, 3, 1, 5])</p>
  <p>array('i', [2, 3, 5])</p>
</div>

<h3>Slicing of an Array</h3>
<p>In Python array, there are multiple ways to print the whole array with all the elements, but to print a specific range of elements from the array, we use Slice operation.</p>
<ul>
  <li>Elements from beginning to a range use [:Index]</li>
  <li>Elements from end use [:-HTML

Index]</li>
  <li>Elements from specific Index till the end use [Index:]</li>
  <li>Elements within a range, use [Start Index:End Index]</li>
  <li>Print complete List, use [:]</li>
  <li>For Reverse list, use [::-1]</li>
</ul>

<pre>{`
import array as arr

l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a = arr.array('i', l)

Sliced_array = a[3:8]
print(Sliced_array)

Sliced_array = a[5:]
print(Sliced_array)

Sliced_array = a[:]
print(Sliced_array)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>array('i', [4, 5, 6, 7, 8])</p>
  <p>array('i', [6, 7, 8, 9, 10])</p>
  <p>array('i', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])</p>
</div>

<h3>Searching Element in an Array</h3>
<p>In order to search an element in the array we use a python in-built index() method. This function returns the index of the first occurrence of value mentioned in arguments.</p>

<pre>{`
import array

arr = array.array('i', [1, 2, 3, 1, 2, 5])

# index of 1st occurrence of 2
print(arr.index(2))

# index of 1st occurrence of 1
print(arr.index(1))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>1</p>
  <p>0</p>
</div>

<h3>Updating Elements in an Array</h3>
<p>In order to update an element in the array we simply reassign a new value to the desired index we want to update.</p>

<pre>{`
import array

arr = array.array('i', [1, 2, 3, 1, 2, 5])

# update item at index 2
arr[2] = 6
print(arr)

# update item at index 4
arr[4] = 8
print(arr)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>array('i', [1, 2, 6, 1, 2, 5])</p>
  <p>array('i', [1, 2, 6, 1, 8, 5])</p>
</div>

<h3>Different Operations on Python Arrays</h3>

<h3>Counting Elements in an Array</h3>
<p>We can use count() method to count given item in array.</p>

<pre>{`
import array

arr = array.array('i', [1, 2, 3, 4, 2, 5, 2])

count = arr.count(2)
print("Number of occurrences of 2:", count)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>Number of occurrences of 2: 3</p>
</div>

<h3>Reversing Elements in an Array</h3>
<p>In order to reverse elements of an array we need to simply use reverse method.</p>

<pre>{`
import array

arr = array.array('i', [1, 2, 3, 4, 5])

arr.reverse()
print("Reversed array:", *arr)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>Reversed array: 5 4 3 2 1</p>
</div>

<h3>Extend Element from Array</h3>
<p>In Python, an array is used to store multiple values or elements of the same datatype in a single variable. The extend() function is simply used to attach an item from iterable to the end of the array. In simpler terms, this method is used to add an array of values to the end of a given or existing array.</p>
<p>list.extend(iterable)</p>
<p>Here, all the element of iterable are added to the end of list1</p>

<pre>{`
import array as arr

a = arr.array('i', [1, 2, 3,4,5])

# using extend() method
a.extend([6,7,8,9,10])
print(a)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>array('i', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])</p>
</div>


            </section>

        </div>
        </>
    );
};
export default Parray;
