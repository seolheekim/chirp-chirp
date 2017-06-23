var sample_text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod \
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo \
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non \
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var counter = {
  "a" : 0,  "b" : 0,  "c" : 0,  "d" : 0,
  "e" : 0,  "f" : 0,  "g" : 0,  "h" : 0,
  "i" : 0,  "j" : 0,  "k" : 0,  "l" : 0,
  "m" : 0,  "n" : 0,  "o" : 0,  "p" : 0,
  "q" : 0,  "r" : 0,  "s" : 0,  "t" : 0,
  "u" : 0,  "v" : 0,  "w" : 0,  "x" : 0,
  "y" : 0,  "z" : 0
}

function countLetters(counter, sample_text){
  sample_text = sample_text.toLowerCase();
 var slicedLetters = sample_text.slice(0, 1);

 if(sample_text.length === 0){
   return counter
 }

 if(counter.hasOwnProperty(slicedLetters)){
   counter[slicedLetters] += 1
 }

 sample_text = sample_text.slice(1, sample_text.length)
  return countLetters(counter, sample_text)


}

$(document).ready(function(){
  countLetters(counter, sample_text);
  $("#result").html(JSON.stringify(counter));
});

//LOL deconstructed
//function countLetters(counter, sample_text){
//   var strArray = sample_text.split('')
//   var removeSpace = strArray.filter(function(x) { return x.trim() != ''; });
//   var newArray = removeSpace.filter(function(p) { return p.trim() != '.'; });

// //   var string = removePeriod.toString().replace(/,+/g,'').toLowerCase()
// //  console.log(string)
//   for(var i = 0; i < newArray.length; i++){
//      if(newArray.indexOf(i) === -1){
//        console.log(newArray[i])
//      }
//   }


// }
// var result = countLetters(counter, sample_text);
// console.log(result)
