import React from "react";
import './Python.css'

const  Pself=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Why Python Uses 'Self' as Default Argument
                </h1>

            </header>
            <section className="section">
                <h2>'Self' as Default Argument</h2>
                <p>In Python, when defining methods within a class, the first parameter is always self. The parameter self is a convention not a keyword and it plays a key role in Python’s object-oriented structure.</p>

<h3>Example:</h3>

<pre>{`
class Car:
    def __init__(self, brand, model):
        self.brand = brand  # Set instance attribute
        self.model = model  # Set instance attribute

    def display(self):
        return self.brand, self.model

# Create an instance of Car
car1 = Car("Toyota", "Corolla")

# Call the display_info method
print(car1.display())  # Output: This car is a Toyota Corolla
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>('Toyota', 'Corolla')</p>
</div>

<p><strong>Explanation:</strong></p>
<ul>
  <li><code>self</code> in <code>__init__</code>: Used to assign values (brand and model) to the specific instance (car1).</li>
  <li><code>self</code> in <code>display_info</code>: Refers to the same car1 instance to access its attributes (brand and model).</li>
  <li>Python automatically passes car1 as the first argument to display.</li>
</ul>

<p>Let's understand the use of self as default argument in python in detail:</p>

<h3>Why Python Uses 'Self' As Default Argument?</h3>
<p>The main reason Python uses self as the default argument is to make object-oriented programming explicit rather than implicit. By requiring the instance of the class to be passed explicitly as the first parameter to every instance method, Python ensures that the code is clear and unambiguous. This explicit approach makes it immediately obvious that methods are operating on an instance of the class, which enhances code readability and avoids confusion, especially in complex inheritance scenarios.</p>

<h3>Why Not Implicit?</h3>
<p>Unlike some other programming languages, Python requires self explicitly because:</p>
<ul>
  <li><strong>Clarity:</strong> Explicit is better than implicit (Python’s philosophy).</li>
  <li><strong>Flexibility:</strong> You can name it anything, but self is a convention.</li>
  <li><strong>Consistency:</strong> All instance methods in Python use this approach, making it uniform.</li>
</ul>

<p>Below, are the example of using 'Self' As A Default Argument in Python.</p>

<h3>Example 1: Object Initialization & Method Invocation</h3>

<pre>{`
class gfg:
    def __init__(self, topic):
        self._topic = topic  # Rename the instance variable to avoid conflict

    def topic(self):
        print("Topic:", self._topic)  # Access the renamed variable

# Creating an instance of gfg
ins = gfg("Python")

# Calling the topic method
ins.topic()
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>Topic: Python</p>
</div>

<p><strong>Explanation:</strong> In this example, 'self' is used to refer to the instance of the class, 'ins.' Without the explicit use of 'self,' it would be unclear which instance the method is referring to and the code might become ambiguous.</p>

<h3>Example 2: Circle Class for Area Calculation Example</h3>
<p>In this example, 'self' is crucial for accessing the 'r' attribute of the specific instance 'ins.' The use of 'self' ensures that the method operates on the attributes of the correct instance.</p>

<pre>{`
class Circle:
    def __init__(self, r):
        self.r = r

    def area(self):
        a = 3.14 * self.r ** 2
        return a

# Creating an instance of Circle
ins = Circle(5)

# Calling the area method
print("Area of the circle:", ins.area())
`}</pre>

<div class="output">
  <h4>Output</h4>
  <p>Area of the circle: 78.5</p>
</div>



            </section>

        </div>
        </>
    );
};
export default Pself;
