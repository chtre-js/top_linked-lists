import LinkedList from "./index.js";

test("append a value to an empty list change the head", () => {
  const linkedList = new LinkedList();
  linkedList.append(800);

  expect(linkedList.headValue).toEqual(800);
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

  expect(linkedList.tailValue).toEqual(500);
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

  expect(linkedList.headValue).toEqual(800);
})

test.skip("prepend a value to a list changes the head and link to the former head", () => {
  const linkedList = new LinkedList;
  linkedList.append(100);
  linkedList.append(200);
  linkedList.append(300);
  
  linkedList.prepend(800);

  expect(linkedList.headValue).toEqual(800);
  expect(linkedList._head.nextNode.value).toEqual(100);
})
