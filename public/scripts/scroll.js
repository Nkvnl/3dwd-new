// alert('!')

$(document).ready(function() {
    var scrollTop = 0;
    $(window).scroll(function() {
        scrollTop = $(window).scrollTop();
        $('.counter').html(scrollTop);

        if (scrollTop >= 420) {
            // $('.menu-down').addClass('display-b');
            $('nav').addClass('scrolled-nav');
            // $('#menu').addClass('d-none');
            // $('#menu-down').removeClass('d-none');
            // $('#brand').addClass('d-none');
            // $('#brand-down').removeClass('d-none');
            // alert('!')
  
        }
        else if (scrollTop < 420) {
            // $('.menu-down').removeClass('display-b');
            $('nav').removeClass('scrolled-nav');
            // $('#menu').removeClass('d-none');
            // $('#menu-down').addClass('d-none');
            // $('#brand').removeClass('d-none');
            // $('#brand-down').addClass('d-none');
        }

    });

});

$('#menu').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
