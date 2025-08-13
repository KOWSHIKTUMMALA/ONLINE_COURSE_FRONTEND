import React from "react";
import './CLang.css';

const Structure = () => {
    return (
        <>
            <div>
                <header className="header">
                    <h1>Structures in C</h1>
                </header>
                <section className="section">
                    <h2>Structures</h2>
                    <p>
                        In C, a structure is a user-defined data type that can be used to group items of possibly different types into a single type. The <code>struct</code> keyword is used to define a structure. The items in the structure are called its members, and they can be of any valid data type.
                    </p>

                    <h4>Example:</h4>
                    <pre>{`
#include <stdio.h>

// Defining a structure
struct A {
    int x;
};

int main() {
    // Creating a structure variable
    struct A a;

    // Initializing member
    a.x = 11;

    printf("%d", a.x);
    return 0;
}
`}</pre>
                    <div className="output">
                        <h4>Output:</h4>
                        <p>11</p>
                    </div>
                    <p>
                        <strong>Explanation:</strong> In this example, a structure <code>A</code> is defined to hold an integer member <code>x</code>. A variable <code>a</code> of type <code>struct A</code> is created, and its member <code>x</code> is initialized to 11 by accessing it using the dot operator. The value of <code>a.x</code> is then printed to the console.
                    </p>

                    <h3>Syntax of Structure</h3>
                    <p>There are two steps to creating a structure in C:</p>
                    <ol>
                        <li>Structure Definition</li>
                        <li>Creating Structure Variables</li>
                    </ol>

                    <h3>Structure Definition</h3>
                    <p>
                        A structure is defined using the <code>struct</code> keyword followed by the structure name and its members. It is also called a structure template or structure prototype, and no memory is allocated to the structure in the declaration.
                    </p>
                    <pre>{`
struct structure_name {
    data_type1 member1;
    data_type2 member2;
    …
};
`}</pre>
                    <ul>
                        <li><code>structure_name</code>: Name of the structure.</li>
                        <li><code>member1, member2, …</code>: Name of the members.</li>
                        <li><code>data_type1, data_type2, …</code>: Type of the members.</li>
                    </ul>
                    <p><strong>Note:</strong> Do not forget the semicolon at the end.</p>

                    <h3>Creating Structure Variable</h3>
                    <p>
                        After structure definition, we have to create a variable of that structure to use it. It is similar to any other type of variable declaration:
                    </p>
                    <pre>{`
struct structure_name var;
`}</pre>
                    <p>
                        We can also declare structure variables with the structure definition:
                    </p>
                    <pre>{`
struct structure_name {
    …
} var1, var2…;
`}</pre>

                    <h3>Basic Operations of Structure</h3>
                    <p>Following are the basic operations commonly used on structures:</p>

                    <h3>1. Access Structure Members</h3>
                    <p>
                        To access or modify members of a structure, we use the <code>(.)</code> dot operator. This is applicable when we are using structure variables directly.
                    </p>
                    <pre>{`
structure_name.member1;
structure_name.member2;
`}</pre>
                    <p>
                        In the case where we have a pointer to the structure, we can also use the arrow operator to access the members:
                    </p>
                    <pre>{`
structure_ptr→member1;
structure_ptr→member2;
`}</pre>

                    <h3>2. Initialize Structure Members</h3>
                    <p>
                        Structure members cannot be initialized with the declaration. For example, the following C program fails in compilation:
                    </p>
                    <pre>{`
struct structure_name {
    data_type1 member1 = value1;  // COMPILER ERROR: cannot initialize members here
    data_type2 member2 = value2;  // COMPILER ERROR: cannot initialize members here
    …
};
`}</pre>
                    <p>
                        The reason for the above error is simple. When a datatype is declared, no memory is allocated for it. Memory is allocated only when variables are created. So there is no space to store the value assigned.
                    </p>
                    <p>We can initialize structure members in 4 ways:</p>
                    <ul>
                        <li><strong>Default Initialization:</strong> By default, structure members are not automatically initialized to 0 or NULL. Uninitialized structure members will contain garbage values. However, when a structure variable is declared with an initializer, all members not explicitly initialized are zero-initialized.</li>
                        <li><strong>Initialization using Assignment Operator:</strong></li>
                    </ul>
                    <pre>{`
struct structure_name str;
str.member1 = value1;
…
`}</pre>
                    <p><strong>Note:</strong> We cannot initialize arrays or strings using the assignment operator after variable declaration.</p>
                    <ul>
                        <li><strong>Initialization using Initializer List:</strong></li>
                    </ul>
                    <pre>{`
struct structure_name str = {value1, value2, value3 …};
`}</pre>
                    <p>
                        In this type of initialization, the values are assigned in sequential order as they are declared in the structure template.
                    </p>
                    <ul>
                        <li><strong>Initialization using Designated Initializer List:</strong> Designated Initialization allows structure members to be initialized in any order. This feature has been added in the C99 standard.</li>
                    </ul>
                    <pre>{`
struct structure_name str = { .member1 = value1, .member2 = value2, .member3 = value3 };
`}</pre>
                    <p><strong>Note:</strong> Designated Initialization is only supported in C, not in C++.</p>

                    <h4>Example of Structure Initialization</h4>
                    <pre>{`
#include <stdio.h>

// Defining a structure to represent a student
struct Student {
    char name[50];
    int age;
    float grade;
};

int main() {
    // Declaring and initializing a structure variable
    struct Student s1 = {"Rahul", 20, 18.5};

    // Designated Initializing another structure
    struct Student s2 = {.age = 18, .name = "Vikas", .grade = 22};

    // Accessing structure members
    printf("%s\t%d\t%.2f\n", s1.name, s1.age, s1.grade);
    printf("%s\t%d\t%.2f\n", s2.name, s2.age, s2.grade);

    return 0;
}
`}</pre>
                    <div className="output">
                        <h4>Output:</h4>
                        <p>Rahul    20    18.50</p>
                        <p>Vikas    18    22.00</p>
                    </div>

                    <h3>3. Copy Structure</h3>
                    <p>
                        Copying a structure is as simple as copying any other variable. For example, <code>s1</code> is copied into <code>s2</code> using the assignment operator:
                    </p>
                    <pre>{`
s2 = s1;
`}</pre>
                    <p>
                        However, this method only creates a shallow copy of <code>s1</code>. If the structure <code>s1</code> has some dynamic resources allocated by <code>malloc</code>, and it contains a pointer to that resource, then only the pointer will be copied to <code>s2</code>. If the dynamic resource is also needed, it has to be copied manually (deep copy).
                    </p>

                    <h4>Example of Copying Structure</h4>
                    <pre>{`
#include <stdio.h>
#include <stdlib.h>

struct Student {
    int id;
    char grade;
};

int main() {
    struct Student s1 = {1, 'A'};

    // Create a copy of student s1
    struct Student s1c = s1;

    printf("Student 1 ID: %d\n", s1c.id);
    printf("Student 1 Grade: %c", s1c.grade);

    return 0;
}
`}</pre>
                    <div className="output">
                        <h4>Output:</h4>
                        <p>Student 1 ID: 1</p>
                        <p>Student 1 Grade: A</p>
                    </div>

                    <h3>4. Passing Structure to Functions</h3>
                    <p>
                        Structures can be passed to a function in the same way as normal variables. However, it is recommended to pass them as pointers to avoid copying a large amount of data.
                    </p>

                    <h4>Example of Passing Structure to Function</h4>
                    <pre>{`
#include <stdio.h>

// Structure definition
struct A {
    int x;
};

// Function to increment values
void increment(struct A a, struct A* b) {
    a.x++;
    b->x++;
}

int main() {
    struct A a = {10};
    struct A b = {10};

    // Passing a by value and b by pointer
    increment(a, &b);

    printf("a.x: %d \tb.x: %d", a.x, b.x);
    return 0;
}
`}</pre>
                    <div className="output">
                        <h4>Output:</h4>
                        <p>a.x: 10     b.x: 11</p>
                    </div>

                    <h3>5. typedef for Structures</h3>
                    <p>
                        The <code>typedef</code> keyword is used to define an alias for an already existing datatype. In structures, we have to use the <code>struct</code> keyword along with the structure name to define variables. Sometimes, this increases the length and complexity of the code. We can use <code>typedef</code> to define a shorter name for the structure.
                    </p>

                    <h4>Example of typedef with Structures</h4>
                    <pre>{`
#include <stdio.h>

// Defining structure
typedef struct {
    int a;
} str1;

// Another way of using typedef with structures
typedef struct {
    int x;
} str2;

int main() {
    // Creating structure variables using new names
    str1 var1 = {20};
    str2 var2 = {314};

    printf("var1.a = %d\n", var1.a);
    printf("var2.x = %d\n", var2.x);
    return 0;
}
`}</pre>
                    <div className="output">
                        <h4>Output:</h4>
                        <p>var1.a = 20</p>
                        <p>var2.x = 314</p>
                    </div>
                    <p>
                        <strong>Explanation:</strong> In this code, <code>str1</code> and <code>str2</code> are defined as aliases for the unnamed structures, allowing the creation of structure variables (<code>var1</code> and <code>var2</code>) using these new names. This simplifies the syntax when declaring variables of the structure.
                    </p>

                    <h3>Size of Structures</h3>
                    <p>
                        Technically, the size of the structure in C should be the sum of the sizes of its members. However, this may not be true in most cases due to <strong>Structure Padding</strong>. Structure padding is the concept of adding multiple empty bytes in the structure to naturally align the data members in memory. It is done to minimize the CPU read cycles to retrieve different data members in the structure.
                    </p>
                    <p>
                        There are some situations where we need to pack the structure tightly by removing the empty bytes. In such cases, we use <strong>Structure Packing</strong>. C language provides two ways for structure packing:
                    </p>
                    <ol>
                        <li>Using <code>#pragma pack(1)</code></li>
                        <li>Using <code>__attribute((packed))__</code></li>
                    </ol>
                    <p>
                        To know more about structure padding and packing, refer to this article – Structure Member Alignment, Padding, and Data Packing.
                    </p>

                    <h3>Nested Structures</h3>
                    <p>
                        In C, a nested structure refers to a structure that contains another structure as one of its members. This allows you to create more complex data types by grouping multiple structures together, which is useful when dealing with related data that needs to be grouped within a larger structure.
                    </p>
                    <p>There are two ways to nest one structure into another:</p>
                    <ol>
                        <li><strong>Embedded Structure Nesting:</strong> The structure being nested is also declared inside the parent structure.</li>
                        <li><strong>Separate Structure Nesting:</strong> Two structures are declared separately, and then the member structure is nested inside the parent structure.</li>
                    </ol>

                    <h4>Accessing Nested Members</h4>
                    <p>
                        We can access nested members by using the same <code>(.)</code> dot operator twice:
                    </p>
                    <pre>{`
str_parent.str_child.member;
`}</pre>

                    <h4>Example of Nested Structure</h4>
                    <pre>{`
#include <stdio.h>

// Child structure declaration
struct child {
    int x;
    char c;
};

// Parent structure declaration
struct parent {
    int a;
    struct child b;
};

int main() {
    struct parent p = {25, 195, 'A'};

    // Accessing and printing nested members
    printf("p.a = %d\n", p.a);
    printf("p.b.x = %d\n", p.b.x);
    printf("p.b.c = %c", p.b.c);

    return 0;
}
`}</pre>
                    <div className="output">
                        <h4>Output:</h4>
                        <p>p.a = 25</p>
                        <p>p.b.x = 195</p>
                        <p>p.b.c = A</p>
                    </div>
                    <p>
                        <strong>Explanation:</strong> In this code, the structure <code>parent</code> contains another structure <code>child</code> as a member. The parent structure is then initialized with values, including the values for the child structure’s members.
                    </p>

                    <h3>Structure Pointer</h3>
                    <p>
                        A pointer to a structure allows us to access structure members using the <code>(→)</code> arrow operator instead of the dot operator.
                    </p>

                    <h4>Example of Structure Pointer</h4>
                    <pre>{`
#include <stdio.h>

// Structure declaration
struct Point {
    int x, y;
};

int main() {
    struct Point p = {1, 2};

    // ptr is a pointer to structure p
    struct Point* ptr = &p;

    // Accessing structure members using structure pointer
    printf("%d %d", ptr→x, ptr→y);

    return 0;
}
`}</pre>
                    <div className="output">
                        <h4>Output:</h4>
                        <p>1 2</p>
                    </div>
                    <p>
                        <strong>Explanation:</strong> In this example, <code>ptr</code> is a pointer to the structure <code>Point</code>. It holds the address of the structure variable <code>p</code>. The structure members <code>x</code> and <code>y</code> are accessed using the <code>→</code> operator, which is used to dereference the pointer and access the members of the structure.
                    </p>

                    <h3>Self-Referential Structures</h3>
                    <p>
                        Self-referential structures are those structures that contain references to the same type as themselves, i.e., they contain a member of the type pointer pointing to the same structure type.
                    </p>

                    <h4>Example of Self-Referential Structure</h4>
                    <pre>{`
struct str {
    int mem1;

    // Reference to the same type
    struct str* next;
};
`}</pre>
                    <p>
                        Such kinds of structures are used in different data structures such as to define the nodes of linked lists, trees, etc.
                    </p>

                    <h3>Bit Fields</h3>
                    <p>
                        Bit Fields are used to specify the length of the structure members in bits. When we know the maximum length of the member, we can use bit fields to specify the size and reduce memory consumption.
                    </p>

                    <h4>Syntax of Bit Fields</h4>
                    <pre>{`
struct structure_name {
    data_type member_name: width_of_bit-field;
};
`}</pre>

<h3>Uses of Structure in C</h3>
                    <p>C structures are used for the following:</p>
                    <ul>
                        <li><strong>Defining Custom Data Types:</strong> Structures allow you to create complex data types such as dates, time, complex numbers, etc., which are not present in the language.</li>
                        <li><strong>Data Organization:</strong> Structures help organize large amounts of data into meaningful groups, making it easier to manage and access.</li>
                        <li><strong>Creating Data Structures:</strong> Structures are used to create data structures such as linked lists, trees, graphs, etc.</li>
                        <li><strong>Returning Multiple Values from Functions:</strong> Structures can be used to return multiple values from a function by grouping them into a single structure.</li>
                        <li><strong>Database Records:</strong> Structures are often used to represent database records, where each field corresponds to a column in the database.</li>
                        <li><strong>Hardware Access:</strong> Structures are used to access hardware registers, where each bit or group of bits corresponds to a specific hardware function.</li>
                    </ul>

                    <h3>Conclusion</h3>
                    <p>
                        Structures in C are a powerful feature that allows you to group related data into a single unit. They are widely used in programming for organizing data, creating custom data types, and implementing complex data structures. By understanding how to define, initialize, and manipulate structures, you can write more efficient and organized code.
                    </p>
                </section>
            </div>
        </>
    );
};

export default Structure;