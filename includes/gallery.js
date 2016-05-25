$(document).ready(function() {

  $(".gallery_thumbnails a").click(
      function(event) {
        event.preventDefault();
        //update thumbnails
        $(".gallery_thumbnails a").removeClass("selected");
        $(".gallery_thumbnails a").children().css("opacity", "1");
        $(this).addClass("selected");
        $(this).children().css("opacity", ".4");
        //vars from thumbnail
        var photo_caption = $(this).attr('title');
        var photo_fullsize = $(this).attr('href');
        var photo_preview = photo_fullsize.replace('full', 'small');

        $('.gallery_caption').fadeOut(500);
        $('.gallery_preview').fadeOut(500, function() {

          $('.gallery_preload_area').html('<img src="'+photo_preview+'"/>');
          $('.gallery_preload_area img').imgpreload(function() {

            $('.gallery_preview').html('<a href="'+photo_fullsize+'" title="'+photo_caption+'"><img src="'+photo_preview+'"/></a>');
            $('.gallery_caption').html('<p><a href="'+photo_fullsize+'" title="'+photo_caption+'">View Large</a></p><p>'+photo_caption+'</p>');

            $('.gallery_preview').fadeIn(500);
            $('.gallery_caption').fadeIn(500);
          });
        });
      }); 
});
