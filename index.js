// Code your solution in this file!
function distanceFromHqInBlocks(block){
  if (block >= 42){
    return block - 42;
  }
  else{
    return 42 - block;
  }
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, end){
  if (start < end) {
    return (end - start) * 264;
  }
  else{
    return (start - end) * 264;
  }
}

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination)
  switch (true){
    case (distance <= 400):
      return 0;
    case (distance > 400 && distance <= 2000):
      return .02 * (distance - 400);
    case (distance > 2000 && distance < 2500):
      return 25;
    default:
      return 'cannot travel that far'
  }
}
