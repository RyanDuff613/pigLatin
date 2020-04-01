var translate = function(userString){
 if (userString === 'a' || userString === 'i') {
   return userString + "ay";
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