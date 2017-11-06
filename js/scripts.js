$(document).ready(function(){

 $("#roll1").click(function(event){
    event.preventDefault();
    var myRoll1 = Math.floor(Math.random() * 6 + 1);
    $("#score1").html(myRoll1);
  });

 $("#roll2").click(function (event) {
      event.preventDefault();
      var myRoll2 = Math.floor(Math.random() * 6 + 1);
      $("#score2").html(myRoll2);
  });
});
