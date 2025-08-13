import React from "react";
import './CLang.css'

const  Strings=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Strings in C</h1>

            </header>
            <section className="section">
                <h2>Strings</h2>
                <h3>Strings in C</h3>
<p>A String in C programming is a sequence of characters terminated with a null character <code>'\0'</code>. The C String is stored as an array of characters. The difference between a character array and a C string is that the string in C is terminated with a unique character <code>'\0'</code>.</p>

<h3>C String Declaration Syntax</h3>
<p>Declaring a string in C is as simple as declaring a one-dimensional array. Below is the basic syntax for declaring a string.</p>
<pre>{`
char string_name[size];
`}</pre>
<p>In the above syntax, <code>string_name</code> is any name given to the string variable, and <code>size</code> is used to define the length of the string, i.e., the number of characters the string will store.</p>
<p>There is an extra terminating character, the Null character (<code>'\0'</code>), used to indicate the termination of a string, which differentiates strings from normal character arrays.</p>

<h3>C String Initialization</h3>
<p>A string in C can be initialized in different ways. Below are the examples to declare a string with the name <code>str</code> and initialize it with <code>"GeeksforGeeks"</code>.</p>

<h3>1. Assigning a String Literal without Size</h3>
<pre>{`
char str[] = "StudyWell";
`}</pre>

<h3>2. Assigning a String Literal with a Predefined Size</h3>
<pre>{`
char str[50] = "Hello";
`}</pre>

<h3>3. Assigning Character by Character with Size</h3>
<pre>{`
char str[14] = { 'S','t','u','d','y','f','o','r','S','t','u','d','y',0'};
`}</pre>

<h3>4. Assigning Character by Character without Size</h3>
<pre>{`
char str[] = { 'S','t','u','d','y','f','o','r','S','t','u','d','y','\0'};
`}</pre>
<p><strong>Note:</strong> When a sequence of characters enclosed in double quotation marks is encountered by the compiler, a null character <code>'\0'</code> is appended at the end of the string by default.</p>

<h3>C String Example</h3>
<pre>{`
#include <stdio.h>
#include <string.h>

int main()
{
    // declare and initialize string
    char str[] = "Hello";

    // print string
    printf("%s\n", str);

    int length = 0;
    length = strlen(str);

    // displaying the length of string
    printf("Length of string str is %d", length);

    return 0;
}
`}</pre>
<div class="output">
    <h4>Output:</h4>
    <p>Hello</p>
    <p>Length of string str is 5</p>
</div>
<p>We can see in the above program that strings can be printed using normal <code>printf</code> statements, just like we print any other variable. Unlike arrays, we do not need to print a string character by character.</p>
<p><strong>Note:</strong> The C language does not provide an inbuilt data type for strings, but it has an access specifier <code>"%s"</code> which can be used to print and read strings directly.</p>

<h3>Read a String Input From the User</h3>
<p>The following example demonstrates how to take string input using the <code>scanf()</code> function in C.</p>
<pre>{`
#include <stdio.h>

int main()
{
    // declaring string
    char str[50];

    // reading string
    scanf("%s", str);

    // print string
    printf("%s", str);

    return 0;
}
`}</pre>
<div class="output">
    <h4>Input:</h4>
    <p>StudyforStudy</p>
    <h4>Output:</h4>
    <p>StudyforStudy</p>
</div>
<p>You can see in the above program that the string can also be read using a single <code>scanf</code> statement. Also, you might be thinking why we have not used the <code>&</code> sign with the string name <code>str</code> in the <code>scanf</code> statement. To understand this, you will have to recall your knowledge of <code>scanf</code>. We know that the <code>&</code> sign is used to provide the address of the variable to the <code>scanf()</code> function to store the value read in memory. As <code>str[]</code> is a character array, using <code>str</code> without braces <code>'['</code> and <code>']'</code> will give the base address of this string. That’s why we have not used <code>&</code> in this case, as we are already providing the base address of the string to <code>scanf</code>.</p>

<h4>Example of String Input with Whitespace</h4>
<pre>{`
#include <stdio.h>

int main()
{
    char str[20];

    // taking input string
    scanf("%s", str);

    // printing the read string
    printf("%s", str);

    return 0;
}
`}</pre>
<div class="output">
    <h4>Input:</h4>
    <p>Study for Study</p>
    <h4>Output:</h4>
    <p>Study</p>
</div>


            </section>

        </div>
        </>
    );
};
export default Strings;
