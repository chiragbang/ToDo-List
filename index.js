function addtolist() {
  var taskname = document.getElementById("taskname").value; //ACCESSING INPUT ELEMENT VALUES
  var tododiv = document.getElementById("mytodo"); //ACCESSING TODO LIST PARENT ELEMENTS WHERE ALL TODO ARE BEING STORED

  var newtodoitem = document.createElement("div"); //EMPTY TODO DIV

  var todoname = document.createElement("li");
  todoname.innerHTML = taskname;
  var deletebtn = document.createElement("i");
  deletebtn.classList.add("far");
  deletebtn.classList.add("fa-trash-alt");

  newtodoitem.appendChild(todoname);
  newtodoitem.appendChild(deletebtn);

  tododiv.appendChild(newtodoitem);
}

var tododiv = document.getElementById("mytodo");
tododiv.addEventListener("click", deleteitem);

function deleteitem(e) {
  const element = e.target;
  if (element.classList[0] == "far") {
    element.parentElement.remove();
  }
}
