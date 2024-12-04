var clickMeButton = document.getElementById("btnDisplay");
var text = "Wlecome To The Game !!";

clickMeButton.addEventListener("click", function () {
    var index = 0;
    var win = open("main.html", "", "width:100px;height:50px");
    win.resizeTo(400,150);
    win.moveTo(screen.width/2 ,screen.height/2);
    setInterval(function(){
        win.document.write(text[index++]);
        if(index == text.length){
            win.close();
        }
        win.focus();
    },500)
});