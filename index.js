var y = 3;

switch (y) {
    case 1:
        console.log("the number is one");
        break;
    case 2:
        console.log("the number is two");
        break;
    case 3:
        console.log("the number is tree");
        break;
    default:
        console.log("the number is:", y);
}


// show me the odds
function count(x) {
    var numbers = [];
    if (x%2 === 0){
        for (var i = 0; i < x; i +=2) {
            numbers.push(i);
        }
    } else {
        for (var i = 1; i < x; i += 2 ){
            numbers.push(i);
        }
    }
    console.log("numbers are:", numbers);
    return numbers;
}


count(17);
