
$(document).ready(function() {
var wins = 0;
var losses = 0;
var totalnumber = 0;
var cpunum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
var currenttotal = 0;
console.log(cpunum);
$(".targetnumber").html(cpunum);
$(".totalnumber").html("");
$("#losses").html("losses: " + losses);
$("#wins").html("wins:" + wins);
  console.log(cpunum +"this is in doc ready");

  function assignCrystalValue() {
    $(".crystal").each(function () {
      // console.log($(this))
      var randomnumber = Math.floor(Math.random() * (12 - 1 + 1) + 1);
      $(this).attr("data-value", randomnumber)
    
      // Math.floor(Math.random() * (120-19 +1) +19); put in variable and add attributes to the divs
      // var ran
    });
  }
  function newgame () {
    assignCrystalValue();
    cpunum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    console.log(cpunum +"this is in new game");
    $(".targetnumber").html(cpunum);
    $(".totalnumber").html(0);
    $("#wins").html("wins:" + wins);
    currenttotal=0;

    
  };

  assignCrystalValue();

  $(".crystal").on('click', function() {
    // get value of crystal
      
    var crystalNumber = $(this).attr("data-value");
    crystalNumber = parseInt(crystalNumber);

     
  
    currenttotal += crystalNumber;
  
    $(".totalnumber").text(currenttotal);
    console.log("adding number");console.log(currenttotal);
    console.log("cpumatch"); console.log(cpunum);
    if (cpunum === currenttotal) {

      wins ++;
      $("#wins").html("wins:" + wins);
      alert("You have won!")
      newgame();
      console.log(cpunum +"this is in win condition")
    };
  
    if (cpunum < currenttotal) {
  
      losses ++;
      $("#losses").html("losses: " + losses);
      alert("You have lost!");
      newgame();
      
    };
  
  });

})



  // If the button is clicked add the data value attribute assigned to the image to the total number variable
  // $(document).ready(function () {
  //   $('#diamondBtn').on('click', addtobox);
    
  //   function addtobox() {$(".totalnumber").append($("#diamond").attr("data-value"));}
  //   // var totalnumber = totalnumber++$(this).attr.parsInt(randomnumber)}

  // });

  // $(document).ready(function () {
  //   $('#purpleBtn').on('click', addtobox);
    
  //   function addtobox() {$(".totalnumber").append($("#tigereye").attr("data-value"));}
  //   // var totalnumber = totalnumber++$(this).attr.parsInt(randomnumber)}

  // });


  

  // $(document).ready(function () {
  //   $('#brownBtn').on('click', addtobox);
    
  //   function addtobox() {$(".totalnumber").append($("#browncrystal").attr("data-value"));}
  //   // var totalnumber = totalnumber++$(this).attr.parsInt(randomnumber)}

  // });

  // $(document).ready(function () {
  //   $('#greenBtn').on('click', addtobox);
    
  //   function addtobox() {$(".totalnumber").append($("#greencrystal").attr("data-value"));}
  //   // var totalnumber = totalnumber++$(this).attr.parsInt(randomnumber)}

  // });

 


  // I need to define the function new game.
  
  