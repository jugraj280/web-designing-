$(document).ready(function(){
    var myJson = {"name": "Jugraj", "age": 25, "city":"Canada"};
    $("h2").html(myJson.name + ", " + myJson.age + ", " + myJson.city);
});