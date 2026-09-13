//  "Go To gym" ,"Revision web dev", "Take class"

let todos =[{
    id:"Date.now",
    text: "Go to gym",
    isCompleted:false
},{
    id:"Date.now",
    text: "Revision web dev",
    isCompleted:false
},{
    id:"Date.now",
    text: "Take class",
    isCompleted:false
}


   
]



const TodoApp = document.querySelector("#Todo App")
const todoinput = document.querySelector("#todoinput")
const todolist = document.querySelector("#todo-list")

todoinput .addEventListener('submit', (e) => {
    e.preventDefault()
    const todoValue = todoinput.Value;
    todos.push(todoValue)   
    addTodo(todoValue)
})

function xyz(){
    todolist:""
    todos.forEach (function (todo){
    
})
}xyz()
function addTodo(todo){
const li = document.createElement("li")
    // li.textContent= todo
    li.className =`
    flex gap-2 border border-slate-300 p-4 rounded-xl'
    li.innerHTML="
    <input type="checkbox"
            >
            <p class="flex-1">${todo.text}</p>
            <div class="flex gap-2">
                <button data-id="1">Edit</button>
                <button data-id="1">Delete</button>
            </div>`
    todolist.append(li)
}