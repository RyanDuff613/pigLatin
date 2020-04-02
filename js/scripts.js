// business logic
var vowels = ['a','e','i','o','u'];
var firstVowelIndex;

//determine if input is one word or multiple, translate if single
var multiWord = function(userString){
  if (userString.includes(' ') === true){
    return splitPhrase(userString);
  }else {
    return translate(userString);
  }
};

//split multi-word user input into separate words
var splitPhrase = function(multiWordString){
  var words = multiWordString.split(' ');
  var translatedArray = words.map(function(word){
      return translate(word);
  });
  return translatedArray.join(' ');
};

//translate word to pig latin
var translate = function(userWord){
  if (userWord.slice(0,1)=== 'y') {
      return userWord.slice(1)+userWord.slice(0,1)+'ay'; 
  } else if (userWord.slice(0,2) === 'qu') {
      return userWord.slice(2)+userWord.slice(0,2)+'ay';
  } else if (userWord.slice(0,1) === 'a' || userWord.slice(0,1) === 'e' || userWord.slice(0,1) === 'i' || userWord.slice(0,1) === 'o' || userWord.slice(0,1) === 'u') {
      return userWord + 'way';
  } else {
      firstVowel(userWord);
      return userWord.slice(firstVowelIndex) + userWord.slice(0,firstVowelIndex) +'ay';  
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
  //filter out all -1 indexValues, create new array to hold remaining values
  var filteredValues = indexValues.filter(function(indexValue){
    return indexValue !== -1;
  });
  //return lowest value remaining in filtered values
  var index = Math.min.apply(Math, filteredValues); 
  firstVowelIndex = index;
};

//UI Logic
$(document).ready(function() {
  $('#theForm').submit(function(event){
    event.preventDefault();
    var userInput = $('#userInput').val();
    var output = multiWord(userInput);
  $('#result').text(output).show();
  });
});
