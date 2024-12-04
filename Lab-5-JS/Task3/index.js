function getFuc() {
    if (arguments.length < 2 || arguments.length > 2) {
        throw new RangeError('The value must be a Argumnet number');
    } else {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    }
}
// getFuc();
// getFuc();
// getFuc();

function addFunc(x) {
    if (typeof x == "number") {
        console.log(typeof x);
    } else {
        throw new TypeError("Eroror");
    }
}
addFunc(x);