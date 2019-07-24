function distanceFromHqInBlocks (distance) {
  return Math.abs(distance - 42);
};

function distanceFromHqInFeet (distance) {
  return distanceFromHqInBlocks(distance) * 264;
};

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264;
};

function calculatesFarePrice (start, end) {
  let distance = distanceTravelledInFeet(start, end)

  switch (true) {
    case distance < 400:
      return 0;
      break;
    case distance > 400 && distance < 2000:
      return (distance - 400) * 0.02;
      break;
    case distance > 2000 && distance < 2500:
      return 25;
      break;
    case distance > 2500:
      return 'cannot travel that far';
      break;
    default:
      return 'Error'
  }
}
