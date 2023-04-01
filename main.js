window.onload = function() {
    const todoItem = document.getElementById("todo_item");
    const todoCont = document.getElementById("content");
    const orderedList = document.createElement("ul");
    if(localStorage.getItem('to-do')!=""){
        let myList = localStorage.getItem('to-do').split(',');
        printList(myList, orderedList);
    }

    todoCont.appendChild(orderedList);
    var todoList = [];
    todoItem.onchange = function(e){
        todoList.push(e.target.value);
        printList(e.target.value,orderedList);
        todoItem.value = "";
        localStorage.setItem('to-do',todoList);
        let myList = localStorage.getItem('to-do').split(',');
        printList(myList,orderedList);
        console.log(typeof(localStorage.getItem('to-do')));
    }

    function printList(item,container){
        while(container.firstChild){
            container.removeChild(container.firstChild);
            container.innerHTML = "";
        }
        // myList

            var listItem = document.createElement("li");
            var doneButton = document.createElement("button");
            doneButton.innerText = "Completed";
            postponeButton.innerText = "Postpone";

            listItem.innerText = item;
            listItem.appendChild(doneButton);
            listItem.appendChild(postponeButton);

            listItem.classList.add("todo_task");

            orderedList.appendChild(listItem);
    }
}