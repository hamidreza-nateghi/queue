class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null
    this.length = 0;
  }

  enqueue(data) {
    const item = new Node(data);
    this.length++;
    if (this.head === null) {
      this.head = item;
      this.tail = this.head;
      return;
    }
    this.tail.next = item;
    this.tail = item;
  }

  dequeue() {
    if (this.head === null) {
      return null;
    }
    this.length--;
    const data = this.head.data;
    this.head = this.head.next;
    return data;
  }

  peek() {
    return this.head.data;
  }
}
