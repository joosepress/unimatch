university_list = {
    "universities":
        [
            {
                "name": "Tartu Ülikool",
                "location": "Estonia",
                "site": "https://www.ut.ee/et"
            },
            {
                "name": "Taltech",
                "location": "Estonia",
                "site": "https://www.taltech.ee"
            }
        ]
}
//const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
    //const result = words.filter(word => word.length > 6);
    //document.getElementById("test").innerHTML = result;
    unis = [1, 2, 3, 4, 5];
        //Adds element into id=addelement div, testing it so i could make new html elements with schools
    university_list.universities.forEach((uni) => {
        var para = document.createElement("p");
        var node = document.createTextNode(uni.name);
        console.log(node)
        para.appendChild(node);
        var element = document.getElementById("test1");
        console.log(para)
        console.log(element)
        element.appendChild(para);
    });