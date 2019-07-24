// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
  const distance = 42 - blocks;
  return Math.abs(distance);
}

function distanceFromHqInFeet (start_block) {
   return distanceFromHqInBlocks(start_block) * 264
}

function distanceTravelledInFeet(startBlock, finishBlock) {
  return Math.abs((startBlock - finishBlock) * 264);
}

function calculatesFarePrice(start, destination) {
  let travelDistance = distanceTravelledInFeet(start, destination);

  switch (true) {
    case travelDistance <= 400:
    return 0
    break;
    case travelDistance > 400 && travelDistance < 2000:
    travelDistance -= 400;
    return travelDistance * .02
    break;
    case travelDistance > 2000 && travelDistance < 2500:
    return 25
    break;
    case travelDistance > 2500:
    return 'cannot travel that far'
    break;
  }
}
