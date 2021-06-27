"use strict";
(function ($) {
  /*------------------
        Preloader
    --------------------*/
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").fadeOut("fast");    
  });

  $(document).ready(function(){    
    $("#item-zero").delay(400).animate({opacity:"1"});
    $("#item-one").delay(600).fadeIn(1000).animate({opacity:"1"});
    $("#item-two").delay(600).animate({opacity:"1"});
    $("#item-three").delay(900).animate({opacity:"1"});
    $("#item-four").delay(900).animate({opacity:"1"});
    $("#item-five").delay(1100).animate({opacity:"1"});
    $("#item-six").delay(1100).animate({opacity:"1"});
    $("#item-seven").delay(1300).animate({opacity:"1"});
    $("#item-eight").delay(1300).animate({opacity:"1"});
    });


   /*------------------
		Navigation
	--------------------*/
  $(".mobile-menu").slicknav({
    appendTo: ".header-section",
    allowParentLinks: true,
    closedSymbol: '<i class="fa fa-angle-right"></i>',
    openedSymbol: '<i class="fa fa-angle-down"></i>',
  });
})(jQuery);
