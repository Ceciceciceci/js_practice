/* ========== STACK ========== */

// class Stack {
//     constructor () {
//       this.storage = {}
//       this.size = 0 // the index
//     }
  
//     push(element) {
//       this.size++
//       this.storage[this.size] = element
//       console.log( this.storage );
//     }
  
//     pop() {
//       let removed = this.storage[this.size]
//       delete this.storage[this.size]
//       this.size--
//       return removed
//     }
  
//     peek() {
//       return this.storage[this.size]
//     }
//   }
  
//   const stack = new Stack()
  
//   stack.push('dog')
//   stack.push('cat')
//   stack.push('bear')
  
//   stack.pop()
  
//   stack.peek()
  
  /* ========== QUEUE ========== */
  
  class Queue {
    constructor() {
      this.storage = {}
      this.head = 0
      this.tail = 0
    }
  
    enqueue(element) {
      this.storage[this.tail] = element
      this.tail++
      console.log(this.storage);
    }
  
    dequeue() {
      let removed = this.storage[this.head]
      delete this.storage[this.head]
      this.head++
      console.log(removed);
      return removed
    }
    
    peek(){
        console.log(this.storage[this.head]);
    }
  }
  
  const queue = new Queue()
  
  queue.enqueue('seahorse')
  queue.enqueue('dolphin')
  queue.enqueue('whale shark')
  
  console.log(queue);

  queue.dequeue()
  queue.peek();
//   queue.dequeue()
