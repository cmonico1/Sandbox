$(document).ready(function(){
  $(".Get_Tickets").click(function(){
    $(".button_panel").slideToggle("fast");
    //alert("Only Available On Ticketmaster");
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
});
