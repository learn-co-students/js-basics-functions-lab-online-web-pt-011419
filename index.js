// Code your solution in this file!
function  distanceFromHqInBlocks(pickUp) {
  let headQuarters = 42;
  let blocks;

  if (pickUp > 42) {
    blocks = pickUp - 42
  }
  else if (pickUp < 42) {
    blocks = 42 - pickUp
  }
  return blocks
}

function distanceFromHqInFeet(pickUp) {
  let headQuarters = 42;
  let blocks;

  if (pickUp > 42) {
    blocks = pickUp - 42
  }
  else if (pickUp < 42) {
    blocks = 42 - pickUp
  }
  let feet = blocks * 264
  return feet
}


function  distanceTravelledInFeet(pickUp, dropOff) {
  let distance;

  if (pickUp > dropOff) {
    distance = pickUp - dropOff;
  }
  else {
  distance = dropOff - pickUp;
}
  let feet = distance * 264
  return feet
}

function  calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  }
  else if (distance > 400 && distance <= 2000) {
    return ((distance - 400) * 0.02);
  }
  else if (distance > 2000 && distance < 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far';
  }

}
