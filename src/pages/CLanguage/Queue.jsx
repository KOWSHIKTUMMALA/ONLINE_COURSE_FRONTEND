import React from "react";
import './CLang.css'

const  Queue=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Queue in C</h1>

            </header>
            <section className="section">
                <h2>Queue</h2>
                <h3>Implement a Queue in C Programming</h3>

<p>A queue is a linear data structure that follows the First In First Out (FIFO) order of insertion and deletion. It means that the element that is inserted first will be the first one to be removed and the element that is inserted last will be removed at last.</p>

<p>In this article, we'll learn how to implement the queue data structure in the C programming language. We will also look at some of its basic operations along with their time and space complexity analysis.</p>

<h3>Implementation of a Queue in C</h3>

<p>We can implement a queue in C using either an array or a linked list. In this article, we will use the array data structure to store the elements. The insertion in the queue is done at the back of the queue and the deletion is done at the front. So we maintain two index pointers front and rear pointers to keep track of the front and back of the queue. The queue consists of two basic operations enqueue which adds elements to the queue (insertion) from the rear pointer and dequeue(deletion) which removes elements from the queue through the front pointer.</p>

<h4>Representation of Stack in C</h4>

<p>In C, the queue can be represented as the structure that contains one array of fixed size, index pointer to the front, and index pointer to the end.</p>

<pre>{`
struct Queue {
     type arr[MAX_SIZE];
     int back;
     int front;
}
`}</pre>

<p>The front pointer initial value will be -1 and the back pointer initial value will be 0. The front pointer will always point to one element before the element that is to be dequeue while the back pointer will point to the next empty element after the element that is just dequeued.</p>

<h3>Basic Operations of Queue in C</h3>

<p>Following are the basic operations of a Queue that are used frequently to manipulate the elements present inside the queue:</p>

<table>
    <tr>
        <th>Operation</th>
        <th>Description</th>
        <th>Time Complexity</th>
        <th>Space Complexity</th>
    </tr>
    <tr>
        <td>Enqueue</td>
        <td>Inserts an element in the queue through rear pointer.</td>
        <td>O(1)</td>
        <td>O(1)</td>
    </tr>
    <tr>
        <td>Dequeue</td>
        <td>Removes an element from the queue through front pointer.</td>
        <td>O(1)</td>
        <td>O(1)</td>
    </tr>
    <tr>
        <td>Peek</td>
        <td>Returns the front element of the queue.</td>
        <td>O(1)</td>
        <td>O(1)</td>
    </tr>
    <tr>
        <td>IsFull</td>
        <td>Returns true is the queue is full otherwise returns false.</td>
        <td>O(1)</td>
        <td>O(1)</td>
    </tr>
    <tr>
        <td>IsEmpty</td>
        <td>Returns true is the queue is empty otherwise returns false.</td>
        <td>O(1)</td>
        <td>O(1)</td>
    </tr>
</table>

<p>Just like stack, the queue also offers all its operation in constant time. Let’s see how to implement these basic operations for our queue in C.</p>

<h3>1. isFull Function</h3>

<p>The isFull function will check whether the queue is full or not. As rear will always be pointing to the leftmost empty element, if the rear gets greater than or equal to the MAX_SIZE, it means that it already contains the maximum possible number of elements.</p>

<h3>Algorithm of isFull Function</h3>

<p>Following is the algorithm for isFull Function:</p>

<ol>
    <li>If rear == MAX_SIZE, return true.</li>
    <li>Else, return false.</li>
</ol>

<h3>2. isEmpty Function</h3>

<p>The isEmpty function will check whether the queue is empty or not. When we initialize a queue, we set the front = -1 and rear = 0. So we know that when there are no elements in the queue, the front = rear - 1.</p>

<h3>Algorithm of isEmpty Function</h3>

<p>Following is the algorithm for isFull Function:</p>

<ol>
    <li>If front == rear - 1, return true.</li>
    <li>Else, return false</li>
</ol>

<h3>3. Enqueue Function</h3>

<p>The enqueue functions inserts an element to the queue through the rear pointer. We need to check for queue overflow (queue already full) before adding the new element.</p>

<h3>Algorithm of Enqueue Function</h3>

<p>Following is the algorithm for the enqueue function:</p>

<ol>
    <li>Check whether the queue is full.</li>
    <li>If the queue is full, display the overflow message.</li>
    <li>If the queue is not full, add the new element to the position pointed to by the rear pointer.</li>
    <li>Increment the rear pointer.</li>
</ol>

<h3>4. Dequeue Function</h3>

<p>The enqueue functions removes an element from the front of the queue through the front pointer. We need to check for the queue underflow (queue is already empty) condition before trying to dequeu the front element.</p>

<h3>Algorithm of Dequeue</h3>

