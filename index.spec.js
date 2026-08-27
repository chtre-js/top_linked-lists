import LinkedList from "./index.js";

test("append a value to an empty list change the head", () => {
  const linkedList = new LinkedList();
  linkedList.append(800);

  expect(linkedList.head.value).toEqual(800);
});

test("append a value to an empty list increment the length to 1", () => {
  const linkedList = new LinkedList();
  linkedList.append(700);

  expect(linkedList.size).toEqual(1);
});

test("append several values update the tail", () => {
  const linkedList = new LinkedList;
  linkedList.append(700);
  linkedList.append(600);
  linkedList.append(500);

  expect(linkedList.tail.value).toEqual(500);
})

test("append several values update the size accordingly", () => {
  const linkedList = new LinkedList;
  linkedList.append(700);
  linkedList.append(600);
  linkedList.append(500);

  expect(linkedList.size).toEqual(3);
})

test("prepend a value to an empy list adds a head", () => {
  const linkedList = new LinkedList();
  linkedList.prepend(800);

  expect(linkedList.head.value).toEqual(800);
})

test("prepend a value to a list changes the head and link to the former head", () => {
  const linkedList = new LinkedList;
  linkedList.append(100);
  linkedList.append(200);
  linkedList.append(300);
  
  linkedList.prepend(800);

  expect(linkedList.head.value).toEqual(800);
  expect(linkedList.head.nextNode.value).toEqual(100);
})

test("prepend a value to a list increment the size", () => {
  const linkedList = new LinkedList;
  linkedList.append(100);
  linkedList.append(200);
  linkedList.append(300);
  
  linkedList.prepend(800);

  expect(linkedList.size).toEqual(4);
})

test("head() returns undefined if there is no head", () => {
  const linkedList = new LinkedList;

  expect(linkedList.head).toBe(undefined);
})

test("head() returns the head for a full list", () => {
  const linkedList = new LinkedList;
  linkedList.append(800);
  linkedList.append(7400);
  linkedList.append(500);

  expect(linkedList.head).toEqual({value: 800, nextNode: {value: 7400, nextNode: {value: 500, nextNode: null}}});
})

test("tail() returns undefined if the list is empty", () => {
  const linkedList = new LinkedList;

  expect(linkedList.tail).toBe(undefined);
})

test("tail() returns the correct node for a full list", () => {
  const linkedList = new LinkedList;
  linkedList.append(800);
  linkedList.append(500);
  linkedList.append(400);

  expect(linkedList.tail).toEqual({value: 400, nextNode: null});
})

test("at(4) returns the 4th node", () => {
  const linkedList = new LinkedList;
  linkedList.append(100);
  linkedList.append(200);
  linkedList.append(300);
  linkedList.append(400);
  linkedList.append(500);

  expect(linkedList.at(4)).toEqual({value: 400, nextNode: {value: 500, nextNode: null}});
})

test("pop() returns undefined when used on an empty list", () => {
  const linkedList = new LinkedList;

  expect(linkedList.pop()).toBe(undefined);
})

test("pop() returns the head on an one-element list", () => {
  const linkedList = new LinkedList;
  linkedList.append(800);

  expect(linkedList.pop()).toEqual({value: 800, nextNode: null});
})

test("pop() reassign the head on multi-element lists", () => {
  const linkedList = new LinkedList;
  linkedList.append(100);
  linkedList.append(200);
  linkedList.append(300);
  linkedList.append(400);
  linkedList.append(500);

  linkedList.pop();
  expect(linkedList.head.value).toEqual(200);
})

test("pop() returns the current head", () => {
  const linkedList = new LinkedList;
  linkedList.append(800);
  linkedList.append(700);

  expect(linkedList.pop()).toEqual({value: 800, nextNode: {value: 700, nextNode: null}});
})
