import React from "react";
import './Python.css'

const Plambda =()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Python Lambda Functions</h1>

            </header>
            <section className="section">
            <h2>Python Lambda Functions</h2>

<p>Python Lambda Functions are anonymous functions means that the function is without a name. As we already know the <code>def</code> keyword is used to define a normal function in Python. Similarly, the <code>lambda</code> keyword is used to define an anonymous function in Python.</p>

<p>In the example, we defined a lambda function(upper) to convert a string to its upper case using <code>upper()</code>.</p>

<pre>{`
s1 = 'Hello'
s2 = lambda func: func.upper()
print(s2(s1))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>HELLO</p>
</div>

<p>This code defines a lambda function named <code>s2</code> that takes a string as its argument and converts it to uppercase using the <code>upper()</code> method. It then applies this lambda function to the string ‘GeeksforGeeks’ and prints the result.</p>

<p>Let’s explore Lambda Function in detail:</p>

<h3>Python Lambda Function Syntax</h3>
<p><strong>Syntax:</strong> <code>lambda arguments : expression</code></p>
<ul>
  <li><code>lambda</code>: The keyword to define the function.</li>
  <li><code>arguments</code>: A comma-separated list of input parameters (like in a regular function).</li>
  <li><code>expression</code>: A single expression that is evaluated and returned.</li>
</ul>

<p>Let’s see some of the practical uses of the Python lambda function.</p>

<h3>lambda with Condition Checking</h3>
<p>A lambda function can include conditions using if statements.</p>

<h3>Example:</h3>
<pre>{`
# Example: Check if a number is positive, negative, or zero
n = lambda x: "Positive" if x > 0 else "Negative" if x < 0 else "Zero"
print(n(5))
print(n(-3))
print(n(0))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>Positive</p>
  <p>Negative</p>
  <p>Zero</p>
</div>

<p><strong>Explanation:</strong></p>
<ul>
  <li>The lambda function takes x as input.</li>
  <li>It uses nested if-else statements to return “Positive,” “Negative,” or “Zero.”</li>
</ul>

<h3>Difference Between lambda and def Keyword</h3>
<p>lambda is concise but less powerful than def when handling complex logic. Let’s take a look at short comparison between the two:</p>

<table>
  <tr>
    <th>Feature</th>
    <th><code>lambda</code> Function</th>
    <th>Regular Function (<code>def</code>)</th>
  </tr>
  <tr>
    <td>Definition</td>
    <td>Single expression with <code>lambda</code>.</td>
    <td>Multiple lines of code.</td>
  </tr>
  <tr>
    <td>Name</td>
    <td>Anonymous (or named if assigned).</td>
    <td>Must have a name.</td>
  </tr>
  <tr>
    <td>Statements</td>
    <td>Single expression only.</td>
    <td>Can include multiple statements.</td>
  </tr>
  <tr>
    <td>Documentation</td>
    <td>Cannot have a docstring.</td>
    <td>Can include docstrings.</td>
  </tr>
  <tr>
    <td>Reusability</td>
    <td>Best for short, temporary functions.</td>
    <td>Better for reusable and complex logic.</td>
  </tr>
</table>

<h3>Example:</h3>
<pre>{`
# Using lambda
sq = lambda x: x ** 2
print(sq(3))

# Using def
def sqdef(x):
    return x ** 2
print(sqdef(3))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>9</p>
  <p>9</p>
</div>

<p>As we can see in the above example, both the <code>sq()</code> function and <code>sqdef()</code> function behave the same and as intended.</p>

<h3>Lambda with List Comprehension</h3>
<p>Combining lambda with list comprehensions enables us to apply transformations to data in a concise way.</p>

<h3>Example:</h3>
<pre>{`
li = [lambda arg=x: arg * 10 for x in range(1, 5)]
for i in li:
    print(i())
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>10</p>
  <p>20</p>
  <p>30</p>
  <p>40</p>
</div>

<p><strong>Explanation:</strong></p>
<ul>
  <li>The lambda function squares each element.</li>
  <li>The list comprehension iterates through li and applies the lambda to each element.</li>
  <li>This is ideal for applying transformations to datasets in data preprocessing or manipulation tasks.</li>
</ul>

<h3>Lambda with if-else</h3>
<p>lambda functions can incorporate conditional logic directly, allowing us to handle simple decision making within the function.</p>

<h3>Example:</h3>
<pre>{`
# Example: Check if a number is even or odd
check = lambda x: "Even" if x % 2 == 0 else "Odd"
print(check(4))
print(check(7))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>Even</p>
  <p>Odd</p>
</div>

<p><strong>Explanation:</strong></p>
<ul>
  <li>The lambda checks if a number is divisible by 2 (x % 2 == 0).</li>
  <li>Returns “Even” for true and “Odd” otherwise.</li>
  <li>This approach is useful for labeling or categorizing values based on simple conditions.</li>
</ul>

<h3>Lambda with Multiple Statements</h3>
<p>Lambda functions do not allow multiple statements, however, we can create two lambda functions and then call the other lambda function as a parameter to the first function.</p>

<h3>Example:</h3>
<pre>{`
# Example: Perform addition and multiplication in a single line
calc = lambda x, y: (x + y, x * y)
res = calc(3, 4)
print(res)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>(7, 12)</p>
</div>

<p><strong>Explanation:</strong></p>
<ul>
  <li>The lambda function performs both addition and multiplication and returns a tuple with both results.</li>
  <li>This is useful for scenarios where multiple calculations need to be performed and returned together.</li>
</ul>

<p>Lambda functions can be used along with built-in functions like <code>filter()</code>, <code>map()</code> and <code>reduce()</code>.</p>

<h3>Using lambda with filter()</h3>
<p>The <code>filter()</code> function in Python takes in a function and a list as arguments. This offers an elegant way to filter out all the elements of a sequence “sequence”, for which the function returns True.</p>

<h3>Example:</h3>
<pre>{`
# Example: Filter even numbers from a list
n = [1, 2, 3, 4, 5, 6]
even = filter(lambda x: x % 2 == 0, n)
print(list(even))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>[2, 4, 6]</p>
</div>

<p><strong>Explanation:</strong></p>
<ul>
  <li>The lambda function checks if a number is even (x % 2 == 0).</li>
  <li>filter() applies this condition to each element in nums.</li>
</ul>

<h3>Using lambda with map()</h3>
<p>The <code>map()</code> function in Python takes in a function and a list as an argument. The function is called with a lambda function and a new list is returned which contains all the lambda-modified items returned by that function for each item.</p>

<h3>Example:</h3>
<pre>{`
# Example: Double each number in a list
a = [1, 2, 3, 4]
b = map(lambda x: x * 2
, a)
print(list(b))
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>[2, 4, 6, 8]</p>
</div>

<p><strong>Explanation:</strong></p>
<ul>
  <li>The lambda function doubles each number.</li>
  <li>map() iterates through a and applies the transformation.</li>
</ul>

<h3>Using lambda with reduce()</h3>
<p>The <code>reduce()</code> function in Python takes in a function and a list as an argument. The function is called with a lambda function and an iterable and a new reduced result is returned. This performs a repetitive operation over the pairs of the iterable. The reduce() function belongs to the <code>functools</code> module.</p>

<h3>Example:</h3>
<pre>{`
from functools import reduce

# Example: Find the product of all numbers in a list
a = [1, 2, 3, 4]
b = reduce(lambda x, y: x * y, a)
print(b)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>24</p>
</div>

<p><strong>Explanation:</strong></p>
<ul>
  <li>The lambda multiplies two numbers at a time.</li>
  <li>reduce() applies this operation across the list.</li>
</ul>


            </section>

        </div>
        </>
    );
};
export default Plambda;
