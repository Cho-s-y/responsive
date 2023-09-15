$(document).ready(function(){

  /* Dark Mode Button */
  let chk = true;
  
  $(".button span").click(function(){
    if(chk){
      $(this).stop().animate({left:"130px",backgroundColor:"#fff"},500);
      $("#darkmode").stop().animate({backgroundColor:"#fff"},500);
      $(".button").stop().animate({backgroundColor:"#222"},500);
      $(".dm h2, .dm_contents h3").stop().animate({color:"#000"},500);
      $(".dm p, .dm_contents span").stop().animate({color:"#222"},500);
      $(".dm_con").stop().animate({backgroundColor:"#ddd"},500);

      chk = false;

    }else{
      $(this).stop().animate({left:"10px",backgroundColor:"#000"},500);
      $("#darkmode").stop().animate({backgroundColor:"#000"},500);
      $(".button").stop().animate({backgroundColor:"#fff"},500);
      $(".dm h2, .dm_contents h3").stop().animate({color:"#fff"},500);
      $(".dm p, .dm_contents span").stop().animate({color:"#aaa"},500);
      $(".dm_con").stop().animate({backgroundColor:"#222"},500);

      chk = true;
    };

  });
  
  /* Mobile Menu */
  $(".mo_view").hide();

  $(".trigger").click(function(){
    $(this).toggleClass("active");
    $("#moheader .mo_top").toggleClass("active")
    $(".mo_view").stop(true,true).slideToggle("slow");
    $(".bg").toggleClass("active");
  });
  

});