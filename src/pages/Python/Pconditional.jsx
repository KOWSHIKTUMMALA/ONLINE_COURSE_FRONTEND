import React from "react";
import './Python.css'

const Pcond =()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Conditional Statements</h1>

            </header>
            <section className="section">
            <h2>Conditional Statements in Python</h2>
<p>Last Updated : 08 Mar, 2025</p>

<p>Conditional statements in Python are used to execute certain blocks of code based on specific conditions. These statements help control the flow of a program, making it behave differently in different situations.</p>

<h3>If Conditional Statement in Python</h3>
<p>If statement is the simplest form of a conditional statement. It executes a block of code if the given condition is true.</p>

<pre>{`
age = 20
if age >= 18:
    print("Eligible to vote.")
`}</pre>

<div class="output">
<h4>Output</h4>
  <p>Eligible to vote.</p>
</div>

<h3>Short Hand if</h3>
<p>Short-hand if statement allows us to write a single-line if statement.</p>

<pre>{`
age = 19
if age > 18: print("Eligible to Vote.")
`}</pre>

<div class="output">
<h4>Output</h4>
  <p>Eligible to Vote.</p>
</div>

<p>This is a compact way to write an if statement. It executes the print statement if the condition is true.</p>

<h3>If else Conditional Statements in Python</h3>
<p>Else allows us to specify a block of code that will execute if the condition(s) associated with an if or elif statement evaluates to False. Else block provides a way to handle all other cases that don't meet the specified conditions.</p>

<pre>{`
age = 10
if age <= 12:
    print("Travel for free.")
else:
    print("Pay for ticket.")
`}</pre>

<div class="output">
<h4>Output</h4>
  <p>Travel for free.</p>
</div>

<h3>Short Hand if-else</h3>
<p>The short-hand if-else statement allows us to write a single-line if-else statement.</p>

<pre>{`
marks = 45
res = "Pass" if marks >= 40 else "Fail"
print(f"Result: {res}")
`}</pre>

<div class="output">
<h4>Output</h4>
  <p>Result: Pass</p>
</div>

<p>Note: This method is also known as ternary operator. Ternary Operator essentially a shorthand for the if-else statement that allows us to write more compact and readable code, especially for simple conditions.</p>

<h3>elif Statement</h3>
<p>elif statement in Python stands for "else if." It allows us to check multiple conditions , providing a way to execute different blocks of code based on which condition is true. Using elif statements makes our code more readable and efficient by eliminating the need for multiple nested if statements.</p>

<pre>{`
age = 25
if age <= 12:
    print("Child.")
elif age <= 19:
    print("Teenager.")
elif age <= 35:
    print("Young adult.")
else:
    print("Adult.")
`}</pre>

<div class="output">
<h4>Output</h4>
  <p>Young adult.</p>
</div>

<p>Here, the first condition x &gt; 15 is False, so the elif condition x &gt; 5 is checked next. Since it is True, the corresponding block is executed.</p>

<h3>Nested if..else Conditional Statements in Python</h3>
<p>Nested if..else means an if-else statement inside another if statement. We can use nested if statements to check conditions within conditions.</p>

<pre>{`
age = 70
is_member = True
if age >= 60:
    if is_member:
        print("30% senior discount!")
    else:
        print("20% senior discount.")
else:
    print("Not eligible for a senior discount.")
`}</pre>

<div class="output">
<h4>Output</h4>
  <p>30% senior discount!</p>
</div>

<h3>Ternary Conditional Statement in Python</h3>
<p>A ternary conditional statement is a compact way to write an if-else condition in a single line. It’s sometimes called a "conditional expression."</p>

<pre>{`
# Assign a value based on a condition
age = 20
s = "Adult" if age >= 18 else "Minor"
print(s)
`}</pre>

<div class="output">
<h4>Output</h4>
  <p>Adult</p>
</div>

<p>Here:</p>
<ul>
  <li>If age &gt;= 18 is True, status is assigned "Adult".</li>
  <li>Otherwise, status is assigned "Minor".</li>
</ul>

<h3>Match-Case Statement in Python</h3>
<p>match-case statement is Python's version of a switch-case found in other languages. It allows us to match a variable's value against a set of patterns.</p>

<pre>{`
number = 2
match number:
    case 1:
        print("One")
    case 2 | 3:
        print("Two or Three")
    case _:
        print("Other number")
`}</pre>

<div class="output">
    <h4>Output</h4>
  <p>Two or Three</p>
</div>



            </section>

        </div>
        </>
    );
};
export default Pcond;
