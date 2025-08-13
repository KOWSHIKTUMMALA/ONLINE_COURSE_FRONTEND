import React from "react";
import './CLang.css'

const  Linked=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Linked List in C</h1>

            </header>
            <section className="section">
                <h2>Linked List</h2>
                <h3>Linked List in C</h3>

<p>A linked list is a linear data structure where each element, known as a node, is connected to the next one using pointers. Unlike array, elements of linked list are stored in random memory locations.</p>

<p>In this article, we will learn about the linked list, its types, representation of the linked list in C, and discuss what link list offers as compared to the similar data structures.</p>

<h3>What is a Linked List?</h3>

<p>A linked list is a sequence of nodes where each node contains two parts:</p>

<ul>
    <li><b>Data:</b> The value stored in the node.</li>
    <li><b>Pointer:</b> A reference to the next node in the sequence. (There can be multiple pointers for different kind of linked list.)</li>
</ul>

<p>Unlike arrays, linked lists do not store elements in contiguous memory locations. Instead, each node points to the next, forming a chain-like structure and to access any element (node), we need to first sequentially traverse all the nodes before it.</p>

<p>It is a recursive data structure in which any smaller part of it is also a linked list in itself.</p>

<h3>Representation of Linked List in C</h3>

<p>In C, linked lists are represented as the pointer to the first node in the list. For that reason, the first node is generally called <b>head</b> of the linked list. Each node of the linked list is represented by a structure that contains a data field and a pointer of the same type as itself. Such structure is called <b>self-referential structures</b>.</p>

<h3>Types of Linked List in C</h3>

<p>Linked list can be classified on the basis of the type of structure they form as a whole and the direction of access. Based on this classification, there are five types of linked lists:</p>

<ul>
    <li>Singly Linked List</li>
    <li>Doubly Linked List</li>
    <li>Circular Linked List</li>
</ul>

<h3>Singly Linked List in C</h3>

<p>A linked list or singly linked list is a linear data structure that is made up of a group of nodes in which each node has two parts: the data, and the pointer to the next node. The last node's (also known as tail) pointers point to NULL to indicate the end of the linked list.</p>

<h4>Representation of Singly Linked List in C</h4>

<p>A linked list is represented as a pointer to the first node where each node contains:</p>

<ul>
    <li><b>Data:</b> Here the actual information is stored.</li>
    <li><b>Next:</b> Pointer that links to the next node.</li>
</ul>

<pre>{`
// Structure to represent the singly linked list
struct Node {
    // Data field - can be of any type and count
    int data;
    // Pointer to the next node
    Node* next;
};
`}</pre>

<h4>Basic Operations on Singly Linked List</h4>

<table>
    <tr>
        <th>Operation</th>
        <th>Operation Type</th>
        <th>Description</th>
        <th>Time Complexity</th>
        <th>Space Complexity</th>
    </tr>
    <tr>
        <td rowspan="3">Insertion</td>
        <td>At Beginning</td>
        <td>Insert a new node at the start of a linked list.</td>
        <td>O (1)</td>
        <td>O (1)</td>
    </tr>
    <tr>
        <td>At the End</td>
        <td>Insert a new node at the end of the linked list.</td>
        <td>O (N)</td>
        <td>O (1)</td>
    </tr>
    <tr>
        <td>At Specific Position</td>
        <td>Insert a new node at a specific position in a linked list.</td>
        <td>O (N)</td>
        <td>O (1)</td>
    </tr>
    <tr>
        <td rowspan="3">Deletion</td>
        <td>From Beginning</td>
        <td>Delete a node from the start of a linked list</td>
        <td>O (1)</td>
        <td>O (1)</td>
    </tr>
    <tr>
        <td>From the End</td>
        <td>Delete a node at the end of a linked list.</td>
        <td>O (N)</td>
        <td>O (1)</td>
    </tr>
    <tr>
        <td>A Specific Node</td>
        <td>Delete a node from a specific position of a linked list.</td>
        <td>O (N)</td>
        <td>O (1)</td>
    </tr>
    <tr>
        <td>Traversal</td>
        <td>Traverse the linked list from start to end.</td>
        <td>O (N)</td>
        <td>O (1)</td>
    </tr>
</table>

<h3>Doubly Linked List in C</h3>

<p>A doubly linked list is a bit more complex than singly linked list. In it, each node contains three parts: the data, a pointer to the next node, and one extra pointer which points to the previous node. This allows for traversal in both directions, making it more versatile than a singly linked list.</p>

<h4>Representation of Doubly Linked List in C</h4>

<p>A doubly linked list is represented as a pointer to the first node (head), where each node contains:</p>

<ul>
    <li><b>Data:</b> The actual information stored in the node.</li>
    <li><b>Next:</b> A pointer that links to the next node in the sequence.</li>
    <li><b>Previous:</b> A pointer that links to the previous node in the sequence.</li>
</ul>

<pre>{`
// Structure to represent the doubly linked list
struct Node {
    // Data field - can be of any type and count
    int data;
    // Pointer to the next node
    Node* next;
    // Pointer to the previous node
    Node* prev;
};
`}</pre>

<h4>Basic Operations on Doubly Linked List</h4>

