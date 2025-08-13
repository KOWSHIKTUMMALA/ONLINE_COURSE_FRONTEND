import React from "react";
import './Python.css'

const  Pdeco=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Decorators in Python</h1>

            </header>
            <section className="section">
            <h2>Decorators in Python</h2>

<p>In Python, decorators are a powerful and flexible way to modify or extend the behavior of functions or methods, without changing their actual code. A decorator is essentially a function that takes another function as an argument and returns a new function with enhanced functionality.</p>

<p>Decorators are often used in scenarios such as logging, authentication and memorization, allowing us to add additional functionality to existing functions or methods in a clean, reusable way.</p>

<h3>Decorator Example:</h3>

<pre>{`# A simple decorator function
def decorator(func):
  
    def wrapper():
        print("Before calling the function.")
        func()
        print("After calling the function.")
    return wrapper

# Applying the decorator to a function
@decorator
def greet():
    print("Hello, World!")

greet()
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>Before calling the function.</p>
  <p>Hello, World!</p>
  <p>After calling the function.</p>
</div>

<p><strong>Explanation:</strong></p>
<ul>
  <li>decorator takes the greet function as an argument.</li>
  <li>It returns a new function (wrapper) that first prints a message, calls greet() and then prints another message.</li>
  <li>The @decorator syntax is a shorthand for greet = decorator(greet).</li>
</ul>

<p>Let’s explore decorators in detail:</p>

<h3>Table of Content</h3>
<ul>
  <li>Syntax of Decorator Parameters</li>
  <li>Higher-Order Functions</li>
  <li>Functions as First-Class Objects</li>
  <li>Types of Decorators</li>
  <li>Common Built-in Decorators in Python</li>
  <li>Chaining Decorators</li>
</ul>

<h3>Syntax of Decorator Parameters</h3>
<pre>{`def decorator_name(func):
    def wrapper(*args, **kwargs):
        # Add functionality before the original function call
        result = func(*args, **kwargs)
        # Add functionality after the original function call
        return result
    return wrapper

@decorator_name
def function_to_decorate():
    # Original function code
    pass
`}</pre>

<h3>Explanation of Parameters</h3>
<ol>
  <li><strong>decorator_name(func):</strong>
    <ul>
      <li><strong>decorator_name:</strong> This is the name of the decorator function.</li>
      <li><strong>func:</strong> This parameter represents the function being decorated. When you use a decorator, the decorated function is passed to this parameter.</li>
    </ul>
  </li>
  <li><strong>wrapper(*args, **kwargs):</strong>
    <ul>
      <li><strong>wrapper:</strong> This is a nested function inside the decorator. It wraps the original function, adding additional functionality.</li>
      <li><strong>*args:</strong> This collects any positional arguments passed to the decorated function into a tuple.</li>
      <li><strong>**kwargs:</strong> This collects any keyword arguments passed to the decorated function into a dictionary.</li>
      <li>The wrapper function allows the decorator to handle functions with any number and types of arguments.</li>
    </ul>
  </li>
  <li><strong>@decorator_name:</strong>
    This syntax applies the decorator to the function_to_decorate function. It is equivalent to writing function_to_decorate = decorator_name(function_to_decorate).
  </li>
</ol>

<h3>Higher-Order Functions</h3>
<p>In Python, higher-order functions are functions that take one or more functions as arguments, return a function as a result or do both. Essentially, a higher-order function is a function that operates on other functions. This is a powerful concept in functional programming and is a key component in understanding how decorators work.</p>

<h3>Key Properties of Higher-Order Functions:</h3>
<ul>
  <li><strong>Taking functions as arguments:</strong> A higher-order function can accept other functions as parameters.</li>
  <li><strong>Returning functions:</strong> A higher-order function can return a new function that can be called later.</li>
</ul>

<h3>Example of a Higher-Order Function:</h3>

<pre>{`# A higher-order function that takes another function as an argument
def fun(f, x):
    return f(x)

# A simple function to pass
def square(x):
    return x * x

# Using apply_function to apply the square function
res = fun(square, 5)
print(res)
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>25</p>
</div>

<p>In this example, first function fun is a higher-order function because it takes another function f as an argument and applies it to the value x.</p>

<h3>Role in Decorators:</h3>
<p>Decorators in Python are a type of higher-order function because they take a function as input, modify it, and return a new function that extends or changes its behavior. Understanding higher-order functions is essential for working with decorators since decorators are essentially functions that return other functions.</p>

<h3>Functions as First-Class Objects</h3>
<p>In Python, functions are first-class objects, meaning that they can be treated like any other object, such as integers, strings, or lists. This gives functions a unique level of flexibility and allows them to be passed around and manipulated in ways that are not possible in many other programming languages.</p>

<h3>What Does It Mean for Functions to Be First-Class Objects?</h3>
<ul>
  <li><strong>Can be assigned to variables:</strong> Functions can be assigned to variables and used just like any other value.</li>
  <li><strong>Can be passed as arguments:</strong> Functions can be passed as arguments to other functions.</li>
  <li><strong>Can be returned from other functions:</strong> Functions can return other functions, which is a key concept in decorators.</li>
  <li><strong>Can be stored in data structures:</strong> Functions can be stored in lists, dictionaries, or other data structures.</li>
</ul>

<pre>{`# Assigning a function to a variable
def greet(n):
    return f"Hello, {n}!"
say_hi = greet  # Assign the greet function to say_hi
print(say_hi("Alice"))  # Output: Hello, Alice!

# Passing a function as an argument
def apply(f, v):
    return f(v)
res = apply(say_hi, "Bob")
print(res)  # Output: Hello, Bob!

# Returning a function from another function
def make_mult(f):
    def mult(x):
        return x * f
    return mult
dbl = make_mult(2)
print(dbl(5))  # Output: 10
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>Hello, Alice!</p>
  <p>Hello, Bob!</p>
  <p>10</p>
</div>

<p><strong>Explanation:</strong></p>
<ul>
  <li>The code defines a greet function that returns a greeting message.</li>
  <li>The greet function is assigned to the say_hi variable, which is used to print a greeting for “Alice”.</li>
  <li>Another function, apply, takes a function and a value as arguments, applies the function to the value, and returns the result.</li>
  <li>apply is demonstrated by passing say_hi and “Bob”, printing a greeting for “Bob”.</li>
  <li>The make_mult function creates a multiplier function based on a given factor.</li>
</ul>

<h3>Role of First-Class Functions in Decorators</h3>
<ul>
  <li>Decorators receive the function to be decorated as an argument. This allows the decorator to modify or enhance the function’s behavior.</li>
  <li>Decorators return a new function that wraps the original function. This new function adds additional behavior before or after the original function is called.</li>
  <li>When a function is decorated, it is assigned to the variable name of the original function. This means the original function is replaced by the decorated (wrapped) function.</li>
</ul>

<h3>Types of Decorators</h3>

<ol>
  <li><strong>Function Decorators:</strong>
    The most common type of decorator, which takes a function as input and returns a new function. The example above demonstrates this type.
    <pre>{`def simple_decorator(func):
    def HTML

wrapper():
        print("Before calling the function.")
        func()
        print("After calling the function.")
    return wrapper

@simple_decorator
def greet():
    print("Hello, World!")

greet()
`}</pre>
    <div class="output">
      <h4>Output</h4>
      <p>Before calling the function.</p>
      <p>Hello, World!</p>
      <p>After calling the function.</p>
    </div>
    <p><strong>Explanation:</strong></p>
    <ul>
      <li><strong>simple_decorator(func):</strong> This decorator takes the function greet as an argument (func) and returns a new function (wrapper) that adds some functionality before and after calling the original function.</li>
      <li><strong>@simple_decorator:</strong> This is the decorator syntax. It applies the simple_decorator to the greet function.</li>
      <li><strong>Calling greet():</strong> When greet() is called, it doesn’t just execute the original function but first runs the added behavior from the wrapper function.</li>
    </ul>
  </li>
  <li><strong>Method Decorators:</strong>
    Used to decorate methods within a class. They often handle special cases, such as the self argument for instance methods.
    <pre>{`def method_decorator(func):
    def wrapper(self, *args, **kwargs):
        print("Before method execution")
        res = func(self, *args, **kwargs)
        print("After method execution")
        return res
    return wrapper

class MyClass:
    @method_decorator
    def say_hello(self):
        print("Hello!")

obj = MyClass()
obj.say_hello()
`}</pre>
    <div class="output">
      <h4>Output</h4>
      <p>Before method execution</p>
      <p>Hello!</p>
      <p>After method execution</p>
    </div>
    <p><strong>Explanation:</strong></p>
    <ul>
      <li><strong>method_decorator(func):</strong> The decorator takes the method (say_hello) as an argument (func). It returns a wrapper function that adds behavior before and after calling the original method.</li>
      <li><strong>wrapper(self, *args, **kwargs):</strong> The wrapper must accept self because it is a method of an instance. self is the instance of the class and *args and **kwargs allow for other arguments to be passed if needed.</li>
      <li><strong>@method_decorator:</strong> This applies the method_decorator to the say_hello method of MyClass.</li>
      <li><strong>Calling obj.say_hello():</strong> The say_hello method is now wrapped with additional behavior.</li>
    </ul>
  </li>
  <li><strong>Class Decorators</strong>
    Class decorators are used to modify or enhance the behavior of a class. Like function decorators, class decorators are applied to the class definition. They work by taking the class as an argument and returning a modified version of the class.
    <h3>Example:</h3>
    <pre>{`def fun(cls):
    cls.class_name = cls.__name__
    return cls

@fun
class Person:
    pass

print(Person.class_name)
`}</pre>
    <div class="output">
      <h4>Output</h4>
      <p>Person</p>
    </div>
    <p><strong>Explanation:</strong></p>
    <ul>
      <li><strong>add_class_name(cls):</strong> This decorator adds a new attribute, class_name, to the class cls. The value of class_name is set to the name of the class (cls.__name__).</li>
      <li><strong>@add_class_name:</strong> This applies the add_class_name decorator to the Person class.</li>
      <li><strong>Result:</strong> When the Person class is defined, the decorator automatically adds the class_name attribute to it.</li>
      <li><strong>print(Person.class_name):</strong> Accessing the class_name attribute that was added by the decorator prints the name of the class, Person.</li>
    </ul>
  </li>
</ol>

<h3>Common Built-in Decorators in Python</h3>
<p>Python provides several built-in decorators that are commonly used in class definitions. These decorators modify the behavior of methods and attributes in a class, making it easier to manage and use them effectively. The most frequently used built-in decorators are @staticmethod, @classmethod, and @property.</p>

<h3>@staticmethod</h3>
<p>The @staticmethod decorator is used to define a method that doesn’t operate on an instance of the class (i.e., it doesn’t use self). Static methods are called on the class itself, not on an instance of the class.</p>

<h3>Example:</h3>
<pre>{`class MathOperations:
    @staticmethod
    def add(x, y):
        return x + y

# Using the static method
res = MathOperations.add(5, 3)
print(res)
`}</pre>
<div class="output">
  <h4>Output</h4>
  <p>8</p>
</div>
<p><strong>Explanation:</strong></p>
<ul>
  <li>add is a static method defined with the @staticmethod decorator.</li>
  <li>It can be called directly on the class MathOperations without creating an instance.</li>
</ul>

<h3>@classmethod</h3>
<p>The @classmethod decorator is used to define a method that operates on the class itself (i.e., it uses cls). Class methods can access and modify class state that applies across all instances of the class.</p>

<h3>Example:</h3>
<pre>{`class Employee:
    raise_amount = 1.05

    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    @classmethod
    def set_raise_amount(cls, amount):
        cls.raise_amount = amount

# Using the class method
Employee.set_raise_amount(1.10)
print(Employee.raise_amount)
`}</pre>
<div class="output">
  <h4>Output</h4>
  <p>1.1</p>
</div>
<p><strong>Explanation:</strong></p>
<ul>
  <li>set_raise_amount is a class method defined with the @classmethod decorator.</li>
  <li>It can modify the class variable raise_amount for the class Employee and all its instances.</li>
</ul>

<h3>@property</h3>
<p>The @property decorator is used to define a method as a property, which allows you to access it like an attribute. This is useful for encapsulating the implementation of a method while still providing a simple interface.</p>

<h3>Example:</h3>
<pre>{`class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value >= 0:
            self._radius = value
        else:
            raise ValueError("Radius cannot be negative")

    @property
    def area(self):
        return 3.14159 * (self._radius ** 2)

# Using the property
c = Circle(5)
print(c.radius)
print(c.area)
c.radius = 10
print(c.area)
`}</pre>
<div class="output">
  <h4>Output</h4>
  <p>5</p>
  <p>78.53975</p>
  <p>314.159</p>
</div>
<p><strong>Explanation:</strong></p>
<ul>
  <li>radius and area are properties defined with the @property decorator.</li>
  <li>The radius property also has a setter method to allow modification with validation.</li>
  <li>These properties provide a way to access and modify private attributes while maintaining encapsulation.</li>
</ul>

<h3>Chaining Decorators</h3>
<p>In simpler terms chaining decorators means decorating a function with multiple decorators.</p>

<h3>Example:</h3>
<pre>{`# code for testing decorator chaining
def decor1(func):
    def inner():
        x = func()
        return x * x
    return inner

def decor(func):
    def inner():
        x = func()
        return 2 * x
    return inner

@decor1
@decor
def num():
    return 10

@decor
@decor1
def num2():
    return 10

print(num())
print(num2())
`}</pre>
<div class="output">
  <h4>Output</h4>
  <p>400</p>
  <p>200</p>
</div>



            </section>

        </div>
        </>
    );
};
export default Pdeco;
