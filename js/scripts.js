// Business Logic
var encrypt = function(message) {
  var noPunLow = message.toLowerCase().replace(/[^A-Za-z]/g, ""); //takes input and lowers the case and replaces non-alphabetical characters with nothing
  var count = countLetters(noPunLow);

  console.log(count);
  return noPunLow;
  //
  // var condMessage = noPunLow.replace(/\s/g, ""); //takes input and replaces spacing with nothing
  // return condMessage;

  // var count = noPunLow.length;
  // console.log(count);


  // var noPun = message.replace(/[^A-Za-z]/g, "");
  // return noPun;
};

var countLetters = function(noPunLow) {
  var x = noPunLow.length;
  return x;
}



//user Logic

// $(document).ready(function(){
//   $("form#input").submit(function(event){
//     var coded = ("#coded")
//     $coded.show();
//
//   event.preventDefault();
//   });
// });
