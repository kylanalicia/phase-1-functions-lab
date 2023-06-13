let hq=42
function distanceFromHqInBlocks(block){
    if(block<42){
        return (42-block)
    }
    else if(block>42){
        return(block-42)
    }
}

function distanceFromHqInFeet(block){
    if(block<42){
        return ((42-block)*264)
    }
    else if(block>42){
        return ((block-42)*264)
    }
}

let lengthOfBlock=264;
function distanceTravelledInFeet(start, destination){
    if (start>destination){
       return (start-destination) * lengthOfBlock
    }
    return (destination-start) * lengthOfBlock
   }
   
   function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let Travelled = distanceTravelledInFeet(start,destination);
    if (Travelled <= 400){
        return 0;
    }else if(Travelled > 400 && Travelled <=2000){
        return (Travelled-400)* 0.02;
    }else if(Travelled >2000 && Travelled <2500){
        return 25;
    }
    else if(Travelled > 2500){
        return 'cannot travel that far'
    }

  }