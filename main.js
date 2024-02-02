let form = document.querySelector("form");
let ul = document.querySelector("ul");
let input = document.querySelector("input");


const saveTodo = (e) => {
    e.preventDefault();

    let li = document.createElement("li");
    let delBtn = document.createElement("button");
     
    li.innerText = input.value;
    delBtn.innerText = "Delete"

    li.className = "list-group-item rounded-0";
    delBtn.className = "btn btn-danger btn-sm float-end rounded-0";

    ul.appendChild(li);
    li.appendChild(delBtn);

    form.reset();

};

form.addEventListener("submit", saveTodo);


const deleteTodo = (e) => {
    if (e.target.className.includes("btn-danger")) {
        if (window.confirm("Are you sure?")) {

            ul.removeChild(e.target.parentElement);
        }
    }
};

ul.addEventListener("click", deleteTodo);
