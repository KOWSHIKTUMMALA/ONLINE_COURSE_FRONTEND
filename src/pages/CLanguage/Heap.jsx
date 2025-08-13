import React from "react";
import './CLang.css'

const  Heap=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Heap in C</h1>

            </header>
            <section className="section">
                <h2>Heap</h2>
                <h3>Heap Data Structures in C</h3>

<p>A heap is a type of tree data structure where each node is either greater than or equal to or is less than or equal to the values of its children. Depending on this, there are two types of heaps:</p>

<ul>
    <li><b>Min Heap:</b> Each node is less than or equal to the value of its child subtrees.</li>
    <li><b>Max Heap:</b> Each node is greater than or equal to the value of its child subtrees.</li>
</ul>

<p>Apart from this, heap is also a complete tree. It means that all the before the last level have all its children nodes and in the last level, all the children will be filled from left to right.</p>


<h3>Implementation of Heap in C</h3>

<p>In C, heaps are typically stored in arrays. This makes them faster to access and modify elements. And due to its completeness, we can easily find the index of the child and parents nodes. Here is how to find child and parent nodes of an element at index i in the array:</p>

<ul>
    <li>Left child: 2 * i + 1</li>
    <li>Right child: 2 * i + 2</li>
    <li>Parent: (i - 1) / 2</li>
</ul>

<p>All the values are assuming the index starts from 0.</p>

<h3>Heap Representation in C</h3>

<p>We can represent heap directly as an array but we will then have to keep the track of the size in another variable and will have to pass this variable as another argument to heap functions. To simplify it, we can create a structure with array and the size variable in it to represent the heap in C.</p>

<pre>{`
typedef struct heap {
     int size;
     int capacity;
     int* arr;
} Heap;
`}</pre>

<h3>Heap Operations Implementation in C</h3>

<p>There are seven basic operations that are needed to work with heap data structure:</p>

<table>
    <tr>
        <th>Operation Name</th>
        <th>Description</th>
        <th>Time Complexity</th>
        <th>Space Complexity</th>
    </tr>
    <tr>
        <td>Insert</td>
        <td>Adds a new element to the heap and maintains the heap property.</td>
        <td>O(log n)</td>
        <td>O(1)</td>
    </tr>
    <tr>
        <td>Extract Min/Max</td>
        <td>Removes and returns the minimum/maximum element from the heap.</td>
        <td>O(log n)</td>
        <td>O(1)</td>
    </tr>
    <tr>
        <td>Peek</td>
        <td>Returns the minimum/maximum element without removing it.</td>
        <td>O(1)</td>
        <td>O(1)</td>
    </tr>
    <tr>
        <td>Heapify</td>
        <td>Reorganizes a subtree for the given node to ensure the heap property holds</td>
        <td>O(log n)</td>
        <td>O(1)</td>
    </tr>
    <tr>
        <td>Delete</td>
        <td>Removes a specific element from the heap.</td>
        <td>O(log n)</td>
        <td>O(1)</td>
    </tr>
    <tr>
        <td>Increase/Decrease Key</td>
        <td>Changes the value of an existing element in the heap.</td>
        <td>O(log n)</td>
        <td>O(1)</td>
    </tr>
    <tr>
        <td>Build Heap</td>
        <td>Converts an array into a proper min or max heap.</td>
        <td>O(n)</td>
        <td>O(1)</td>
    </tr>
</table>

<h3>Heapify Implementation in C</h3>

<p>Heapify function is implemented with the function signature: <code>heapify(Heap* heap, int i)</code> where, <code>heap</code> is the pointer to Heap and <code>i</code> is the index on which heapify is called.</p>

<ol>
    <li>Check if the left child exists.</li>
    <li>If the left child exists and is greater than the current largest node, mark it as largest.</li>
    <li>Check if the right child exists.</li>
    <li>If the right child exists and is greater than the current largest node, mark it as largest</li>
    <li>If the largest node is not the root node, swap the root node with the largest node using the <code>swap</code> function.</li>
    <li>Apply heapify operation to the affected subtree.</li>
</ol>

<h3>Build Heap Implementation in C</h3>

<ol>
    <li>Get the number of elements in the heap.</li>
    <li>Identify the starting point for heapification. The function identifies the last non-leaf node in the heap, which is the parent of the last element. This is calculated as <code>(n - 1) / 2</code>.</li>
    <li>The function then enters a loop that starts from the last non-leaf node and goes up to the root node. Inside the loop, it calls <code>heapify(heap, i)</code> to ensure that the subtree rooted at <code>i</code> is a max heap heapifying all the levels.</li>
</ol>

<h3>Insert Key Implementation in C</h3>

<ol>
    <li>Check if the max heap is full. If it is, print “MaxHeap overflow” and return from the function.</li>
    <li>If the heap is not full, increase the size of the heap by 1.</li>
    <li>Insert the new value at the end of the heap.</li>
    <li>If the newly inserted value is greater than its parent, the max heap property is violated. To fix this, the function enters a loop that continues until <code>i</code> is not 0 and the parent of <code>i</code> is less than <code>i</code>. Inside the loop, it swaps the value at <code>i</code> with its parent and then updates <code>i</code> to be the index of the parent.</li>
</ol>

<h3>Extract Min/Max Implementation in C</h3>

<ol>
    <li>Check if the heap is empty. If it is empty, return <code>INT_MIN/INT_MAX</code> as an indication that the heap is empty.</li>
    <li>Else, store the root value (maximum/minimum value) in <code>temp</code>, replace the root with the last element in the heap, and decrement <code>heap size</code> by 1.</li>
    <li>Call <code>Heapify(Heap, 0)</code> to ensure that the new root is the maximum element in the heap.</li>
    <li>Finally, return <code>temp</code>, which is the extracted maximum value.</li>
