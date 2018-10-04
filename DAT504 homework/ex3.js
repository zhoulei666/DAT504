
function countBs (string) {
  var num = 0;
  for (var i = 0; i < string.length; i++){
    if (string[i] == 'B'){
      num += 1;
    }
  }
  return num;
}

function countChar(string,letter) {
  var num = 0;
  for (var i = 0; i < string.length; i+= 1){
    if (string[i] === letter){
      num += 1;
    }
  }
  return num;
}

alert(countBs('BBC'))
alert(countChar('kakkerlak','k'))
