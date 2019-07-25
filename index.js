function distanceFromHqInBlocks(distance) {
    if (distance >= 42) {
        return (distance - 42);
    } else {
        return (42 - distance);
    }  
}

function distanceFromHqInFeet(distance) {
    return (distanceFromHqInBlocks(distance) * 264)
}

function distanceTravelledInFeet(street1, street2) {
    if (street1 > street2) {
        return (street1 - street2) * 264
    } else {
        return (street2 - street1) * 264
    }
}

function calculatesFarePrice(street1, street2) {
    let feet = distanceTravelledInFeet(street1, street2)
    if (feet < 400) {
        return 0
    } else if ((feet > 400) && (feet < 2000)) {
        return (feet - 400) * .02
    } else if ((feet > 2000) && (feet < 2500)) {
        return 25
    } else {
        return 'cannot travel that far'
    }


}