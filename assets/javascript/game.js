var wins = 0;
var losses = 0;
var cpunum = Math.floor(Math.random() * (120-19 +1) +19);
console.log(cpunum);
 $(".targetnumber").html(cpunum);
$("#wins").html("wins:" + wins);
$("#losses").html("losses: " + losses);

$(".crystal").each(function () {  
  // console.log($(this))
  var randomnumber = Math.floor(Math.random() * (12-1 +1) +1);
  $(this).attr("data-value", randomnumber)
  // Math.floor(Math.random() * (120-19 +1) +19); put in variable and add attributes to the divs
  // var ran
})