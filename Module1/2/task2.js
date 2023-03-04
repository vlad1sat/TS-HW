document.addEventListener('click', function (e) {
    var coords = [e.pageX, e.pageY];
    console.log("Point is ".concat(coords[0], ", ").concat(coords[1]));
});
