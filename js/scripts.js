// Business Logic
var encrypt = function(message) {
  var noPunLow = message.toLowerCase().replace(/[^A-Za-z]/g, "");
  return noPunLow;
  var condMessage = noPunLow.replace(/\s/g, "");
  return condMessage;

  // var noPun = message.replace(/[^A-Za-z]/g, "");
  // return noPun;
}
