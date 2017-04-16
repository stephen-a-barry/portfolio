// smooth scroll
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if( $(this).attr("class")=="smooth-scroll" || $(this).attr("id")=="hometown") {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                        $('html,body').animate({
                                scrollTop: target.offset().top
                        }, 1000);
                        return false;
                }
            }
        }
    });
});

// Portfolio Items--- title and description
var items = [
  {
    title: 'Restaurante',
    description: 'Hi There'
  },
  {
    title: 'Pet Store',
    description: 'Howdy'
  },
  {
    title: 'Javascript Labyrinth',
    description: 'Hola'
  }
]

// adds events for portfolio items
$('.itemrow').each(function(index) {
  let ourIndex = index;
  $(this).mouseenter(function() {
    let title = '<div class="row item-title">' + items[ourIndex].title + '</div>'
    let description = '<div class="row item-description">' + items[ourIndex].description + '</div>';
    $(this).prepend(title);
    $(this).append(description);
    $(this).css('opacity','1');
  }).mouseleave(function() {
    $('.item-title').remove();
    $('.item-description').remove();
    $(this).css('opacity','.8');
  });
});
