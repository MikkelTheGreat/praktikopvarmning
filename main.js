var calcInput = $('#calcInput');

function main() { 
  var calc0 = addClickEvents('#calc0', '0');
  var calc1 = addClickEvents('#calc1', '1');
  var calc2 = addClickEvents('#calc2', '2');
  var calc3 = addClickEvents('#calc3', '3');
  var calc4 = addClickEvents('#calc4', '4');
  var calc5 = addClickEvents('#calc5', '5');
  var calc6 = addClickEvents('#calc6', '6');
  var calc7 = addClickEvents('#calc7', '7');
  var calc8 = addClickEvents('#calc8', '8');
  var calc9 = addClickEvents('#calc9', '9');
  var calcPlus = addClickEvents('#calcPlus', '+');
  var calcMinus = addClickEvents('#calcMinus', '-');
  var calcMulti = addClickEvents('#calcMulti', '*');
  var calcDivi = addClickEvents('#calcDivi', '/');
  
  var calcDel = $('#calcDel').on('click', function() {
    calcInput.val('');
  });
  
  var calcEquals = $('#calcEquals').on('click', function() {
    calculate();
  });
};

function addClickEvents(selector, input) {
  $(selector).on('click', function() {
    calcInput.val(calcInput.val() + input);
  });
}

function calculate() {
  calcInput.val('Equals');
};

main();
