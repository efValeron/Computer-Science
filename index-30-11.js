// Computer Science 30.11.2023

// var obj3 = {value: 3, next: null, prev: obj2}
// var obj2 = {value: 2, next: obj3, prev: head}
// var head = {value: 1, next: obj2, prev: null}
//
// let current = head
//
// let isEndElement = false
//
// while (!isEndElement) {
//   console.log(current.value)
//   if (current.next === null) {
//     isEndElement = true
//   } else {
//     current = current.next
//   }
// }
//
// current = head
//
// let isStartElement = false
//
// while (!isStartElement) {
//   console.log(current.value)
//   if (current.prev === null) {
//     isStartElement = true
//   } else {
//     current = current.prev
//   }
// }


// class Node {
//   next = null
//   prev = null
//
//   constructor(value) {
//     this.value = value
//   }
// }
//
// class LinkedList {
//   #head = null
//   #tail = null
//   #current = null
//
//   #isFinish = false
//
//   append(value) {
//     const node = new Node(value)
//     if (this.#head === null) {
//       this.#current = node
//       this.#head = node
//       this.#tail = node
//     }
//
//     this.#tail.next = node
//     node.prev = this.#tail
//     this.#tail = node
//   }
//
//   prepend(value) {
//     const node = new Node(value)
//     if (this.#head === null) {
//       this.#current = node
//       this.#head = node
//       this.#tail = node
//     } else {
//       this.#head.prev = node
//       node.next = this.#head
//       this.#head = node
//       this.#current = node
//     }
//   }
//
//   getNext() {
//     if (!this.#isFinish && !this.#current) {
//       this.#current = this.#head
//     }
//
//     if (!this.#current) {
//       return null
//     }
//     const element = this.#current
//     this.#current = this.#current.next
//
//     if (!this.#current) {
//       this.#isFinish = true
//     }
//
//     return element.value
//   }
//
//   getPrev() {
//     if (this.#isFinish) {
//       this.#current = this.#tail
//       this.#isFinish = false
//     }
//
//     if (!this.#current) {
//       return null
//     }
//
//     const element = this.#current
//     this.#current = this.#current.prev
//
//     return element.value
//   }
// }
//
// const linkedList = new LinkedList()
// linkedList.append(2)
// linkedList.append(3)
// linkedList.append(1)
//
// console.log(linkedList.getNext())
// console.log(linkedList.getNext())
// console.log(linkedList.getNext())
// console.log(linkedList.getNext())
//
// console.log(linkedList.getPrev())
// console.log(linkedList.getPrev())
// console.log(linkedList.getPrev())
// console.log(linkedList.getPrev())


class Stack {
  #current = null
  push(element) {
      this.#current = { element, prev: this.#current }
  }

  pop() {
    if (this.#current === null) return null
    const returnElement = this.#current.element
    this.#current = this.#current.prev
    return returnElement
  }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
console.log(stack.pop())

stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())