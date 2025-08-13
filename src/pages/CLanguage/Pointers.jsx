import React from "react";
import './CLang.css'

const Pointers=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Pointers in C</h1>

            </header>
            <section className="section">
                <h2>Pointers</h2>
<p>A pointer is a variable that stores the memory address of another variable. Instead of holding a direct value, it holds the address where the value is stored in memory. There are 2 important operators that we will use in pointers concepts i.e.</p>
<ul>
    <li><strong>Dereferencing operator (*):</strong> Used to declare a pointer variable and access the value stored in the address.</li>
    <li><strong>Address operator (&):</strong> Used to return the address of a variable or to access the address of a variable to a pointer.</li>
</ul>

<h4>Example 1:</h4>
<pre>{`
#include <stdio.h>

int main()
{
    // taking an integer variable
    int m = 100;

    // pointer variable ptr that stores
    // the address of variable m
    int *ptr = &m;

    // printing the value of variable m
    printf("The Value of Variable m is: %d\n", m);

    // printing the memory address of variable m
    // in hexadecimal format
    printf("The Memory Address of Variable m is: %p\n", &m);

    // printing the value of ptr i.e.
    // printing the memory address of variable m
    // in hexadecimal format using pointer variable
    printf("The Memory Address of Variable m is using ptr: %p\n", ptr);

    return 0;
}
`}</pre>
<div class="output">
    <h4>Output:</h4>
    <p>The Value of Variable m is: 100</p>
    <p>The Memory Address of Variable m is: 0x7ffee1eea79c</p>
    <p>The Memory Address of Variable m is using ptr: 0x7ffee1eea79c</p>
</div>

<h4>Important Points:</h4>
<ul>
    <li><code>%p</code> format specifier is used to print the address stored in pointer variables.</li>
    <li>Printing a pointer with <code>%d</code> format specifier may result in a warning or undefined behavior because the size of a pointer (usually 4 or 8 bytes) may not match that of an integer.</li>
    <li>The memory address format will always be in hexadecimal format (starting with <code>0x</code>).</li>
    <li>C does not use the term “reference” explicitly (unlike C++), “referencing” in C usually refers to obtaining the address of a variable using the address operator (<code>&</code>).</li>
    <li>Pointers are essential for dynamic memory allocation, providing control over memory usage with functions like <code>malloc</code>, <code>calloc</code>, and <code>free</code>.</li>
</ul>

<h4>Example 2:</h4>
<pre>{`
#include <stdio.h>

int main() {
    // An integer variable
    int a = 10;

    // Create a pointer to integer (declaration)
    int *ptr;

    // Store the address of a inside pointer (initialization)
    ptr = &a;

    // Print the content of ptr
    printf("ptr = %p\n", ptr);

    // Get the value pointed by ptr (dereferencing)
    printf("*ptr = %d", *ptr);

    return 0;
}
`}</pre>
<div class="output">
    <h4>Output:</h4>
    <p>ptr = 0x7fffa0757dd4</p>
    <p>*ptr = 10</p>
</div>

<h4>The above demonstration can be understood by dividing it into three steps:</h4>
<ol>
    <li><strong>Pointer Declaration:</strong> To declare a pointer, we use the <code>(*)</code> dereference operator before its name. In pointer declaration, we only declare the pointer but do not initialize it.</li>
    <li><strong>Pointer Initialization:</strong> Pointer initialization is the process where we assign some initial value to the pointer variable. We use the <code>(&)</code> addressof operator to get the memory address of a variable and then store it in the pointer variable.</li>
    <li><strong>Pointer Dereferencing:</strong> Dereferencing a pointer is the process of accessing the value stored in the memory address specified in the pointer. We use the same <code>(*)</code> dereferencing operator that we used in the pointer declaration.</li>
</ol>

