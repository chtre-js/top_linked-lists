class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }

  get head() {
    return !this._head ? undefined : this._head;
  }

  get tail() {
    return !this._tail ? undefined : this._tail;
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
    this._size++;
  }

  prepend(value) {
    const node = new Node(value);

    if (!this._tail) {
      this._head = node;
    } else {
      node.nextNode = this._head;
      this._head = node;
    }
    this._size++;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

export default LinkedList;
