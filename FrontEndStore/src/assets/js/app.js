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

var size = Foundation.MediaQuery.current;
if(size === 'small'){
  $('#main-menu ul').removeClass('expanded');
}
