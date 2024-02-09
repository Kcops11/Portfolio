var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  fullscreen: true
});


var flkty = new Flickity('.main-carousel');


flkty.on('change', function(index) {

    adjustElementPosition(index);
});

