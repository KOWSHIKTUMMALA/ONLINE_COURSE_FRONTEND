import React from "react";
import './Python.css'

const  Pdata=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Data Type in Python</h1>

            </header>
            <section className="section">
            <h2>Python Data Types</h2>

<p>Python Data types are the classification or categorization of data items. It represents the kind of value that tells what operations can be performed on a particular data. Since everything is an object in Python programming, Python data types are classes and variables are instances (objects) of these classes. The following are the standard or built-in data types in Python:</p>
<ul>
  <li>Numeric – int, float, complex</li>
  <li>Sequence Type – string, list, tuple</li>
  <li>Mapping Type – dict</li>
  <li>Boolean – bool</li>
  <li>Set Type – set, frozenset</li>
  <li>Binary Types – bytes, bytearray, memoryview</li>
</ul>

<p>DataTypes</p>
<p>This code assigns variable ‘x’ different values of few Python data types – int, float, list, tuple and string. Each assignment replaces the previous value, making ‘x’ take on the data type and value of the most recent assignment.</p>

<pre>{`
# int, float, string, list and set
x = 50
x = 60.5
x = "Hello World"
x = ["geeks", "for", "geeks"]
x = ("geeks", "for", "geeks")
`}</pre>

<h3>1. Numeric Data Types in Python</h3>
<p>The numeric data type in Python represents the data that has a numeric value. A numeric value can be an integer, a floating number, or even a complex number. These values are defined as Python int, Python float and Python complex classes in Python.</p>
<ul>
  <li>Integers – This value is represented by int class. It contains positive or negative whole numbers (without fractions or decimals). In Python, there is no limit to how long an integer value can be.</li>
  <li>Float – This value is represented by the float class. It is a real number with a floating-point representation. It is specified by a decimal point. Optionally, the character e or E followed by a positive or negative integer may be appended to specify scientific notation.</li>
  <li>Complex Numbers – A complex number is represented by a complex class. It is specified as (real part) + (imaginary part)j . For example – 2+3j</li>
</ul>

<pre>{`
a = 5
print(type(a))
b = 5.0
print(type(b))
c = 2 + 4j
print(type(c))
`}</pre>

<div class="output">
  <p>&gt;class 'int'&lt;<br/>
&gt;class 'float'&lt;<br/>
&gt;class 'complex'&lt;</p>
</div>

<h3>2. Sequence Data Types in Python</h3>
<p>The sequence Data Type in Python is the ordered collection of similar or different Python data types. Sequences allow storing of multiple values in an organized and efficient fashion. There are several sequence data types of Python:</p>
<ul>
  <li>Python String</li>
  <li>Python List</li>
  <li>Python Tuple</li>
</ul>

<h3>String Data Type</h3>
<p>Python Strings are arrays of bytes representing Unicode characters. In Python, there is no character data type Python, a character is a string of length one. It is represented by str class.</p>
<p>Strings in Python can be created using single quotes, double quotes or even triple quotes. We can access individual characters of a String using index.</p>

<pre>{`
s = 'Welcome to the Geeks World'
print(s)
# check data type
print(type(s))
# access string with index
print(s[1])
print(s[2])
print(s[-1])
`}</pre>

<div class="output">
  <p>Welcome to the Geeks World<br/>
&gt;class 'str' &lt;<br/>
e<br/>
l<br/>
d</p>
</div>

<h3>List Data Type</h3>
<p>Lists are just like arrays, declared in other languages which is an ordered collection of data. It is very flexible as the items in a list do not need to be of the same type.</p>
<h4>Creating a List in Python</h4>
<p>Lists in Python can be created by just placing the sequence inside the square brackets[].</p>

<pre>{`
# Empty list
a = []
# list with int values
a = [1, 2, 3]
print(a)
# list with mixed int and string
b = ["Geeks", "For", "Geeks", 4, 5]
print(b)
`}</pre>

<div class="output">
  <p>[1, 2, 3]<br/>
['Geeks', 'For', 'Geeks', 4, 5]</p>
</div>

<h3>Access List Items</h3>
<p>In order to access the list items refer to the index number. In Python, negative sequence indexes represent positions from the end of the array. Instead of having to compute the offset as in List[len(List)-3], it is enough to just write List[-3]. Negative indexing means beginning from the end, -1 refers to the last item, -2 refers to the second-last item, etc.</p>

<pre>{`
a = ["Geeks", "For", "Geeks"]
print("Accessing element from the list")
print(a[0])
print(a[2])
print("Accessing element using negative indexing")
print(a[-1])
print(a[-3])
`}</pre>

<div class="output">
  <p>Accessing element from the list<br/>
Geeks<br/>
Geeks<br/>
Accessing element using negative indexing<br/>
Geeks<br/>
Geeks</p>
</div>

<h3>Tuple Data Type</h3>
<p>Just like a list, a tuple is also an ordered collection of Python objects. The only difference between a tuple and a list is that tuples are immutable. Tuples cannot be modified after it is created.</p>
<h3>Creating a Tuple in Python</h3>
<p>In Python Data Types, tuples are created by placing a sequence of values separated by a ‘comma’ with or without the use of parentheses for grouping the data sequence. Tuples can contain any number of elements and of any datatype (like strings, integers, lists, etc.).</p>
<p>Note: Tuples can also be created with a single element, but it is a bit tricky. Having one element in the parentheses is not sufficient, there must be a trailing ‘comma’ to make it a tuple.</p>

