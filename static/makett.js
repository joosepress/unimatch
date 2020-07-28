//simple change script
function change() {
    document.getElementById("change").innerHTML = "Suurem";
}

//Gets "name" from test.json and changes id=test to that name

//Gets "name" from test.json and changes id=test to that name
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("test").innerHTML = myObj[1].name;
    }
};

function test() {
    xmlhttp.open("GET", "SchoolsTest.json", true);
    xmlhttp.send();
}

//Adds element into id=addelement div, testing it so i could make new html elements with schools
function addelement() {
    var para = document.createElement("p");
    var node = document.createTextNode(test());
    para.appendChild(node);
    var element = document.getElementById("addelement");
    element.appendChild(para);
}