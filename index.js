class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  append(value) {
    const node = new Node(value);

    if (!this._head) {
      this._head = node;
      this._length++;
    } else {
      this._tail.nextNode = node;
      this._tail = node;
      this._length++;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

export default LinkedList;
