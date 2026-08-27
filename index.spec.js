import LinkedList from "./index.js";

test("append a value to an empty list change the head", () => {
  const linkedList = new LinkedList();
  linkedList.append(800);

  expect(linkedList.headValue).toEqual(800);
});

test("append a value to an empty list increment the length to 1", () => {
  const linkedList = new LinkedList();
  linkedList.append(700);

  expect(linkedList.listLength).toEqual(1);
});

test("prepend a value to an empy list adds a head", () => {
  const linkedList = new LinkedList();
  linkedList.prepend(800);

  expect(linkedList.headValue).toEqual(800);
})
