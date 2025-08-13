import React from 'react';
import './CLang.css';
const Keywords= () => {
    return (
        <>
            <div>
                <header className="header">
                    <h1>Keywords in C</h1>
                </header>


                <section className="section" id="Keywords in c">
                    <h2>Keywords in C</h2>
                    <p>In C Programming language, there are many rules so to avoid different types of errors. One of such rule is not able to declare variable names with auto, long, etc. This is all because these are keywords. Let us check all keywords in C language.</p>
               
                    <h3>What are Keywords?</h3>
                    <p>Keywords are predefined or reserved words that have special meanings to the compiler. These are part of the syntax and cannot be used as identifiers in the program. A list of keywords in C or reserved words in the C programming language are mentioned below:</p>
                    <table>
                        <tr>
                            <td>auto</td>
                            <td>break</td>
                            <td>case</td>
                            <td>char</td>
                            <td>const</td>
                            <td>continue</td>
                            <td>default</td>
                            <td>do</td>
                        </tr>
                        <tr>
                            <td>double</td>
                            <td>else</td>
                            <td>enum</td>
                            <td>extern</td>
                            <td>float</td>
                            <td>for</td>
                            <td>goto</td>
                            <td>if</td>
                        </tr>
                        <tr>
                            <td>int</td>
                            <td>long</td>
                            <td>register</td>
                            <td>return</td>
                            <td>shot</td>
                            <td>signed</td>
                            <td>sizeof</td>
                            <td>static</td>
                        </tr>
                        <tr>
                            <td>struct</td>
                            <td>switch</td>
                            <td>typedef</td>
                            <td>union</td>
                            <td>unsigned</td>
                            <td>void</td>
                            <td>volatile</td>
                            <td>while</td>
                        </tr>
                    </table>
                
                    <h3>auto</h3>
                    <p>auto is the default storage class variable that is declared inside a function or a block. auto variables can only be accessed within the function/block they are declared. By default, auto variables have garbage values assigned to them. Automatic variables are also called local variables as they are local to a function. </p>
                    <pre>{`auto int num;`}</pre>
                    <p>Here num is the variable of the storage class auto and its type is int. Below is the C program to demonstrate the auto keyword:</p>
                    <pre>
                        {`
// C program to demonstrate 
// auto keyword
#include <stdio.h>

int printvalue()
{
  auto int a = 10;
  printf("%d", a);
}

// Driver code
int main() 
{
  printvalue();
  return 0;
}
`}
</pre>
<div className="output">
<h4>Output:</h4>
<p>10</p>
</div>
<h3>break and continue</h3>
<p>The break statement is used to terminate the innermost loop. It generally terminates a loop or a break statement. The continue statement skips to the next iteration of the loop. Below is the C program to demonstrate break and continue in C:</p>
<pre>
    {
        `// C program to show use 
// of break and continue
#include <stdio.h>

// Driver code
int main()
{
  for (int i = 1; i <= 10; i++) 
  {
    if (i == 2) 
    {
      continue;
    }
    if (i == 6) 
    {
      break;
    }
    printf("%d ", i);
  }
  return 0;
}
`
    }
</pre>
<div className="output">
<h4>Output:</h4>
<p>1 3 4 5 </p>
</div>
<h3>switch, case, and default</h3>
<p>The switch statement in C is used as an alternate to the if-else ladder statement. For a single variable i.e, switch variable it allows us to execute multiple operations for different possible values of a single variable. </p>
<pre>
    {
        `switch(Expression)
{
    case '1': // operation 1
            break;
    case:'2': // operation 2
            break;
    default: // default statement to be executed 
}
`
    }
</pre>
<p>Below is the C program to demonstrate the switch case statement:</p>
<pre>
    {
        `// C program to demonstrate 
// switch case statement
#include <stdio.h>

// Driver code
int main() {
  int i = 4;
  switch (i) {
    case 1: 
      printf("Case 1\n");break;
    case 2:
      printf("Case 2\n");break;
    case 3:
      printf("Case 3\n");break;
    case 4:
      printf("Case 4\n");break;
    default:
      printf("Default\n");break;
  }
}
`
    }
</pre>

<div className="output">
<h4>Output:</h4>
<p>Case 4</p>
</div>

<h3>Char</h3>
<p>char keyword in C is used to declare a character variable in the C programming language.</p>
<pre>
    {
        `char x = 'D';
`
    }
</pre>
<p>Below is the C program to demonstrate the char keyword:</p>
<pre>
    {
        `// C program to demonstrate 
// char keyword
#include <stdio.h>

// Driver code
int main() {
  char c = 'a';
  printf("%c", c);
  return 0;
}
`
    }
</pre>
<div className="output">
<h4>Output:</h4>
<p>a</p>
</div>

<h3>Const</h3>
<p>The const keyword defines a variable who’s value cannot be changed.</p>
<pre>
    {
        `const int num = 10;
`
    }
</pre>
<p>Below is the C program to demonstrate the const keyword:</p>
<pre>
    {
        `// C program to demonstrate 
// const keyword
#include <stdio.h>

// Driver code
int main() {
  const int a = 11;
  a = a + 2;
  printf("%d", a);
  return 0;
}
`
    }
</pre>
<div className="output">
<h4>Output:</h4>
<p>error: assignment of read-only variable 'a'<br/>
a = a + 2;

</p>
</div>


<h3>do</h3>
<p>The do statement is used to declare a do-while loop. A do-while loop is a loop that executes once, and then checks it’s condition to see if it should continue through the loop. After the first iteration, it will continue to execute the code while the condition is true.</p>
<p>Below is the C program to demonstrate a do-while loop.</p>
<pre>
    {
        `// C program to demonstrate
// do-while keyword
#include <stdio.h>

// Driver code
int main() 
{
  int i = 1;
  do {
    printf("%d ", i);
    i++;
  } while(i <= 5);
  
  return 0;
}
`
    }
</pre>
<div className="output">
<h4>Output:</h4>
<p>1 2 3 4 5 </p>
</div>

<h3>double and float</h3>
<p>The doubles and floats are datatypes used to declare decimal type variables. They are similar, but doubles have 15 decimal digits, and floats only have 7.</p>
<p>Below is the C program to demonstrate double float keyword:</p>
<pre>
    {
        `// C program to demonstrate 
// double float keyword
#include <stdio.h>

// Driver code
int main() {
  float f = 0.3;
  double d = 10.67;
  printf("Float value: %f\n", f);
  printf("Double value: %f\n", d);
  return 0;
}
`
    }
</pre>
<div className="output">
<h4>Output:</h4>
<p>Float value: 0.300000<br/>
Double value: 10.670000</p>
</div>


<h3>if-else</h3>
<p>The if-else statement is used to make decisions, where if a condition is true, then it will execute a block of code; if it isn’t true (else), then it will execute a different block of code.</p>
<pre>
    {
        `if(marks == 97) {
    // if marks are 97 then will execute this block of code
}
else {
    // else it will execute this block of code
}
`
    }
</pre>

<p>Below is the C program to demonstrate an if-else statement:</p>

<pre>
    {
        `// C program to demonstrate 
// if-else keyword
#include <stdio.h>

// Driver code
int main() 
{
  int a = 10;
  if(a < 11)
  {
    printf("A is less than 11");
  }
  else
  {
    printf("A is equal to or "
           "greater than 11");
  }  
  return 0;
}
`
    }
</pre>
<div className="output">
<h4>Output:</h4>
<p>A is less than 11</p>
</div>  


<h3>enum</h3>
<p>The enum keyword is used to declare an enum (short for enumeration). An enum is a user-defined datatype, which holds a list of user-defined integer constants. By default, the value of each constant is it’s index (starting at zero), though this can be changed. You can declare an object of an enum and can set it’s value to one of the constants you declared before. Here is an example of how an enum might be used:</p>
<pre>
    {
        `// An example program to 
// demonstrate working of 
// enum in C
#include<stdio.h>

// enum declaration:
enum week{Mon, Tue, Wed, Thur, Fri, Sat, Sun};

// Driver code
int main()
{
//object of the enum (week), called day
  enum week day;
  day = Wed;
  printf("%d", day);
  return 0;
}
`
    }
</pre>
<div className="output">
<h4>Output:</h4>
<p>2</p>
</div>  

<h3>extern</h3>
<p>The extern keyword is used to declare a variable or a function that has an external linkage outside of the file declaration.</p>
<pre>
    {
        `#include <stdio.h>

extern int a;

int main(){ 
  
    printf("%d", a);

      return 0;
}
`
    }
</pre>

<h3>for</h3>
<p>The “for” keyword is used to declare a for-loop. A for-loop is a loop that is specified to run a certain amount of times.</p>
<p>Below is the C program to demonstrate a for-loop: </p>
<pre>
    {
        `// C program to demonstrate 
// for keyword
#include <stdio.h>

// Driver code
int main()
{
  for (int i = 0; i < 5; i++) 
  {
    printf("%d ", i);
  }
  return 0;
}
`
    }
</pre>
<div className="output">
<h4>Output:</h4>
<p>0 1 2 3 4</p>
</div> 

<h3>goto</h3>
<p>The goto statement is used to transfer the control of the program to the given label. It is used to jump from anywhere to anywhere within a function.</p>
<p>Below is the C program to demonstrate the goto keyword:</p>
<pre>
    {
        `// C program demonstrate
// goto keyword
#include <stdio.h>

// Function to print numbers
// from 1 to 10
void printNumbers() {
    int n = 1;

label:
    printf("%d ", n);
    n++;
    if (n <= 10) goto label;
}

// Driver code
int main(){
    printNumbers();
    return 0;
}
`
    }
</pre>
<div className="output">
<h4>Output:</h4>
<p>1 2 3 4 5 6 7 8 9 10 </p>
</div> 


<h3>int</h3>
<p>int keyword is used in a type declaration to give a variable an integer type. In C, the integer variable must have a range of at least -32768 to +32767. </p>
<p>Example:</p>
<pre>
    {
        'int x=10;'
    }
</pre>
<p>Below is the C program to show the int keyword:</p>
<pre>
    {
        `// C program to demonstrate
// int keyword
#include <stdio.h>

void sum() {
    int a = 10, b = 20;
    int sum;
    sum = a + b;
    printf("%d", sum);
}

// Driver code
int main() {
    sum();
    return 0;
}
`
    }
</pre>
<div className="output">
<h4>Output:</h4>
<p>30 </p>
</div> 

<h3>short, long, signed, and unsigned</h3>
<p>Different data types also have different ranges up to which they can store numbers. These ranges may vary from compiler to compiler. Below is a list of ranges along with the memory requirement and format specifiers on the <b>32-bit GCC compiler.</b></p>
<table>
    <tr>
        <th>Data Type</th>
        <th>Memory (bytes)</th>
        <th>Range</th>
        <th>Format Specifier</th>
    </tr>
    <tr>
        <td><b>short int </b></td>
        <td>2</td>
        <td>-32,768 to 32,767 </td>
        <td>%hd</td>
    </tr>
    <tr>
        <td><b>unsigned short int</b> </td>
        <td>2</td>
        <td>0 to 65,535</td>
        <td>%hu</td>
    </tr>
    <tr>
        <td><b>unsigned int </b></td>
        <td>4</td>
        <td>0 to 4,294,967,295 </td>
        <td>%u</td>
    </tr>
    <tr>
        <td><b>long int </b></td>
        <td>4</td>
        <td>-2,147,483,648 to 2,147,483,647</td>
        <td>%ld</td>
    </tr>
    <tr>
        <td><b>unsigned long int</b></td>
        <td>4</td>
        <td>0 to 4,294,967,295 </td>
        <td>%lu</td>
    </tr>
    <tr>
        <td><b>long long int</b></td>
        <td>8</td>
        <td>-(2^63) to (2^63)-1 </td>
        <td>%lld</td>
    </tr>
    <tr>
        <td><b>unsigned long long int</b></td>
        <td>8</td>
        <td>0 to 18,446,744,073,709,551,615</td>
        <td>%llu</td>
    </tr>
    <tr>
        <td><b>signed char</b></td>
        <td>1</td>
        <td>-128 to 127</td>
        <td>%c</td>
    </tr>
    <tr>
        <td><b>unsigned char</b></td>
        <td>1</td>
        <td>0 to 255</td>
        <td>%c</td>
    </tr>
    <tr>
        <td><b>long double</b></td>
        <td>16</td>
        <td>3.4E-4932 to 1.1E+4932</td>
        <td>%Lf</td>
    </tr>
</table>

<h3>return</h3>
<p>The return statement returns a value to where the function was called.</p>
<p>Example:</p>
<pre>
    {
        `return x;`
    }
</pre>
<p>Below is the C program to demonstrate the return keyword:</p>
<pre>
    {
        `// C program to demonstrate
// return keyword
#include <stdio.h>
int sum(int x, int y) {
  int sum;
  sum = x + y;
  return sum;
}

// Driver code
int main() {
  int num1 = 10;
  int num2 = 20;
  printf("Sum: %d", 
          sum(num1, num2));
  return 0;
}
`
    }
</pre>
<div className="output">
<h4>Output:</h4>
<p>Sum: 30 </p>
</div> 

<h3>sizeof</h3>
<p>sizeof is a keyword that gets the size of an expression, (variables, arrays, pointers, etc.) in bytes.</p>
<p>Example:</p>
<pre>
    {`sizeof(char);
sizeof(int);
sizeof(float); in bytes.`
    }
</pre>
<p>Below is the C program to demonstrate sizeof keyword:</p>
<pre>
    {
        `// C program to demonsstrate 
// sizeof keyword
#include <stdio.h>

// Driver code
int main() { 
  int x = 10;
  printf("%d", sizeof(x));
  return 0;
}
`
    }
</pre>
<div className="output">
<h4>Output:</h4>
<p>4</p>
</div> 

<h3>register</h3>
<p>Register variables tell the compiler to store variables in the CPU register instead of memory. Frequently used variables are kept in the CPU registers for faster access. </p>
<p>Example:</p>
<pre>
    {
        `register char c = 's'; 
`
    }
</pre>

<h3>static</h3>
<p>The static keyword is used to create static variables. A static variable is not limited by a scope and can be used throughout the program. It’s value is preserved even after it’s  scope.</p>
<p>Example:</p>
<pre>
    {
        `static int num;
`
    }
</pre>

<h3>struct</h3>
<p>The struct keyword in C programming language is used to declare a structure. A structure is a list of variables, (they can be of different data types), which are grouped together under one data type.</p>
<p>Example:</p>
<pre>
    {`struct Geek {
    char name[50];
    int num;
    double var;
};`
    }
</pre>

<h3>typedef</h3>
<p>The typedef keyword in C programming language is used to define a data type with a new name in the program. typedef keyword is used to make our code more readable.</p>
<p>Example:</p>
<pre>
    {
        `typedef long num
`
    }
</pre>
<p>In this example we have changed the datatype name of “long” to “num”.</p>

<h3>union</h3>
<p>The union is a user-defined data type. All data members which are declared under the union keyword share the same memory location.</p>
<pre>
    {
        `union GeekforGeeks {
    int x;
    char s;
} obj;`
    }
</pre>

<h3>void</h3>
<p>The void keyword means nothing i.e, NULL value. When the function return type is used as the void, the keyword void specifies that it has no return value.</p>
<p>Example:</p>
<pre>
    {
        `void fun() {
    // program
}`
    }
</pre>

<h3>volatile</h3>
<p>The volatile keyword is used to create volatile objects. Objects which are declared volatile are omitted from optimization as their values can be changed by code outside the scope of the current code at any point in time.

</p>
<p>Example:</p>
<pre>
    {
        `const volatile marks = 98;
`
    }
</pre>
<p>marks are declared constant so they can’t be changed by the program. But hardware can change it as they are volatile objects.

</p>

<h3>while</h3>
<p>The while keyword is used to declare a while loop that runs till the given condition is true.

</p>
<p>Example:</p>
<pre>
    {
        `#include <stdio.h>

int main() {
    int i = 0;

    // While loop that execute till i is less than 3
    while (i < 3) {
        printf("Hi\n");
        i++;
    }
  
    return 0;
}
`
    }
</pre>
<div className="output">
<h4>Output:</h4>
<p>Hi<br/>
Hi<br/>
Hi<br/></p>
</div> 
</section>
</div>
</>
    );
};
export default Keywords