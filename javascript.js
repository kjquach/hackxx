//<html>
//<body>


//creates a random genre
var genre = [
    'a mobile app',
    'a website',
    'a VR program'
];

var randomGenre = 3;
var tag;

function getGenre() {
    "use strict";
    
    randomGenre = Math.floor(Math.random() * (genre.length));
    document.getElementById("ideaGenerate").innerHTML = genre[randomGenre];
//    var ideaElem = document.getElementById("ideaGenerate");
//    ideaElem.innerHTML(genre[randomGenre]);
}
    //function getNewGenre() {
   
        //document.getElementById("ideaGenerate").addEventListener("click", getGenre);
        //document.getElementByID(genre).innerHTML = genre[randomGenre];
   // }

//creates a random topic
var topic = [
    "generates random numbers",
    "flips a coin",
    "generates animal sounds",
    "splits the bill",
    "calculates tip",
    "makes color palettes",
    "gives inspirational quotes",
    "designs a photo collage",
    "tracks habits",
    "displays an event calendar",
    "maps nearby boba shops",
    "generates baby names"
];

//gets the idea
function getIdea() {
    "use strict";
    var randomIdea = Math.floor(Math.random() * (topic.length));
	document.getElementById("topicGenerate").innerHTML = topic[randomIdea];
}
    //document.getElementById("topicGenerate").addEventListener("click", getIdea);


function startScroll() {
    "use strict";
  
    if (randomGenre === 0) {
        tag = document.getElementById("apparticles");
    } else if (randomGenre === 1) {
        tag = document.getElementById("webarticles");
    } else if (randomGenre === 2) {
        tag = document.getElementById("vrarticles");
    }
    
    tag.scrollIntoView();
}

//</body>
//</html>