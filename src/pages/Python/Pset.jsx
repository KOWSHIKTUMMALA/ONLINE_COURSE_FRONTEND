import React from "react";
import './Python.css'

const  Pset=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Python Sets</h1>

            </header>
            <section className="section">
                <h2>Sets</h2>
                <p>Python set is an unordered collection of multiple items having different datatypes. In Python, sets are mutable, unindexed and do not contain duplicates. The order of elements in a set is not preserved and can change.</p>

<h3>Creating a Set in Python</h3>
<p>In Python, the most basic and efficient method for creating a set is using curly braces.</p>

<h3>Example:</h3>

<pre>{`
set1 = {1, 2, 3, 4}
print(set1)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>1, 2, 3, 4</p>
</div>

<h3>Using the set() function</h3>
<p>Python Sets can be created by using the built-in set() function with an iterable object or a sequence by placing the sequence inside curly braces, separated by a ‘comma’.</p>
<p><strong>Note:</strong> A Python set cannot have mutable elements like a list or dictionary, as it is immutable.</p>

<h3>Example:</h3>

<pre>{`# Creating a Set
set1 = set()
print(set1)

set1 = set("GeeksForGeeks")
print(set1)

# Creating a Set with the use of a List
set1 = set(["Geeks", "For", "Geeks"])
print(set1)

# Creating a Set with the use of a tuple
tup = ("Geeks", "for", "Geeks")
print(set(tup))

# Creating a Set with the use of a dictionary
d = {"Geeks": 1, "for": 2, "Geeks": 3}
print(set(d))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>set()</p>
  <p>'e', 'r', 'o', 'k', 'G', 's', 'F'</p>
  <p>'For', 'Geeks'</p>
  <p>'for', 'Geeks'</p>
  <p>'for', 'Geeks'</p>
</div>

<p><strong>Time complexity:</strong> O(n), where n is the length of the input string, list, tuple or dictionary.</p>
<p><strong>Auxiliary space:</strong> O(n), where n is the length of the input string, list, tuple or dictionary.</p>

<h3>Unordered, Unindexed and Mutability</h3>
<p>In set, the order of elements is not guaranteed to be the same as the order in which they were added. The output could vary each time we run the program. Also the duplicate items entered are removed by itself.</p>
<p>Sets do not support indexing. Trying to access an element by index (set[0]) raises a TypeError.</p>
<p>We can add elements to the set using add(). We can remove elements from the set using remove(). The set changes after these operations, demonstrating its mutability. However, we cannot changes its items directly.</p>

<h3>Example:</h3>

<pre>{`# Creating a set
set1 = {3, 1, 4, 1, 5, 9, 2}

# Unordered: The order of elements is not preserved
print(set1)  # Output may vary: {1, 2, 3, 4, 5, 9}

# Unindexed: Accessing elements by index is not possible
# This will raise a TypeError
try:
    print(set1[0])
except TypeError as e:
    print(e)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>1, 2, 3, 4, 5, 9</p>
  <p>'set' object is not subscriptable</p>
</div>

<h3>Adding Elements to a Set in Python</h3>
<p>We can add items to a set using add() method and update() method. add() method can be used to add only a single item. To add multiple items we use update() method.</p>

<h3>Example:</h3>

<pre>{`# Creating a set
set1 = {1, 2, 3}

# Add one item
set1.add(4)

# Add multiple items
set1.update([5, 6])

print(set1)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>1, 2, 3, 4, 5, 6</p>
</div>

<h3>Accessing a Set in Python</h3>
<p>We can loop through a set to access set items as set is unindexed and do not support accessing elements by indexing. Also we can use in keyword which is membership operator to check if an item exists in a set.</p>

<h3>Example:</h3>

<pre>{`set1 = set(["Geeks", "For", "Geeks."])

# Accessing element using For loop
for i in set1:
    print(i, end=" ")

# Checking the element
# using in keyword
print("Geeks" in set1)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>Geeks For Geeks. True</p>
</div>

<p><strong>Explanation:</strong></p>
<ul>
  <li>This loop will print each item in the set. Since sets are unordered, the order of items printed is not guaranteed.</li>
  <li>This code checks if the number 4 is in set1 and prints a corresponding message.</li>
</ul>

<h3>Removing Elements from the Set in Python</h3>
<p>We can remove an element from a set in Python using several methods: remove(), discard() and pop(). Each method works slightly differently :</p>
<ul>
  <li>Using remove() Method or discard() Method</li>
  <li>Using pop() Method</li>
  <li>Using clear() Method</li>
</ul>

<h3>Using remove() Method or discard() Method</h3>
<p>remove() method removes a specified element from the set. If the element is not present in the set, it raises a KeyError. discard() method also removes a specified element from the set. Unlike remove(), if the element is not found, it does not raise an error.</p>

<pre>{`# Using Remove Method
set1 = {1, 2, 3, 4, 5}
set1.remove(3)
print(set1)

# Attempting to remove an element that does not exist
try:
    set1.remove(10)
except KeyError as e:
    print("Error:", e)

# Using discard() Method
set1.discard(4)
print(set1)

# Attempting to discard an element that does not exist
set1.discard(10)  # No error raised
print(set1)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>1, 2, 4, 5</p>
  <p>Error: 10</p>
  <p>1, 2, 5</p>
  <p>1, 2, 5</p>
</div>

<h3>Using pop() Method</h3>
<p>pop() method removes and returns an arbitrary element from the set. This means we don’t know which element will be removed. If the set is empty, it raises a KeyError.</p>
<p><strong>Note:</strong> If the set is unordered then there’s no such way to determine which element is popped by using the pop() function.</p>

<pre>{`set1 = {1, 2, 3, 4, 5}
val = set1.pop()
print(valHTML

)
print(set1)

# Using pop on an empty set
set1.clear()  # Clear the set to make it empty
try:
    set1.pop()
except KeyError as e:
    print("Error:", e)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>1</p>
  <p>2, 3, 4, 5</p>
  <p>Error: 'pop from an empty set'</p>
</div>

<h3>Using clear() Method</h3>
<p>clear() method removes all elements from the set, leaving it empty.</p>

<pre>{`set1 = {1, 2, 3, 4, 5}
set1.clear()
print(set1)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>set()</p>
</div>

<h3>Frozen Sets in Python</h3>
<p>A frozenset in Python is a built-in data type that is similar to a set but with one key difference that is immutability. This means that once a frozenset is created, we cannot modify its elements that is we cannot add, remove or change any items in it. Like regular sets, a frozenset cannot contain duplicate elements.</p>
<p>If no parameters are passed, it returns an empty frozenset.</p>

<pre>{`# Creating a frozenset from a list
fset = frozenset([1, 2, 3, 4, 5])
print(fset)

# Creating a frozenset from a set
set1 = {3, 1, 4, 1, 5}
fset = frozenset(set1)
print(fset)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>frozenset(1, 2, 3, 4, 5)</p>
  <p>frozenset(1, 3, 4, 5)</p>
</div>

<h3>Typecasting Objects into Sets</h3>
<p>Typecasting objects into sets in Python refers to converting various data types into a set. Python provides the set() constructor to perform this typecasting, allowing us to convert lists, tuples and strings into sets.</p>

<pre>{`# Typecasting list into set
li = [1, 2, 3, 3, 4, 5, 5, 6, 2]
set1 = set(li)
print(set1)

# Typecasting string into set
s = "GeeksforGeeks"
set1 = set(s)
print(set1)

# Typecasting dictionary into set
d = {1: "One", 2: "Two", 3: "Three"}
set1 = set(d)
print(set1)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>1, 2, 3, 4, 5, 6</p>
  <p>'f', 'G', 's', 'k', 'r', 'e', 'o'</p>
  <p>1, 2, 3</p>
</div>

<h3>Advantages of Set in Python</h3>
<ul>
  <li><strong>Unique Elements:</strong> Sets can only contain unique elements, so they can be useful for removing duplicates from a collection of data.</li>
  <li><strong>Fast Membership Testing:</strong> Sets are optimized for fast membership testing, so they can be useful for determining whether a value is in a collection or not.</li>
  <li><strong>Mathematical Set Operations:</strong> Sets support mathematical set operations like union, intersection and difference, which can be useful for working with sets of data.</li>
  <li><strong>Mutable:</strong> Sets are mutable, which means that you can add or remove elements from a set after it has been created.</li>
</ul>

<h3>Disadvantages of Sets in Python</h3>
<ul>
  <li><strong>Unordered:</strong> Sets are unordered, which means that you cannot rely on the order of the data in the set. This can make it difficult to access or process data in a specific order.</li>
  <li><strong>Limited Functionality:</strong> Sets have limited functionality compared to lists, as they do not support methods like append() or pop(). This can make it more difficult to modify or manipulate data stored in a set.</li>
  <li><strong>Memory Usage:</strong> Sets can consume more memory than lists, especially for small datasets. This is because each element in a set requires additional memory to store a hash value.</li>
  <li><strong>Less Commonly Used:</strong> Sets are less commonly used than lists and dictionaries in Python, which means that there may be fewer resources or libraries available for working with them. This can make it more difficult to find solutions to problems or to get help with debugging.</li>
</ul>
<p>Overall, sets can be a useful data structure in Python, especially for removing duplicates or for fast membership testing. However, their lack of ordering and limited functionality can also make them less versatile than lists or dictionaries, so it is important to carefully consider the advantages and disadvantages of using sets when deciding which data structure to use in your Python program.</p>

<h3>Set Methods in Python</h3>

<table>
  <tr>
    <th>Function</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>add()</td>
    <td>Adds an element to a set</td>
  </tr>
  <tr>
    <td>remove()</td>
    <td>Removes an element from a set. If the element is not present in the set, raise a KeyError</td>
  </tr>
  <tr>
    <td>clear()</td>
    <td>Removes all elements form a set</td>
  </tr>
  <tr>
    <td>copy()</td>
    <td>Returns a shallow copy of a set</td>
  </tr>
  <tr>
    <td>pop()</td>
    <td>Removes and returns an arbitrary set element. Raise KeyError if the set is empty</td>
  </tr>
  <tr>
    <td>update()</td>
    <td>Updates a set with the union of itself and others</td>
  </tr>
  <tr>
    <td>union()</td>
    <td>Returns the union of sets in a new set</td>
  </tr>
  <tr>
    <td>difference()</td>
    <td>Returns the difference of two or more sets as a new set</td>
  </tr>
  <tr>
    <td>difference_update()</td>
    <td>Removes all elements of another set from this set</td>
  </tr>
  <tr>
    <td>discard()</td>
    <td>Removes an element from set if it is a member. (Do nothing if the element is not in set)</td>
  </tr>
  <tr>
    <td>intersection()</td>
    <td>Returns the intersection of two sets as a new set</td>
  </tr>
  <tr>
    <td>intersection_update()</td>
    <td>Updates the set with the intersection of itself and another</td>
  </tr>
  <tr>
    <td>isdisjoint()</td>
    <td>Returns True if two sets have a null intersection</td>
  </tr>
  <tr>
    <td>issubset()</td>
    <td>Returns True if another set contains this set</td>
  </tr>
  <tr>
    <td>issuperset()</td>
    <td>Returns True if this set contains another sets</td>
  </tr>
  <tr>
    <td>symmetric_difference()</td>
    <td>Returns the symmetric difference of two sets as a new set</td>
  </tr>
  <tr>
    <td>symmetric_difference_update()</td>
    <td>Updates a set with the symmetric difference of itself and another</td>
  </tr>
</table>


            </section>

        </div>
        </>
    );
};
export default Pset;
