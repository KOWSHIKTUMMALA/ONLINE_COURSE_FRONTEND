import React from "react";
import './Python.css'

const  Pinput=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Input and Output in Python</h1>

            </header>
            <section className="section">
                
<h2>Python Input and Output Operations</h2>

<p>Understanding input and output operations is fundamental to&nbsp;Python programming. With the print() function, we can display output in various formats, while the input() function enables interaction with users by gathering input during program execution.</p>

<h3>Taking input in Python</h3>

<p>Python&nbsp;input() function&nbsp;is used to take user input. By default, it returns the user input in form of a string.&nbsp;</p>

<h4>Example:</h4>

<pre>{`name = input("Enter your name: ")
print("Hello,", name, "! Welcome!")
`}</pre>

<div class="output">
<h4>Output</h4>
<p>
Enter your name: Kowshik<br/>
Hello, Kowshik ! Welcome!
</p>
</div>

<p>The code prompts the user to input their name, stores it in the variable “name” and then prints a greeting message addressing the user by their entered name.</p>

<h3>Printing Output using print() in Python</h3>

<p>At its core, printing output in Python is straightforward, thanks to the print() function. This function allows us to display text, variables and expressions on the console. Let’s begin with the basic usage of the&nbsp;print()&nbsp;function:</p>

<p>In this example, “Hello, World!” is a string literal enclosed within double quotes. When executed, this statement will output the text to the console.</p>

<pre>{`
print("Hello, World!")
`}</pre>

<div className="output">
<h4>Output</h4>
<p>Hello, World!</p>
</div>

<h3>Printing Variables</h3>

<p>We can use the print() function to&nbsp;print single and multiple variables. We can print multiple variables by separating them with commas.&nbsp;Example:</p>

<pre>{`# Single variable
s = "Bob"
print(s)

# Multiple Variables
s = "Alice"
age = 25
city = "New York"
print(s, age, city)
`}</pre>

<div className="output">
<h4>Output</h4>
<p>
Bob<br/>
Alice 25 New York
</p>
</div>

<h3>Take Multiple Input in Python</h3>

<p>We are&nbsp;taking multiple input&nbsp;from the user in a single line, splitting the values entered by the user into separate variables for each value using the&nbsp;split() method. Then, it prints the values with corresponding labels, either two or three, based on the number of inputs provided by the user.</p>

<pre>{`# taking two inputs at a time
x, y = input("Enter two values: ").split()
print("Number of boys: ", x)
print("Number of girls: ", y)

# taking three inputs at a time
x, y, z = input("Enter three values: ").split()
print("Total number of students: ", x)
print("Number of boys is : ", y)
print("Number of girls is : ", z)
`}</pre>

<div className="output">
<h4>Output:</h4>
<p>
Enter two values: 5 10<br/>
Number of boys:  5<br/>
Number of girls:  10<br/>
Enter three values: 5 10 15<br/>
Total number of students:  5<br/>
Number of boys is :  10<br/>
Number of girls is :  15
</p>
</div>

<h3>Take Conditional Input from user in Python</h3>

<p>In this example, the program prompts the user to enter their age. The input is converted to an integer using the int() function. Then, the program uses conditional statements to check the age range and prints a message based on whether the user is a minor, an adult, or a senior citizen.</p>

<pre>{`# Prompting the user for input
age_input = input("Enter your age: ")

# Converting the input to an integer
age = int(age_input)

# Checking conditions based on user input
if age < 0:
    print("Please enter a valid age.")
elif age < 18:
    print("You are a minor.")
elif age >= 18 and age < 65:
    print("You are an adult.")
else:
    print("You are a senior citizen.")
`}</pre>

<div class="output">
<h4>Output</h4>
<p>
Enter your age: 22<br/>
You are an adult.
</p>
</div>

<h3>How to Change the Type of Input in Python</h3>

<p>By default input() function helps in taking user input as string. If any user wants to take input as int or float, we just need to&nbsp;typecast&nbsp;it.</p>

<h3>Print Names in Python</h3>

