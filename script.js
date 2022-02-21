const input = document.querySelector(".text-field");
const button = document.querySelector(".submit");
const list = document.querySelector(".list");

let currentTodo = "";

input.addEventListener("change", (event) => {
  currentTodo = event.target.value;
});

button.addEventListener("click", () => {
  if (currentTodo) {
    const listItem = document.createElement("div");
    listItem.className = "list-item";

    const text = document.createElement("p");
    text.innerHTML = currentTodo;

    const completeBtn = document.createElement("button");
    completeBtn.addEventListener("click", () => {
      if (text.className === "list-text-completed") text.className = "";
      else text.className = "list-text-completed";
    });
    completeBtn.innerHTML = "Completed";

    const deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", () => {
      list.removeChild(listItem);
    });
    deleteButton.innerHTML = "Delete";

    listItem.appendChild(text);
    listItem.appendChild(completeBtn);
    listItem.appendChild(deleteButton);

    list.appendChild(listItem);
    input.value = "";
  }
});
