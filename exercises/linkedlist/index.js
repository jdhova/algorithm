// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next= next
    }
   
}

class LinkedList {}




module.exports = { Node, LinkedList };





 // constructor(data, next = null){
    //     this.data = data
    //     this.next = next
    // }




// class LinkedList {
//     constructor(){
//         this.head = null
//     }

//     insertFirst(data){
//         const node = new Node(data, this.head)

//         this.head = node 
//     }

//     size(){
//         let counter = 0
//         let node = this.head

//         while(node){
//             counter++
//             node = node.next

//         }
//         return counter
//     }

//     getFirst(){
//         let node = this.head
//         return node
//     }

//     getLast(){
//         if(!this.head){
//             return null
//         }

//         let node = this.head
//         while(node){
//             if(!node.next) {
//                 return node
//             }
//             node = node.next
//         }
//     }

//     clear(){
//         if(this.head){
//             this.head = 0
//         }
//       return this.head  
//     }

//     removeFirst(){
//         if(!this.head){ 
//             return   
//         }
//         this.head = this.head.next
//     }

//   removeLast(){
//       if(!this.head){
//           return
//       }

//       if(!this.head.next){
//           this.head = null
//           return 
//       }

//       let node = this.head.next
//       let previous = this.head

//       while(node.next){
//         previous = node
//         node = node.next 
//       }

//       previous.next = null
//   }

    
// }
