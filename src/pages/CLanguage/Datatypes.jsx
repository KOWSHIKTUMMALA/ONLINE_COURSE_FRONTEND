import React from 'react';
import './CLang.css';
const Datatypes = () => {
    return (
        <>
            <div>
                <header className="header">
                    <h1> Datatypes in C</h1>
                </header>

<section className="section" id="Datatypes">
    <h2>Data Types in C
    </h2>
    <p>Each variable in C has an associated data type. It specifies the type of data that the variable can store like integer, character, floating, double, etc. Each data type requires different amounts of memory and has some specific operations which can be performed over it.</p>
    <p><b>The data types in C can be classified as follows:</b></p>
    <table>
        <tr>
            <th>Types</th>
            <th>Description</th>
            <th>Data Types</th>
        </tr>
        <tr>
            <td><b>Primitive Data Types	</b></td>
            <td>Primitive data types are the most basic data types that are used for representing simple values such as integers, float, characters, etc.</td>
            <td>int, char, float, double, void</td>
            
        </tr>
        <tr>
            <td><b>Derived Types</b></td>
            <td>The data types that are derived from the primitive or built-in datatypes are referred to as Derived Data Types.</td>
            <td>array, pointers, function</td>
        </tr>
        <tr>
            <td><b>User Defined Data Types</b></td>
            <td>The user-defined data types are defined by the user himself.</td>
            <td>structure, union, enum</td>
        </tr>
    </table>
    <p>Understanding C’s data types is critical for writing efficient programs.</p>
    <p><b>The following are some main primitive data types in C:</b></p>

    <p>Table of Content</p>
    <ul>
        <li><a href="#integer">Integer Data Type</a></li>
        <li><a href="#character">Character Data Type</a></li>
        <li><a href="#float">Float Data Type</a></li>
        <li><a href="#double">Double Data Type</a></li>
        <li><a href="#void">Void Data Type</a></li>
    </ul>

    <div id="integer">
        <h3>Integer Data Type</h3>
        <p>The integer datatype in C is used to store the integer numbers (any number including positive, negative and zero without decimal part). Octal values, hexadecimal values, and decimal values can be stored in int data type in C. </p>
        <ul>
            <li><b>Range:</b> -2,147,483,648 to 2,147,483,647</li>
            <li><b>Size:</b> 4 bytes</li>
            <li><b>Format Specifier:</b>%d</li>
        </ul>
        <h4>Syntax of Integer</h4>
        <p>We use int keyword to declare the integer variable:</p>
        <pre>
            {`int var_name;`}
        </pre>
        <h4>Example of int</h4>
        <pre>
            {`// C program to print Integer data types.
#include <stdio.h>

int main()
{
    // Integer value with positive data.
    int a = 9;

    // integer value with negative data.
    int b = -9;

    // U or u is Used for Unsigned int in C.
    int c = 89U;

    // L or l is used for long int in C.
    long int d = 99998L;

    printf("Integer value with positive data: %d\n", a);
    printf("Integer value with negative data: %d\n", b);
    printf("Integer value with an unsigned int data: %u\n",
           c);
    printf("Integer value with an long int data: %ld", d);

    return 0;
}
`}
        </pre>
        <div className="output">
        <h4>Output:</h4>
        <p>Integer value with positive data: 9<br/>
Integer value with negative data: -9<br/>
Integer value with an unsigned int data: 89,<br/>
Integer value with an long int data: 99998</p>
        </div>
    </div>

    <div id="character">
        <h3>Character Data Type</h3>
        <p>Character data type allows its variable to store only a single character. The size of the character is 1 byte. It is the most basic data type in C. It stores a single character and requires a single byte of memory in almost all compilers.</p>
        <ul>
            <li><b>Range:</b>(-128 to 127) or (0 to 255)</li>
            <li><b>Size:</b>1 byte</li>
            <li><b>Format Specifier:</b>%c</li>
        </ul>
        <h4>Syntax of char</h4>
        <p>The char keyword is used to declare the variable of character type:</p>
        <pre>
            {
                `char var_name;`
            }
        </pre>
        <h4>Example of char</h4>
        <pre>
            {
                `// C program to print Integer data types.
#include <stdio.h>

int main()
{
    char a = 'a';
    char c;

    printf("Value of a: %c\n", a);

    a++;
    printf("Value of a after increment is: %c\n", a);

    // c is assigned ASCII values
    // which corresponds to the
    // character 'c'
    // a-->97 b-->98 c-->99
    // here c will be printed
    c = 99;

    printf("Value of c: %c", c);

    return 0;
}
`
            }
        </pre>
        <div className="output">
            <h4>Output:</h4>
            <p>Value of a: a<br/>
Value of a after increment is: b<br/>
Value of c: c</p>
        </div>
    </div>

    <div id="float">
        <h3>Float Data Type</h3>
        <p>In C programming float data type is used to store floating-point values. Float in C is used to store decimal and exponential values. It is used to store decimal numbers (numbers with floating point values) with single precision.</p>
        <ul>
            <li><b>Range:</b>1.2E-38 to 3.4E+38</li>
            <li><b>Size:</b>4 bytes</li>
            <li><b>Format Specifier:</b>%f</li>
        </ul>
        <h4>Syntax of float</h4>
        <p>The <b>float keyword</b> is used to declare the variable as a floating point:</p>
        <pre>
            {
                `float var_name;`
            }
        </pre>
        <h4>Example of float</h4>
        <pre>
            {
                `// C Program to demonstrate use
// of Floating types
#include <stdio.h>

int main()
{
    float a = 9.0f;
    float b = 2.5f;

    // 2x10^-4
    float c = 2E-4f;
    printf("%f\n", a);
    printf("%f\n", b);
    printf("%f", c);

    return 0;
}
`
            }
        </pre>
    <div className="output">
            <h4>Output:</h4>
            <p>9.000000<br/>
2.500000<br/>
0.000200</p>
        </div>
    </div>
    <div id="double">
        <h3>Double Data Type</h3>
        <p>A Double data type in C is used to store decimal numbers (numbers with floating point values) with double precision. It is used to define numeric values which hold numbers with decimal values in C.</p>
        <p>The double data type is basically a precision sort of data type that is capable of holding 64 bits of decimal numbers or floating points. Since double has more precision as compared to that float then it is much more obvious that it occupies twice the memory occupied by the floating-point type. It can easily accommodate about 16 to 17 digits after or before a decimal point.</p>
        <ul>
            <li><b>Range:</b> 1.7E-308 to 1.7E+308</li>
            <li><b>Size:</b> 8 bytes</li>
            <li><b>Format Specifier:</b> %lf</li>
        </ul>
        <h4>Syntax of Double</h4>
        <p>The variable can be declared as double precision floating point using the<b> double keyword:</b></p>
        <pre>
            {
                `double var_name;
`
            }
        </pre>
        <h4>Example of Double</h4>
        <pre>
            {
                `// C Program to demonstrate 
// use of double data type
#include <stdio.h>

int main()
{
    double a = 123123123.00;
    double b = 12.293123;
    double c = 2312312312.123123;

    printf("%lf\n", a);

    printf("%lf\n", b);

    printf("%lf", c);

    return 0;
}
`
            }
        </pre>

    <div className="output">
            <h4>Output:</h4>
            <p>123123123.000000<br/>
12.293123<br/>
2312312312.123123</p>
    </div>
    </div>

    <div id="void">
        <h3>Void Data Type</h3>
        <p>The void data type in C is used to specify that no value is present. It does not provide a result value to its caller. It has no values and no operations. It is used to represent nothing. Void is used in multiple ways as function return type, function arguments as void, and pointers to void.</p>
        <h4>Syntax:</h4>
        <pre>
            {
                `// function return type void
void exit(int check);
// Function without any parameter can accept void.
int print(void);
// memory allocation function which
// returns a pointer to void.
void *malloc (size_t size);`
            }
        </pre>
        <h4>Example of Void</h4>
        <pre>
            {
                `// C program to demonstrate
// use of void pointers
#include <stdio.h>

int main()
{
    int val = 30;
    void* ptr = &val;
    printf("%d", *(int*)ptr);
    return 0;
}
`
            }
        </pre>
        <div className="output">
            <h4>Output:</h4>
            <p>30</p>
    </div>
    </div>
</section>
</div>
</>
    );
};
export default Datatypes