import { start } from "repl";

function distanceFromHqInBlocks(block){
    if (block >= 42) {
        return block - 42;
    }else{ 
        return 42 - block; 
    }
}

function distanceFromHqInFeet(block){
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock){
    if (startBlock < endBlock) {
        return (endBlock - startBlock) * 264;
    }else{
        return (startBlock - endBlock) * 264;
    }
}

function calculatesFarePrice(startBlock, endBlock){
     const distance = (distanceTravelledInFeet(startBlock, endBlock)) 
     switch (true) {
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