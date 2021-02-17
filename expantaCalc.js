var expantaCalc = {
  successor: function(integer) {
    var tempInt = integer;
    var i = 0;
    var tempBool = true;
    while (tempBool) {
      if (tempInt[i]) {
        tempBool = true;
        tempInt[i] = false;
        i++;
      } else {
        tempBool = false;
        tempInt[i] = true;
        i++;
      }
    }
    return tempInt;
  }
};
