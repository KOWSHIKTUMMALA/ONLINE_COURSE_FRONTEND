import React from 'react';
import './CLang.css';
const Inputoutput = () => {
    return (
        <>
            <div>
                <header className="header">
                    <h1>Input and Output in C</h1>
                </header>

<section className="section" id="input-and-output">
    <h2>Basic Input and Output in C</h2>
    <p>In C programming, input and output operations refer to reading data from external sources and writing data to external destinations outside the program. C provides a standard set of functions to handle input from the user and output to the screen or to files. These functions are part of the standard input/output library <b>&lt;stdio.h&gt;</b>.</p>
    <p>In C, there are many functions used for input and output in different situations but the most commonly used functions for Input/Output are scanf() and printf() respectively.</p>
    <h3>Standard Output Function – printf()</h3>
    <p>The <strong>printf()</strong> function is used to print formatted output to the standard output stdout (which is generally the console screen). It is one of the most commonly used functions in C.</p>
    <h4>Syntax</h4>
    <pre>
        {
            `printf(“formatted_string”, variables/values);

`
        }
    </pre>
    <h4>Example</h4>
    <pre>
        {
            `#include <stdio.h>

int main() {
  
    // Prints some text
    printf("First Print");  
  
    return 0;
}
`
        }
    </pre>
    <div className="output">
        <h4>Output:</h4>
        <p>First Print</p>
    </div>
    <p><b>Explanation:</b> The printf() function sends the string “First Print” to the output stream, displaying it on the screen.</p>
    <p>Variable values and direct values(literals) can also be printed by printf().</p>
    <pre>
        {
            `#include <stdio.h>

int main() {
      int age = 22;
  
    // Prints Age
    printf("Age: %d\n", age);  
  
    return 0;
}
`
        }
    </pre>
    <div className="output">
        <h4>Output:</h4>
        <p>Age: 22
        </p>
    </div>
    <p>Here, the value of variable age is printed. You may have noticed <b>%d</b> in the formatted string. It is actually called format specifier which are used as placeholders for the value in the formatted string.</p>
    <p>You may have also noticed ‘\n’ character. This character is an escape sequence and is used to enter a newline.</p>
    <h3>Standard Input Function – scanf()
    </h3>
    <p><b>scanf()</b> is used to read user input from the console. It takes the format string and the addresses of the variables where the input will be stored.</p>
    <h4>Syntax</h4>
    <pre>
        {
            `scanf(“formatted_string”, address_of_variables/values);

`
        }
        </pre>
        <p>Remember that this function takes the address of the arguments where the read value is to be stored.</p>
        <h4>Example</h4>
        <pre>
            {
                `#include <stdio.h>

int main() {
    int age;
    printf("Enter your age: ");
  
    // Reads an integer
    scanf("%d", &age);  
  
    // Prints the age
    printf("Age is: %d\n", age);  
    return 0;
}
`
            }
        </pre>
        <div className="output">
        <h4>Output:</h4>
        <p>Enter your age: 25 (Entered by the user)<br/>
        Age is: 25
        </p>
    </div>
    <p><b>Explanation:</b> %d is used to read an integer; and &age provides the address of the variable where the input will be stored.</p>
</section>
</div>
</>
    );
};
export default Inputoutput;