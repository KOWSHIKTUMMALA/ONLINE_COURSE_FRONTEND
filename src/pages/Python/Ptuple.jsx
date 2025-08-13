import React from "react";
import './Python.css'

const  Ptuple=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Python Tuples</h1>

            </header>
            <section className="section">
                <h2>Tuples</h2>
                <p>A tuple in Python is an immutable ordered collection of elements. Tuples are similar to lists, but unlike lists, they cannot be changed after their creation (i.e., they are immutable). Tuples can hold elements of different data types. The main characteristics of tuples are being ordered, heterogeneous and immutable.</p>

<h3>Creating a Tuple</h3>
<p>A tuple is created by placing all the items inside parentheses (), separated by commas. A tuple can have any number of items and they can be of different data types.</p>

<h3>Example:</h3>

<pre>{`# Creating an empty Tuple
tup = ()
print(tup)

# Using String
tup = ('Geeks', 'For')
print(tup)

# Using List
li = [1, 2, 4, 5, 6]
print(tuple(li))

# Using Built-in Function
tup = tuple('Geeks')
print(tup)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>()</p>
  <p>('Geeks', 'For')</p>
  <p>(1, 2, 4, 5, 6)</p>
  <p>('G', 'e', 'e', 'k', 's')</p>
</div>

<p>Let’s understand tuple in detail:</p>

<h3>Table of Content</h3>
<ul>
  <li>Creating a Tuple</li>
  <li>Python Tuple Operations</li>
  <li>Accessing of Tuples</li>
  <li>Concatenation of Tuples</li>
  <li>Slicing of Tuple</li>
  <li>Deleting a Tuple</li>
  <li>Tuple Built-In Methods</li>
  <li>Tuple Built-In Functions</li>
  <li>Tuples VS Lists</li>
  <li>Tuples Programs</li>
</ul>

<h3>Creating a Tuple with Mixed Datatypes.</h3>
<p>Tuples can contain elements of various data types, including other tuples, lists, dictionaries and even functions.</p>

<h3>Example:</h3>

<pre>{`# Creating a Tuple with Mixed Datatype
tup = (5, 'Welcome', 7, 'Geeks')
print(tup)

# Creating a Tuple with nested tuples
tup1 = (0, 1, 2, 3)
tup2 = ('python', 'geek')
tup3 = (tup1, tup2)
print(tup3)

# Creating a Tuple with repetition
tup1 = ('Geeks',) * 3
print(tup1)

# Creating a Tuple with the use of loop
tup = ('Geeks')
n = 5
for i in range(int(n)):
    tup = (tup,)
    print(tup)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>(5, 'Welcome', 7, 'Geeks')</p>
  <p>((0, 1, 2, 3), ('python', 'geek'))</p>
  <p>('Geeks', 'Geeks', 'Geeks')</p>
  <p>('Geeks',)</p>
  <p>(('Geeks',),)</p>
  <p>((('Geeks',),),)</p>
  <p>(((('Geeks',),),),)</p>
  <p>((((('Geeks',),),),),)</p>
</div>

<h3>Python Tuple Operations</h3>
<p>Below are the Python tuple operations.</p>
<ul>
  <li>Accessing of Python Tuples</li>
  <li>Concatenation of Tuples</li>
  <li>Slicing of Tuple</li>
  <li>Deleting a Tuple</li>
</ul>

<h3>Accessing of Tuples</h3>
<p>We can access the elements of a tuple by using indexing and slicing, similar to how we access elements in a list. Indexing starts at 0 for the first element and goes up to n-1, where n is the number of elements in the tuple. Negative indexing starts from -1 for the last element and goes backward.</p>

<h3>Example:</h3>

<pre>{`# Accessing Tuple with Indexing
tup = tuple("Geeks")
print(tup[0])

# Accessing a range of elements using slicing
print(tup[1:4])
print(tup[:3])

# Tuple unpacking
tup = ("Geeks", "For", "Geeks")
# This line unpack values of Tuple1
a, b, c = tup
print(a)
print(b)
print(c)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>G</p>
  <p>('e', 'e', 'k')</p>
  <p>('G', 'e', 'e')</p>
  <p>Geeks</p>
  <p>For</p>
  <p>Geeks</p>
</div>

<h3>Concatenation of Tuples</h3>
<p>Tuples can be concatenated using the + operator. This operation combines two or more tuples to create a new tuple.</p>
<p><strong>Note-</strong> Only the same datatypes can be combined with concatenation, an error arises if a list and a tuple are combined.</p>

<pre>{`tup1 = (0, 1, 2, 3)
tup2 = ('Geeks', 'For', 'Geeks')
tup3 = tup1 + tup2
print(tup3)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>(0, 1, 2, 3, 'Geeks', 'For', 'Geeks')</p>
</div>

<h3>Slicing of Tuple</h3>
<p>Slicing a tuple means creating a new tuple from a subset of elements of the original tuple. The slicing syntax is tuple[start:stop:step].</p>
<p><strong>Note-</strong> Negative Increment values can also be used to reverse the sequence of Tuples.</p>

<pre>{`# Slicing of a Tuple with Numbers
tup = tuple('GEEKSFORGEEKS')

# Removing First element
print(tup[1:])

# Reversing the Tuple
print(tup[::-1])

# Printing elements of a Range
print(tup[4:9])
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>('E', 'E', 'K', 'S', 'F', 'O', 'R', 'G', 'E', 'E', 'K', 'S')</p>
  <p>('S', 'K', 'E', 'E', 'G', 'R', 'O', 'F', 'S', 'K', 'E', 'E', 'G')</p>
  <p>('S', 'F', 'O', 'R', 'G')</p>
</div>

<h3>Deleting a Tuple</h3>
<p>Since tuples are immutable, we cannot delete individual elements of a tuple. However, we can delete an entire tuple using del statement.</p>
<p><strong>Note-</strong> Printing of Tuple after deletion results in an Error.</p>

<pre>{`# Deleting a Tuple
tup = (0, 1, 2, 3, 4)
del tup
# print(tup) # Uncommenting this line will cause NameError: name 'tup' is not defined
`}</pre>

<h3>Tuple Built-In Methods</h3>
<p>Tuples support only a few methods due to their immutable nature. The two most commonly used methods are count() and index()</p>

<table>
  <tr>
    <th>Built-in-Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>index()</td>
    <td>Find in the tuple and returns the index of the given value where it’s available</td>
  </tr>
  <tr>
    <td>count()</td>
    <td>Returns the frequency of occurrence of a specified value</td>
  </tr>
</table>

<h3>Tuple Built-In Functions</h3>
<table>
  <tr>
    <th>Built-in Function</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>all()</td>
    <td>Returns true if all element are true or if tuple is empty</td>
  </tr>
  <tr>
    <td>any()</td>
    <td>return true if any element of the tuple is true. if tuple is empty, return false</td>
  </tr>
  <tr>
    <td>len()</td>
    <td>Returns length of the tuple or size of the tuple</td>
  </tr>
  <tr>
    <td>enumerate()</td>
    <td>Returns enumerate object of tuple</td>
  </tr>
  <tr>
    <td>max()</td>
    <td>return maximum element of given tuple</td>
  </tr>
  <tr>
    <td>min()</td>
    <td>return minimum element of given tuples</td>
  </tr>
  <tr>
    <td>sum()</td>
    <td>Sums up the numbers in the tuples</td>
  </tr>
  <tr>
    <td>sorted()</td>
    <td>input elements in the tuple and return a new sorted list</td>
  </tr>
  <tr>
    <td>tuple()</td>
    <td>Convert an iterable to a tuple.</td>
  </tr>
</table>

<h3>Tuples VS Lists</h3>

<table>
  <tr>
    <th>Similarities</th>
    <th>Differences</th>
  </tr>
  <tr>
    <td>Functions that can be used for both lists and tuples:<br/>len(), max(), min(), sum(), any(), all(), sorted()</td>
    <td>Methods that cannot be used for tuples:<br/>append(), insert(), remove(), pop(), clear(), sort(), reverse()</td>
  </tr>
  <tr>
    <td>Methods that can be used for both lists and tuples:<br/>count(), Index()</td>
    <td>we generally use ‘tuples’ for heterogeneous (different) data types and ‘lists’ for homogeneous (similar) data types.</td>
  </tr>
  <tr>
    <td>Tuples can be stored in lists.</td>
    <td>Iterating through a ‘tuple’ is faster than in a ‘list’.</td>
  </tr>
  <tr>
    <td>Lists can be stored in tuples.</td>
    <td>‘Lists’ are mutable whereas ‘tuples’ are immutable.</td>
  </tr>
  <tr>
    <td>Both ‘tuples’ and ‘lists’ can be nested.</td>
    <td>Tuples that contain immutable elements can be used as a key for a dictionary.</td>
  </tr>
</table>



            </section>

        </div>
        </>
    );
};
export default Ptuple;
