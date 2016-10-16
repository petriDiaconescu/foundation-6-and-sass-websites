// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
$(document).ready(function(){
  $('.index header ul li a:contains("Home")').parent().addClass('active');
  $('.contact header ul li a:contains("Contact")').parent().addClass('active');
  $('.gallery header ul li a:contains("Gallery")').parent().addClass('active');
  $('.rooms header ul li a:contains("Rooms")').parent().addClass('active');
  $('.room header ul li a:contains("Rooms")').parent().addClass('active');
  $('.services header ul li a:contains("Services")').parent().addClass('active');
});