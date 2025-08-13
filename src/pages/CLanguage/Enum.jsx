import React from "react";
import './CLang.css'

const Enum =()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Enumeration (or enum) in C</h1>

            </header>
            <section className="section">
            <h3>Enumeration (or enum)</h3>

<p>Enumeration (or enum) is a user defined data type in C. It is mainly used to assign names to integral constants, the names make a program easy to read and maintain.</p>

<p>The keyword ‘enum’ is used to declare new enumeration types in C and C++. Enums in C allow you to assign names to integral constants, making code more readable.</p>

<p>Following is an example of enum declaration.</p>

<pre>{`
// The name of enumeration is "flag" and the constant
// are the values of the flag. By default, the values
// of the constants are as follows:
// constant1 = 0, constant2 = 1, constant3 = 2 and 
// so on.
enum flag{constant1, constant2, constant3, ....... };
`}</pre>

<p>Variables of type enum can also be defined. They can be defined in two ways:</p>

<pre>{`
// In both of the below cases, "day" is 
// defined as the variable of type week. 

enum week{Mon, Tue, Wed};
enum week day;

// Or

enum week{Mon, Tue, Wed}day;
`}</pre>

<pre>{`
// An example program to demonstrate working// of enum in C
#include<stdio.h>
enum week{Mon, Tue, Wed, Thur, Fri, Sat, Sun};
int main(){
    enum week day;
    day = Wed;
    printf("%d",day);
    return 0;
}
`}</pre>

<div class="output">
<h4>Output</h4>
<p>2</p>
</div>

<p>In the above example, we declared “day” as the variable and the value of “Wed” is allocated to day, which is 2. So as a result, 2 is printed.</p>

<p>Another example of enumeration is:</p>

<pre>{`
// Another example program to demonstrate working// of enum in C
#include<stdio.h>
enum year{Jan, Feb, Mar, Apr, May, Jun, Jul,
          Aug, Sep, Oct, Nov, Dec};
int main(){
   int i;
   for (i=Jan; i<=Dec; i++)
            printf("%d ", i);
         return 0;
}
`}</pre>

<div class="output">
<h4>Output</h4>
<p>0 1 2 3 4 5 6 7 8 9 10 11</p>
</div>

<p>In this example, the for loop will run from i = 0 to i = 11, as initially the value of i is Jan which is 0 and the value of Dec is 11.</p>

<h3>Interesting facts about initialization of enum.</h3>

<ol>
    <li>
        <p>Two enum names can have same value. For example, in the following C program both ‘Failed’ and ‘Freezed’ have same value 0.</p>
        <pre>{`
#include <stdio.h>
enum State {Working = 1, Failed = 0, Freezed = 0};
int main(){
   printf("%d, %d, %d", Working, Failed, Freezed);
   return 0;
}
`}</pre>
        <div class="output">
            <h4>Output</h4>
            <p>1, 0, 0</p>
        </div>
    </li>
    <li>
        <p>If we do not explicitly assign values to enum names, the compiler by default assigns values starting from 0. For example, in the following C program, sunday gets value 0, monday gets 1, and so on.</p>
        <pre>{`
#include <stdio.h>
enum day {sunday, monday, tuesday, wednesday, thursday, friday, saturday};
int main(){
    enum day d = thursday;
    printf("The day number stored in d is %d", d);
    return 0;
}
`}</pre>
        <div class="output">
            <h4>Output</h4>
            <p>The day number stored in d is 4</p>
        </div>
    </li>
    <li>
        <p>We can assign values to some name in any order. All unassigned names get value as value of previous name plus one.</p>
        <pre>{`
#include <stdio.h>
enum day {sunday = 1, monday, tuesday = 5,
          wednesday, thursday = 10, friday, saturday};
int main(){
    printf("%d %d %d %d %d %d %d", sunday, monday, tuesday,
            wednesday, thursday, friday, saturday);
    return 0;
}
`}</pre>
        <div class="output">
            <h4>Output</h4>
            <p>1 2 5 6 10 11 12</p>
        </div>
    </li>
    <li>
        <p>The value assigned to enum names must be some integral constant, i.e., the value must be in range from minimum possible integer value to maximum possible integer value.</p>
    </li>
    <li>
        <p>All enum constants must be unique in their scope. For example, the following program fails in compilation.</p>
        <pre>{`
enum state  {working, failed};
enum result {failed, passed};
int main()  { return 0; }
`}</pre>
        <div class="output">
            <h4>Output</h4>
            <p>Compile Error: 'failed' has a previous declaration as 'state failed'</p>
        </div>
    </li>
</ol>

<h3>Exercise:</h3>

<h4>Program 1:</h4>
<pre>{`
#include <stdio.h>
enum day {sunday = 1, tuesday, wednesday, thursday, friday, saturday};
int main(){
    enum day d = thursday;
    printf("The day number stored in d is %d", d);
    return 0;
}
`}</pre>

<h4>Program 2:</h4>
<pre>{`
#include <stdio.h>
enum State {WORKING = 0, FAILED, FREEZED};
enum State currState = 2;
enum State FindState() {
    return currState;
}
int main() {
   (FindState() == WORKING)? printf("WORKING"): printf("NOT WORKING");
   return 0;
}
`}</pre>

<h3>Enum vs Macro</h3>

<p>We can also use macros to define names constants. For example we can define ‘Working’ and ‘Failed’ using following macro.</p>

<pre>{`
#define Working 0
#define Failed 1
#define Freezed 2
`}</pre>

<p>There are multiple advantages of using enum over macro when many related named constants have integral values.</p>

<ol>
    <li>Enums follow scope rules.</li>
    <li>Enum variables are automatically assigned values.</li>
</ol>

<pre>{`
 enum state  {Working, Failed, Freezed};
`}</pre>


            </section>

        </div>
        </>
    );
};
export default Enum;
