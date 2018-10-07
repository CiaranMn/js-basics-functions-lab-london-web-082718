function distanceFromHqInBlocks(block) {
  
}

function distanceFromHqInFeet(loc) {
  distanceFromHqInBlocks
}

function distanceTravelledInFeet(start, end) {
  return (start - end) * 264;
}

function calculatesFarePrice(start, end) {
  let distance = distanceTravelledInFeet(start, end);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    return 
  }
}

