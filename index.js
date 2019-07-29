// Code your solution in this file!
function distanceFromHqInBlocks(numOfBlock) {
    return Math.abs(numOfBlock - 42)
}

function distanceFromHqInFeet(numOfBlock) {
    return distanceFromHqInBlocks(numOfBlock) * 264
}

function distanceTravelledInFeet(numOfBlock1, numOfBlock2) {
    return Math.abs(numOfBlock2 - numOfBlock1) * 264
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare;
    if (distance <= 400) {
        fare = 0;
    } else if (distance <= 2000 && distance > 400) {
        fare = (distance - 400) * 0.02
    } else if (distance > 2000 && distance < 2500) {
        fare = 25
    } else {
        fare = 'cannot travel that far'
    }
    return fare
}