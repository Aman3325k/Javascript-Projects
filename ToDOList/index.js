function savedata() {
    const ul = document.querySelector("#list ul");

    ul.querySelectorAll("input[type='checkbox']").forEach(cb => {
        if (cb.checked) {
            cb.setAttribute("checked", "checked");
        } else {
            cb.removeAttribute("checked");
        }
    });

    localStorage.setItem("tasks", ul.innerHTML);
}


function button()
{
const input = document.getElementById("input");
const ul = document.querySelector("#list ul")

if(input.value.trim() === "") return;

const li = document.createElement('li');

li.innerHTML = `
            <label>
                <input type="checkbox">
                <span class="checkmark"></span>
                <span class="task-text">${input.value}</span>
            </label>
            <span class="delete">X</span>  
       `;
       ul.appendChild(li);

       input.value = "";
       savedata()
}

// Delete and save data 
document.addEventListener('click',(e)=>{
    
if(e.target.classList.contains("delete")){
    e.target.parentElement.remove();
    savedata();
}
    
});

// checked one save in storage 
document.addEventListener('change',(e)=>{
    if(e.target.matches('input[type="checkbox"]')){
        console.log("Checkbox changed:", e.target.checked);
        savedata();
    }
});

// loading data on chrome
function loaddata(){
    const ul = document.querySelector("#list ul");
    ul.innerHTML = localStorage.getItem("tasks")|| "";
}

loaddata();