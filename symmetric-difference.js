function sym(arguments) {
    console.log(arguments.length)
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
        args.push(arguments[i]);
    }
    
  
    function symDiff(arrayOne, arrayTwo) {
        var result = [];
  
        arrayOne.forEach(function (item) {
            if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });
  
        arrayTwo.forEach(function (item) {
            if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });
    }
}
      

sym([1, 2, 3], [5, 2, 1, 4]);