import React from "react";
import './CLang.css'

const Mainfun=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Main Function in C</h1>

            </header>
            <section className="section">
                <h2>Main Function</h2>
                <p>The main function is the entry point of a C program. It is a user-defined function where the execution of a program starts. Every C program must contain it, and its return value typically indicates the success or failure of the program.</p>

    <h3>Example</h3>
    <pre>{`
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
    `}</pre>
<div className="output">
    <h4>Output:</h4>
    <p>Hello, World!
    </p>
</div>
    

    <h3>Explanation</h3>
    <p>This basic example demonstrates a simple <code>main()</code> function. It prints "Hello, World!" and returns 0 to indicate that the program executed successfully.</p>

    <h3>What Happens if We Use a Different Function Name?</h3>
    <pre>{`
#include <stdio.h>

int func() {
    printf("Hello, World!\n");
    return 0;
}
    `}</pre>

<div className="output">
    <h4>Output:</h4>
    <p>/usr/lib/x86_64-linux-gnu/crt1.o: In function '_start':<br/>
(.text+0x20): undefined reference to 'main'<br/>
collect2: error: ld returned 1 exit status
    </p>
</div>
    

    <h3>Syntax of main()</h3>
    <p>The syntax of the main() function can be written in two common forms:</p>

    <h3>Without Command-Line Arguments</h3>
    <pre>{`
return_type main() {
    // Code goes here
    // Returning
}
    `}</pre>

    <p>Examples:</p>
    <pre>{`
int main(){}
int main(void){}
main(){}
void main(){}
main(void){}
void main(void){}
    `}</pre>

    <p><strong>Note:</strong> The <code>void</code> return type is supported but generally not recommended, as the OS may not get any notification about the program execution if no value is returned.</p>

    <h3>With Command-Line Arguments</h3>
    <pre>{`
return_type main(int argc, char *argv[]) {
    // Code goes here….
}
    `}</pre>

    <h3>Here:</h3>
    <ul>
        <li><strong>argc:</strong> Stands for ARGument Count, it is an integer variable that stores the number of command-line arguments passed.</li>
        <li><strong>argv:</strong> Stands for ARGument Vector, it is an array of character pointers listing all the arguments.</li>
    </ul>

    <h3>Types of main() in C</h3>
    <p>There are 3 variations of <code>main()</code> in C:</p>
    <ol>
        <li><strong>main() with No Arguments and void Return Type – Not Recommended</strong></li>
        <li><strong>main() with No Arguments and int Return Type – Recommended</strong></li>
        <li><strong>main() with Command Line Arguments</strong></li>
    </ol>

    <h3>1. main() with No Arguments and void Return Type – Not Recommended</h3>
    <p>This type of <code>main()</code> is rare and not commonly used. It doesn’t accept any command-line arguments and does not return any value.</p>

    <pre>{`
#include <stdio.h>

// Can also be 'void main(void)'
void main() {   
    printf("Hello!");
}
    `}</pre>

<div className="output">
    <h4>Output:</h4>
    <p>Hello!
    </p>
</div>
    

    <p><strong>Note:</strong> The return type of the main function according to the C standard should be <code>int</code> only.</p>

    <h3>2. main() with No Arguments and int Return Type – Recommended</h3>
    <p>This is the most commonly used form of <code>main()</code> in C.</p>

    <pre>{`
#include <stdio.h>

// Can be 'int main(void)' or 'main(void)'
// or just 'main()'
int main() {
    printf("Hello!");
    return 0;
}
    `}</pre>
<div className="output">
    <h4>Output:</h4>
    <p>Hello!
    </p>
</div>
    

    <h3>3. main() with Command Line Arguments</h3>
    <p>This version of <code>main()</code> is used when a program needs to accept command-line arguments. The arguments are passed through <code>argc</code> (argument count) and <code>argv</code> (argument vector).</p>

    <pre>{`
#include <stdio.h>

int main(int argc, char* argv[]) {
    // Printing the count of arguments
    printf("The value of argc is %d\n", argc);

    // Printing each argument
    for (int i = 0; i < argc; i++) {
        printf("%s \n", argv[i]);
    }

    return 0;
}
    `}</pre>


            </section>

        </div>
        </>
    );
};
export default Mainfun;