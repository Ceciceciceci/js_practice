//SINGLY LINKED LIST

//barebones example
// var n1 = {data: 100};
// var n2 = {data: 200};
// n1.next = n2;
// console.log(n1);

class Node{
  constructor(data, next){
    this.data = data;
    this.next = next || null;
  }
}

class LinkedList{
  constructor(){
    this.head = null; // if no head or empty
    this.size = 0; // keep track of the size of the list
  }

  //1.) insert at beginning of LIST
  insertFront(data){
    //new Node ( , 'thif there is something in head already, push it to next ' )
    this.head = new Node(data, this.head);
    this.size++;
  }

  //2.) insert at the end of the list
  //need to set data into new node
  //loop through list then set 
  insertEnd(data){
    let newTailData = new Node(data);
    let currentNode;
    //if the list is empty, if there is no head, make the new TailData the head
    if (!this.head){ this.head = newTailData; }
    else { currentNode = this.head;
      while(currentNode.next){ // while a next node exists
        //console.log(current.data);
        currentNode = currentNode.next;
        //console.log(this.tail);
      }
      currentNode.next = newTailData;
      // this.tail = new Node(data);
    }
    this.size++;
  }

  //3.) insert at any index.
  insertAnywhere(data, index){
    let newNodeData = new Node(data);
    let currentNode = this.head, prevNode;
    //we need a prevNode and currNode save so that we can repoint the new node data to the rest of the list
    var count = 0;

    //index is empty/null case
    if (index == null){
      return "NO INDEX INPUT";
    }
    if (index > 0 && index > this.size){ //if index is out of the range of the list, edge case
      return "STOP OUT OF BOUNDS";
    } else if (index === 0){ //if first node index
      this.insertFront(data);
    } else if (index === this.size){ //if last node index
      this.insertEnd(data);
    } else { //all the other indexes
      while(count < index){
        count++; //update counter 
        prevNode = currentNode; //need to save current node to set the prev.next to the new node data
        currentNode = currentNode.next; //move current Node pointer.
      }
      prevNode.next = newNodeData; //set the prevNode (which was currNode pointing at) .next to be the new node
      newNodeData.next = currentNode; //set the new node's next to point to the node after
      this.size++;
    }

  }

  //4.) search for at a certain index
  getNodeIndex(index){
      let currentNode = this.head;
      var count = 0;
      var foundNode = "";

      while (currentNode){
        if (count === index){
           foundNode = currentNode.data;
        }
        count++;
        currentNode = currentNode.next;
      }
      console.log (foundNode);
  }

  //5.) remove at index
  removeNodeAt(index){
    let currentNode = this.head, prevNode;
    var count = 0;
    if (index > 0 && index > this.size){ //if index is out of the range of the list, edge case
      return "STOP OUT OF BOUNDS";
    } else if (index === 0){ //if first node index
      this.head = currentNode.next;
    } else { //all the other indexes
      while(count < index){
        count++; //update counter 
        prevNode = currentNode; //need to save current node to set the prev.next to the new node data
        currentNode = currentNode.next; //move current Node pointer.
      }
      prevNode.next = currentNode.next; //set the prevNode (which was currNode pointing at) .next to be the new node
      
      this.size--;
    }

  }

  //6.) clear list
  clearList(){
    this.head = null; //no reference to rest of the list
    this.size = 0;
    this.tail = null;
  }

  //7.) print the data only from list
  printList(){
    let currentNode = this.head;
    //loop through all the nodes
    while (currentNode){ //while current node exists
      console.log(currentNode.data); //print
      currentNode = currentNode.next;//then grab the next node data
    }
  }
  
  printSize(){
    console.log(this.size);
  }

  //8.)reverse the list
  // You want to iterate and move the pointer of this.head to the next node each time.
  // Trying to make a new list and inserting it from the old list will give you o(nlogn) time, too long and complicated
  reverseList(){
    let currentNode = this.head;
    let temp;
    let prevNode = null; //set it to null so that the current head points to null 
    
    if (this.printSize() < 0){ //if the list is empty
      return;
    } else {
      while (currentNode){
        temp = currentNode; //temp to save the head 
        currentNode = currentNode.next; //set the head to the next node
        temp.next = prevNode; //set head pointer to the previous node
        prevNode = temp; // this will move prep to the current node again
      }
      console.log(prevNode); //prints out entire node and data
      // return prevNode;
      // this.tail = currentNode;
    }
  }
}


//TEST CASES
const ll = new LinkedList();

ll.insertFront(100); //100
ll.insertEnd(200); // 100, 200
ll.insertFront(38); //38, 100, 200
// ll.insertAnywhere(500,3); // 38, 100, 500, 200

console.log("- - - - - - -");
// ll.getNodeIndex(2);
// ll.removeNodeAt(3);
ll.reverseList();
// ll.clearList();
// ll.printList();
// ll.printSize();

// console.log(ll);
