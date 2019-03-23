$(document).ready(function(){
  $(".Get_Tickets").click(function(){
    $(".button_panel").slideToggle("fast");
  });

  $(".Tickets_slow_button").click(function(){
    $(".button_panel_slow").animate({
      height: '1000px',
      width: '1000px'},
    "5000");
  });

  $(".stop_button").click(function(){
    $(".button_panel_slow").stop();
  });

  $("#get_text_button").click(function(){
    alert("Text: " + $("#get_text_test").text());
  });

});
