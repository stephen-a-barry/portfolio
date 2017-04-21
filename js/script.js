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

// Portfolio Items--- description
var items = [
  {
    description: 'Restaurante | Class Project<br>Technologies Used: HTML, CSS, Bootstrap, JavaScript, Photoshop',
  },
  {
    description: 'Pet Store | Class Project<br>Technologies Used: HTML, CSS, Bootstrap, JavaScript, Photoshop'
  },
  {
    description: 'Javascript Labyrinth | Class Project<br>Technologies Used: HTML, JavaScript'
  }
]

// adds events for portfolio items
$('.itemrow').each(function(index) {
  let ourIndex = index;
  $(this).mouseenter(function() {
    let description = '<div class="row item-description">' + items[ourIndex].description + '</div>';
    $(this).append(description);
    $(this).css('opacity','1');
    $(this).css('border', '1px solid #fff');
  }).mouseleave(function() {
    $('.item-title').remove();
    $('.item-description').remove();
    $(this).css('opacity','.8');
    $(this).css('border', 'none');
  });
});