<table>
    <tr>
        <th>Operation</th>
        <th>Operation Type</th>
        <th>Description</th>
        <th>Time Complexity</th>
        <th>Space Complexity</th>
    </tr>
    <tr>
        <td rowspan="3">Insertion</td>
        <td>At Beginning</td>
        <td>Insert a new node at the start of a linked list.</td>
        <td>O (1)</td>
        <td>O (1)</td>
    </tr>
    <tr>
        <td>At the End</td>
        <td>Insert a new node at the end of the linked list.</td>
        <td>O (N)</td>
        <td>O (1)</td>
    </tr>
    <tr>
        <td>At Specific Position</td>
        <td>Insert a new node at a specific position in a linked list.</td>
        <td>O (N)</td>
        <td>O (1)</td>
    </tr>
    <tr>
        <td rowspan="3">Deletion</td>
        <td>From Beginning</td>
        <td>Delete a node from the start of a linked list</td>
        <td>O (1)</td>
        <td>O (1)</td>
    </tr>
    <tr>
        <td>From the End</td>
        <td>Delete a node at the end of a linked list.</td>
        <td>O (N)</td>
        <td>O (1)</td>
    </tr>
    <tr>
        <td>A Specific Node</td>
        <td>Delete a node from a specific position of a linked list.</td>
        <td>O (N)</td>
        <td>O (1)</td>
    </tr>
    <tr>
        <td>Traversal</td>
        <td>Traverse the linked list from start to end or vice versa.</td>
        <td>O (N)</td>
        <td>O (1)</td>
    </tr>
</table>

<h3>Circular Linked List in C</h3>

<p>A circular linked list is a variation of a singly linked list where the last node points back to the first node, forming a circle. This means there is no NULL at the end, and the list can be traversed in a circular manner.</p>

<p>The structure of the circular linked list node is same as that of singly linked list.</p>

<h4>Representation of Circular Linked List in C</h4>

<p>A circular linked list is represented as a pointer to the first node, where each node contains:</p>

<ul>
    <li><b>Data:</b> The actual information stored in the node.</li>
    <li><b>Next:</b> A pointer that links to the next node, with the last node pointing back to the first node.</li>
</ul>

<pre>{`
// Structure to represent the circular linked list
struct Node {
    // Data field - can be of any type and count
    int data;
    // Pointer to the next node
    Node* next;
};
`}</pre>

<p>It is same as the structure for singly linked list node.</p>

<p><b>Note:</b> A circular linked list can also be represented by a pointer to the last node.</p>

<h4>Basic Operations on Circular Linked List</h4>

<table>
    <tr>
        <th>Operation</th>
        <th>Operation Type</th>
        <th>Description</th>
        <th>Time Complexity</th>
        <th>Space Complexity</th>
    </tr>
    <tr>
        <td rowspan="3">Insertion</td>
        <td>At Beginning</td>
        <td>Insert a new node at the start of a linked list.</td>
        <td>O (N)</td>
        <td>O (1)</td>
    </tr>
    <tr>
        <td>At the End</td>
        <td>Insert a new node at the end of the linked list.</td>
        <td>O (N)</td>
        <td>O (1)</td>
    </tr>
    <tr>
        <td>At Specific Position</td>
        <td>Insert a new node at a specific position in a linked list.</td>
        <td>O (N)</td>
        <td>O (1)</td>
    </tr>
    <tr>
        <td rowspan="3">Deletion</td>
        <td>From Beginning</td>
        <td>Delete a node from the start of a linked list</td>
        <td>O (N)</td>
        <td>O (1)</td>
    </tr>
    <tr>
        <td>From the End</td>
        <td>Delete a node at the end of a linked list.</td>
        <td>O (N)</td>
        <td>O (1)</td>
    </tr>
    <tr>
        <td>A Specific Node</td>
        <td>Delete a node from a specific position of a linked list.</td>
        <td>O (N)</td>
        <td>O (1)</td>
    </tr>
    <tr>
        <td>Traversal</td>
        <td>Traverse the linked list from start to end or vice versa.</td>
        <td>O (N)</td>
        <td>O (1)</td>
    </tr>
</table>

<h3>Applications of Linked Lists in C</h3>

<p>The following are some major applications of linked list:</p>

<ul>
    <li>Dynamic memory allocation efficiently manages and allocates dynamic memory in systems and applications.</li>
    <li>Implementing other data structures such as stacks, queues, etc.</li>
    <li>Represents and manipulates polynomials, with each node storing terms.</li>
    <li>Used in file system management dynamically in operating systems.</li>
</ul>

<h3>Advantages of a Linked List</h3>

<ul>
    <li>Linked lists can grow or shrink in size dynamically, as memory is allocated or deallocated as needed.</li>
    <li>Inserting or deleting nodes in a linked list is efficient and does not require shifting elements, unlike arrays.</li>
    <li>Memory is utilized more efficiently as linked lists do not require a pre-allocated size, reducing wasted space.</li>
    <li>They serve as the foundation for implementing more complex data structures like stacks, queues, and graphs.</li>
    <li>They can utilize non-contiguous memory blocks, making them suitable for applications where memory is fragmented.</li>
</ul>

<h3>Disadvantages of a Linked List</h3>

<ul>
    <li>Each node requires extra memory for storing a pointer.</li>
    <li>Linked lists do not allow direct access to elements by index. Accessing a specific node requires traversing from the head, leading to slower access times.</li>
    <li>Managing pointers can be tricky, increasing the complexity of coding.</li>
    <li>Searching for an element or accessing a node by index takes O(N) time, making linked lists slower for such operations compared to arrays.</li>
    <li>Non-contiguous memory allocation results in more cache misses.</li>
    <li>Singly linked lists do not support easy backward traversal.</li>
</ul>


            </section>

        </div>
        </>
    );
};
export default Linked
