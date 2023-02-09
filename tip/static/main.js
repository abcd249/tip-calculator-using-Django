function oldfunction(){      // testing return functiion
  var oldvar=10;
  return oldvar
}
var newvar=oldfunction();
alert(newvar);


function final_amount(){
  var display_amount=document.getElementById('amount').value;
  var display_tip=document.getElementById('tip').value;

  var total=display_amount*display_tip;

  var total_tip= +display_amount + +total ;
  var people=document.getElementById('total_people').value;
  var final=Math.round (total_tip/people);
  document.getElementById('value_display').innerHTML=('your final amount per person is: '+ final)

}