</ol>

<h3>Delete Key Implementation in C</h3>

<ol>
    <li>Check if the index is valid. If the index is invalid, print "Invalid index" and return from the function.</li>
    <li>If the element to be deleted is the last element in the heap, simply decrement <code>heap size</code> by 1 and return from the function.</li>
    <li>Move the last element to the index of the element to be deleted.</li>
    <li>Reduce the size of the heap.</li>
    <li>Call <code>heapify(heap, index)</code> to ensure that the subtree rooted at the given index is a heap.</li>
</ol>

<h3>Increase Key Implementation in C</h3>

<ol>
    <li>Check if the index is valid and new value is greater. If it is, print “Invalid index or new value is not greater” and return from the function.</li>
    <li>If the index is valid and the new value is greater, update the value at the given index to the new value.</li>
    <li>If the updated value is greater than its parent, the max heap property is violated. To fix this, the function enters a loop that continues until <code>index</code> is not 0 and the parent of <code>index</code> is less than <code>index</code>. Inside the loop, it swaps the value at <code>index</code> with its parent and then updates <code>index</code> to be the index of the parent.</li>
</ol>

<p>The decrease key for min heap will also be implemented using the same algorithm.</p>

<h3>C Program to Implement Heap Data Structure</h3>

<pre>
    {
        `#include <limits.h>
#include <stdio.h>
#include <stdlib.h>

// Structure to represent a Heap (previously MaxHeap)
typedef struct Heap {
    int* array;
    int size;
    int capacity;
} Heap;

// Function to create a heap
Heap* createHeap(int capacity)
{
    Heap* heap = (Heap*)malloc(sizeof(Heap));
    heap->size = 0;
    heap->capacity = capacity;
    heap->array = (int*)malloc(capacity * sizeof(int));
    return heap;
}

// Function to swap two integers
void swap(int* a, int* b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Function to heapify the node at index i
void heapify(Heap* heap, int i)
{
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < heap->size
        && heap->array[left] > heap->array[largest])
        largest = left;

    if (right < heap->size
        && heap->array[right] > heap->array[largest])
        largest = right;

    if (largest != i) {
        swap(&heap->array[i], &heap->array[largest]);
        heapify(heap, largest);
    }
}

// Function to build a max heap from an existing array
void buildHeap(Heap* heap)
{
    int n = heap->size; // Get the number of elements in the
                        // heap

    // Start from the last non-leaf node (parent of the last
    // leaf) and heapify all levels in reverse order
    for (int i = (n - 1) / 2; i >= 0; i--)
        heapify(heap, i);
}

// Function to increase the value at a given index
void increaseKey(Heap* heap, int index, int newValue)
{
    if (index >= heap->size
        || heap->array[index] >= newValue) {
        printf(
            "Invalid index or new value is not greater\n");
        return;
    }

    heap->array[index] = newValue;
    while (index != 0
           && heap->array[(index - 1) / 2]
                  < heap->array[index]) {
        swap(&heap->array[index],
             &heap->array[(index - 1) / 2]);
        index = (index - 1) / 2;
    }
}

// Function to insert a new value into the heap
void insertHeap(Heap* heap, int value)
{
    if (heap->size == heap->capacity) {
        printf("Heap overflow\n");
        return;
    }

    heap->size++;
    int i = heap->size - 1;
    heap->array[i] = value;

    // Fix the heap property if it is violated
    while (i != 0
           && heap->array[(i - 1) / 2] < heap->array[i]) {
        swap(&heap->array[i], &heap->array[(i - 1) / 2]);
        i = (i - 1) / 2;
    }
}

// Function to extract the root (maximum element)
int extractMax(Heap* heap)
{
    if (heap->size <= 0)
        return INT_MIN;
    if (heap->size == 1) {
        heap->size--;
        return heap->array[0];
    }

    // Store the maximum value, and remove it
    int root = heap->array[0];
    heap->array[0] = heap->array[heap->size - 1];
    heap->size--;
    heapify(heap, 0);

    return root;
}

// Function to print the heap
void printHeap(Heap* heap)
{
    for (int i = 0; i < heap->size; ++i)
        printf("%d ", heap->array[i]);
    printf("\n");
}

// Function to delete an element at a given index
void deleteKey(Heap* heap, int index)
{
    if (index >= heap->size) {
        printf("Invalid index\n");
        return;
    }

    // If the element to be deleted is the last element,
    // simply reduce size
    if (index == heap->size - 1) {
        heap->size--;
        return;
    }

    // Move the last element to the index of the element to
    // be deleted
    heap->array[index] = heap->array[heap->size - 1];
    heap->size--;

    // Heapify down to maintain heap property
    heapify(heap, index);
}

int main()
{
    Heap* heap = createHeap(10);
    insertHeap(heap, 3);
    insertMaxHeap(maxHeap, 2);
    insertMaxHeap(maxHeap, 15);
    insertMaxHeap(maxHeap, 5);
    insertMaxHeap(maxHeap, 4);
    insertMaxHeap(maxHeap, 45);

    printf("Max Heap array: ");
    printHeap(maxHeap);

    printf("Extracted max value: %d\n",
           extractMax(maxHeap));
    printf("Max Heap array after extraction: ");
    printHeap(maxHeap);

    free(maxHeap->array);
    free(maxHeap);
    return 0;
}
`
    }
</pre>

<div class="output">
<h4>Output</h4>
<p>
Max Heap array: 45 5 15 2 4 3<br/>
Extracted max value: 45<br/>
Max Heap array after extraction: 15 5 3 2 4
</p>
</div>

<p>The min heap can be easily implemented using the same algorithms. We will just need to change the comparison operator to less than (&lt;).</p>


            </section>

        </div>
        </>
    );
};
export default Heap;
