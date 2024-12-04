var circleElements = document.getElementsByClassName("circle");
var textElements = document.getElementById("textStyle");
var index = 0;

var array = [
    { item: circleElements[0], color: "red", word: "Stop" },
    { item: circleElements[1], color: "yellow", word: "Steady" },
    { item: circleElements[2], color: "green", word: "Go" },
  ];
  
  var i = 0;

  setInterval(function () {
    array[i].item.style.backgroundColor = "#D9D9D9";
    i = (i + 1) % array.length;
    array[i].item.style.backgroundColor = array[i].color;
    textElements.innerHTML = array[i].word;
    textElements.style.color = array[i].color;
  }, 500);