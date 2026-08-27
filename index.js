class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }

  get headValue() {
    return this._head.value;
  }

  get tailValue() {
    return this._tail.value;
  }

  get size() {
    return this._size;
  }

  append(value) {
    const node = new Node(value);

    if (!this._head) {
      this._head = node;
    } else  if (this._head && !this._tail){
      this._head.nextNode = node;
      this._tail = node;
    } else {
      this._tail.nextNode = node;
      this._tail = node;
    }
    this._length++;
  }

  prepend(value) {
    const node = new Node(value);

    if (!this._tail) {
      this._head = node;
    } else {
      node.nextNode = this._head;
      this._head = node;
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
