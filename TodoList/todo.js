const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!!!");
    }
    else{
        let li = document.createElement("li");   //Creating li element and inputting its value from that of input box
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");   //Creating cross (x) sign at the end of list items
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");   //if checked class is not present then add this class, if it is present then remove it -> working of toggle
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){    //storing all the date locally on our systems so that it stays as it is in the To-Do App even if we close it
    localStorage.setItem("data", listContainer.innerHTML);   //here, whatever content that will be there in our list container will be locally stored on our web browser with the name of data
}

function showTask(){   //function to show the locally stored data whenever we open the To-Do App
    listContainer.innerHTML = localStorage.getItem("data");   //here, it will give all the content of local storage with the name "data"
}
showTask();