$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".header").removeClass("active");
    }
});


$(document).ready(function () {
  function filterPath(string) {
    return string
    .replace(/^\//, '')
    .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
    .replace(/\/$/, '');
          }
    $('.slide-menu').each(function () {
      if (filterPath(location.pathname) == filterPath(this.pathname) && location.hostname == this.hostname && this.hash.replace(/#/, '')) {
            var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) + ']');
            var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
              if ($target) {
                var targetOffset = $target.offset().top;
                  $(this).click(function () {
                    if($(window).width() > 200){
                      $('html, body').animate({scrollTop: targetOffset}, 800);
                        return false;
                          }
                    });
              }
      }
  });
});


