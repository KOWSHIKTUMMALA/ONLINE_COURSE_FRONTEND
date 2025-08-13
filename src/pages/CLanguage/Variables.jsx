import React from 'react';
import './CLang.css';
const Variables= () => {
    return (
        <>
            <div>
                <header className="header">
                    <h1> Variables in C </h1>
                </header>


<section className="section" id="C variables">
<h2>C Variables</h2>

<p>In C, variable is a name given to the memory location that helps us to store some form of data and retrieves it when required. It allows us to refer to memory location without having to memorize the memory address. A variable name can be used in expressions as a substitute in place of the value it stores.

</p>

<p>Example:</p>
<pre>
    {
        `#include <stdio.h>
int main() {

    // Declaring variables
    int a;
  
    // Storing data
    a = 25;

    printf("%d", a);
    return 0;
}
`
    }
</pre>
<div className="output">
<h4>Output:</h4>
<p>25</p>
</div> 
<p><b>Explanation:</b> In the given program, a is a variable that serves as a name for a memory location to store an integer value. It store the value 25 and later retrieve it for printing without needing to reference its full memory address.
</p>
<h3>Syntax</h3>
<p>In C, we have to declare the type of data the variable would store along with the name while creating a variable:</p>
<pre>
    {
        `data_type variable_name;

`
    }
</pre>
<p>This <b>data_type</b> decides how much memory a variable need. We can choose the data types provided by C language to store different type of data in the variable.

</p>
</section>
</div>
</>
);
};
export default Variables;