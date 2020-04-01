var vowels = ['a','e','i','o','u'];

var translate = function(userString){
  if (userString.slice(0,1)=== 'y') {
      return userString.slice(1)+userString.slice(0,1)+'ay'; 
  } else if (userString.slice(0,2) === 'qu') {
      return userString.slice(2)+userString.slice(0,2)+'ay';
      // userString -first letter+(first letter + 'ay')
  } else if (userString.slice(0,1) === 'a' || userString.slice(0,1) === 'e' || userString.slice(0,1) === 'i' || userString.slice(0,1) === 'o' || userString.slice(0,1) === 'u') {
      return userString + 'way';
  } else {
      //return 'consonant conditional working' 
      return userString.slice(1)+userString.slice(0,1)+'ay'; 
      // userString -first consonant+(first consonant + 'ay')
 } 
};

$(document).ready(function() {
  $('#theForm').submit(function(event){
    event.preventDefault();
    var userString = $('#userInput').val();
    var outputString = translate(userString);
    console.log(userString);
    console.log(outputString);

  $('#result').text(outputString).show();
  });

});

/*vowels.forEach(function(vowel){
  return vowel;
});
*/ 