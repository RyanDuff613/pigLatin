// business logic
var vowels = ['a','e','i','o','u'];
var firstVowelIndex;

//determine if input is one word or multiple
var singleOrMulti = function(userInput){
  if(userInput.includes(' ') === true){
    split();
    //translate each element of array
    // join array and output result to user
  } else {
    translate();
  }
};

//split multi-word user input into separate words
var split = function(multiWordString){
  var words = multiWordString.split(' ');
  console.log(words);
};

//split('this is my sentence');

//translate user input to pig latin
var translate = function(userString){
  if (userString.slice(0,1)=== 'y') {
      return userString.slice(1)+userString.slice(0,1)+'ay'; 
  } else if (userString.slice(0,2) === 'qu') {
      return userString.slice(2)+userString.slice(0,2)+'ay';
  } else if (userString.slice(0,1) === 'a' || userString.slice(0,1) === 'e' || userString.slice(0,1) === 'i' || userString.slice(0,1) === 'o' || userString.slice(0,1) === 'u') {
      return userString + 'way';
  } else {
      firstVowel(userString);
      return userString.slice(firstVowelIndex) + userString.slice(0,firstVowelIndex) +'ay';  
  } 
};

//return index of first vowel of any word
var firstVowel = function(word){
  //create array to hold index values of the first instance of each vowel in inputted word
  var indexValues = [];
  // push index values of first instance of each vowel into indexValues array
  vowels.forEach(function(vowel){
    indexValues.push((word.indexOf(vowel)));
  });
  console.log(indexValues);
  //filter out all -1 indexValues, create new array to hold remaining values
  var filteredValues = indexValues.filter(function(indexValue){
    return indexValue !== -1;
  });
  //return lowest value remaining in filtered values
  var index = Math.min.apply(Math, filteredValues); 
  console.log(index); 
  firstVowelIndex = index;
};

$(document).ready(function() {
  $('#theForm').submit(function(event){
    event.preventDefault();
    var userInput = $('#userInput').val();
    var output = translate(userInput);
    //console.log(userString);
    //console.log(outputString);

  $('#result').text(output).show();
  });
});
