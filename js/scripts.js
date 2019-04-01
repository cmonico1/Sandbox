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

  $("#set_content_button").click(function(){
    $("#set_content_test").text(function(i, origText){
      return "Old text: " + origText + " | New text: Text Set! (index: " + i + ")";
    });
  });

  $("#set_attributes_button").click(function(){
    $("#set_attributes_test").text("Attributes Set!");
    $("#link_attribute").attr({
      "href" : "https://www.w3schools.com/jquery/",
      "title" : "W3Schools jQuery Tutorial",
    });
  });

  $("#append_tut_btn1").click(function(){
    $(".append_tut_p1").append(" <b>Appended text</b>.");
  });
  $("#append_tut_btn2").click(function(){
    $("#append_tut_ol").append("<li>Appended item</li>");
  });

  $("#prepend_tut_btn1").click(function(){
    $(".prepend_tut_p1").prepend("<b>Prepended text</b>. ");
  });
  $("#prepend_tut_btn2").click(function(){
    $("#prepend_tut_ol").prepend("<li>Prepended item</li>");
  });

  $("#set_css_button").click(function(){
    $(".button_div").css({"background-color": "orange", "width": "400px", "height": "auto", "display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center", "margin": "20px 0px 20px 0px"});
    $(".width_height_display").show();
  });

  $("#remove_div").click(function(){
    $("#multiappend_outer").remove();
  });

  $("#empty_div").click(function(){
    $("#remove_div").empty();
  });

  $("#remove_multi_button").click(function(){
    $("p").remove(".remove_multi_test, .prepend_tut_p1");
  });

  $("#add_class_button").click(function(){
    $("#remove_div").addClass("blue");
  });

  $("#remove_class_button").click(function(){
    $("#remove_div").removeClass("blue");
  });

  $("#toggle_class_button").click(function(){
    $("#empty_div").toggleClass("blue");
  });

  $("#width_height_methods").click(function(){
    var txt = "";
    txt += "Width of div: " + $(".width_height_display").width() + "</br>";
    txt += "Height of div: " + $(".width_height_display").height();
    $(".width_height_display").html(txt);
  });

  $("#myBtn").click(function(){
    $(".modal").css({"display": "block",/* Shows element */ "position": "fixed",/* Stay in place */ "z-index": "1", "padding-top": "100px", "left": "0", "top": "0", "width": "100%", "height": "100%", "overflow": "auto", "background-color": "rgb(0,0,0)", "background-color": "rgba(0,0,0,0.4)"});
  });

  $(".modal").click(function(){
    $(".modal").css({"display": "none"});
  });

  $(".close").click(function(){
    $(".modal").css({"display": "none"});
  });
});

function appendText() {
  var txt1 = "<p>Adding Second New Elements With append().</p>";        // Create text with HTML
  var txt2 = $("<p></p>").text("Adding Second New Elements With append().");  // Create text with jQuery
  var txt3 = document.createElement("p");
  var txt4 = "<b>I </b>";           // Create element with HTML
  var txt5 = $("<i></i>").text("love ");  // Create with jQuery
  var txt6 = document.createElement("b");   // Create with DOM
  txt3.innerHTML = "Adding Third New Elements With append().";         // Create text with DOM
  txt6.innerHTML = "jQuery!";

  $("#multiappend").append(txt1, txt2, txt3).before("multi append before ").after(txt4, txt5, txt6);   // Append new elements
}
