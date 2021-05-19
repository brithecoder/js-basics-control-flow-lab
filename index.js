function scuberGreetingForFeet(ride){
  let result 
  if (ride <= 400 ){
    return 'This one is on me!';
  }
    if (ride > 2000 && ride < 2500){
      return 'I will gladly take your thirty bucks.';
  }
     else (ride <=2500)
       return 'No can do.';
   return result 
  }


function ternaryCheckCity(city){
   let result 
   if (city === 'NYC'){
   return `Ok, sounds good.`;
   }
   if (city !==`NYC`){
     return `No go.`;
   }
     return result
}

function switchOnCharmFromTip(tip){
  switch (tip){
    case `generous`:
      return `Thank you so much.`;
    case `not as generous`:
       return `Thank you.`;
      default:
       return `Bye.`;

  }
}