<p>Following is the algorithm for the dequeue function:</p>

<ol>
    <li>Check whether the queue is empty.</li>
    <li>If the queue is empty, display the underflow message.</li>
    <li>If the queue is not empty,
        <ol>
            <li>Increment the front pointer of the queue.</li>
            <li>remove the element at the front position.</li>
        </ol>
    </li>
</ol>

<h3>5. Peek Function</h3>

<p>The peek functions returns the front most element of the queue. If the queue is empty it returns -1.</p>

<h3>Algorithm of Peek Function</h3>

<p>Following is the algorithm for the dequeue function:</p>

<ol>
    <li>Check if the queue is empty.</li>
    <li>If the queue is empty, return -1.</li>
    <li>If not, return queueArray[front + 1].</li>
</ol>

<h3>C Program To Implement a Queue</h3>

<p>The following program demonstrates how we can implement a Queue in C:</p>
<pre>
    {
        `// C Program to demonstrate how to Implement a queue
#include <stdbool.h>
#include <stdio.h>
#define MAX_SIZE 100

// Defining the Queue structure
typedef struct {
    int items[MAX_SIZE];
    int front;
    int rear;
} Queue;

// Function to initialize the queue
void initializeQueue(Queue* q)
{
    q->front = -1;
    q->rear = 0;
}

// Function to check if the queue is empty
bool isEmpty(Queue* q) { return (q->front == q->rear - 1); }

// Function to check if the queue is full
bool isFull(Queue* q) { return (q->rear == MAX_SIZE); }

// Function to add an element to the queue (Enqueue
// operation)
void enqueue(Queue* q, int value)
{
    if (isFull(q)) {
        printf("Queue is full\n");
        return;
    }
    q->items[q->rear] = value;
    q->rear++;
}

// Function to remove an element from the queue (Dequeue
// operation)
void dequeue(Queue* q)
{
    if (isEmpty(q)) {
        printf("Queue is empty\n");
        return;
    }
    q->front++;
}

// Function to get the element at the front of the queue
// (Peek operation)
int peek(Queue* q)
{
    if (isEmpty(q)) {
        printf("Queue is empty\n");
        return -1; // return some default value or handle
                   // error differently
    }
    return q->items[q->front + 1];
}

// Function to print the current queue
void printQueue(Queue* q)
{
    if (isEmpty(q)) {
        printf("Queue is empty\n");
        return;
    }

    printf("Current Queue: ");
    for (int i = q->front + 1; i < q->rear; i++) {
        printf("%d ", q->items[i]);
    }
    printf("\n");
}

int main()
{
    Queue q;
    initializeQueue(&q);

    // Enqueue elements
    enqueue(&q, 10);
    printQueue(&q);

    enqueue(&q, 20);
    printQueue(&q);

    enqueue(&q, 30);
    printQueue(&q);

    // Peek front element
    printf("Front element: %d\n", peek(&q));

    // Dequeue an element
    dequeue(&q);
    printQueue(&q);

    // Peek front element after dequeue
    printf("Front element after dequeue: %d\n", peek(&q));

    return 0;
}
`
    }
</pre>
<div className="output">
<h4>Output</h4>
<p>
Current Queue: 10 <br/>
Current Queue: 10 20 <br/>
Current Queue: 10 20 30 <br/>
Front element: 10<br/>
Current Queue: 20 30 <br/>
Front element after dequeue: 20
</p>
</div>

<h3>Problem with Above Implementation</h3>

<p>The queue above works fine only for single usage. For example, lets fill the queue completely and then dequeue all the elements. Then, the front = rear - 1, which is the condition for the full queue even though the queue is empty. To resolve this, we implement the circular increment (or modular increment) for the index pointers. This kind of queue is called Circular Queue.</p>

<h3>Applications of Queue</h3>

<p>Following are some common applications of the queue data structure:</p>

<ul>
    <li>Queues are used in CPU scheduling.</li>
    <li>They are used in Print spooling.</li>
    <li>They are used in Breadth-first-search.</li>
    <li>They are used in web servers to schedule incoming requests.</li>
    <li>They are used in Buffering I/O systems.</li>
</ul>

<h3>Limitations of Queue</h3>

<p>Following are the major limitation of the queue:</p>

<ul>
    <li>Insertion and removal except from the end takes O(N) time.</li>
    <li>Searching is an expensive operation again taking O(N) time.</li>
</ul>

<h3>Conclusion</h3>

<p>In C, there is no build in data structure so knowing how to implement queue not only improves our efficiency in the language but also helps us to understand the queue data structure from the base. This article covered the basic implementation of the queue along with its basic operations and also discussed is limitations and referred the article with the solution to that limitation.</p>


            </section>

        </div>
        </>
    );
};
export default Queue;
