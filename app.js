// get ul element from HTML by its id
var list = document.getElementById("list");

function addTodo() {

    // get input element from HTML by its id
    var todoText = document.getElementById("todo-text");

    if (todoText.value.trim()) {

        // create list
        var li = document.createElement("li");
        li.setAttribute("class", "list-1")
        var text = document.createTextNode(todoText.value + " ");
        li.appendChild(text);

        // create delete button
        var delBtn = document.createElement("button");
        var delText = document.createTextNode("Delete");
        delBtn.setAttribute("class", "btn");
        delBtn.setAttribute("onclick", "delItem(this)");

        // create edit button
        var editBtn = document.createElement("button");
        var editText = document.createTextNode("Edit");
        editBtn.setAttribute("class", "btn2");
        editBtn.setAttribute("onclick", "editItem(this)");

        delBtn.appendChild(delText);

        editBtn.appendChild(editText);

        li.appendChild(delBtn);

        li.appendChild(editBtn);

        todoText.value = "";

        list.appendChild(li);
    }
}

// delete all list items
function deleteAll() {
    list.innerHTML = "";
}

// delete list item
function delItem(e) {
    e.parentNode.remove();
}

// edit list item
function editItem(e) {
    var value = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter Edit Value", value);
    e.parentNode.firstChild.nodeValue = editValue;
}