document.getElementById("addbutton").addEventListener("click", handleAdd);

const items = [
  { item: "buy snack", done: false },
  { item: "call friend", done: true },
];

const itemList = document.getElementById("todolist");
items.forEach(
  (todoitem) =>
    (itemList.innerHTML += "<br>" + Object.values(todoitem).join(" "))
);

function handleAdd() {
  const newItem = document.getElementById("todoitem").value;
  items.push({ item: newItem, done: false });
  document.getElementById("todoitem").value = null;
  itemList.innerHTML +=
    "<br>" + Object.values({ item: newItem, done: false }).join(" ");
}
