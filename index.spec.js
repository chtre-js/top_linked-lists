import LinkedList from "./index.js";

test("append a value to an empty list change the head", () => {
  const linkedList = new LinkedList;

  linkedList.append(800);

  expect(linkedList.headValue).toEqual(800);
})
