const reverseString = function(input) {
    const arr = input.split("");
    input = "";
    for(let i = arr.length-1; i >= 0; i--){
        input +=  arr[i];
    }
    return input;
};

// Do not edit below this line
module.exports = reverseString;
