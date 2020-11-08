// Answer 5
function hidePara() {
    $("p").hide(); 
    $("#hidePara").hide(); 
    $("#showPara").show(); 
}

function showPara() {
    $("p").show();  
    $("#hidePara").show();
    $("#showPara").hide();
}

// Answer 8

var jsonText = '{"name": "john doe", "age": 21, "city": "Montreal"}';
var val = JSON.parse(jsonText);
console.log(val)
document.getElementById("demo").innerText = val.name + ", " + val.age  + ", " + val.city;