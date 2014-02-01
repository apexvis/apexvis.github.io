/** main.js **/

$(document).ready(function(){

    $(".nav-link.indexpage").click(function(e) {
            e.preventDefault();
            var link = $(this);

            var href = link.attr("href");

            //strip off the hash and use the test to do an attribute selection
            var $selection = $('a[name=' + href.split("#")[1] + ']');
            
            // top bar is 80px, 500ms
            $("html,body").animate({
                    scrollTop: $selection.offset().top - 40
                }, 500
            );

            //$("html,body").animate({scrollTop: $(href).offset().top - 80}, 500);

            link.closest(".navbar").find(".navbar-toggle:not(.collapsed)").click();
    });

});
      
