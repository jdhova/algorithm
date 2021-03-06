// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
 constructor() {
    this.data = []

 }

 add(info) {
   return this.data.unshift(info)
 }

 remove(info) {
  return this.data.pop(info)
}

peek() {
  const {data} = this
  return data[data.length -1]
}

}




// class Queue {
//   constructor() {
//     this.data = [];
//   }

//   add(record) {
//     this.data.unshift(record);
//   }

//   remove() {
//     return this.data.pop();
//   }

//   peek(){
//     const{data} = this
//     return data[data.length -1]
//   }
// }

module.exports = Queue;















// class Queue {
//   constructor() {
//     this.data = [];
//   }

//   add(record) {
//     this.data.unshift(record);
//   }

//   remove() {
//     return this.data.pop();
//   }

//   peek(){
//     const{data} = this
//     return data[data.length -1]
//   }
// }