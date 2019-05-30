// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {

constructor() {
    this.first = new Stack
    this.second = new Stack

}

add(result){
    this.first.push(result)
};

remove(){
    while(this.first.peek()){
        this.second.push(this.first.pop());
    }
    const result = this.second.pop();

    while (this.second.peek()) {
        this.first.push(this.second.pop())
    }
    return result;
}

peek(){
        while(this.first.peek()){
            this.second.push(this.first.pop())
        }
    
        const record = this.second.peek()
    
        while(this.second.peek()){
            this.first.push(this.second.pop())
        }
    
        return record
    }

}


module.exports = Queue;



// constructor(){
//     this.first = new Stack()
//     this.second = new Stack()

// }

// add(info){
//     return this.first.push(info)
// }

// peek(){
//     this.first.info[this.first.length -1]
//     this.second.info[this.second.length -1]
// }

// remove(){
//     // while(this.first[this.first.lenth != 0])
//     while(this.first.peek()){
//         this.second.push(this.first.pop())
//     }

//     const record = this.second.pop()

//     while(this.second.peek()){
//         this.first.push(this.second.pop())
//     }
//     return record

// }

// peek(){
//     while(this.first.peek()){
//         this.second.push(this.first.pop())
//     }

//     const record = this.second.peek()

//     while(this.second.peek()){
//         this.first.push(this.second.pop())
//     }

//     return record
// }

