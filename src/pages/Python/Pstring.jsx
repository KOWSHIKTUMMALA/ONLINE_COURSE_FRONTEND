import React from "react";
import './Python.css'

const  Pstring=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Python String</h1>

            </header>
            <section className="section">
                <h2>Strings</h2>
                <p>A string is a sequence of characters. Python treats anything inside quotes as a string. This includes letters, numbers, and symbols. Python has no character data type so single character is a string of length 1.</p>

<pre>{`s = "GfG"
print(s[1]) # access 2nd char
s1 = s + s[0] # update
print(s1) # print
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>f</p>
  <p>GfGG</p>
</div>

<p>In this example, s holds the value “GfG” and is defined as a string.</p>

<h3>Table of Content</h3>
<ul>
  <li>Creating a String</li>
  <li>Accessing characters in Python String</li>
  <li>String Immutability</li>
  <li>Deleting a String</li>
  <li>Updating a String</li>
  <li>Common String Methods</li>
  <li>Concatenating and Repeating Strings</li>
  <li>Formatting Strings</li>
</ul>

<h3>Creating a String</h3>
<p>Strings can be created using either single (‘) or double (“) quotes.</p>

<pre>{`s1 = 'GfG'
s2 = "GfG"
print(s1)
print(s2)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>GfG</p>
  <p>GfG</p>
</div>

<h3>Multi-line Strings</h3>
<p>If we need a string to span multiple lines then we can use triple quotes (”’ or “””).</p>

<pre>{`s = """I am Learning
Python String"""
print(s)

s = '''I'm a Student'''
print(s)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>I am Learning<br/>Python String</p>
  <p>I'm a<br/>Student</p>
</div>

<h3>Accessing characters in Python String</h3>
<p>Strings in Python are sequences of characters, so we can access individual characters using indexing. Strings are indexed starting from 0 and -1 from end. This allows us to retrieve specific characters from the string.</p>

<h3>Python String syntax indexing</h3>

<pre>{`s = "GeeksforGeeks"
# Accesses first character: 'G'
print(s[0])
# Accesses 5th character: 's'
print(s[4])
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>G</p>
  <p>s</p>
</div>

<p><strong>Note:</strong> Accessing an index out of range will cause an IndexError. Only integers are allowed as indices and using a float or other types will result in a TypeError.</p>

<h3>Access string with Negative Indexing</h3>
<p>Python allows negative address references to access characters from back of the String, e.g. -1 refers to the last character, -2 refers to the second last character, and so on.</p>

<pre>{`s = "GeeksforGeeks"
# Accesses 3rd character: 'k'
print(s[-10])
# Accesses 5th character from end: 'G'
print(s[-5])
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>k</p>
  <p>G</p>
</div>

<h3>String Slicing</h3>
<p>Slicing is a way to extract portion of a string by specifying the start and end indexes. The syntax for slicing is string[start:end], where start starting index and end is stopping index (excluded).</p>

<pre>{`s = "GeeksforGeeks"
# Retrieves characters from index 1 to 3: 'eek'
print(s[1:4])
# Retrieves characters from beginning to index 2: 'Gee'
print(s[:3])
# Retrieves characters from index 3 to the end: 'ksforGeeks'
print(s[3:])
# Reverse a string
print(s[::-1])
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>eek</p>
  <p>Gee</p>
  <p>ksforGeeks</p>
  <p>skeeGrofskeeG</p>
</div>

<h3>String Immutability</h3>
<p>Strings in Python are immutable. This means that they cannot be changed after they are created. If we need to manipulate strings then we can use methods like concatenation, slicing, or formatting to create new strings based on the original.</p>

<pre>{`s = "geeksforGeeks"
# Trying to change the first character raises an error
# s[0] = 'I'  # Uncommenting this line will cause a TypeError
# Instead, create a new string
s = "G" + s[1:]
print(s)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>GeeksforGeeks</p>
</div>

<h3>Deleting a String</h3>
<p>In Python, it is not possible to delete individual characters from a string since strings are immutable. However, we can delete an entire string variable using the del keyword.</p>

<pre>{`s = "GfG"
# Deletes entire string
del s
`}</pre>

<p><strong>Note:</strong> After deleting the string using del and if we try to access s then it will result in a NameError because the variable no longer exists.</p>

<h3>Updating a String</h3>
<p>To update a part of a string we need to create a new string since strings are immutable.</p>

<pre>{`s = "hello geeks"
# Updating by creating a new string
s1 = "H" + s[1:]
# replacnig "geeks" with "GeeksforGeeks"
s2 = s.replace("geeks", "GeeksforGeeks")
print(s1)
print(s2)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>Hello geeks</p>
  <p>hello GeeksforGeeks</p>
</div>

<p><strong>Explanation:</strong></p>
<ul>
  <li>For s1, The original string s is sliced from index 1 to end of string and then concatenate “H” to create a new string s1.</li>
  <li>For s2, we can created a new string s2 and used replace() method to replace ‘geeks’ with ‘GeeksforGeeks’.</li>
</ul>

<h3>Common String Methods</h3>
<p>Python provides a various built-in methods to manipulate strings. Below are some of the most useful methods.</p>

<h3>len():</h3>
<p>The len() function returns the total number of characters in a string.</p>

<pre>{`s = "GeeksforGeeks"
print(len(s))
# output: 13
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>13</p>
</div>

<h3>upper() and lower():</h3>
<p>upper() method converts all characters to uppercase. lower() method converts all characters to lowercase.</p>

<pre>{`s = "Hello World"
print(s.upper())   # output: HELLO WORLD
print(s.lower())   # output: hello world
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>HELLO WORLD</p>
  <p>hello world</p>
</div>

<h3>strip() and replace():</h3>
<p>strip() removes leading and trailing whitespace from the string and replace(old, new) replaces all occurrences of a specified substring with another.</p>

<pre>{`s = "   Gfg   "
# Removes spaces
from both ends
print(s.strip())

s = "Python is fun"
# Replaces 'fun' with 'awesome'
print(s.replace("fun", "awesome"))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>Gfg</p>
  <p>Python is awesome</p>
</div>


<h3>Concatenating and Repeating Strings</h3>
<p>We can concatenate strings using + operator and repeat them using * operator.</p>

<p>Strings can be combined by using + operator.</p>

<pre>{`s1 = "Hello"
s2 = "World"
s3 = s1 + " " + s2
print(s3)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>Hello World</p>
</div>

<p>We can repeat a string multiple times using * operator.</p>

<pre>{`s = "Hello "
print(s * 3)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>Hello Hello Hello </p>
</div>

<h3>Formatting Strings</h3>
<p>Python provides several ways to include variables inside strings.</p>

<h3>Using f-strings</h3>
<p>The simplest and most preferred way to format strings is by using f-strings.</p>

<pre>{`name = "Alice"
age = 22
print(f"Name: {name}, Age: {age}")
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>Name: Alice, Age: 22</p>
</div>

<h3>Using format()</h3>
<p>Another way to format strings is by using format() method.</p>

<pre>{`s = "My name is {} and I am {} years old.".format("Alice", 22)
print(s)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>My name is Alice and I am 22 years old.</p>
</div>

<h3>Using in for String Membership Testing</h3>
<p>The in keyword checks if a particular substring is present in a string.</p>

<pre>{`s = "GeeksforGeeks"
print("Geeks" in s)
print("GfG" in s)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>True</p>
  <p>False</p>
</div>


            </section>

        </div>
        </>
    );
};
export default Pstring;
