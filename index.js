function distanceFromHqInBlocks(block) {
  let distance = '';

  if(block > 42) {
    distance = block - 42;
  } else {
    distance = 42 - block;
  }

  return distance;

}


function distanceFromHqInFeet (block) {
  let distance;

  distance = distanceFromHqInBlocks(block) * 264;

  return distance;

}

function distanceTravelledInFeet(start, end) {
  let distance = '';

  if(start > end) {
    distance = (start - end) * 264;
  } else {
    distance = (end - start) * 264;
  }

  return distance;

}

function calculatesFarePrice(start, end) {
  let distance = distanceTravelledInFeet(start, end);
  let price;

   if (distance  > 2500) {
      price = 'cannot travel that far';
   } else if (distance < 2500 && distance > 2000) {
     price = 25;
   } else if (distance > 400 && distance < 2000) {
      price = (distance - 400) * .02
   } else {
     price = 0;
   }
  return price;
}
