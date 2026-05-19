function myColor(){
    let color = document.getElementById("colorPicker").value;
    document.body.style.backgroundColor = color;
    document.getElementById("box").innerText = color;
}
document.getElementById("colorPicker").addEventListener("input",myColor);
