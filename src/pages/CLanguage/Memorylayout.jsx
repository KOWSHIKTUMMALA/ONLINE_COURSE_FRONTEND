import React from "react";
import './CLang.css'

const  Layout=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Memory Layout in C</h1>

            </header>
            <section className="section">
                <h2>Memory Layout</h2>
                <p>The memory layout of a program refers to how the program’s data is stored in the computer memory during its execution. Understanding this layout helps developers manage memory more efficiently and avoid issues such as segmentation faults and memory leaks.</p>

<p>A C program’s memory is organized into specific regions (segments) as shown in the below image, each serving distinct purposes for program execution.</p>

<h3>Different Segments in C Program’s Memory</h3>

<h4>1. Text Segment</h4>

<p>The <b>text segment</b> (also known as <b>code segment</b>) is where the executable code of the program is stored. It contains the compiled machine code of the program’s functions and instructions. This segment is usually read-only and stored in the lower parts of the memory to prevent accidental modification of the code while the program is running.</p>

<p>The size of the text segment is determined by the number of instructions and the complexity of the program.</p>

<h4>2. Data Segment</h4>

<p>The <b>data segment</b> stores global and static variables that are created by the programmer. It is present just above the code segment of the program. It can be further divided into two parts:</p>

<h4>A. Initialized Data Segment</h4>

<p>As the name suggests, it is the part of the data segment that contains global and static variables that have been initialized by the programmer. For example,</p>

<pre>{`
int a = 10;
static int b = 20;
`}</pre>

<p>The above variables a and b will be stored in the Initialized Data Segment.</p>

<h4>B. Uninitialized Data Segment (BSS)</h4>

<p>Uninitialized data segment often called the “bss” segment, named after an ancient assembler operator, that stood for “Block Started by Symbol” contains global and static variables that are not initialized by the programmer. These variables are automatically initialized to zero at runtime by the operating system. For example, the below shown variables will be stored in this segment:</p>

<pre>{`
int a;
static int b;
`}</pre>

<h4>3. Heap Segment</h4>

<p>Heap segment is where dynamic memory allocation usually takes place. The heap area begins at the end of the BSS segment and grows towards the larger addresses from there. It is managed by functions such as malloc(), realloc(), and free() which in turn may use the brk and sbrk system calls to adjust its size.</p>

<p>The heap segment is shared by all shared libraries and dynamically loaded modules in a process. For example, the variable pointed by <code>ptr</code> will be stored in the heap segment:</p>

<pre>{`
int *ptr = (int*) malloc(sizeof(int) * 10);
`}</pre>

<h4>4. Stack Segment</h4>

<p>The <b>stack</b> is a region of memory used for <b>local variables</b> and function call management. Each time a function is called, a <b>stack frame</b> is created to store local variables, function parameters, and return addresses. This stack frame is stored in this segment.</p>

<p>The stack segment is generally located in the higher addresses of the memory and grows opposite to heap. They adjoin each other so when stack and heap pointer meet, free memory of the program is said to be exhausted.</p>

<p>Example of data stored in stack segment:</p>

<pre>{`
void function() {
    int local_var = 10;  // Stored in the stack
}
`}</pre>

<h3>Practical Examples</h3>

<p>The size(1) command in MinGW reports the sizes (in bytes) of the text, data, and bss segments of a binary file.</p>

<h3>1. Check the following simple C program</h3>

<pre>{`
#include <stdio.h>
int main() {
    return 0;
}
`}</pre>

<pre>{`
gcc memory-layout.c -o memory-layout
size memory-layout
`}</pre>

<div class="output">
<h4>Output</h4>
<p>text data bss dec hex filename<br/>960 248 8 1216 4c0 memory-layout</p>
</div>

<h3>2. Let us add one global variable in the program, now check the size of bss</h3>

<pre>{`
#include <stdio.h>
// Uninitialized variable stored in bss
int global;
int main() {
    return 0;
}
`}</pre>

<pre>{`
gcc memory-layout.c -o memory-layout
size memory-layout
`}</pre>

<div class="output">
<h4>Output</h4>
<p>text data bss dec hex filename<br/>960 248 12 1220 4c4 memory-layout</p>
</div>

<h3>3. Let us add one static variable which is also stored in bss.</h3>

<pre>{`
#include <stdio.h>
// Uninitialized variable stored in bss
int global;
int main() {
    // Uninitialized static variable stored in bss
    static int i;
    return 0;
}
`}</pre>

<pre>{`
gcc memory-layout.c -o memory-layout
size memory-layout
`}</pre>

<div class="output">
<h4>Output</h4>
<p>text data bss dec hex filename<br/>960 248 16 1224 4c8 memory-layout</p>
</div>

<h3>4. Let us initialize the static variable which will then be stored in the Data Segment (DS)</h3>

<pre>{`
#include <stdio.h>
// Uninitialized variable stored in bss
int global;
int main(void) {
    // Initialized static variable stored in DS
    static int i = 100;
    return 0;
}
`}</pre>

<pre>{`
gcc memory-layout.c -o memory-layout
size memory-layout
`}</pre>

<div class="output">
<h4>Output</h4>
<p>text data bss dec hex filename<br/>960 252 12 1224 4c8 memory-layout</p>
</div>

<h3>5. Let us initialize the global variable which will then be stored in the Data Segment (DS)</h3>

<pre>{`
#include <stdio.h>
// initialized global variable stored in DS
int global = 10;
int main() {
    // Initialized static variable stored in DS
    static int i = 100;
    return 0;
}
`}</pre>

<pre>{`
gcc memory-layout.c -o memory-layout
size memory-layout
`}</pre>

<div class="output">
<h4>Output</h4>
<p>text data bss dec hex filename<br/>960 256 8 1224 4c8 memory-layout</p>
</div>

<h3>Example to Verify the Memory Layout</h3>

<pre>{`
#include <stdio.h>
#include <stdlib.h>
// Global variable
int gvar = 66;
// Constant global variable
const int cgvar = 1010;
// uninitialized global variable
int ugvar;
void foo() {
    // Local variable
    int lvar = 1;
    printf("Address of lvar:\\t%p", (void*)&lvar);
}
int main() {
    // Heap variable
    int *hvar = (int*)malloc(sizeof(int));

    // Checking and comparing address of different
    // elements of program that should be stored in
    // different segements of the memory
    printf("Address of foo:\\t\\t%p\\n", (void*)&foo);
    printf("Address of cgvar:\\t%p\\n", (void*)&cgvar);
    printf("Address of gvar:\\t%p\\n", (void*)&gvar);
    printf("Address of ugvar:\\t%p\\n", (void*)&ugvar);
    printf("Address of hvar:\\t%p\\n", (void*)hvar);
    foo();
    return 0;
}
`}</pre>

<div class="output">
<h4>Output</h4>
<p>Address of foo: 0x60d723996189<br/>Address of cgvar: 0x60d723997004<br/>Address of gvar: 0x60d723999010<br/>Address of ugvar: 0x60d723999018<br/>Address of hvar: 0x60d73b9072a0<br/>Address of lvar: 0x</p>
</div>


            </section>

        </div>
        </>
    );
};
export default Layout;