<pre>{`
# initiate empty tuple
tup1 = ()
tup2 = ('Geeks', 'For')
print("\\nTuple with the use of String: ", tup2)
`}</pre>

<div class="output">
  <p>\nTuple with the use of String:  ('Geeks', 'For')</p>
</div>

<p>Note – The creation of a Python tuple without the use of parentheses is known as Tuple Packing.</p>
<h4>Access Tuple Items</h4>
<p>In order to access the tuple items refer to the index number. Use the index operator [ ] to access an item in a tuple.</p>

<pre>{`
tup1 = tuple([1, 2, 3, 4, 5])
# access tuple items
print(tup1[0])
print(tup1[-1])
print(tup1[-3])
`}</pre>

<div class="output">
  <p>1<br/>
5<br/>
3</p>
</div>

<h3>3. Boolean Data Type in Python</h3>
<p>Python Data type with one of the two built-in values, True or False. Boolean objects that are equal to True are truthy (true), and those equal to False are falsy (false). However non-Boolean objects can be evaluated in a Boolean context as well and determined to be true or false. It is denoted by the class bool.</p>
<p>Example: The first two lines will print the type of the boolean values True and False, which is &gt;class ‘bool’&lt; The third line will cause an error, because true is not a valid keyword in Python. Python is case-sensitive, which means it distinguishes between uppercase and lowercase letters.</p>

<pre>{`
print(type(True))<br/>
print(type(False))
print(type(true))
`}</pre>

<div class="output">
  <pre>&gt;class 'bool'&lt;<br/>
&gt;class 'bool'&lt;<br/>
Traceback (most recent call last):<br/>
  File "/home/7e8862763fb66153d70824099d4f5fb7.py", line 8, in <br/>
    print(type(true))<br/>
NameError: name 'true' is not defined</pre>
</div>

<h3>4. Set Data Type in Python</h3>
<p>In Python Data Types, Set is an unordered collection of data types that is iterable, mutable, and has no duplicate elements. The order of elements in a set is undefined though it may consist of various elements.</p>
<h3>Create a Set in Python</h3>
<p>Sets can be created by using the built-in set() function with an iterable object or a sequence by placing the sequence inside curly braces, separated by a ‘comma’. The type of elements in a set need not be the same, various mixed-up data type values can also be passed to the set.</p>
<p>Example: The code is an example of how to create sets using different types of values, such as strings, lists, and mixed values</p>

<pre>{`
# initializing empty set
s1 = set()
s1 = set("GeeksForGeeks")
print("Set with the use of String: ", s1)
s2 = set(["Geeks", "For", "Geeks"])
print("Set with the use of List: ", s2)
`}</pre>

<div class="output">
  <p>Set with the use of String:  {'s', 'o', 'F', 'G', 'e', 'k', 'r'}<br/>
Set with the use of List:  {'Geeks', 'For'}</p>
</div>

<h4>Access Set Items</h4>
<p>Set items cannot be accessed by referring to an index, since sets are unordered the items have no index. But we can loop through the set items using a for loop, or ask if a specified value is present in a set, by using the in the keyword.</p>

<pre>{`
set1 = set(["Geeks", "For", "Geeks"])
print(set1)
# loop through set
for i in set1:
    print(i, end=" ")
# check if item exist in set
print("\\nGeeks" in set1)
`}</pre>

<div class="output">
  <p>{'Geeks', 'For'}
Geeks For 
True</p>
</div>

<h2>5. Dictionary Data Type</h2>
<p>A dictionary in Python is a collection of data values, used to store data values like a map, unlike other Python Data Types that hold only a single value as an element, a Dictionary holds a key: value pair. Key-value is provided in the dictionary to make it more optimized. Each key-value pair in a Dictionary is separated by a colon : , whereas each key is separated by a ‘comma’.</p>
<h4>Create a Dictionary in Python</h4>
<p>Values in a dictionary can be of any datatype and can be duplicated, whereas keys can’t be repeated and must be immutable. The dictionary can also be created by the built-in function dict().</p>
<p>Note – Dictionary keys are case sensitive, the same name but different cases of Key will be treated distinctly.</p>

<pre>{`
# initialize empty dictionary
d = {}
d = {1: 'Hi', 2: 'Hello', 3: 'Hey'}
print(d)
# creating dictionary using dict() constructor
d1 = dict({1: 'Hi', 2: 'Hello', 3: 'Hey'})
print(d1)
`}</pre>

<div class="output">
  <p>{`{1: 'Hi', 2: 'Hello', 3: 'Hey'}
{1: 'Hi', 2: 'Hello', 3: 'Hey'}`}</p>
</div>

<h4>Accessing Key-value in Dictionary</h4>
<p>In order to access the items of a dictionary refer to its key name. Key can be used inside square brackets. Using get() method we can access the dictionary elements.</p>

<pre>{`
d = {1: 'Geeks', 'name': 'For', 3: 'You'}
# Accessing an element using key
print(d['name'])
# Accessing a element using get
print(d.get(3))
`}</pre>

<div class="output">
  <p>For
You</p>
</div>




            </section>

        </div>
        </>
    );
};
export default Pdata;
