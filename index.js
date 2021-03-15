function scuberGreetingForFeet(result){
  if (result <= 400) {
    return 'This one is on me!';
  } else if (result >= 2000 && result < 2500){
    return 'I will gladly take your thirty bucks.';
  } else if (result >= 2500) {
    return 'No can do.';
  }
}

scuberGreetingForFeet(199);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);


function ternaryCheckCity(capital){
  return (capital === 'NYC' ? 'Ok, sounds good.' : 'No go.');
}
ternaryCheckCity('NYC');
ternaryCheckCity('Pittsburgh');

function switchOnCharmFromTip(tip){
  switch (tip){
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    case 'thanks for everything':
      return 'Bye.';
      break;  
  }
}

switchOnCharmFromTip('generous');
switchOnCharmFromTip('not as generous');
switchOnCharmFromTip('thanks for everything');
