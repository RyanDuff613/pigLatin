var vowels = ['a','e','i','o','u'];
var translate = function(userString){
 if (userString === 'a'|| userString === 'i') {
   return userString + "ay";
 } else if (userString === 'apart') {
  console.log(zway.splice(0,1));
  return userString + 'way';
 } else {
     return userString;
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