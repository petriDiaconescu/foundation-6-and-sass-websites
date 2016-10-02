$(document).foundation(
  
);

$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize){
  //console.log('The new size is:' + newSize);
  //console.log('The old size is:' + oldSize);
  if(newSize === 'small' && oldSize === 'medium'){
    $('#main-menu ul').removeClass('expanded');
  }
  if(newSize === 'medium' && oldSize === 'small'){
    $('#main-menu ul').addClass('expanded');
  }
});

//Takes the current size of the screen
var size = Foundation.MediaQuery.current;
if(size === 'small'){
  $('#main-menu ul').removeClass('expanded');
}

//Tracks current position when scrolling
var navigation = $('#main-navigation');
var nav = new Foundation.Magellan(navigation);

$(window).scroll(function(){
  //console.log(nav.scrollPos);
  if(nav.scrollPos >= 300){
    $(navigation).addClass('fixed');
  } else {
    $(navigation).removeClass('fixed');
  }
});