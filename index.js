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

  at(index) {
    let current = this._head;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }
    return current;
  }

  pop() {
    const currentHead = this._head;
    if (this._size === 0) {
      return undefined;
    } else if (this._size === 1) {
      this.#reinitializeHead();
    } else {
        this._head = currentHead.nextNode;
    }
    return currentHead;
  }

  contains(value) {
    let current = this._head;
    while (current.value != value) {
      if (!current.nextNode) {
        return false;
      }
      current = current.nextNode;
    }
    return true;
  }

  findIndex(value) {
    let current = this._head;
    let index = 0;
    while (current.value != value) {
      if (!current.nextNode) {
        return -1;
      }
      current = current.nextNode;
      index++;
    }
    return index;
  }

  toString() {
    let string = "";
    let current = this._head;
    if (this._size === 0) {
      return string;
    }
    while (current) {
      string += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    
    return string + "null";
  }

  #reinitializeHead() {
    this._head = new Node(null);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

export default LinkedList;
