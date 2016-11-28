(function( $ ) {
    $('.carousel').slick();
    $('.carousel').on('swipe', function(event, slick, direction) {

        ga('send', 'event', {
            eventCategory: 'Carousel',
            eventAction: 'swipe',
            eventLabel: $( this ).find( '.slick-active' ).attr('id') // slide-1, slide-2, slide-3, etc.
        });
    });
    $('.carousel').on('afterChange', function(event, slick, direction) {
       ga('send', 'event', {
          eventCategory: 'Carousel',
          eventAction: 'view',
          eventLabel: $( this ).find( '.slick-active' ).attr('id') // slide-1, slide-2, slide-3, etc.
       });
    });
})( jQuery );
