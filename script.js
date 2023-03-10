var $owl = $('.owl-carousel');

$owl.children().each( function( index ) {
  $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});

$owl.owlCarousel({
  animateOut: 'slideOutDown',
  animateIn: 'flipInX',
  nav: true,
  center: true,
  loop: true,
  merge:true,
  URLhashListener:true,
  autoplayHoverPause:true,
  startPosition: 'URLHash',
  items: 6,
});

$(document).on('click', '.owl-item>div', function() {
  // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
  var $speed = 300;  // in ms
  $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
  //$owl.trigger('')
});


