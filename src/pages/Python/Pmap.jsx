import React from "react";
import './Python.css'

const  Pmap=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Map, Reduce and Filter Function</h1>

            </header>
            <section className="section">
            <h1>Python map() function</h1>

<p>The map() function is used to apply a given function to every item of an iterable, such as a list or tuple, and returns a map object (which is an iterator).</p>

<p>Let’s start with a simple example of using map() to convert a list of strings into a list of integers.</p>

<pre>{`
s = ['1', '2', '3', '4']
res = map(int, s)
print(list(res))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>[1, 2, 3, 4]</p>
</div>

<p><strong>Explanation:</strong> Here, we used the built-in int function to convert each string in the list s into an integer. The map() function takes care of applying int() to every element</p>

<h3>Table of Content</h3>
<ul>
  <li>Converting map object to a list</li>
  <li>map() with lambda</li>
  <li>Using map() with multiple iterables</li>
  <li>Examples of map() function</li>
  <ul>
    <li>Converting to uppercase</li>
    <li>Extracting first character from strings</li>
    <li>Removing whitespaces from strings</li>
    <li>Calculate fahrenheit from celsius</li>
  </ul>
</ul>

<h3>Syntax of the map() function</h3>
<p>The syntax for the map() function is as follows:</p>
<pre><code>map(function, iterable)</code></pre>

<h3>Parameter:</h3>
<ul>
  <li><strong>function:</strong> The function we want to apply to every element of the iterable.</li>
  <li><strong>iterable:</strong> The iterable whose elements we want to process.</li>
</ul>

<p><strong>Note:</strong> We can also pass multiple iterables if our function accepts multiple arguments.</p>

<h3>Converting map object to a list</h3>
<p>By default, the map() function returns a map object, which is an iterator. In many cases, we will need to convert this iterator to a list to work with the results directly.</p>

<h3>Example: Let’s see how to double each elements of the given list.</h3>

<pre>{`
a = [1, 2, 3, 4]

# Using custom function in "function" parameter
# This function is simply doubles the provided number
def double(val):
  return val*2

res = list(map(double, a))
print(res)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>[2, 4, 6, 8]</p>
</div>

<p><strong>Explanation:</strong></p>
<ul>
  <li>The map() function returned an iterator, which we then converted into a list using list(). This is a common practice when working with map()</li>
  <li>We used a custom function to double each value in the list a. The result was mapped and converted into a list for easy display.</li>
</ul>

<h3>map() with lambda</h3>
<p>We can use a lambda function instead of a custom function with map() to make the code shorter and easier. Let’s see how to improve the above code for better readability.</p>

<pre>{`
a = [1, 2, 3, 4]

# Using lambda function in "function" parameter
# to double each number in the list
res = list(map(lambda x: x * 2, a))
print(res)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>[2, 4, 6, 8]</p>
</div>

<p><strong>Explanation:</strong> We used lambda x: x * 2 to double each value in the list a. The result was mapped and converted into a list for easy display.</p>

<h3>Using map() with multiple iterables</h3>
<p>We can use map() with multiple iterables if the function we are applying takes more than one argument.</p>

<h3>Example: In this example, map() takes two iterables (a and b) and applies the lambda function to add corresponding elements from both lists.</h3>

<pre>{`
a = [1, 2, 3]
b = [4, 5, 6]
res = map(lambda x, y: x + y, a, b)
print(list(res))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>[5, 7, 9]</p>
</div>

<h3>Examples of map() function</h3>

<h3>Converting to uppercase</h3>
<p>This example shows how we can use map() to convert a list of strings to uppercase.</p>

<pre>{`
fruits = ['apple', 'banana', 'cherry']
res = map(str.upper, fruits)
print(list(res))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>['APPLE', 'BANANA', 'CHERRY']</p>
</div>

<p><strong>Explanation:</strong> The str.upper method is applied to each element in the list fruits using map(). The result is a list of uppercase versions of each fruit name.</p>

<h3>Extracting first character from strings</h3>
<p>In this example, we use map() to extract the first character from each string in a list.</p>

<pre>{`
words = ['apple', 'banana', 'cherry']
res = map(lambda s: s[0], words)
print(list(res))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>['a', 'b', 'c']</p>
</div>

<p><strong>Explanation:</strong> The lambda function s: s[0] extracts the first character from each string in the list words. map() applies this lambda function to every element, resulting in a list of the first characters of each word.</p>

<h3>Removing whitespaces from strings</h3>
<p>In this example, We can use map() to remove leading and trailing whitespaces from each string in a list.</p>

<pre>{`
s = ['  hello  ', '  world ', ' python  ']
res = map(str.strip, s)
print(list(res))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>['hello', 'world', 'python']</p>
</div>

<p><strong>Explanation:</strong> The str.strip method removes leading and trailing whitespaces from each string in the list strings. The map() function applies str.strip to each element and returning a list of trimmed strings.</p>

<h3>Calculate fahrenheit from celsius</h3>
<p>In this example, we use map() to convert a list of temperatures from Celsius to Fahrenheit.</p>

<pre>{`
celsius = [0, 20, 37, 100]
fahrenheit = map(lambda c: (c * 9/5) + 32, celsius)
print(list(fahrenheit))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>[32.0, 68.0, 98.6, 212.0]</p>
</div>
</section>
<section className="section">
<h2>reduce() in Python</h2>

<p>The <code>reduce(fun,seq)</code> function is used to apply a particular function passed in its argument to all of the list elements mentioned in the sequence passed along. This function is defined in “functools” module.</p>

<h3>Basic Example:</h3>
<p>Let’s start with a simple example where we sum up all numbers in a list.</p>

<pre>{`
from functools import reduce

# Function to add two numbers
def add(x, y):
    return x + y

a = [1, 2, 3, 4, 5]
res = reduce(add, a)
print(res)  # Output: 15
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>15</p>
</div>

<p><strong>Explanation:</strong></p>
<p>The reduce() function applies add() cumulatively to the elements in numbers. First, 1 + 2 = 3. Then, 3 + 3 = 6. And so on, until all numbers are processed. The final result is 15.</p>

<p>Let’s understand reduce function in detail:</p>

<h3>Syntax of reduce()</h3>
<pre><code>functools.reduce(function, iterable[, initializer])</code></pre>

<ul>
  <li><strong>function:</strong> A function that takes two arguments and performs an operation on them.</li>
  <li><strong>iterable:</strong> An iterable whose elements are processed by the function.</li>
  <li><strong>initializer (optional):</strong> A starting value for the operation. If provided, it is placed before the first element in the iterable.</li>
</ul>

<p>The reduce() function is part of the functools module, so you need to import it before use.</p>

<h3>Using reduce() with lambda</h3>
<p>When paired with a lambda function, reduce() becomes a concise and powerful tool for aggregation tasks like summing, multiplying or finding the maximum value.</p>

<pre>{`
from functools import reduce

# Summing numbers with reduce and lambda
a = [1, 2, 3, 4, 5]
res = reduce(lambda x, y: x + y, a)
print(res)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>15</p>
</div>

<p><strong>Explanation:</strong></p>
<ul>
  <li>The lambda function takes two arguments (x and y) and returns their sum.</li>
  <li>reduce() starts by applying the function to the first two elements: 1 + 2 = 3.</li>
  <li>The result (3) is then used with the next element: 3 + 3 = 6, and so on.</li>
  <li>The process continues until all elements are processed, yielding 15.</li>
</ul>

<h3>Using reduce() with operator functions</h3>
<p>reduce() can also be combined with operator functions to achieve the similar functionality as with lambda functions and makes the code more readable.</p>

<pre>{`
import functools
# importing operator for operator functions
import operator

# initializing list
a = [1, 3, 5, 6, 2]

# using reduce with add to compute sum of list
print(functools.reduce(operator.add, a))

# using reduce with mul to compute product
print(functools.reduce(operator.mul, a))

# using reduce with add to concatenate string
print(functools.reduce(operator.add, ["geeks", "for", "geeks"]))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>17</p>
  <p>180</p>
  <p>geeksforgeeks</p>
</div>

<p><strong>Explanation:</strong></p>
<ul>
  <li>operator.add and operator.mul function are predefined operators.</li>
  <li>reduce() applies the add function cumulatively to elements in the list.</li>
  <li>The operation works similarly to the lambda example but the code is cleaner and more readable.</li>
</ul>

<h3>Difference Between reduce() and accumulate()</h3>
<p>The accumulate() function from the itertools module also performs cumulative operations, but it returns an iterator containing intermediate results, unlike reduce(), which returns a single final value.</p>

<h3>Example with accumulate:</h3>

<pre>{`
from itertools import accumulate
from operator import add

# Cumulative sum with accumulate
a = [1, 2, 3, 4, 5]
res = accumulate(a, add)
print(list(res))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>[1, 3, 6, 10, 15]</p>
</div>



            </section>
            <section className="section">

            <h2>filter() in Python</h2>

<p>The filter() method filters the given sequence with the help of a function that tests each element in the sequence to be true or not. Let’s see a simple example of filter() function in python:</p>

<h3>Example Usage of filter()</h3>

<pre>{`
# Function to check if a number is even
def even(n):
    return n % 2 == 0

a = [1, 2, 3, 4, 5, 6]
b = filter(even, a)

# Convert filter object to a list
print(list(b))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>[2, 4, 6]</p>
</div>

<p><strong>Explanation:</strong></p>
<ul>
  <li><strong>Function:</strong> even function checks if a number is divisible by 2.</li>
  <li><strong>Filter:</strong> The filter() applies this function to each item in numbers.</li>
  <li><strong>Result:</strong> A new iterable containing only even numbers is returned.</li>
</ul>

<p>Let’s explore filter() in detail:</p>

<h3>Python filter() Syntax</h3>
<p>The filter() method in Python has the following syntax:</p>
<p><strong>Syntax:</strong> <code>filter(function, sequence)</code></p>
<ul>
  <li><strong>function:</strong> A function that defines the condition to filter the elements. This function should return True for items you want to keep and False for those you want to exclude.</li>
  <li><strong>iterable:</strong> The iterable you want to filter (e.g., list, tuple, set).</li>
</ul>
<p>The result is a filter object, which can be converted into a list, tuple or another iterable type.</p>

<p>Let us see a few examples of the filter() function in Python.</p>

<h3>Using filter() with lambda</h3>
<p>For concise conditions, we can use a lambda function instead of defining a named function.</p>

<pre>{`
a = [1, 2, 3, 4, 5, 6]
b = filter(lambda x: x % 2 == 0, a)
print(list(b))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>[2, 4, 6]</p>
</div>

<p>Here, the lambda function replaces even and directly defines the condition x % 2 == 0 inline.</p>

<h3>Combining filter() with Other Functions</h3>
<p>We can combine filter() with other Python functions like map() or use it in a pipeline to process data efficiently.</p>

<h3>Example: Filtering and Transforming Data</h3>

<pre>{`
a = [1, 2, 3, 4, 5, 6]

# First, filter even numbers
b = filter(lambda x: x % 2 == 0, a)

# Then, double the filtered numbers
c = map(lambda x: x * 2, b)

print(list(c))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>[4, 8, 12]</p>
</div>

<p><strong>Explanation:</strong></p>
<ul>
  <li>The filter() function extracts even numbers from numbers.</li>
  <li>The map() function doubles each filtered number.</li>
  <li>The combination simplifies complex data pipelines.</li>
</ul>

            </section>

        </div>
        </>
    );
};
export default Pmap;
