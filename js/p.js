$( document ).ready(function() {
    $(".sign").mouseenter(
        function(){
            $(".font_s").css("top","-15px");
        }
    );
    $(".sign").mouseleave(
        function(){
            $(".font_s").css("top","0px");
        }
    );

    $(".Account").mouseenter(
        function(){
            $(".font_A").css("top","-15px")
            
        }
    );
    $(".Account").mouseleave(
        function(){
            $(".font_A").css("top","0px");
        }
    );


    $(".sign").mouseenter(
        function(){
            $(".font_c").css("top","-20px")
            
        }
    );
    $(".sign").mouseleave(
        function(){
            $(".font_c").css("top","0px")
        }
    );

    $(".sign").mouseenter(
        function(){
            $(".font_c").css("top","-23px")
            $(".font_c").css("opacity","1")
            $(".font_s").css("opacity","0")
          
        }
    );
    $(".sign").mouseleave(
        function(){
            $(".font-c").css("top","-0px")
            $(".font_s").css("opacity","1")
            $(".font_c").css("opacity","0")
        
        }
    );
    $(".Account").mouseenter(
        function(){
            $(".font-c").css("top","-23px")
            $(".font_A").css("opacity","0")
            $(".font-c").css("opacity","1")

        }
    );


    $(".Account").mouseleave(
        function(){
            $(".font-c").css("top","0px")
            $(".font_A").css("opacity","1")
            $(".font-c").css("opacity","0")
        }
    );

    $('.slick').slick({
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: (1500),
        arrows: true
      });

      $('.slick-k').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 700,
        infinite: true,
        speed: 1200,
      });
    









});
