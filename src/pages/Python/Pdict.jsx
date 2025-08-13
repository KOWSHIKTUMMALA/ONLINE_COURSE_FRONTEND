import React from "react";
import './Python.css'

const  Pdict=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Dictionaries in Python</h1>

            </header>
            <section className="section">
                <h2>Dictionaries</h2>
                <p>A Python dictionary is a data structure that stores the value in key: value pairs. Values in a dictionary can be of any data type and can be duplicated, whereas keys can’t be repeated and must be immutable.</p>

<h3>Example:</h3>
<p>Here, The data is stored in key:value pairs in dictionaries, which makes it easier to find values.</p>

<pre>{`d = {1: 'Geeks', 2: 'For', 3: 'Geeks'}
print(d)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>1: 'Geeks', 2: 'For', 3: 'Geeks'</p>
</div>

<h3>How to Create a Dictionary</h3>
<p>In Python, a dictionary can be created by placing a sequence of elements within curly {} braces, separated by a ‘comma’.</p>

<pre>{`# create dictionary using { }
d1 = {1: 'Geeks', 2: 'For', 3: 'Geeks'}
print(d1)

# create dictionary using dict() constructor
d2 = dict(a = "Geeks", b = "for", c = "Geeks")
print(d2)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>1: 'Geeks', 2: 'For', 3: 'Geeks'</p>
  <p>'a': 'Geeks', 'b': 'for', 'c': 'Geeks'</p>
</div>

<ul>
  <li>From Python 3.7 Version onward, Python dictionary are Ordered.</li>
  <li>Dictionary keys are case sensitive: the same name but different cases of Key will be treated distinctly.</li>
  <li>Keys must be immutable: This means keys can be strings, numbers, or tuples but not lists.</li>
  <li>Keys must be unique: Duplicate keys are not allowed and any duplicate key will overwrite the previous value.</li>
  <li>Dictionary internally uses Hashing. Hence, operations like search, insert, delete can be performed in Constant Time.</li>
</ul>

<h3>Table of Content</h3>
<ul>
  <li>Accessing Dictionary Items</li>
  <li>Adding and Updating Dictionary Items</li>
  <li>Removing Dictionary Items</li>
  <li>Iterating Through a Dictionary</li>
  <li>Nested Dictionaries</li>
</ul>

<h3>Accessing Dictionary Items</h3>
<p>We can access a value from a dictionary by using the key within square brackets or get() method.</p>

<pre>{`d = { "name": "Alice", 1: "Python", (1, 2): [1,2,4] }

# Access using key
print(d["name"])

# Access using get()
print(d.get("name"))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>Alice</p>
  <p>Alice</p>
</div>

<h3>Adding and Updating Dictionary Items</h3>
<p>We can add new key-value pairs or update existing keys by using assignment.</p>

<pre>{`d = {1: 'Geeks', 2: 'For', 3: 'Geeks'}

# Adding a new key-value pair
d["age"] = 22

# Updating an existing value
d[1] = "Python dict"

print(d)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>1: 'Python dict', 2: 'For', 3: 'Geeks', 'age': 22</p>
</div>

<h3>Removing Dictionary Items</h3>
<p>We can remove items from dictionary using the following methods:</p>
<ul>
  <li>del: Removes an item by key.</li>
  <li>pop(): Removes an item by key and returns its value.</li>
  <li>clear(): Empties the dictionary.</li>
  <li>popitem(): Removes and returns the last key-value pair.</li>
</ul>

<pre>{`d = {1: 'Geeks', 2: 'For', 3: 'Geeks', 'age':22}

# Using del to remove an item
del d["age"]
print(d)

# Using pop() to remove an item and return the value
val = d.pop(1)
print(val)

# Using popitem to removes and returns
# the last key-value pair.
key, val = d.popitem()
print(f"Key: {key}, Value: {val}")

# Clear all items from the dictionary
d.clear()
print(d)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>1: 'Geeks', 2: 'For', 3: 'Geeks'</p>
  <p>Geeks</p>
  <p>Key: 3, Value: Geeks</p>
  <p>{}</p>
</div>

<h3>Iterating Through a Dictionary</h3>
<p>We can iterate over keys [using keys() method] , values [using values() method] or both [using item() method] with a for loop.</p>

<pre>{`d = {1: 'Geeks', 2: 'For', 'age':22}

# Iterate over keys
for key in d:
    print(key)

# Iterate over values
for value in d.values():
    print(value)

# Iterate over key-value pairs
for key, value in d.items():
    print(f"{key}: {value}")
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>1</p>
  <p>2</p>
  <p>age</p>
  <p>Geeks</p>
  <p>For</p>
  <p>22</p>
  <p>1: Geeks</p>
  <p>2: For</p>
  <p>age: 22</p>
</div>


            </section>

        </div>
        </>
    );
};
export default Pdict;
