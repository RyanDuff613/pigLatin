
var translate = function(userString){
  if (userString.slice(0,1)=== 'y') {
      return userString.slice(1)+userString.slice(0,1)+'ay'; 
  } else if (userString.slice(0,2) === 'qu') {
      return userString.slice(2)+userString.slice(0,2)+'ay';
  } else if (userString.slice(0,1) === 'a' || userString.slice(0,1) === 'e' || userString.slice(0,1) === 'i' || userString.slice(0,1) === 'o' || userString.slice(0,1) === 'u') {
      return userString + 'way';
  } else {
      return userString.slice(userString.indexOf('a')) + userString.slice(0, userString.indexOf('a')) +'ay';
      console.log(userString.slice(0,userString.indexOf('a')));
      // return userString.slice(index of first vowell, indexoflastletter) + userString.slice(0, /*indexof firstvowel-1 */ +'ay'; 

      // userstring.slice(indexOf(first vowel), indexof lastletter) + userstring.slice(0, -indexOf(first vowel-1- ) +'ay'
 } 
};

$(document).ready(function() {
  $('#theForm').submit(function(event){
    event.preventDefault();
    var userString = $('#userInput').val();
    var outputString = translate(userString);
    //console.log(userString);
    //console.log(outputString);

  $('#result').text(outputString).show();
  });

});

/*vowels.forEach(function(vowel){
  return vowel;
});
*/ 