function beepBoop(inputNumber) {
    let resultArray = [];
  for (let index = 0; index <= inputNumber; index ++) {
    if ([index].toString().includes(3)) {
      resultArray.push(" Won't you be my neighbor?");
    } else if ([index].toString().includes(2)) {
      resultArray.push(" Boop!");
    } else if ([index].toString().includes(1)) {
      resultArray.push(" Beep!");
    } else {
      resultArray.push(index);
    };
  };
    return resultArray;
};

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    let inputNumber = $("input#number").val();
    let result = beepBoop(inputNumber);

    $("#result").text(" " + result);
  });
});