var array1 = [1, 55, 89, 44, 43, 87, 23, 29, 8]
var array2 = [38, 49, 5, 6, 7, 2, 72, 11, 78]

function ClosestTo100() {
    var closestNumber1 = null;
    var closestDiffrence1 = Infinity

    for (let i = 0; i < array1.length; i++) {
        var difference = Math.abs(100 - array1[i])
        if (difference < closestDiffrence1) {
            closestDiffrence1 = difference
            closestNumber1 = array1[i]
        }
    }

    var closestNumber2 = null;
    var closestDiffrence2 = Infinity

    for (let i = 0; i < array2.length; i++) {
        var difference = Math.abs(100 - array2[i])
        if (difference < closestDiffrence2) {
            closestDiffrence2 = difference
            closestNumber2 = array2[i]
        }
    }

    return [closestNumber1, closestNumber2]
}

var closest = ClosestTo100()
console.log('Closest number to 100:', closest);