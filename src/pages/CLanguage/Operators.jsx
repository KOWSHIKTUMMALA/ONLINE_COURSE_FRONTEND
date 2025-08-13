import React from 'react';
import './CLang.css';
const Operators = () => {
    return (
        <>
            <div>
                <header className="header">
                    <h1>Operators in C</h1>
                </header>
<section className="section" id="Operators in C">
    <h2>Operators in C</h2>
    <p>In C language, operators are symbols that represent operations to be performed on one or more operands. They are the basic components of the C programming. In this article, we will learn about all the built-in operators in C with examples.</p>
    <h3>What is a C Operator?</h3>
    <p>An operator in C can be defined as the symbol that helps us to perform some specific mathematical, relational, bitwise, conditional, or logical computations on values and variables. The values and variables used with operators are called operands. So we can say that the operators are the symbols that perform operations on operands.</p>
    <h4>For Example</h4>
    <pre>
        {
            `c=a+b;`
        }
    </pre>
    <p>Here, ‘+’ is the operator known as the addition operator, and ‘a’ and ‘b’ are operands. The addition operator tells the compiler to add both of the operands ‘a’ and ‘b’. To dive deeper into how operators are used with data structures, the C Programming Course Online with Data Structurescovers this topic thoroughly.</p>
    <h3>Types of Operators in C</h3>
    <p>
    C language provides a wide range of operators that can be classified into 6 types based on their functionality:
    </p>
    <ol>
        <li>Arithmetic Operators
        </li>
        <li>Relational Operators
        </li>
        <li>Logical Operators
        </li>
        <li>Bitwise Operators
        </li>
        <li>Assignment Operators
        </li>
        <li>Other Operators
        </li>
    </ol>
    <div id="arithmetic">
    <h3>1. Arithmetic Operations in C</h3>
    <p>The arithmetic operators are used to perform arithmetic/mathematical operations on operands. There are 9 arithmetic operators in C language:</p>
    <table>
    <thead>
        <tr>
            <th>S. No.</th>
            <th>Symbol</th>
            <th>Operator</th>
            <th>Description</th>
            <th>Syntax</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>+</td>
            <td>Plus</td>
            <td>Adds two numeric values.</td>
            <td>a + b</td>
        </tr>
        <tr>
            <td>2</td>
            <td>-</td>
            <td>Minus</td>
            <td>Subtracts right operand from left operand.</td>
            <td>a - b</td>
        </tr>
        <tr>
            <td>3</td>
            <td>*</td>
            <td>Multiply</td>
            <td>Multiply two numeric values.</td>
            <td>a * b</td>
        </tr>
        <tr>
            <td>4</td>
            <td>/</td>
            <td>Divide</td>
            <td>Divide two numeric values.</td>
            <td>a / b</td>
        </tr>
        <tr>
            <td>5</td>
            <td>%</td>
            <td>Modulus</td>
            <td>Returns the remainder after dividing the left operand with the right operand.</td>
            <td>a % b</td>
        </tr>
        <tr>
            <td>6</td>
            <td>+</td>
            <td>Unary Plus</td>
            <td>Used to specify the positive values.</td>
            <td>+a</td>
        </tr>
        <tr>
            <td>7</td>
            <td>-</td>
            <td>Unary Minus</td>
            <td>Flips the sign of the value.</td>
            <td>-a</td>
        </tr>
        <tr>
            <td>8</td>
            <td>++</td>
            <td>Increment</td>
            <td>Increases the value of the operand by 1.</td>
            <td>a++</td>
        </tr>
        <tr>
            <td>9</td>
            <td>--</td>
            <td>Decrement</td>
            <td>Decreases the value of the operand by 1.</td>
            <td>a--</td>
        </tr>
    </tbody>
</table>
<h4>Example of C Arithmetic Operators</h4>
<pre>
    {
        `// C program to illustrate the arithmatic operators
#include <stdio.h>

int main()
{

    int a = 25, b = 5;

    // using operators and printing results
    printf("a + b = %d\n", a + b);
    printf("a - b = %d\n", a - b);
    printf("a * b = %d\n", a * b);
    printf("a / b = %d\n", a / b);
    printf("a % b = %d\n", a % b);
    printf("+a = %d\n", +a);
    printf("-a = %d\n", -a);
    printf("a++ = %d\n", a++);
    printf("a-- = %d\n", a--);

    return 0;
}
`
    }
    </pre>
    <div className="output">
        <h4>Output:</h4>
        <p>a + b = 30<br/>
a - b = 20<br/>
a * b = 125<br/>
a / b = 5<br/>
a % b = 0<br/>
+a = 25<br/>
-a = -25<br/>
a++ = 25<br/>
a-- = 26</p>
    </div>
    </div>

    <div id="relational">
        <h3>2. Relational Operators in C
        </h3>
        <p>The relational operators in C are used for the comparison of the two operands. All these operators are binary operators that return true or false values as the result of comparison.</p>
        <p>These are a total of 6 relational operators in C:</p>
        <table>
    <thead>
        <tr>
            <th>S. No.</th>
            <th>Symbol</th>
            <th>Operator</th>
            <th>Description</th>
            <th>Syntax</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>&lt;</td>
            <td>Less than</td>
            <td>Returns true if the left operand is less than the right operand. Else false.</td>
            <td>a &lt; b</td>
        </tr>
        <tr>
            <td>2</td>
            <td>&gt;</td>
            <td>Greater than</td>
            <td>Returns true if the left operand is greater than the right operand. Else false.</td>
            <td>a &gt; b</td>
        </tr>
        <tr>
            <td>3</td>
            <td>&lt;=</td>
            <td>Less than or equal to</td>
            <td>Returns true if the left operand is less than or equal to the right operand. Else false.</td>
            <td>a &lt;= b</td>
        </tr>
        <tr>
            <td>4</td>
            <td>&gt;=</td>
            <td>Greater than or equal to</td>
            <td>Returns true if the left operand is greater than or equal to the right operand. Else false.</td>
            <td>a &gt;= b</td>
        </tr>
        <tr>
            <td>5</td>
            <td>==</td>
            <td>Equal to</td>
            <td>Returns true if both the operands are equal.</td>
            <td>a == b</td>
        </tr>
        <tr>
            <td>6</td>
            <td>!=</td>
            <td>Not equal to</td>
            <td>Returns true if both the operands are NOT equal.</td>
            <td>a != b</td>
        </tr>
    </tbody>
</table>
        <h4>Example of C Relational Operators</h4>
        <pre>
            {
                `// C program to illustrate the relational operators
#include <stdio.h>

int main()
{

    int a = 25, b = 5;

    // using operators and printing results
    printf("a < b  : %d\n", a < b);
    printf("a > b  : %d\n", a > b);
    printf("a <= b: %d\n", a <= b);
    printf("a >= b: %d\n", a >= b);
    printf("a == b: %d\n", a == b);
    printf("a != b : %d\n", a != b);

    return 0;
}
`
            }
        </pre>
        <div className="output">
    <h4>Output:</h4>
    <p>
        a &lt; b  : 0 <br/>
        a &gt; b  : 1 <br/>
        a &lt;= b : 0 <br/>
        a &gt;= b : 1 <br/>
        a == b   : 0 <br/>
        a != b   : 1
    </p>
</div>
<p>Here, 0 means false and 1 means true.</p>

    </div>

    <div id="logical">
        <h3>3. Logical Operator in C
        </h3>
        <p>Logical Operators are used to combine two or more conditions/constraints or to complement the evaluation of the original condition in consideration. The result of the operation of a logical operator is a Boolean value either <b>true</b> or <b>false.</b></p>
        <table>
    <thead>
        <tr>
            <th>S. No.</th>
            <th>Symbol</th>
            <th>Operator</th>
            <th>Description</th>
            <th>Syntax</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>&amp;&amp;</td>
            <td>Logical AND</td>
            <td>Returns true if both the operands are true.</td>
            <td>a &amp;&amp; b</td>
        </tr>
        <tr>
            <td>2</td>
            <td>||</td>
            <td>Logical OR</td>
            <td>Returns true if both or any of the operand is true.</td>
            <td>a || b</td>
        </tr>
        <tr>
            <td>3</td>
            <td>!</td>
            <td>Logical NOT</td>
            <td>Returns true if the operand is false.</td>
            <td>!a</td>
        </tr>
    </tbody>
</table>
        <h4>Example of Logical Operators in C</h4>
        <pre>
            {
                `// C program to illustrate the logical operators
#include <stdio.h>

int main()
{

    int a = 25, b = 5;

    // using operators and printing results
    printf("a && b : %d\n", a && b);
    printf("a || b : %d\n", a || b);
    printf("!a: %d\n", !a);

    return 0;
}
`
            }
        </pre>
        <div className="output">
            <h4>Output:</h4>
            <p>a && b : 1<br/>
a || b : 1<br/>
!a: 0</p>
        </div>
    </div>

    <div id="Bitwise">
        <h3>4. Bitwise Operators in C</h3>
        <p>The Bitwise operators are used to perform bit-level operations on the operands. The operators are first converted to bit-level and then the calculation is performed on the operands. Mathematical operations such as addition, subtraction, multiplication, etc. can be performed at the bit level for faster processing.</p>
        <p>There are 6 bitwise operators in C:</p>
        <table >
    <thead>
        <tr>
            <th>S. No.</th>
            <th>Symbol</th>
            <th>Operator</th>
            <th>Description</th>
            <th>Syntax</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>&amp;</td>
            <td>Bitwise AND</td>
            <td>Performs bit-by-bit AND operation and returns the result.</td>
            <td>a &amp; b</td>
        </tr>
        <tr>
            <td>2</td>
            <td>|</td>
            <td>Bitwise OR</td>
            <td>Performs bit-by-bit OR operation and returns the result.</td>
            <td>a | b</td>
        </tr>
        <tr>
            <td>3</td>
            <td>^</td>
            <td>Bitwise XOR</td>
            <td>Performs bit-by-bit XOR operation and returns the result.</td>
            <td>a ^ b</td>
        </tr>
        <tr>
            <td>4</td>
            <td>~</td>
            <td>Bitwise First Complement</td>
            <td>Flips all the set and unset bits on the number.</td>
            <td>~a</td>
        </tr>
        <tr>
            <td>5</td>
            <td>&lt;&lt;</td>
            <td>Bitwise Leftshift</td>
            <td>Shifts the number in binary form by one place in the operation and returns the result.</td>
            <td>a &lt;&lt; b</td>
        </tr>
        <tr>
            <td>6</td>
            <td>&gt;&gt;</td>
            <td>Bitwise Rightshift</td>
            <td>Shifts the number in binary form by one place in the operation and returns the result.</td>
            <td>a &gt;&gt; b</td>
        </tr>
    </tbody>
</table>
        <h4>Example of Bitwise Operators</h4>
        <pre>
            {
                `// C program to illustrate the bitwise operators
#include <stdio.h>

int main()
{

    int a = 25, b = 5;

    // using operators and printing results
    printf("a & b: %d\n", a & b);
    printf("a | b: %d\n", a | b);
    printf("a ^ b: %d\n", a ^ b);
    printf("~a: %d\n", ~a);
    printf("a >> b: %d\n", a >> b);
    printf("a << b: %d\n", a << b);

    return 0;
}
`
            }
        </pre>
        <div className="output">
    <h4>Output:</h4>
    <p>
        a &amp; b: 1 <br/>
        a | b: 29 <br/>
        a ^ b: 28 <br/>
        ~a: -26 <br/>
        a &gt;&gt; b: 0 <br/>
        a &lt;&lt; b: 800
    </p>
</div>
        
    </div>

    <div id="assignment">
        <h3>5. Assignment Operators in C
        </h3>
        <p>Assignment operators are used to assign value to a variable. The left side operand of the assignment operator is a variable and the right side operand of the assignment operator is a value. The value on the right side must be of the same data type as the variable on the left side otherwise the compiler will raise an error.</p>
        <p>The assignment operators can be combined with some other operators in C to provide multiple operations using single operator. These operators are called compound operators.</p>
        <p>In C, there are 11 assignment operators :</p>
        <table>
    <thead>
        <tr>
            <th>S. No.</th>
            <th>Symbol</th>
            <th>Operator</th>
            <th>Description</th>
            <th>Syntax</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>=</td>
            <td>Simple Assignment</td>
            <td>Assign the value of the right operand to the left operand.</td>
            <td>a = b</td>
        </tr>
        <tr>
            <td>2</td>
            <td>+=</td>
            <td>Plus and assign</td>
            <td>Add the right operand and left operand and assign this value to the left operand.</td>
            <td>a += b</td>
        </tr>
        <tr>
            <td>3</td>
            <td>-=</td>
            <td>Minus and assign</td>
            <td>Subtract the right operand and left operand and assign this value to the left operand.</td>
            <td>a -= b</td>
        </tr>
        <tr>
            <td>4</td>
            <td>*=</td>
            <td>Multiply and assign</td>
            <td>Multiply the right operand and left operand and assign this value to the left operand.</td>
            <td>a *= b</td>
        </tr>
        <tr>
            <td>5</td>
            <td>/=</td>
            <td>Divide and assign</td>
            <td>Divide the left operand with the right operand and assign this value to the left operand.</td>
            <td>a /= b</td>
        </tr>
        <tr>
            <td>6</td>
            <td>%=</td>
            <td>Modulus and assign</td>
            <td>Assign the remainder in the division of left operand with the right operand to the left operand.</td>
            <td>a %= b</td>
        </tr>
        <tr>
            <td>7</td>
            <td>&amp;=</td>
            <td>AND and assign</td>
            <td>Performs bitwise AND and assigns this value to the left operand.</td>
            <td>a &amp;= b</td>
        </tr>
        <tr>
            <td>8</td>
            <td>|=</td>
            <td>OR and assign</td>
            <td>Performs bitwise OR and assigns this value to the left operand.</td>
            <td>a |= b</td>
        </tr>
        <tr>
            <td>9</td>
            <td>^=</td>
            <td>XOR and assign</td>
            <td>Performs bitwise XOR and assigns this value to the left operand.</td>
            <td>a ^= b</td>
        </tr>
        <tr>
            <td>10</td>
            <td>&gt;&gt;=</td>
            <td>Rightshift and assign</td>
            <td>Performs bitwise Rightshift and assign this value to the left operand.</td>
            <td>a &gt;&gt;= b</td>
        </tr>
        <tr>
            <td>11</td>
            <td>&lt;&lt;=</td>
            <td>Leftshift and assign</td>
            <td>Performs bitwise Leftshift and assign this value to the left operand.</td>
            <td>a &lt;&lt;= b</td>
        </tr>
    </tbody>
</table>
        <h4>Example of C Assignment Operators</h4>
        <pre>
            {
                `// C program to illustrate the assignment operators
#include <stdio.h>

int main()
{
    int a = 25, b = 5;

    // using operators and printing results
    printf("a = b: %d\n", a = b);
    printf("a += b: %d\n", a += b);
    printf("a -= b: %d\n", a -= b);
    printf("a *= b: %d\n", a *= b);
    printf("a /= b: %d\n", a /= b);
    printf("a %%= b: %d\n", a %= b);
    printf("a &= b: %d\n", a &= b);
    printf("a |= b: %d\n", a |= b);
    printf("a >>= b: %d\n", a >>= b); 
    printf("a <<= b: %d\n", a <<= b);

    return 0;
}
`
            }
        </pre>
        <div className="output">
    <h4>Output:</h4>
    <p>
a = b: 5<br/>
a += b: 10<br/>
a -= b: 5<br/>
a *= b: 25<br/>
a /= b: 5<br/>
a %= b: 0<br/>
a &amp;= b: 0 <br/>
        a |= b: 5 <br/>
        a &gt;&gt;= b: 0 <br/>
        a &lt;&lt;= b: 0
    </p>
</div>


    </div>

    <div id="other">
        <h3>6. Other Operators</h3>
        <p>Apart from the above operators, there are some other operators available in C used to perform some specific tasks. Some of them are discussed here: </p>
        <h3>sizeof Operator</h3>
        <ul>
            <li>sizeof is much used in the C programming language.
            </li>
            <li>It is a compile-time unary operator which can be used to compute the size of its operand.
            </li>
            <li>The result of sizeof is of the unsigned integral type which is usually denoted by size_t.
            </li>
            <li>Basically, the sizeof the operator is used to compute the size of the variable or datatype.
            </li>
        </ul>
        <h4>Syntax</h4>
        <pre>
            {
                `sizeof (operand)`
            }
        </pre>

        <h3>Comma Operator ( , )
        </h3>
        <ul>
            <li>The comma operator (represented by the token) is a binary operator that evaluates its first operand and discards the result, it then evaluates the second operand and returns this value (and type).
            </li>
            <li>The comma operator has the lowest precedence of any C operator.
            </li>
            <li>Comma acts as both operator and separator. 
            </li>
        </ul>

        <h4>Syntax</h4>
        <pre>
            {
                'operand1 , operand2'
            }
        </pre>

        <h3>Conditional Operator ( ? : )
        </h3>
        <ul>
            <li>The conditional operator is the only ternary operator in C++.
            </li>
            <li>Here, Expression1 is the condition to be evaluated. If the condition(Expression1) is True then we will execute and return the result of Expression2 otherwise if the condition(Expression1) is false then we will execute and return the result of Expression3.
            </li>
            <li>We may replace the use of if..else statements with conditional operators.
            </li>
        </ul>

        <h4>Syntax</h4>
        <pre>
            {
                `operand1 ? operand2 : operand3;`
            }
        </pre>

        <h3>dot  and arrow  Operators</h3>
        <ul>
            <li>Member operators are used to reference individual members of classes, structures, and unions.
            </li>
            <li>The dot operator is applied to the actual object. 
            </li>
            <li>The arrow operator is used with a pointer to an object.
            </li>
        </ul>
        <h4>Syntax</h4>
        <pre>
            {
                'structure_variable . member;'
            }
        </pre>
        <p>and</p>
        <pre>
            {
                `structure_pointer -> member;`
            }
        </pre>

        <h3>Cast Operator
        </h3>
        <ul>
            <li>Casting operators convert one data type to another. For example, int(2.2000) would return 2.
            </li>
            <li>A cast is a special operator that forces one data type to be converted into another. 
            </li>
            <li>The most general cast supported by most of the C compilers is as follows −   [ (type) expression ].
            </li>
        </ul>
        <h4>Syntax</h4>
        <pre>
            {
                `(new_type) operand;
`
            }
        </pre>

        <h3>addressof (&) and Dereference (*) Operators
        </h3>

        <ul>
            <li>Pointer operator & returns the address of a variable. For example &a; will give the actual address of the variable.
            </li>
            <li>The pointer operator * is a pointer to a variable. For example *var; will pointer to a variable var. 
            </li>
        </ul>

        <h4>Example of Other C Operators</h4>
        <pre>
            {
                `// C Program to demonstrate the use of Misc operators
#include <stdio.h>

int main()
{
    // integer variable
    int num = 10;
    int* add_of_num = &num;

    printf("sizeof(num) = %d bytes\n", sizeof(num));
    printf("&num = %p\n", &num);
    printf("*add_of_num = %d\n", *add_of_num);
    printf("(10 < 5) ? 10 : 20 = %d\n", (10 < 5) ? 10 : 20);
    printf("(float)num = %f\n", (float)num);

    return 0;
}
`
            
            }
        </pre>




        <div className="output">
    <h4>Output:</h4>
    <p>
        sizeof(num) = 4 bytes <br/>
        &amp;num = 0x7ffe2b7bdf8c <br/>
        *add_of_num = 10 <br/>
        (10 &lt; 5) ? 10 : 20 = 20 <br/>
        (float)num = 10.000000
    </p>
</div>

<h3>Unary, Binary and Ternary Operators in C
</h3>
<p>Operators can also be classified into three types on the basis of the number of operands they work on:

</p>
<ol>
    <li><strong>Unary Operators:</strong>Operators that work on single operand.</li>
    <li><strong>Binary Operators:</strong>Operators that work on two operands.</li>
    <li><strong>Ternary Operators:</strong>Operators that work on three operands.</li>
</ol>

<h3>Operator Precedence and Associativity in C
</h3>
<p>In C, it is very common for an expression or statement to have multiple operators and in these expression, there should be a fixed order or priority of operator evaluation to avoid ambiguity.
</p>
<p><strong>Operator Precedence and Associativity </strong> is the concept that decides which operator will be evaluated first in the case when there are multiple operators present in an expression.

</p>
<p>The below table describes the precedence order and associativity of operators in C. The precedence of the operator decreases from top to bottom. 
</p>
<table>
    <thead>
        <tr>
            <th>Precedence</th>
            <th>Operator</th>
            <th>Description</th>
            <th>Associativity</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>()<br/>[]<br/>.<br/>-&gt;<br/>a++ , a--</td>
            <td>Parentheses (function call)<br/>Brackets (array subscript)<br/>Member selection via object name<br/>Member selection via a pointer<br/>Postfix increment/decrement (a is a variable)</td>
            <td>left-to-right</td>
        </tr>
        <tr>
            <td>2</td>
            <td>++a , --a<br/>+ , -<br/>! , ~<br/>(type)<br/>*<br/>&amp;<br/>sizeof</td>
            <td>Prefix increment/decrement (a is a variable)<br/>Unary plus/minus<br/>Logical negation/bitwise complement<br/>Cast (convert value to temporary value of type)<br/>Dereference<br/>Address (of operand)<br/>Determine size in bytes on this implementation</td>
            <td>right-to-left</td>
        </tr>
        <tr>
            <td>3</td>
            <td>* , / , %</td>
            <td>Multiplication/division/modulus</td>
            <td>left-to-right</td>
        </tr>
        <tr>
            <td>4</td>
            <td>+ , -</td>
            <td>Addition/subtraction</td>
            <td>left-to-right</td>
        </tr>
        <tr>
            <td>5</td>
            <td>&lt;&lt; , &gt;&gt;</td>
            <td>Bitwise shift left, Bitwise shift right</td>
            <td>left-to-right</td>
        </tr>
        <tr>
            <td>6</td>
            <td>&lt; , &lt;=<br/>&gt; , &gt;=</td>
            <td>Relational less than/less than or equal to<br/>Relational greater than/greater than or equal to</td>
            <td>left-to-right</td>
        </tr>
        <tr>
            <td>7</td>
            <td>== , !=</td>
            <td>Relational is equal to/is not equal to</td>
            <td>left-to-right</td>
        </tr>
        <tr>
            <td>8</td>
            <td>&amp;</td>
            <td>Bitwise AND</td>
            <td>left-to-right</td>
        </tr>
        <tr>
            <td>9</td>
            <td>^</td>
            <td>Bitwise XOR</td>
            <td>left-to-right</td>
        </tr>
        <tr>
            <td>10</td>
            <td>|</td>
            <td>Bitwise OR</td>
            <td>left-to-right</td>
        </tr>
        <tr>
            <td>11</td>
            <td>&amp;&amp;</td>
            <td>Logical AND</td>
            <td>left-to-right</td>
        </tr>
        <tr>
            <td>12</td>
            <td>||</td>
            <td>Logical OR</td>
            <td>left-to-right</td>
        </tr>
        <tr>
            <td>13</td>
            <td>?:</td>
            <td>Ternary conditional</td>
            <td>right-to-left</td>
        </tr>
        <tr>
            <td>14</td>
            <td>=<br/>+= , -=<br/>*= , /=<br/>%= , &amp;=<br/>^= , |=<br/>&lt;&lt;= , &gt;&gt;=</td>
            <td>Assignment<br/>Addition/subtraction assignment<br/>Multiplication/division assignment<br/>Modulus/bitwise AND assignment<br/>Bitwise exclusive/inclusive OR assignment<br/>Bitwise shift left/right assignment</td>
            <td>right-to-left</td>
        </tr>
        <tr>
            <td>15</td>
            <td>,</td>
            <td>expression separator</td>
            <td>left-to-right</td>
        </tr>
    </tbody>
</table>

<h3>Conclusion</h3>
<p>In this article, the points we learned about the operator are as follows:</p>
<ul>
    <li>Operators are symbols used for performing some kind of operation in C.
    </li>
    <li>There are six types of operators, Arithmetic Operators, Relational Operators, Logical Operators, Bitwise Operators, Assignment Operators, and Miscellaneous Operators.
    </li>
    <li>Operators can also be of type unary, binary, and ternary according to the number of operators they are using.
    </li>
    <li>Every operator returns a numerical value except logical, relational, and conditional operator which returns a boolean value (true or false).
    </li>
    <li>There is a Precedence in the operators means the priority of using one operator is greater than another operator.
    </li>
</ul>
    </div>
</section>
</div>
</>
    );
};
export default Operators;