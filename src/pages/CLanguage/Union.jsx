import React from "react";
import './CLang.css'

const  Union=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Union in C</h1>

            </header>
            <section className="section">
                <h2>Union</h2>
                <p>In C, union is a user-defined data type that can contain elements of the different data types just like structure. But unlike structures, all the members in the C union are stored in the same memory location. Due to this, only one member can store data at the given point in time.</p>

<p>Let’s take a look at an example:</p>

<pre>{`
// Union definition
union A {
    int i;
    float f;
    char s[20];
};

int main() {
    union A a;

    // Storing an integer
    a.i = 10;
    printf("data.i = %d\\n", a.i);

    // Storing a float
    a.f = 220.5;
    printf("data.f = %.2f\\n", a.f);

    // Storing a string
    strcpy(a.s, "GfG");
    printf("data.s = %s\\n", a.s);

    return 0;
}
`}</pre>

<div class="output">
<h4>Output</h4>
<p>data.i = 10<br/>data.f = 220.50<br/>data.s = GfG</p>
</div>

<h3>Syntax of Union in C</h3>

<p>The syntax of union can be defined into two parts:</p>

<h4>C Union Declaration</h4>

<p>In this part, we only declare the template of the union, i.e., we only declare the members’ names and data types along with the name of the union. No memory is allocated to the union in the declaration.</p>

<pre>{`
union name {
    type1 member1;
    type2 member2;
    .
    .
};
`}</pre>

<h4>Create a Union Variable</h4>

<p>We need to define a variable of the union type to start using union members. There are two methods using which we can define a union variable:</p>

<h4>Creating Union Variable with Declaration</h4>

<pre>{`
union name{
    type member1;
    type member2;
    …
} var1, var2, …;
`}</pre>

<h4>Creating Union Variable after Declaration</h4>

<pre>{`
union name var1, var2, var3…;
`}</pre>

<p>where name is the name of an already declared union.</p>

<h3>Access Union Members</h3>

<p>We can access the members of a union by using the ( . ) dot operator just like structures.</p>

<pre>{`
var1.member1;
`}</pre>

<p>where var1 is the union variable and member1 is the member of the union.</p>

<h3>Initialize Union</h3>

<p>The initialization of a union is the initialization of its members by simply assigning the value to it.</p>

<pre>{`
var1.member1 = val;
`}</pre>

<p>One important thing to note here is that only one member can contain some value at a given instance of time.</p>

<h3>Size of Union</h3>

<p>The size of the union will always be equal to the size of the largest member of the union. All the less-sized elements can store the data in the same space without any overflow. Let’s take a look at the code example:</p>

<pre>{`
#include <stdio.h>

// Declaring multiple unions
union A{
    int x;
    char y;
};

union B{
    int arr[10];
    char y;
};

int main() {
    // Finding size using sizeof() operator
    printf("Sizeof A: %ld\\n", sizeof(union A));
    printf("Sizeof B: %ld\\n", sizeof(union B));

    return 0;
}
`}</pre>

<div class="output">
<h4>Output</h4>
<p>Sizeof A: 4<br/>Sizeof B: 40</p>
</div>

<h3>Nested Union</h3>

<p>In C, we can define a union inside another structure or union. This is called nested union and is commonly used when you want to efficiently organize and access related data while sharing memory among its members.</p>

<h4>Syntax</h4>

<pre>{`
struct/union … {
    mem1…
    union name {
        type1 member1
        type2 member2
        .
        .
    }nested_member_name;
};
`}</pre>

<p>As we can see, we have to create a variable of the nested union for it to be usable. Due to this, we can also skip name of the union and only name a variable of it. This type of unions are called Anonymous Unions.</p>

<h4>Access Nested Union Member</h4>

<p>The union members can be accessed using dot operator, but we have to use it multiple times:</p>

<pre>{`
outer_union . inner_union . member
`}</pre>

<p>Let’s take a look at a nested union example:</p>

<pre>{`
#include <stdio.h>

// Define a structure containing a nested union
struct Employee {
    char name[50];
    int id;

    union {
        // Hourly rate for part-time employees
        float hourlyRate;
        // Monthly salary for full-time employees
        float salary;
    } payment;
};

int main() {
    struct Employee e1;

    // Assign details for a part-time employee
    snprintf(e1.name, sizeof(e1.name), "Rahul");
    e1.id = 101;
    e1.payment.hourlyRate = 300;

    printf("Employee 1: %s (ID: %d)\\n", e1.name, e1.id);
    printf("Hourly Rate: Rs %.2f", e1.payment.hourlyRate);

    return 0;
}
`}</pre>

<div class="output">
<h4>Output</h4>
<p>Employee 1: Rahul (ID: 101)<br/>Hourly Rate: Rs 300.00</p>
</div>

<h3>Structure vs Union</h3>

<p>The following table lists the key difference between the structure and union in C:</p>

<table>
    <tr>
        <th>Structure</th>
        <th>Union</th>
    </tr>
    <tr>
        <td>The size of the structure is equal to or greater than the total size of all of its members.</td>
        <td>The size of the union is the size of its largest member.</td>
    </tr>
    <tr>
        <td>The structure can contain data in multiple members at the same time.</td>
        <td>Only one member can contain data at the same time.</td>
    </tr>
    <tr>
        <td>It is declared using the struct keyword.</td>
        <td>It is declared using the union keyword.</td>
    </tr>
</table>


            </section>

        </div>
        </>
    );
};
export default Union;