<h4>Example 3: C language stores provide a way to store the string as a pointer</h4>
<pre>{`
#include <stdio.h>

int main() {
    // Storing string as pointer
    char *s = "Hi";

    printf("%s", s);
    return 0;
}
`}</pre>
<div class="output">
    <h4>Output:</h4>
    <p>Hi</p>
</div>

<h3>Types of Pointers in C</h3>
<p>Pointers in C can be classified into many different types depending on the data it is pointing to:</p>
<ol>
    <li><strong>Integer Pointers:</strong> Pointers that point to integer values.</li>
    <li><strong>Array Pointer:</strong> Pointers that point to arrays.</li>
    <li><strong>Structure Pointer:</strong> Pointers that point to structures.</li>
    <li><strong>Function Pointers:</strong> Pointers that point to functions.</li>
    <li><strong>Double Pointers:</strong> Pointers that store the memory address of another pointer.</li>
    <li><strong>NULL Pointer:</strong> Pointers that do not point to any memory location.</li>
    <li><strong>Void Pointer:</strong> Pointers that do not have any associated data type.</li>
    <li><strong>Wild Pointers:</strong> Pointers that have not been initialized.</li>
    <li><strong>Constant Pointers:</strong> Pointers that always point to the same memory address.</li>
    <li><strong>Pointer to Constant:</strong> Pointers that point to a constant value that cannot be modified.</li>
</ol>

<h3>Size of Pointers in C</h3>
<p>The size of pointers in C depends on the system architecture:</p>
<ul>
    <li>8 bytes for a 64-bit System</li>
    <li>4 bytes for a 32-bit System</li>
</ul>

<h3>C Pointer Arithmetic</h3>
<p>The Pointer Arithmetic refers to the legal or valid arithmetic operations that can be performed on a pointer. These operations include:</p>
<ul>
    <li>Increment/Decrement by 1</li>
    <li>Addition/Subtraction of Integer</li>
    <li>Subtracting Two Pointers of Same Type</li>
    <li>Comparing/Assigning Two Pointers of Same Type</li>
    <li>Comparing/Assigning with NULL</li>
</ul>

<h3>C Pointers and Arrays</h3>
<p>In C programming language, pointers and arrays are closely related. An array name acts like a pointer constant. The value of this pointer constant is the address of the first element.</p>

<h3>Uses of Pointers in C</h3>
<p>Pointers are widely used in C programming to perform various useful operations:</p>
<ul>
    <li>Pass Arguments by Pointers</li>
    <li>Accessing Array Elements</li>
    <li>Return Multiple Values from Function</li>
    <li>Dynamic Memory Allocation</li>
    <li>Implementing Data Structures</li>
    <li>In System-Level Programming where memory addresses are useful.</li>
    <li>To use in Control Tables.</li>
</ul>

<h3>Advantages of Pointers</h3>
<ul>
    <li>Pointers are used for dynamic memory allocation and deallocation.</li>
    <li>An Array or a structure can be accessed efficiently with pointers.</li>
    <li>Pointers are useful for accessing memory locations.</li>
    <li>Pointers are used to form complex data structures such as linked lists, graphs, trees, etc.</li>
    <li>Pointers reduce the length of the program and its execution time as well.</li>
</ul>

<h3>Disadvantages of Pointers</h3>
<ul>
    <li>Memory corruption can occur if an incorrect value is provided to pointers.</li>
    <li>Pointers are a little bit complex to understand.</li>
    <li>Pointers are majorly responsible for memory leaks in C.</li>
    <li>Pointers are comparatively slower than variables in C.</li>
    <li>Uninitialized pointers might cause a segmentation fault.</li>
</ul>

<h3>Conclusion</h3>
<p>In conclusion, pointers in C are very capable tools and provide C language with its distinguishing features, such as low-level memory access, referencing, etc. But as powerful as they are, they should be used with responsibility as they are one of the most vulnerable parts of the language.</p>


            </section>

        </div>
        </>
    );
};
export default Pointers
