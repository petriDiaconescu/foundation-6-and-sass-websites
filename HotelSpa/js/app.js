function getHeight(){
  var height = $('section.promo-video, section.promo').height();
  $('#overlay').css({'height': height + 'px'});
}

$(function(){
  getHeight();
  $('#gallery a').on('click', function(){
    var image = $(this).find('img').attr('src');
    var imageSelected = image.split('thumbnail');
    var fullPath = imageSelected[0] + 'fullsize' + imageSelected[1];
    $('#galleryModal #imageContainer').attr('src', fullPath);
  });
});

$(window).resize(function(){
  getHeight();
});
$(document).foundation();
