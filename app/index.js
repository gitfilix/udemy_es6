// map helper function
let values = [20, 30, 44];

let doubled = values.map((n) => {
    return n*2;
});

console.log("doubled", doubled);


let points = [7, 8, 65, 3, 13, 34, 32, 15, 34, 3];
let highScores = points.filter((n) => {
    return n > 20;
});

console.log(highScores);
