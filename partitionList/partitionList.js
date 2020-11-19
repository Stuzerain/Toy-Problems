// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

// Example:

// Input: head = 1->4->3->2->5->2, x = 3
// Output: 1->2->2->4->3->5

/*

I: linked list and a value
O: another linked list w/ partition preserving relative order -- all nodes < x come before nodes >= x
C: none given
E: really long, empty, short linked list


*/

/**** exponential time complexity solution (deconstruct and reconstruct list) ****/
var partition = function(head, x) {
  // arrays to hold the values in their relative orders
  let prePartition = [];
  let postPartition = [];

  let currentNode = head;

  // traverse linked list, pushing vals < x to prePartition and >= x to postPartition
  while (currentNode) {
    if (currentNode.val < x) {
      prePartition.push(currentNode.val);
    }
    if (currentNode.val >= x) {
      postPartition.push(currentNode.val);
    }
    currentNode = currentNode.next;
  }

  // the new list that will be constructed and returned and a variable to keep track of our current spot in it
  let newList;
  let pointer;

  // take each value from pre and postPartition in order and recreate a new linked list
  while (prePartition.length) {
    if (newList) {
      let nextNode = new ListNode(prePartition.shift());
      pointer.next = nextNode;
      pointer = pointer.next;
    } else {
      newList = new ListNode(prePartition.shift());
      pointer = newList;
    }
  }
    while (postPartition.length) {
    if (newList) {
      let nextNode = new ListNode(postPartition.shift());
      pointer.next = nextNode;
      pointer = pointer.next;
    }
  }

  return newList;
};

/**** linear time complexity solution (reconstruct during traversal) ****/
var partition = function(head, x) {
  if (!head.next) {
    return head;
  }

  let prePartition;
  let prePointer;
  let postPartition;
  let postPointer;
  let currentNode = head;

  while (currentNode) {
    if (currentNode.val < x) {
      if (prePartition) {
        let nextNode = new ListNode(currentNode.val);
        prePointer.next = nextNode;
        prePointer = prePointer.next;
      } else {
        prePartition = new ListNode(currentNode.val);
        prePointer = prePartition;
      }
    }
    if (currentNode.val >= x) {
      if (postPartition) {
        let nextNode = new ListNode(currentNode.val);
        postPointer.next = nextNode;
        postPointer = postPointer.next;
      } else {
        postPartition = new ListNode(currentNode.val);
        postPointer = postPartition;
      }
    }
    currentNode = currentNode.next;
  }

  // handle combiniation of pre and postPartition lists
  if (prePartition) {
    prePointer.next = postPartition;
    return prePartition;
  }
  if (!prePartition) {
    return postPartition;
  }

};