// DOUBLY LINKED LIST
// you will have to track both prev and head;

class LinkedList {
    constructor () {
      this.head = this.tail = null
    }
  
    // add to the end of the list / tail
    append(value) {
      // if list is empty
      if (!this.tail) {
        this.head = this.tail = new Node(value)
      }
      // if linkedlist has >= one node
      else {
        let oldTail = this.tail
        this.tail = new Node(value)
        oldTail.next = this.tail
        this.tail.prev = oldTail
      }
    }
  
    //add to beginning of list / head
    prepend(value) {
      // if list is empty
      if (!this.head) {
        this.head = this.tail = new Node(value)
      }
      // if linkedlist has >= one node
      else {
        let oldHead = this.head
        this.head = new Node(value)
        oldHead.prev = this.head
        this.head.next = oldHead
      }
    }
  
    deleteHead() {
      // if list is empty (no head)
      if (!this.head) {
        return null
      }
      // if linkedlist has >= 1 node
      else {
        let removedHead = this.head
        // if list has only 1 node left
        if (this.head === this.tail) {
          this.head = this.tail = null
        }
        //if list has >1 node
        else {
          this.head = this.head.next
          this.head.prev = null
        }
        return removedHead.value
      }
    }
  
    deleteTail() {
      // if list is empty (no tail)
      if (!this.tail) {
        return null
      }
      // if linkedlist has >= one node
      else {
        let removedTail = this.tail
        // if list has only 1 node left
        if (this.head === this.tail) {
          this.tail = this.head = null
        }
        //if list has >1 node
        else {
          this.tail = this.tail.prev
          this.tail.next = null
        }
        return removedTail.value
      }
    }
  
    search(value) {
      let currentNode = this.head
  
      while (currentNode) {
        if (currentNode.value === value) {
          return currentNode
        }
        currentNode = currentNode.next
      }
  
      return null
    }
  
  }
  
  class Node {
    //Element holds the data of a node
    //while next holds the pointer to the next node.
    constructor (value, prev, next) {
      this.value = value
      this.next = next || null
      this.prev = prev || null
    }
  }
  
  
  const list = new LinkedList()
  
  list.append(5)
  list.append(4)
  list.append(3)
  list.append(2)
  list.append(1)
  console.log(list);
  
  // list.prepend(-1)
  // list.prepend(0)
  console.log(list.search(3));
  
  // list.reverse();
  // console.log(list);
  //
  // list.search(3)
  // list.search(999)
  //
  // list.deleteHead() // -1
  // list.deleteTail() // 3
  // list.deleteTail() // 2
  // list.deleteHead() // 0
  //
  // list.deleteHead() // 1
  //
  // list.deleteTail() // null
  