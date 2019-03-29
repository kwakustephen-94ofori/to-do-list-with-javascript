// My todos should have a way to change todos
// we need to first get hold of the array
// and pass the location number of the item we want to change in and insert the new item

var todos = ['item 1','item 2','item 3'];
//Computers starts counting from 0
// to change the first item in the array ??
todos[0] = 'item one changed';
// item 1 now becomes item 1 changed
 
todos[2] = 'item 3 changed to this';

//When you access a location that is not in the array,
// You get an undefined error message
// example
todos[10] = 'Item 10 accessed';
//returns error since the 9th location/item cannot be found in the array

