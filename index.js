class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}
