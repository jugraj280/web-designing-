var allName = document.getElementById("name");
var sub = document.getElementById("submit");
var allname = document.qurrySelector("ul");
var listName;


function storeNames(){
	var name = allName.value.split(",");
	listname = name;
	}

function viewList(){
 for (var i =0, i < listName.lenght; i++) {
 	var li = document.createElement("li");
 	li.innerHTML = listName[i];
 	ul.appendChild(li);
 }
}