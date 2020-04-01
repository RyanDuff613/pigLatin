var vowels = ['a','e','i','o','u'];
var consonants = ['q','w','r','t','p','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];

var translate = function(userString){
  if (userString.slice(0,1) === 'a' || userString.slice(0,1) === 'e' || userString.slice(0,1) === 'i' || userString.slice(0,1) === 'o' || userString.slice(0,1) === 'u') {
  return userString + 'way';
 } else if (userString.slice(0,2) === 'qu') {
     return 'qu printing' // userString -first letter+(first letter + 'ay')
 }  else if (userString.slice(0,1)=== 'y') {
   return 'y working' // userString-y+ ("y"+'ay')
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