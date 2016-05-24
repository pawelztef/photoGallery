$(document).ready(function() {

  $(".gallery_thumbnails a").click(
      
      function(event) {
        event.preventDefault();
        $(".gallery_thumbnails a").removeClass("selected");
        $(".gallery_thumbnails a").children().css("opacity", "1");
        
        $(this).addClass("selected");
        $(this).children().css("opacity", ".4");
        
      }); 
});
