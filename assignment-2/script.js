var jsonData = '{"userId": 1, "id": 1, "title": "delectus aut autem", "completed": false}';

var myJSON = JSON.parse(jsonData);
console.log(myJSON)
document.getElementById("user").innerHTML = myJSON.userId;
document.getElementById("id").innerHTML = myJSON.id;
document.getElementById("title").innerHTML = myJSON.title;
document.getElementById("comp").innerHTML = myJSON.completed;