/*

https://leetcode.com/problems/print-immutable-linked-list-in-reverse/

You are given an immutable linked list, print out all values of each node in reverse with the help of the following interface:

ImmutableListNode: An interface of immutable linked list, you are given the head of the list.
You need to use the following functions to access the linked list (you can't access the ImmutableListNode directly):

ImmutableListNode.printValue(): Print value of the current node.
ImmutableListNode.getNext(): Return the next node.
The input is only given to initialize the linked list internally. You must solve this problem without modifying the linked list. In other words, you must operate the linked list using only the mentioned APIs.


Example 1:

Input: head = [1,2,3,4]
Output: [4,3,2,1]
Example 2:

Input: head = [0,-4,-1,3,-5]
Output: [-5,3,-1,-4,0]
Example 3:

Input: head = [-2,0,6,4,4,-6]
Output: [-6,4,4,6,0,-2]
 

Constraints:

The length of the linked list is between [1, 1000].
The value of each node in the linked list is between [-1000, 1000].s

*/

/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function ImmutableListNode() {
 *    @ return {void}
 *    this.printValue = function() { // print the value of this node.
 *       ...
 *    }; 
 *
 *    @ return {ImmutableListNode}
 *    this.getNext = function() { // return the next node.
 *       ...
 *    };
 * };
 */

/**
 * @ param {ImmutableListNode} head
 * @ return {void}
 */


//iterative using stack
// TC: O(n)
// SC: O(n)
 var printLinkedListInReverse = function(head) {
     const stack = [];
     while (head) {
         stack.push(head);
         head = head.getNext();
     }

     while (stack.length > 0) {
         stack.pop().printValue();
     }
 };

 //recrusive
//  TC: O(n)
// SC: O(n)
var printLinkedListInReverse = function (head) {
    if (head.getNext()) {
        printLinkedListInReverse(head.getNext());
    }
    return head.printValue();
}
 

/* references:
 https://leetcode.com/problems/print-immutable-linked-list-in-reverse/discuss/436800/JavaScript-recursion
 https://leetcode.com/problems/print-immutable-linked-list-in-reverse/discuss/1971220/Javascript-Solutions-Including-Follow-Up
 https://leetcode.com/problems/print-immutable-linked-list-in-reverse/discuss/1006508/Iterative-and-Recursive-On-time-and-On-space
*/

// first attempt: 20220605