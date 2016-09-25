
lib_.utils = {}


// Thanks to http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
lib_.utils.removeFromArray = function(array, element) {
    var index = array.indexOf(element);
    if (index >= 0)
        array.splice(index, 1);
}
