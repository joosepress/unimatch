let boolean_flag = false

university_list = {
    "universities":
        [
                {
                    "name": "Tartu ülikool",
                    "location": "Eesti",
                    "suund": "mõlemad",
                    "link": "https://www.ut.ee/et"
            },
                {
                    "name": "Taltech",
                    "location": "Eesti",
                    "suund": "Reaal",
                    "link": "https://www.taltech.ee/"
            },
                {   "name": "University of Oxford",
                    "location": "Inglismaa",
                    "suund": "mõlemad",
                    "link": "https://www.ox.ac.uk/"
            },
                {
                    "name": "University of Cambridge",
                    "location": "Inglismaa",
                    "suund": "mõlemad",
                    "link": "https://www.cam.ac.uk/"
            },
                {
                    "name": "University of Navarra",
                    "location": "Hispaania",
                    "suund": "mõlemad",
                    
            },
                {
                    "name": "UCL",
                    "location": "Inglismaa",
                    "suund": "mõlemad",
            },
                {
                    "name": "University of St Andrews",
                    "location": "Inglismaa",
                    "suund": "mõlemad",
            },
                {
                    "name": "King's College London",
                    "location": "Inglismaa",
                    "suund": "mõlemad",
            },
                {
                    "name": "Lancaster University",
                    "location": "Inglismaa",
                    "suund": "mõlemad",
            },
                {
                    "name": "University of Warwick",
                    "location": "Inglismaa",
                    "suund": "mõlemad",
            },
                {
                    "name": "University of Bristol",
                    "location": "Inglismaa",
                    "suund": "mõlemad",
            },      
                {
                    "name": "University of Edinburgh",
                    "location": "Inglismaa",
                    "suund": "mõlemad",
            },
                {
                    "name": "University of Manchester",
                    "location": "Inglismaa",
                    "suund": "mõlemad",
            },
        ]
}


//const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
    //const result = words.filter(word => word.length > 6);
    //document.getElementById("test").innerHTML = result;  
//function filterunis() {
//    if (boolan_flag) {
        university_list.universities.forEach((uni) => {
            if ((window.location.search.includes(uni.location)) && ((!window.location.search.includes("suund_")) || ((window.location.search.includes(uni.suund)) || (uni.suund.includes("mõlemad"))))) { //Big Big Big Big if or and or... statement (bad practice, i know but i ran out of time)
                console.log(window.location.search) //test logs
                console.log(uni.location) //test logs
                var para = document.createElement("h3"); //makes <h2>
                var node = document.createTextNode(uni.name + ", " + uni.location); //content
                node.href = uni.link;
                para.appendChild(node); //appends them together
                var element = document.getElementById("test1");
                element.appendChild(para);
            }
        });
//    }
//}