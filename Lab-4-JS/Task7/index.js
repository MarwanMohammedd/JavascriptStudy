window.addEventListener("keydown", function (e) {
    var key = e.key;
    var ascii;
    if (key.length == 1) {
      ascii = key.charCodeAt(0);
  
      alert("ascii code for " + key + " is " + ascii);
    } else {
      alert("you clicked " + key);
    }
  });
  window.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    return false;
  });
  