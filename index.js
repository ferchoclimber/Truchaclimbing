function showAlert(){
alert("hola desde el archivo js");

}
const button = document.querySelector("button");
const doTask = () => alert("hola!");
button.setAttribute("onclick", "doTask()");