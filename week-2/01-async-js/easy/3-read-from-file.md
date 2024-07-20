## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a "black box", the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

// on making the operation(heavy computation) more heavy affects the event loop causing other asychrounous operations(like fs.readfile) to be delayed

meaning  of blackbox ? 
treat the fs module as a "black box," focusing on how to use it rather than how it works internally. The main goal is to understand how to handle asynchronous operations in JavaScript.

The term "black box" in this context refers to using the fs library without needing to understand its internal implementation details. You use the provided functions as they are, focusing instead on how to interact with them and handle their asynchronous nature.
