import React from "react";
import './CLang.css'

const  Stack=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Stack in C</h1>

            </header>
            <section className="section">

<h2>Implement a Stack in C Programming</h2>

<p>Stack is the linear data structure that follows the Last in, First Out(LIFO) principle of data insertion and deletion. It means that the element that is inserted last will be the first one to be removed and the element that is inserted first will be removed at last. Think of it as the stack of plates stacked on top of one another where we can only add or remove the top plate.</p>

<p>Stacks are widely used in programming for tasks like expression evaluation, function call management, and backtracking algorithms. In this article, we will learn how to implement a stack in the C programming language. We will also look at some of its basic operations along with their time and space complexity analysis.</p>

<h3>Implementation of a Stack in C</h3>

<p>In C, we can implement a stack using an <b>array</b> or a linked list. In this article, we will use the array data structure to store the stack elements and use a pointer to keep track of the topmost element of the stack. The stack will offer some basic operations like push, pop, peek, isEmpty, and isFull to the users.</p>

<h3>Representation of Stack in C</h3>

<p>The stack can be represented as a <b>structure</b> that contains a fixed-size array in C which stores the data of the stack and an index pointer which is used to track the top element of the stack.</p>

<pre>{`
struct stack {
     type arr[MAX_SIZE];
     int top;
}
`}</pre>

<p>We can use a utility function initialize the stack array along with the top pointer. The initial value of the top should be -1 representing that there are currently no elements in the stack.</p>

<p>Max size of the stack can be defined as per our requirements.</p>

<h3>Basic Stack Operations in C</h3>

<p>Following are some basic operations in the stack that make it easy to manipulate the stack data structure:</p>

<table>
    <tr>
        <th>Operation</th>
        <th>Description</th>
        <th>Time Complexity</th>
        <th>Space Complexity</th>
    </tr>
    <tr>
        <td>Push</td>
        <td>Inserts an element at the top of the stack.</td>
        <td>O(1)</td>
        <td>O(1)</td>
    </tr>
    <tr>
        <td>Pop</td>
        <td>Removes the top most element of the stack.</td>
        <td>O(1)</td>
        <td>O(1)</td>
    </tr>
    <tr>
        <td>Peek</td>
        <td>Returns the topmost element of the stack.</td>
        <td>O(1)</td>
        <td>O(1)</td>
    </tr>
    <tr>
        <td>IsFull</td>
        <td>Returns true is the stack is full otherwise returns false.</td>
        <td>O(1)</td>
        <td>O(1)</td>
    </tr>
    <tr>
        <td>IsEmpty</td>
        <td>Returns true is the stack is empty otherwise returns false.</td>
        <td>O(1)</td>
        <td>O(1)</td>
    </tr>
</table>

<p>As we can see, the stack offers O(1) time complexity for all the operation but with a catch that we can only perform these operation to the topmost element. So, we need to consider our requirements to take advantage of stack data structure.</p>

<p>Let's see how to implement these basic operations for our stack in C.</p>

<h3>1. isFull Function</h3>

<p>The isFull() function provides the information about whether the stack have some space left or it is completely full. We know that the max capacity of the stack is MAX_SIZE elements. So, the max value of top can be MAX_SIZE - 1.</p>

<h3>Algorithm of Stack isFull</h3>

<ol>
    <li>If top &gt= MAX_SIZE - 1, return true.</li>
    <li>Else return false.</li>
</ol>

<h3>2. isEmpty Function</h3>

<p>The isEmpty function will check whether the stack is empty or not. We know that when the stack is empty, the top is equal to -1.</p>

<h3>Algorithm of Stack isEmpty</h3>

<ol>
    <li>If the top pointer==-1 return true</li>
    <li>Else return false.</li>
</ol>

<h3>3. Push Function</h3>

<p>The push function will add (or push) an element to the stack. The edge case here will be when we try to add a new element when the stack is already full. It is called stack overflow and we have to check for it before inserted new element.</p>

<h3>Algorithm of Stack Push</h3>

<p>Following is the algorithm for the push operation:</p>

<ol>
    <li>Check whether if the stack is full.</li>
    <li>If stack is full then display the overflow message.</li>
    <li>If stack is not full then increment the top pointer.</li>
    <li>Add the new element to position pointed to by the top pointer.</li>
</ol>

<h3>4. Pop Function</h3>

<p>The pop function will remove an element from the stack. One case that can occur here is when we try to remove the top using pop() function when the stack is already empty. Such condition is called stack underflow and can be easily checked.</p>

<h3>Algorithm of Stack Pop</h3>

<p>Following is the algorithm for the pop operation:</p>

