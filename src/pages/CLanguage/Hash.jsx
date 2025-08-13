import React from "react";
import './CLang.css'

const  Hash=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Hash Tables in C</h1>

            </header>
            <section className="section">
                <h2>Implementation of Hash Table in C/C++ using Separate Chaining</h2>
                <h3>Introduction:</h3>
<p><b>Hashing</b> is a technique that maps a large set of data to a small set of data. It uses a hash function for doing this mapping. It is an irreversible process and we cannot find the original value of the key from its hashed value because we are trying to map a large set of data into a small set of data, which may cause collisions. It is not uncommon to encounter collisions when mapping a large dataset into a smaller one. Suppose, We have three buckets and each bucket can store 1L of water in it and we have 5L of water also. We have to put all the water in these three buckets and this kind of situation is known as a collision. <b>URL shorteners</b> are an example of hashing as it maps large size URL to small size</p>

<h3>Some Examples of Hash Functions:</h3>
<ul>
    <li>key % number of buckets</li>
    <li>ASCII value of character * PrimeNumberx. Where x = 1, 2, 3….n</li>
</ul>
<p>You can make your own hash function but it should be a good hash function that gives less number of collisions.</p>

<h3>Components of Hashing</h3>
<p><b>Bucket Index:</b></p>
<p>The value returned by the <b>Hash function</b> is the bucket index for a key in a separate chaining method. Each index in the array is called a bucket as it is a bucket of a linked list.</p>

<h3>Rehashing:</h3>
<p><b>Rehashing</b> is a concept that reduces collision when the elements are increased in the current hash table. It will make a new array of doubled size and copy the previous array elements to it and it is like the <b>internal working of vector in C++</b>. Obviously, the Hash function should be dynamic as it should reflect some changes when the capacity is increased. The hash function includes the capacity of the hash table in it, therefore, While copying key values from the previous array hash function gives different bucket indexes as it is dependent on the capacity (buckets) of the hash table. Generally, When the value of the load factor is greater than 0.5 rehashings are done.</p>
<ul>
    <li>Double the size of the array.</li>
    <li>Copy the elements of the previous array to the new array. We use the hash function while copying each node to a new array again therefore, It will reduce collision.</li>
    <li>Delete the previous array from the memory and point your hash map’s inside array pointer to this new array.</li>
</ul>
<p>Generally, Load Factor = number of elements in Hash Map / total number of buckets (capacity).</p>

<h3>Collision:</h3>
<p>Collision is the situation when the bucket index is not empty. It means that a linked list head is present at that bucket index. We have two or more values that map to the same bucket index.</p>

<h3>Major Functions in our Program</h3>
<ul>
    <li>Insertion</li>
    <li>Search</li>
    <li>Hash Function</li>
    <li>Delete</li>
    <li>Rehashing</li>
    <li>Hash Map</li>
</ul>

