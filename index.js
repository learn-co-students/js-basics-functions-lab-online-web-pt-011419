function distanceFromHqInBlocks (passengerLocation) {
  let distanceInBlocks = Math.abs(42 - passengerLocation)
  return distanceInBlocks
}

function distanceFromHqInFeet (passengerLocation) {
  let distanceInFeet = 264 * distanceFromHqInBlocks(passengerLocation)
  return distanceInFeet
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  let blocksTravelled = Math.abs(startingBlock - endingBlock)
  let feetTravelled = 264 * blocksTravelled
  return feetTravelled
}

function calculatesFarePrice(startingBlock, endingBlock) {
  let distanceTravelled = distanceTravelledInFeet(startingBlock, endingBlock)
  let passengerFare
  
  if (distanceTravelled <= 400) {
    passengerFare = 0
  } else if (distanceTravelled > 2500) {
    passengerFare = 'cannot travel that far'
  } else if (distanceTravelled > 2000) {
    passengerFare = 25 
  } else {
    passengerFare = (distanceTravelled - 400) * .02
  }
  return passengerFare
}