<ol>
    <li>Check whether if stack is empty.</li>
    <li>If stack is empty then display the underflow message.</li>
    <li>If stack is not empty then remove the element at top position</li>
    <li>Decrement the top pointer of the stack.</li>
</ol>

<h3>5. top Function</h3>

<p>The peek function will return the topmost element of the stack in constant time. If the stack is empty it returns -1.</p>

<h3>Algorithm for Stack Top Function</h3>

<p>Following is the algorithm for top operation on the stack:</p>

<ol>
    <li>Check whether the stack is empty.</li>
    <li>If it is empty, return -1.</li>
    <li>Else return, stack.data[top] element.</li>
</ol>

<h3>C Program To Implement a Stack</h3>

<p>The following program demonstrates how we can implement a Stack in C:</p>

<pre>
    {
        `// C Program to demonstrate how to Implement a Stack
#include <stdio.h>
#include <stdbool.h>

// Define the maximim capacity of the stack
#define MAX_SIZE 100

// Define a structure for the stack
typedef struct {
    // Array to store stack elements
    int arr[MAX_SIZE];  
    // Index of the top element in the stack
    int top;        
} Stack;

// Function to initialize the stack
void initialize(Stack *stack) {
    // Set top index to -1 to indicate an empty stack
    stack->top = -1;  
}

// Function to check if the stack is empty
bool isEmpty(Stack *stack) {
    // If top is -1, the stack is empty
    return stack->top == -1;  
}

// Function to check if the stack is full
bool isFull(Stack *stack) {
    // If top is MAX_SIZE - 1, the stack is full
    return stack->top == MAX_SIZE - 1;  
}

// Function to push an element onto the stack
void push(Stack *stack, int value) {
    // Check for stack overflow
    if (isFull(stack)) {
        printf("Stack Overflow\n");
        return;
    }
    // Increment top and add the value to the top of the stack
    stack->arr[++stack->top] = value;
    printf("Pushed %d onto the stack\n", value);
}

// Function to pop an element from the stack
int pop(Stack *stack) {
    // Check for stack underflow
    if (isEmpty(stack)) {
        printf("Stack Underflow\n");
        return -1;
    }
    // Return the top element 
    int popped = stack->arr[stack->top];
    // decrement top pointer
    stack->top--;
    printf("Popped %d from the stack\n", popped);
    // return the popped element
    return popped;
}

// Function to peek the top element of the stack
int peek(Stack *stack) {
    // Check if the stack is empty
    if (isEmpty(stack)) {
        printf("Stack is empty\n");
        return -1;
    }
    // Return the top element without removing it
    return stack->arr[stack->top];
}

int main() {
    Stack stack;
    // Initialize the stack
    initialize(&stack);  

    // Push elements onto the stack and print the stack after each push
    push(&stack, 3);
    printf("Top element: %d\n", peek(&stack));

    push(&stack, 5);
    printf("Top element: %d\n", peek(&stack));

    push(&stack, 2);
    printf("Top element: %d\n", peek(&stack));

    push(&stack, 8);
    printf("Top element: %d\n", peek(&stack));

    // Pop elements from the stack and print the stack after each pop
    while (!isEmpty(&stack)) {
        printf("Top element: %d\n", peek(&stack));
        printf("Popped element: %d\n", pop(&stack));
    }

    return 0;
}
`
    }
</pre>
<div className="output">
    <h4>Output:</h4>
    <p>Pushed 3 onto the stack<br/>
Top element: 3<br/>
Pushed 5 onto the stack<br/>
Top element: 5<br/>
Pushed 2 onto the stack<br/>
Top element: 2<br/>
Pushed 8 onto the stack<br/>
Top element: 8<br/>
Top element: 8<br/>
Popped 8 from the stack<br/>
Popped element: 8<br/>
Top element: 2<br/>
Popped 2 from the stack<br/>
Popped element: 2<br/>
Top element: 5<br/>
Popped 5 from the stack<br/>
Popped element: 5<br/>
Top element: 3<br/>
Popped 3 from the stack<br/>
Popped element: 3</p>
</div>
<h3>Applications of Stack in C
</h3>
<p>Stack is widely used for Following are some common applications of Stack.</p>
<ul>
    <li>Stacks are commonly used to evaluate postfix expressions. It is also used in infix to postfix conversion.</li>
    <li>It is used in recursion where a different stack is allocated for every recursive call.</li>
    <li>It is used in browsers to provide the backward and forward functionality.</li>
    <li>It is also used in text editor, image editors to provide the undo and redo funtionality.</li>
    <li>It is used in various algorithms in computer science.</li>
</ul>


            </section>

        </div>
        </>
    );
};
export default Stack;