<h3>Implementation without Rehashing:</h3>
<pre>
    {
        `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Linked List node
struct node {

	// key is string
	char* key;

	// value is also string
	char* value;
	struct node* next;
};

// like constructor
void setNode(struct node* node, char* key, char* value)
{
	node->key = key;
	node->value = value;
	node->next = NULL;
	return;
};

struct hashMap {

	// Current number of elements in hashMap
	// and capacity of hashMap
	int numOfElements, capacity;

	// hold base address array of linked list
	struct node** arr;
};

// like constructor
void initializeHashMap(struct hashMap* mp)
{

	// Default capacity in this case
	mp->capacity = 100;
	mp->numOfElements = 0;

	// array of size = 1
	mp->arr = (struct node**)malloc(sizeof(struct node*)
									* mp->capacity);
	return;
}

int hashFunction(struct hashMap* mp, char* key)
{
	int bucketIndex;
	int sum = 0, factor = 31;
	for (int i = 0; i < strlen(key); i++) {

		// sum = sum + (ascii value of
		// char * (primeNumber ^ x))...
		// where x = 1, 2, 3....n
		sum = ((sum % mp->capacity)
			+ (((int)key[i]) * factor) % mp->capacity)
			% mp->capacity;

		// factor = factor * prime
		// number....(prime
		// number) ^ x
		factor = ((factor % __INT16_MAX__)
				* (31 % __INT16_MAX__))
				% __INT16_MAX__;
	}

	bucketIndex = sum;
	return bucketIndex;
}

void insert(struct hashMap* mp, char* key, char* value)
{

	// Getting bucket index for the given
	// key - value pair
	int bucketIndex = hashFunction(mp, key);
	struct node* newNode = (struct node*)malloc(

		// Creating a new node
		sizeof(struct node));

	// Setting value of node
	setNode(newNode, key, value);

	// Bucket index is empty....no collision
	if (mp->arr[bucketIndex] == NULL) {
		mp->arr[bucketIndex] = newNode;
	}

	// Collision
	else {

		// Adding newNode at the head of
		// linked list which is present
		// at bucket index....insertion at
		// head in linked list
		newNode->next = mp->arr[bucketIndex];
		mp->arr[bucketIndex] = newNode;
	}
	return;
}

void delete (struct hashMap* mp, char* key)
{

	// Getting bucket index for the
	// given key
	int bucketIndex = hashFunction(mp, key);

	struct node* prevNode = NULL;

	// Points to the head of
	// linked list present at
	// bucket index
	struct node* currNode = mp->arr[bucketIndex];

	while (currNode != NULL) {

		// Key is matched at delete this
		// node from linked list
		if (strcmp(key, currNode->key) == 0) {

			// Head node
			// deletion
			if (currNode == mp->arr[bucketIndex]) {
				mp->arr[bucketIndex] = currNode->next;
			}

			// Last node or middle node
			else {
				prevNode->next = currNode->next;
			}
			free(currNode);
			break;
		}
		prevNode = currNode;
		currNode = currNode->next;
	}
	return;
}

char* search(struct hashMap* mp, char* key)
{

	// Getting the bucket index
	// for the given key
	int bucketIndex = hashFunction(mp, key);

	// Head of the linked list
	// present at bucket index
	struct node* bucketHead = mp->arr[bucketIndex];
	while (bucketHead != NULL) {

		// Key is found in the hashMap
		if (bucketHead->key == key) {
			return bucketHead->value;
		}
		bucketHead = bucketHead->next;
	}

	// If no key found in the hashMap
	// equal to the given key
	char* errorMssg = (char*)malloc(sizeof(char) * 25);
	errorMssg = "Oops! No data found.\n";
	return errorMssg;
}

// Drivers code
int main()
{

	// Initialize the value of mp
	struct hashMap* mp
		= (struct hashMap*)malloc(sizeof(struct hashMap));
	initializeHashMap(mp);

	insert(mp, "Yogaholic", "Anjali");
	insert(mp, "pluto14", "Vartika");
	insert(mp, "elite_Programmer", "Manish");
	insert(mp, "LCU", "LearnCourseOnline");
	insert(mp, "decentBoy", "Mayank");

	printf("%s\n", search(mp, "elite_Programmer"));
	printf("%s\n", search(mp, "Yogaholic"));
	printf("%s\n", search(mp, "pluto14"));
	printf("%s\n", search(mp, "decentBoy"));
	printf("%s\n", search(mp, "GFG"));

	// Key is not inserted
	printf("%s\n", search(mp, "randomKey"));

	printf("\nAfter deletion : \n");

	// Deletion of key
	delete (mp, "decentBoy");
	printf("%s\n", search(mp, "decentBoy"));

	return 0;
}
`
    }
</pre>

<div class="output">
<h4>Output</h4>
<p>
Manish<br/>
Anjali<br/>
Vartika<br/>
Mayank<br/>
LearnCourseOnline<br/>
Oops! No data found.<br/>
After deletion : <br/>
Oops! No data found.
</p>
</div>

<h3>Explanation:</h3>
<ul>
    <li><b>insertion:</b> Inserts the key-value pair at the head of a linked list which is present at the given bucket index.</li>
    <li><b>hashFunction:</b> Gives the bucket index for the given key. Our hash function = ASCII value of character * primeNumberx. The prime number in our case is 31 and the value of x is increasing from 1 to n for consecutive characters in a key.</li>
    <li><b>deletion:</b> Deletes key-value pair from the hash table for the given key. It deletes the node from the linked list which holds the key-value pair.</li>
    <li><b>Search:</b> Search for the value of the given key.</li>
</ul>
<p>This implementation does not use the rehashing concept. It is a fixed-sized array of linked lists.</p>
<p>Key and value both are strings in the given example.</p>

<h3>Time Complexity and Space Complexity:</h3>
<p>The time complexity of hash table insertion and deletion operations is O(1) on average. There is some mathematical calculation that proves it.</p>
<ul>
    <li><b>Time Complexity of Insertion:</b> In the average case it is constant. In the worst case, it is linear.</li>
    <li><b>Time Complexity of Search:</b> In the average case it is constant. In the worst case, it is linear.</li>
    <li><b>Time Complexity of Deletion:</b> In average cases it is constant. In the worst case, it is linear.</li>
    <li><b>Space Complexity:</b> O(n) as it has n number of elements.</li>
</ul>


            </section>

        </div>
        </>
    );
};
export default Hash;
