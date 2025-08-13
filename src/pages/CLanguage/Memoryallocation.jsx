import React from "react";
import './CLang.css'

const  Memoryallocation=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Memory Allocation in C</h1>

            </header>
            <section className="section">
                
                <h2>Dynamic Memory Allocation in C using malloc(), calloc(), free() and realloc()</h2>

<p>In C, a variable defined in a function is stored in the stack memory. The requirement of this memory is that it needs to know the size of the data to memory at compile time (before the program runs). Also, once defined, we can neither change the size nor completely delete the memory.</p>

<p>To resolve this, C provides a feature called <b>Dynamic Memory Allocation</b>. It allows you to allocate memory at runtime, giving your program the ability to handle data of varying sizes. Dynamic resources are stored in the <b>heap</b> memory instead of the stack.</p>

<p>This feature is useful in a variety of situations. For example, changing the size of an array according to our requirement.</p>

<h3>Need of Dynamic Memory Allocation</h3>

<p>As we know, the size of an array in C is fixed and should be known at compile time. There can be two problems:</p>

<ol>
    <li>
        <p>The size of the array is not sufficient to store all the elements. To resolve this, one might set the size to store the maximum theoretically possible elements. This creates another problem.</p>
    </li>
    <li>
        <p>This size of the array is much more than what is required to store the elements. This leads to the wastage of memory.</p>
    </li>
</ol>

<p>This is where the dynamic memory allocation comes in. The size of the array can be increased if more elements are to be inserted and decreased of less elements are inserted. Moreover, there is no need to estimate the max possible size. The size can be decided at runtime according to the requirement.</p>

<h3>Dynamic Memory Allocation in C</h3>

<p>Dynamic memory allocation is possible in C by using 4 library functions provided by <code>&lt;stdlib.h&gt;</code> library:</p>

<ul>
    <li>malloc()</li>
    <li>calloc()</li>
    <li>free()</li>
    <li>realloc()</li>
</ul>

<h3>malloc()</h3>

<p>The <b>malloc()</b> (stands for <b>memory</b> allocation) function is used to allocate a single block of contiguous memory on the heap at runtime. The memory allocated by malloc() is uninitialized, meaning it contains garbage values.</p>

<h4>Syntax</h4>

<pre>{`
malloc(size);
`}</pre>

<p>where <code>size</code> is the number of bytes to allocate.</p>

<p>This function returns a void pointer to the allocated memory that needs to be converted to the pointer of required type to be usable. If allocation fails, it returns NULL pointer.</p>

<h4>Example</h4>

<p>Assume that we want to create an array to store 5 integers. Since the size of int is 4 bytes, we need 5 * 4 bytes = 20 bytes of memory. This can be done as shown:</p>

<pre>{`
int *ptr = (int *)malloc(20);
`}</pre>

<p>In the above malloc call, we hardcoded the number of bytes we need to store 5 integers. But we know that the size of the integer in C depends on the architecture. So, it is better to use the <code>sizeof</code> operator to find the size of type you want to store.</p>

<pre>{`
int *ptr = (int *)malloc(sizeof(int) * 5);
`}</pre>

<p>Moreover, if there is no memory available, the malloc will fail and return NULL. So, it is recommended to check for failure by comparing the ptr to NULL.</p>

<pre>{`
int *ptr = (int *)malloc(sizeof(int) * 5);
// Checking if failed or pass
if (ptr == NULL) {
    printf("Allocation Failed");
    exit(0);
}
`}</pre>

<h3>calloc()</h3>

<p>The <b>calloc()</b> (stands for <b>contiguous</b> allocation) function is similar to malloc(), but it initializes the allocated memory to zero. It is used when you need memory with default zero values.</p>

<h4>Syntax</h4>

<pre>{`
calloc(n, size);
`}</pre>

<p>where <code>n</code> is the number of elements and <code>size</code> is the size of each element in bytes.</p>

<p>This function also returns a void pointer to the allocated memory that is converted to the pointer of required type to be usable. If allocation fails, it returns NULL pointer.</p>

<h4>Example</h4>

<p>We can take the example of malloc() and try to do it with calloc() function.</p>

<pre>{`
int *ptr = (int *)calloc(sizeof(int), 5);
// Checking if failed or pass
if (ptr == NULL) {
    printf("Allocation Failed");
    exit(0);
}
`}</pre>

