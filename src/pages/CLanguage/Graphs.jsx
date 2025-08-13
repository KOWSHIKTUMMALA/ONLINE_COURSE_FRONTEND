import React from "react";
import './CLang.css'

const  Graphs=()=>{
    return(
        <>
        <div>
            <header className="header">
                <h1>Graphs in C</h1>

            </header>
            <section className="section">
                <h2>Implementation of Graph in C</h2>
                <h3>Graph Data Structure in C</h3>

<p>Graphs are a versatile data structure that can be used to represent various real-world problems, from social networks to transportation systems. In C, graphs are typically represented using arrays for adjacency matrices or linked lists for adjacency lists. This article will introduce the concept of graphs, their representation in C using pointers and structures, and basic algorithms to perform operations such as traversal, insertion, and deletion.</p>

<h3>What is a Graph?</h3>

<p>A graph is defined as a set of nodes that connects two or more nodes with edges often referred to as arcs. The use of graphs is common in modelling different systems in the world, like the social structures, transport structures as well the computer structures.</p>

<h3>Components of a Graph</h3>

<ul>
    <li><b>Vertices (Nodes):</b> These are the entities in the graph to check the facts which are shown in the social medial.</li>
    <li><b>Edges (Links):</b> These are the edges which are a way of joining the vertices.</li>
</ul>

<h3>Types of Graphs</h3>

<ul>
    <li><b>Directed Graph:</b> Edges have direction, which means they will refer towards only one of the two connected nodes.</li>
    <li><b>Undirected Graph:</b> In this graph, the edges have no direction.</li>
    <li><b>Weighted Graph:</b> The edges have weights (or costs) which is needed to move on that edge.</li>
    <li><b>Unweighted Graph:</b> Edges do not have weights or all edges share the same weight.</li>
</ul>

<h3>Representation of Graphs in C</h3>

<p>There are various forms of graphs, but the more frequently used are:</p>

<ul>
    <li>Adjacency Matrix</li>
    <li>Adjacency List</li>
</ul>

<h3>1. Adjacency Matrix Graph Representation</h3>

<p>An adjacency matrix is a two-dimensional matrix used with graphs. It is more efficient that the adjacency list representation when the graph is dense and we need quick access frequently.</p>

<h3>Algorithm for Creating Adjacency Matrix of a Graph</h3>

<ol>
    <li>In C, we can create a 2D array of size V * V where V is the number of vertices.</li>
    <li>Initially, set all the elements of the matrix to 0.</li>
    <li>For each edge in the graph, if the graph is unweighted, set the corresponding element in the matrix to 1.</li>
    <li>If the graph is weighted, set the corresponding element in the matrix to the weight of the edge.</li>
    <li>If the graph is undirected, the matrix will be symmetric, meaning if there is an edge from node i to node j, there will also be an edge from node j to node i, so both matrix[i][j] and matrix[j][i] should be set.</li>
</ol>

<h3>Example:</h3>

<p>Example Graph:<br/>
0 -- 1<br/>
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |<br/>
2 -- 3</p>

<p>Adjacency Matrix:<br/>
&nbsp;&nbsp;&nbsp; 0 1 2 3<br/>
0 [0 1 1 0]<br/>
1 [1 0 0 1]<br/>
2 [1 0 0 1]<br/>
3 [0 1 1 0]</p>

<h3>Implementing Basic Graph Operations on Adjacency Matrix Representation</h3>

<p>Following are the basic graph operations on adjacency matrix representation of the graph:</p>

<table>
    <tr>
        <th>Operation</th>
        <th>Description</th>
        <th>Time Complexity</th>
        <th>Space Complexity</th>
    </tr>
    <tr>
        <td>Insertion</td>
        <td>Add a vertex or an edge</td>
        <td>O(V<sup>2</sup>)</td>
        <td>O(V<sup>2</sup>)</td>
    </tr>
    <tr>
        <td>Deletion</td>
        <td>Remove a vertex or an edge</td>
        <td>O(V<sup>2</sup>)</td>
        <td>O(V<sup>2</sup>)</td>
    </tr>
    <tr>
        <td>Searching</td>
        <td>Check if a vertex or an edge exists</td>
        <td>O(1)</td>
        <td>O(1)</td>
    </tr>
    <tr>
        <td>Traversal</td>
        <td>Visit all vertices (BFS or DFS)</td>
        <td>O(V + E)</td>
        <td>O(V)</td>
    </tr>
</table>

<h3>Insertion Implementation</h3>

<ol>
    <li>Determine the source vertex (u) and the destination vertex (v) where you want to insert an edge.</li>
    <li>Use the vertices as indices to access the cell in the adjacency matrix, <code>matrix[u][v]</code>.</li>
    <li>Assign a value (typically 1) to indicate an edge between u and v, <code>matrix[u][v] = 1</code>. If the graph is weighted, then insert the weight of the edge.</li>
    <li>If the graph is undirected, also insert an edge in the opposite direction, <code>matrix[v][u] = 1</code>.</li>
</ol>

<h3>Deletion Implementation</h3>

<ol>
    <li>Determine the source vertex (u) and the destination vertex (v) where you want to remove an edge.</li>
    <li>Use the vertices as indices to access the cell in the adjacency matrix, <code>matrix[u][v]</code>.</li>
    <li>Assign a value (typically 0) to indicate no edge between u and v, <code>matrix[u][v] = 0</code>.</li>
    <li>If the graph is undirected, also remove the edge in the opposite direction, <code>matrix[v][u] = 0</code>.</li>
</ol>

<h3>Search Implementation</h3>

<ol>
    <li>Determine the source vertex (u) and the destination vertex (v) for which you want to check the existence of an edge.</li>
    <li>Use the vertices as indices to access the cell in the adjacency matrix, <code>matrix[u][v]</code>.</li>
    <li>Evaluate the value at <code>matrix[u][v]</code>. If it’s 1 (or any non-zero value), an edge exists; if it’s 0, there is no edge.</li>
</ol>

<h3>Traversal Implementation (BFS)</h3>

<ol>
    <li>Select a vertex to start the traversal from.</li>
    <li>Initialize a queue to keep track of vertices to visit.</li>
    <li>Add the starting vertex to the queue and mark it as visited.</li>
    <li>While the queue is not empty, repeat the following steps:
        <ul>
            <li>Remove a vertex from the queue and process it (e.g., print its value).</li>
            <li>Iterate over its adjacent vertices. For each adjacent vertex that is not visited:
                <ul>
                    <li>Mark it as visited.</li>
                    <li>Enqueue it.</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>Keep repeating step 4 until there are no more vertices left to visit.</li>
</ol>

<h3>Traversal Implementation (DFS)</h3>

<ol>
    <li><b>Function <code>DFS</code>:</b> This is the main function that initiates the DFS traversal.
        <ul>
            <li>It initializes an array <code>visited</code> to keep track of visited vertices.</li>
            <li>It calls the utility function <code>DFSUtil</code> with the starting vertex and the visited array.</li>
        </ul>
    </li>
    <li><b>Function <code>DFSUtil</code>:</b> This is a recursive utility function that performs the actual DFS traversal.
        <ul>
            <li>It marks the current node as visited and prints it.</li>
            <li>It then iterates over all vertices of the graph. For each vertex:
                <ul>
                    <li>If there is an edge from the current vertex to the vertex <code>i</code> (indicated by <code>graph[start][i] == 1</code>) and vertex <code>i</code> has not been visited (<code>!visited[i]</code>), it recursively calls <code>DFSUtil</code> for vertex <code>i</code>.</li>
                </ul>
            </li>
        </ul>
    </li>
</ol>

<h3>C Program to Implement Graph using Adjacency Matrix</h3>
<pre>
    {
        `#include <stdio.h>
#include <stdlib.h>

#define MAX 10
#define TRUE 1
#define FALSE 0

// Function prototypes
void insertEdge(int graph[MAX][MAX], int u, int v);
void deleteEdge(int graph[MAX][MAX], int u, int v);
int searchEdge(int graph[MAX][MAX], int u, int v);
void BFS(int graph[MAX][MAX], int start);
void DFS(int graph[MAX][MAX], int start);
void DFSUtil(int graph[MAX][MAX], int start,
             int visited[MAX]);

int main()
{
    // Initialize adjacency matrix to 0
    int graph[MAX][MAX] = { 0 };

    // Add edges
    insertEdge(graph, 0, 1);
    insertEdge(graph, 0, 2);
    insertEdge(graph, 1, 2);
    insertEdge(graph, 2, 0);
    insertEdge(graph, 2, 3);

    // Perform BFS
    printf("BFS starting from node 2:\n");
    BFS(graph, 2);

    // Perform DFS
    printf("DFS starting from node 2:\n");
    DFS(graph, 2);

    return 0;
}

// Function to insert an edge into the graph
void insertEdge(int graph[MAX][MAX], int u, int v)
{
    // Set the edge from u to v
    graph[u][v] = 1;
    // Set the edge from v to u (undirected graph)
    graph[v][u] = 1;
}

// Function to delete an edge from the graph
void deleteEdge(int graph[MAX][MAX], int u, int v)
{
    // Remove the edge from u to v
    graph[u][v] = 0;
    // Remove the edge from v to u (undirected graph)
    graph[v][u] = 0;
}

// Function to search for an edge in the graph
int searchEdge(int graph[MAX][MAX], int u, int v)
{
    // Return the existence of edge u-v
    return graph[u][v];
}

// Function to perform BFS traversal
void BFS(int graph[MAX][MAX], int start)
{
    // Initialize visited array
    int visited[MAX] = { 0 };
    int queue[MAX], front = 0, rear = 0;

    // Mark the start node as visited and enqueue it
    visited[start] = TRUE;
    queue[rear++] = start;

    while (front < rear) {
        int current = queue[front++];
        printf("%d ", current);

        // Visit all the adjacent nodes
        for (int i = 0; i < MAX; i++) {
            if (graph[current][i] == 1 && !visited[i]) {
                visited[i] = TRUE;
                queue[rear++] = i;
            }
        }
    }
    printf("\n");
}

// Function to perform DFS traversal
void DFS(int graph[MAX][MAX], int start)
{
    // Initialize visited array
    int visited[MAX] = { 0 };
    DFSUtil(graph, start, visited);
    printf("\n");
}

// Utility function for DFS traversal
void DFSUtil(int graph[MAX][MAX], int start,
             int visited[MAX])
{
    // Mark the current node as visited and print it
    visited[start] = TRUE;
    printf("%d ", start);

    // Visit all the adjacent nodes
    for (int i = 0; i < MAX; i++) {
        if (graph[start][i] == 1 && !visited[i]) {
            DFSUtil(graph, i, visited);
        }
    }
}
`
    }
</pre>
<div class="output">
<h4>Output</h4>
<p>
BFS starting from node 2:<br/>
2 0 1 3<br/>
DFS starting from node 2:<br/>
2 0 1 3
</p>
</div>

<h3>2. Adjacency List Graph Representation</h3>

<p>The adjacency list is a concept in Graph Theory which describes the graph in terms of the array of the linked list. In the context of the given array, each element denotes a vertex and the linked list present at the same index contains all the vertices that are directly connected to the vertex represented by the given element.</p>

<p>Create an array of linked lists (or arrays of arrays) of size V, where V is the number of vertices.</p>

<p>For each edge in the graph, add the destination vertex to the list of the source vertex.</p>

<p>If the graph is undirected, add the source vertex to the list of the destination vertex as well.</p>

<p>If the graph is weighted, modify each element in the list to store a pair of values: the destination vertex and the weight of the edge.</p>

<h3>Example</h3>

<p>Example Graph:<br/>
0 -- 1<br/>
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |<br/>
2 -- 3</p>

<p>Adjacency List:<br/>
0: -&gt; 1 -&gt; 2<br/>
1: -&gt; 0 -&gt; 3<br/>
2: -&gt; 0 -&gt; 3<br/>
3: -&gt; 1 -&gt; 2</p>

<h3>Implementing Basic Graph Operations on Adjacency List Representation</h3>

<p>Following are the basic operations of graph on adjacency list representation:</p>

<table>
    <tr>
        <th>Operation</th>
        <th>Description</th>
        <th>Time Complexity</th>
        <th>Space Complexity</th>
    </tr>
    <tr>
        <td>Insertion</td>
        <td>Add a vertex or an edge</td>
        <td>O(1)</td>
        <td>O(V)</td>
    </tr>
    <tr>
        <td>Deletion</td>
        <td>Remove a vertex or an edge</td>
        <td>O(V)</td>
        <td>O(V)</td>
    </tr>
    <tr>
        <td>Searching</td>
        <td>Check if a vertex or an edge exists</td>
        <td>O(V)</td>
        <td>O(1)</td>
    </tr>
    <tr>
        <td>Traversal</td>
        <td>Visit all vertices (BFS or DFS)</td>
        <td>O(V + E)</td>
        <td>O(V)</td>
    </tr>
</table>

<h3>Insertion Implementation</h3>

<p>To create a new node in the adjacency list, we must set the node to the destination vertex.</p>

<p>This node should be placed in the beginning of some list that will contain all the nodes for the source vertex.&nbsp;</p>

<p>If the graph is undirected, repeat the process for the destination vertex by adding the source point.</p>

<h3>Deletion Implementation</h3>

<p>Determine which node is located in the adjacency list of the source node, which provides a reference to the destination node.</p>

<p>This is a post-order function so simply delete this node from the list.</p>

<p>However, if the graph is undirected, then there will essentially be two graphs to traverse, so repeat the process with the destination vertex and remove the source vertex.</p>

<h3>Search&nbsp;Implementation</h3>

<p>Traverse the adjacency list of the source vertex.</p>

<p>Check if the destination vertex exists in the list.</p>

<h3>Traversal Implementation (DFS)</h3>

<p>Each solution begins at a source node/vertex.</p>

<p>A flag or marker is placed on the current point to signify that it has been visited before.&nbsp;</p>

<p>Next, traverse all adjacent vertices, in reverse in the recursive call.</p>

<h3>Traversal Implementation (BFS)</h3>

<p>Starting with a source vertex as the initial node of a path.&nbsp;</p>

<p>Employ a queue to dictate how traversal should occur.</p>

<p>Make the current vertex processed, and then enqueue it.</p>

<p>Take the vertex from the queue and traverse all the surrounding vertices.</p>

<h3>C Program to Implement Graph using Adjacency List</h3>
<pre>
    {
        `#include <stdio.h>
#include <stdlib.h>

// Define the structure for an adjacency list node
struct AdjListNode {
    int dest;
    struct AdjListNode* next;
};

// Define the structure for an adjacency list
struct AdjList {
    struct AdjListNode* head;
};

// Define the structure for a graph
struct Graph {
    int V;
    struct AdjList* array;
};

// Function to create a new adjacency list node
struct AdjListNode* newAdjListNode(int dest)
{
    struct AdjListNode* newNode
        = (struct AdjListNode*)malloc(
            sizeof(struct AdjListNode));
    newNode->dest = dest;
    newNode->next = NULL;
    return newNode;
}

// Function to create a graph of V vertices
struct Graph* createGraph(int V)
{
    struct Graph* graph
        = (struct Graph*)malloc(sizeof(struct Graph));
    graph->V = V;
    graph->array = (struct AdjList*)malloc(
        V * sizeof(struct AdjList));
    for (int i = 0; i < V; ++i)
        graph->array[i].head = NULL;
    return graph;
}

// Function to add an edge to an undirected graph
void addEdge(struct Graph* graph, int src, int dest)
{
    // Add an edge from src to dest
    struct AdjListNode* newNode = newAdjListNode(dest);
    newNode->next = graph->array[src].head;
    graph->array[src].head = newNode;

    // Since graph is undirected, add an edge from dest to
    // src also
    newNode = newAdjListNode(src);
    newNode->next = graph->array[dest].head;
    graph->array[dest].head = newNode;
}

// Function to delete an edge from an undirected graph
void deleteEdge(struct Graph* graph, int src, int dest)
{
    struct AdjListNode* temp = graph->array[src].head;
    struct AdjListNode* prev = NULL;

    // Find and remove the node from the adjacency list of
    // src
    while (temp != NULL && temp->dest != dest) {
        prev = temp;
        temp = temp->next;
    }
    if (temp != NULL) {
        if (prev != NULL)
            prev->next = temp->next;
        else
            graph->array[src].head = temp->next;
        free(temp);
    }

    // Since graph is undirected, remove the src from dest's
    // list
    temp = graph->array[dest].head;
    prev = NULL;
    while (temp != NULL && temp->dest != src) {
        prev = temp;
        temp = temp->next;
    }
    if (temp != NULL) {
        if (prev != NULL)
            prev->next = temp->next;
        else
            graph->array[dest].head = temp->next;
        free(temp);
    }
}

// Function to search an edge in the graph
int searchEdge(struct Graph* graph, int src, int dest)
{
    struct AdjListNode* temp = graph->array[src].head;
    while (temp != NULL) {
        if (temp->dest == dest)
            return 1; // Found
        temp = temp->next;
    }
    return 0; // Not Found
}

// A utility function used by DFS
void DFSUtil(int v, int visited[], struct Graph* graph)
{
    visited[v] = 1;
    printf("%d ", v);

    struct AdjListNode* temp = graph->array[v].head;
    while (temp) {
        int adjVertex = temp->dest;
        if (!visited[adjVertex])
            DFSUtil(adjVertex, visited, graph);
        temp = temp->next;
    }
}

// Function to perform DFS on the graph
void DFS(struct Graph* graph, int startVertex)
{
    int* visited = (int*)malloc(graph->V * sizeof(int));
    for (int i = 0; i < graph->V; i++)
        visited[i] = 0;

    DFSUtil(startVertex, visited, graph);
    free(visited);
}

// Function to perform BFS on the graph
void BFS(struct Graph* graph, int startVertex)
{
    int* visited = (int*)malloc(graph->V * sizeof(int));
    for (int i = 0; i < graph->V; i++)
        visited[i] = 0;

    int* queue = (int*)malloc(graph->V * sizeof(int));
    int front = 0;
    int rear = 0;

    visited[startVertex] = 1;
    queue[rear++] = startVertex;

    while (front < rear) {
        int currentVertex = queue[front++];
        printf("%d ", currentVertex);

        struct AdjListNode* temp
            = graph->array[currentVertex].head;
        while (temp) {
            int adjVertex = temp->dest;
            if (!visited[adjVertex]) {
                visited[adjVertex] = 1;
                queue[rear++] = adjVertex;
            }
            temp = temp->next;
        }
    }

    free(queue);
    free(visited);
}

int main()
{
    // Create the graph given in above figure
    int V = 5;
    struct Graph* graph = createGraph(V);
    addEdge(graph, 0, 1);
    addEdge(graph, 0, 4);
    addEdge(graph, 1, 2);
    addEdge(graph, 1, 3);
    addEdge(graph, 1, 4);
    addEdge(graph, 2, 3);
    addEdge(graph, 3, 4);

    printf("Following is Depth First Traversal (starting "
           "from vertex 0)\n");
    DFS(graph, 0);

    printf("\nFollowing is Breadth First Traversal "
           "(starting from vertex 0)\n");
    BFS(graph, 0);

    printf("\nSearching for edge 1-3: %s\n",
           searchEdge(graph, 1, 3) ? "Found" : "Not Found");
    deleteEdge(graph, 1, 3);

    printf("Searching for edge 1-3 after deletion: %s\n",
           searchEdge(graph, 1, 3) ? "Found" : "Not Found");

    return 0;
}
`
    }
</pre>
<div class="output">
<h4>Output</h4>
<p>
Following is Depth First Traversal (starting from vertex 0)<br/>
0 4 3 2 1<br/>
Following is Breadth First Traversal (starting from vertex 0)<br/>
0 4 1 3 2<br/>
Searching for edge 1-3: Found<br/>
Searching for edge 1-3 after deletion: Not Found
</p>
</div>




            </section>

        </div>
        </>
    );
};
export default Graphs;
