/*
https://www.educative.io/module/lesson/data-structures-in-javascript/gxnlB9N5MR9 

statement:
Given an integer array and a window of size w, 
find the current maximum value in the window as it slides through the entire array.


Solution:
A deque is a double-ended queue where the push and pop operations work in O(1) at both ends. 
It acts as our window. The deque stores elements in decreasing order. 
The front of the deque contains the index for the maximum value in that particular window.


methods:
pop() :Removes the last element from an array and returns it., 
push():Appends new elements to the end of an array, and returns the new length of the array., 
shift():Removes the first element from an array and returns it.

complexity:
The time complexity of this solution is O(n)
Note: Every element is pushed and popped from the deque only once in a single traversal.

The space complexity of this solution is O(w)
O(w) where w is the window size in this case
*/


function printArray(input_array) {
    //print out arrays in [1,2,3] format
    return "["+input_array.toString()+"]";
    
}

let findMaxSlidingWindow = function(nums, windowSize) {
    let result = [];
    
    //edge cases:
    // Return empty list
    if(nums.length == 0) {
      return result;
    }
    // If window_size is greater than the array size,
    // set the window_size to nums.size()
    if (windowSize > nums.length) {
      windowSize = nums.length;
    }

    // Initializing doubly ended queue for storing indices using array
    let window = [];
  

    //find out max for first window. The first element’s index is pushed to the front of the deque.
    for (let i = 0; i < windowSize; i++) {
      // For every element, remove the previous smaller elements from window
      while (window.length > 0 && nums[i] >= nums[window[window.length - 1]]) {
        window.pop();
      } 
      // Add current element at the back of the queue
      window.push(i);
    }
    // Appending the largest element in the window to the result
    result.push(nums[window[0]])
    

    //Remove the indices of all elements from the back of the deque, which are smaller than or equal to the current element.
    for (let i = windowSize; i < nums.length; i++) {
      // remove all numbers that are smaller than current number
      // from the tail of list
      while (window.length > 0 && nums[i] >= nums[window[window.length - 1]]) {
        window.pop();
      }
      
      // Remove first index from the window deque if 
      // it doesn't fall in the current window anymore
      if (window.length > 0 && (window[0] <= i - windowSize)) {
        window.shift();
      }
      // Add current element at the back of the queue
      window.push(i);
      result.push(nums[window[0]]);
    } 
    return result;
  };
  
  let targetList = [3,2,1,2];
  let numsList = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67], [4, 5, 6, 1, 2, 3], [9, 5, 3, 1, 6, 3]];
  
  for (let i=0; i< numsList.length; i++){
    console.log((i + 1) + ". Original list:\t" + printArray(numsList[i]));
    console.log("   Window size:\t\t" +  targetList[i]);
    console.log("   Max:\t\t\t" +  printArray(findMaxSlidingWindow(numsList[i], targetList[i]))); 
    console.log("-----------------------------------------------------------------------------------------------------\n")
  }
  