<h3>free()</h3>

<p>The memory allocated using functions malloc() and calloc() is not de-allocated on their own. The <b>free()</b> function is used to release dynamically allocated memory back to the operating system. It is essential to free memory that is no longer needed to avoid memory leaks.</p>

<h4>Syntax</h4>

<pre>{`
free(ptr);
`}</pre>

<p>where <code>ptr</code> is the pointer to the allocated memory.</p>

<p>After freeing a memory block, the pointer becomes invalid, and it is no longer pointing to a valid memory location.</p>

<h4>Example</h4>

<pre>{`
int *ptr = (int *)calloc(sizeof(int), 5);
// Do some operations.....
for (int i = 0; i < 5; i++)
    printf("%d ", ptr[i]);
// Free the memory after completing
// operations
free(ptr);
`}</pre>

<p>After calling free(), it is a good practice to set the pointer to NULL to avoid using a “dangling pointer,” which points to a memory location that has been deallocated.</p>

<pre>{`
ptr = NULL;
`}</pre>

<h3>realloc()</h3>

<p>realloc() function is used to resize a previously allocated memory block. It allows you to change the size of an existing memory allocation without needing to free the old memory and allocate a new block.</p>

<h4>Syntax</h4>

<pre>{`
realloc(ptr, new_size);
`}</pre>

<p>where, ptr is the pointer to the previously allocated memory block and new_size is the reallocated size that the memory block should have in bytes.</p>

<p>This function returns a pointer to the newly allocated memory, or NULL if the reallocation fails. If it fails, the original memory block remains unchanged.</p>

<h4>Example</h4>

<p>Suppose we initially allocate memory for 5 integers but later need to expand the array to hold 10 integers. We can use realloc() to resize the memory block:</p>

<pre>{`
int *ptr = (int *)malloc(5 * sizeof(int));
// Resize the memory block to hold 10 integers
ptr = (int *)realloc(ptr, 10 * sizeof(int));
// Check for allocation failure
if (ptr == NULL) {
    printf("Memory Reallocation Failed");
    exit(0);
}
`}</pre>

<p>It is important to note that if realloc() fails and returns NULL, the original memory block is not freed, so you should not overwrite the original pointer until you’ve successfully allocated a new block. To prevent memory leaks, it’s a good practice to handle the NULL return value carefully:</p>

<pre>{`
int *ptr = (int *)malloc(5 * sizeof(int));
// Reallocation
int *temp = (int *)realloc(ptr, 10 * sizeof(int));
// Only update the pointer if reallocation is successful
if (temp == NULL)
    printf("Memory Reallocation Failed");
else
    ptr = temp;
`}</pre>

<h3>Practical Example</h3>

<p>Consider the first scenario where we were having issues with the fixes size array. Let’s see how we can resolve both of these issues using dynamic memory allocation.</p>

<pre>{`
// Initially allocate memory for 5 integers
int *ptr = (int *)malloc(5 * sizeof(int));
// Check if allocation was successful
if (ptr == NULL) {
    printf("Memory Allocation Failed");
    exit(0);
}
// Now, we need to store 8 elements so
// Reallocate to store 8 integers
ptr = (int *)realloc(ptr, 5 * sizeof(int));
if (ptr == NULL) {
        printf("Memory Reallocation Failed
");
        exit(0);
    }
    
    for (int i = 0; i < 5; i++)
        printf("%d ", ptr[i]);
    
    // Finally, free the memory when done
    free(ptr);
    



    return 0;
}

`}
</pre>
<div className="output">
    <h4>Output:</h4>
    <p>10 20 30 40 50 
    </p>

</div>
<p>In this program, we are managing the memory allocated to the pointer ptr according to our needs by changing the size using realloc(). It can be a fun exercise to implement an array which grows according to the elements inserted in it. This kind of arrays are called dynamically growing arrays.</p>
<h3>malloc() vs calloc()</h3>
<p>The functions malloc() and calloc() works very similar to one another. So, why there was the need for two such similar functions.</p>
<p>It turns out that even though they are similar, they have different use cases due to the minor difference between them regarding the memory initialization. malloc() does not initialize memory while calloc() initializes the memory with zero.</p>

</section>
</div>
</>
    );
};
export default Memoryallocation;
