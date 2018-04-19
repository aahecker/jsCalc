var lastEntered;
var historyLog = new Array;
var histCounter = 0;

$(document).ready(function(){
  $(".num, .operator").each(function(){
  	var value = $(this).val();
    $(this).click(function(){appendValue(value)});
  })
  $("#clear").click(clearValue);
  $("#run").click(runCalc);
  $("#historyBack").click(historyBack);
  $("#historyFront").click(historyFront);
})

function appendValue(value){
	var currentVal = $("#screen").val();
  var newVal;
	if(currentVal === null || lastEntered === null || isNaN(lastEntered)){
		if(isNaN(value)){
    	newVal = currentVal;
    }else{
    	newVal = currentVal += value;
    }
  }else{
  	newVal = currentVal += value;
  }
  $("#screen").val(newVal);
  lastEntered = value;
  //$("#test").append(lastEntered);
}

function clearValue(){
	$("#screen").val("");
}

function runCalc(){
	var valueString = $("#screen").val();
  var calcVal;
  calcVal = eval(valueString);
  if($.isNumeric(calcVal)){
  	$("#screen").val(calcVal);
  }else{
  	$("#screen").val("ERROR");
  }
  var histItem = valueString + " = " + calcVal;
  historyLog.push(histItem);
  histCounter = historyLog.length - 1;
}

function historyBack(){
  var histDisplay = historyLog[histCounter];
	$("#screen").val(histDisplay);
  histCounter--;
  if(histCounter < 0){
  	$("#screen").val("End of History. Make new calculations.");
  }
}

function historyFront(){
  var histDisplay = historyLog[histCounter];
	$("#screen").val(histDisplay);
  histCounter++;
  if(histCounter >= historyLog.length){
  	$("#screen").val("End of History. Make new calculations.");
  }
}