<p>The code prompts the user to input a string (the color of a rose), assigns it to the variable color and then prints the inputted color.</p>

<pre>{`# Taking input as string
color = input("What color is rose?: ")
print(color)
`}</pre>

<div className="output">
<h4>Output</h4>
<p>
What color is rose?: Red<br/>
Red
</p>
</div>

<h3>Print Numbers in Python</h3>

<p>The code prompts the user to input an integer representing the number of roses, converts the input to an integer using typecasting and then prints the integer value.</p>

<pre>{`# Taking input as int
# Typecasting to int
n = int(input("How many roses?: "))
print(n)
`}</pre>

<div className="output">
<h4>Output</h4>
<p>
How many roses?: 88<br/>
88
</p>
</div>

<h3>Print Float/Decimal Number in Python</h3>

<p>The code prompts the user to input the price of each rose as a floating-point number, converts the input to a float using typecasting and then prints the price.</p>

<pre>{`# Taking input as float
# Typecasting to float
price = float(input("Price of each rose?: "))
print(price)
`}</pre>

<div className="output">
<h4>Output</h4>
<p>
Price of each rose?: 50.30<br/>
50.3
</p>
</div>

<h3>Find DataType of Input in Python</h3>

<p>In the given example, we are printing the type of variable x. We will determine the type of an object in Python.</p>

<pre>{`a = "Hello World"
b = 10
c = 11.22
d = ("Geeks", "for", "Geeks")
e = ["Geeks", "for", "Geeks"]
f = {"Geeks": 1, "for":2, "Geeks":3}
print(type(a))
print(type(b))
print(type(c))
print(type(d))
print(type(e))
print(type(f))
`}</pre>

<div className="output">
<h4>Output</h4>
<p>
&lt;class 'str'&gt;<br/>
&lt;class 'int'&gt;<br/>
&lt;class 'float'&gt;<br/>
&lt;class 'tuple'&gt;<br/>
&lt;class 'list'&gt;<br/>
&lt;class 'dict'&gt;
</p>
</div>

<h3>Output Formatting</h3>

<p>Output formatting in Python&nbsp;with various techniques including the format() method, manipulation of the&nbsp;sep&nbsp;and end parameters, f-strings and the versatile % operator. These methods enable precise control over how data is displayed, enhancing the readability and effectiveness of your Python programs.</p>


<h4>Example 1:&nbsp;Using sep and end parameter</h4>
<pre>{`# end Parameter with '@'
print("Python", end='@')
print("Kowshik")

# Seprating with Comma
print('G', 'F', 'G', sep='')

# for formatting a date
print('09', '12', '2016', sep='-')

# another example
print('pratik', 'gmail', sep='@')
`}</pre>

<div className="output">
<h4>Output</h4>
<p>
Python@GeeksforGeeks<br/>
GFG<br/>
09-12-2016<br/>
pratik@gmail.com
</p>
</div>

<h4>Example 2:&nbsp;Using f-string</h4>

<pre>{`name = 'Tushar'
age = 23
print(f"Hello, My name is {name} and I'm {age} years old.")
`}</pre>

<div className="output">
<h4>Output</h4>
<p>Hello, My name is Tushar and I'm 23 years old.</p>
</div>

<h4>Example 3:&nbsp;Using % Operator</h4>

<p>We can use&nbsp;‘%’&nbsp;operator. % values are replaced with zero or more value of elements. The formatting using % is similar to that of ‘printf’ in the C programming language.</p>

<ul>
    <li>%d –integer</li>
    <li>%f – float</li>
    <li>%s – string</li>
    <li>%x –hexadecimal</li>
    <li>%o – octal</li>
</ul>

<pre>{`# Taking input from the user
num = int(input("Enter a value: "))
add = num + 5

# Output
print("The sum is %d" % add)
`}</pre>

<div className="output">
<h4>Output</h4>
<p>
Enter a value: 50<br/>
The sum is 55
</p>
</div>


            </section>

        </div>
        </>
    );
};
export default Pinput;
