//Replace Account with firstname lastname if Logged In
  $(".guest").text(function(index, text) {
    return text.replace("Guest", "Sign In/ Register");
});
 
jQuery(document).ready(function () {
  moveMenu();
  sticky_header();
});

jQuery(window).load(function () {
  moveMenu();
  sticky_header();
});

jQuery(window).resize(function () {
  moveMenu();
  sticky_header();
});

function update_flyoutcart() {
  if (window["_3d_cart"] != undefined) {
    if (_3d_cart.oid == 0) return;
    jQuery("#floating-cart .minicart-items").text(_3d_cart.itemsum);
    jQuery("#floating-cart").fadeIn(300);
    return;
  }
  jQuery.ajax({
    url: "/frontapi.asp",
    dataType: "json",
    type: "GET",
    cache: false,
    data: {
      module: "cartajax",
    },
    success: function (data) {
      if (data.ItemsInCart != undefined) {
        if (data.ItemsInCart.length > 0) {
          jQuery("#floating-cart").fadeIn(300);
        }
      }
    },
    error: function (objError) {
      //alert('Error');
      return;
    },
  });
}

//grab an empty div to get mini cart format
var baseItem = $(".cart-item0");

jQuery("#open-cart").click(function (e) {
  updatecart_callback();
});

function updatecart_callback() {
  setTimeout(function () {
    jQuery.ajax({
      url: "/frontapi.asp?module=cartajax",
      success: function (data) {
        console.log(data);
        var obj = JSON.parse(data);
        console.log(obj.ItemsInCart);

        var totalItems = obj.ItemsInCart.length;
        //var cartHolderOpen = "<div class='col-group prod-item'>";
        //var cartHolder = "</div>";

        jQuery(".cart-items-container").empty();

        //build cart containers for each item in list
        for (var x = 0; x < totalItems; x++) {
          jQuery(baseItem)
            .clone()
            .addClass("cart-item")
            .appendTo("ul.cart-items .cart-items-container");
        }

        //replace empty containers with cart data
        for (var z = 0; z < totalItems; z++) {
          //var cartImage = obj.ItemsInCart[x].thumbnail;
          var cartName = obj.ItemsInCart[z].name;
          var cartQty = obj.ItemsInCart[z].qty;
          var cartPrice = obj.ItemsInCart[z].price;

          jQuery(".cart-item:eq(" + z + ") .item-fullname").html(cartName);
          jQuery(".cart-item:eq(" + z + ") .item-qty").html(cartQty);
          jQuery(".cart-item:eq(" + z + ") .item-price").html(cartPrice);
        }
      },
    });
  }, 300);
}

function addcart_callback(productDiv, data) {
  jQuery(productDiv).addClass("ajaxcart-complete");
  setTimeout(function () {
    jQuery(productDiv).removeClass("ajaxcart-complete");
  }, 1000);

  var itemsInCart = 0;
  var subtotal = 0;

  jQuery(data.ItemsInCart).each(function (index, item) {
    itemsInCart += item.qty;
    subtotal += item.price * item.qty;
  });
  //minicart - subtotal
  jQuery(".minicart-items").text(itemsInCart);
  update_flyoutcart();

  var currency = jQuery("body").data("currency");
  jQuery(".minicart-subtotal").text(currency + subtotal);
}

function mailinglist_callfront(form) {
  jQuery(form).find(".mailinglist-input").prop("disabled", true);
  jQuery(form).find(".mailinglist-submit").prop("disabled", true);
  jQuery(form).find("#mailing-btn-txt").addClass("hidden");
  jQuery(form).find("#mailing-btn-load").removeClass("hidden");

  jQuery("#mailinglist-response").slideUp(300);
  jQuery("#mailinglist-response div").addClass("hidden");
}

function mailinglist_response(form, response) {
  jQuery(form).find(".mailinglist-input").prop("disabled", false);
  jQuery(form).find(".mailinglist-submit").prop("disabled", false);

  if (response == 1 || response == 3) {
    jQuery("#mailinglist-response .mailinglist-subscribed").removeClass(
      "hidden"
    );
    jQuery("#mailinglist-response").slideDown(300);
  } else if (response == -1) {
    jQuery("#mailinglist-response .mailinglist-unsubscribed").removeClass(
      "hidden"
    );
    jQuery("#mailinglist-response").slideDown(300);
  } else if (response == 2) {
    jQuery("#mailinglist-response .mailinglist-error").removeClass("hidden");
    jQuery("#mailinglist-response").slideDown(300);
  }

  jQuery(form).find("#mailing-btn-txt").removeClass("hidden");
  jQuery(form).find("#mailing-btn-load").addClass("hidden");
}

function moveMenu() {
  var respWidth = window.innerWidth;
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("safari/") !== -1 && ua.indexOf("chrom") === -1) {
    respWidth = jQuery(window).width();
  }

  if (respWidth < 992) {
    jQuery("#categories").appendTo("#mobile-categories");
    jQuery("#menulinks").appendTo("#mobile-menulinks");
  } else {
    jQuery("#categories").appendTo("#categories-outer");
    jQuery("#menulinks").appendTo("#menulinks-outer");
  }
  /*
    if (respWidth < 768) {
    }
    else {
    }
*/
}

jQuery(document).ready(function () {
  update_flyoutcart();

  jQuery(
    "#mobile-menu-trigger, #mobile-menu-trigger2, #mobile-menu-trigger3"
  ).click(function (e) {
    e.preventDefault();

    jQuery("#mobile-menu").show(0, function () {
      jQuery("body").addClass("menu-open");
    });
  });

  jQuery(".mobile-menu-close").click(function (e) {
    e.preventDefault();

    jQuery("body").removeClass("menu-open");
    setTimeout(function () {
      jQuery("#mobile-menu").hide(0);
    }, 250);
  });

  var respWidth = window.innerWidth;

  if (respWidth >= 767) {
    jQuery(".navbar .dropdown").hover(
      function () {
        jQuery(this)
          .find(".dropdown-menu")
          .first()
          .stop(true, true)
          .delay(150)
          .slideDown("fast");
      },
      function () {
        jQuery(this)
          .find(".dropdown-menu")
          .first()
          .stop(true, true)
          .delay(50)
          .slideUp("fast");
      }
    );

    jQuery(".navbar .dropdown > a").click(function () {
      //    		location.href = this.href;
    });
  }
});

$(document).ready(function () {
  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
  });

  //Click event to scroll to top
  $(".scrollToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});

function sticky_header() {
  var shrinkHeader = 300;
  //console.log(shrinkHeader);
  var header_height = $(".categoriesNav").innerHeight();

  //scroll_activity();
  /*
	if (window.innerWidth < 768) {
	}
	else {
		$('.site-header').removeClass('stuck');
		$('body').css('padding-top' , 0);
	}
*/
}

// function scroll_activity() {
// var shrinkHeader = 270;
// var header_height = $('.header-navigation').innerHeight();

// if (window.innerWidth < 992) {
// 	shrinkHeader = 100;
// }

window.onscroll = function () {
  myStickyNavbar();
};

// var scroll = getCurrentScroll();
// header_height = $('.site-header').innerHeight() + $('.navbar-header').innerHeight();

// if ( scroll >= shrinkHeader ) {
var navbar = document.getElementById("caTnaV");
var sticky = navbar.offsetTop;
function myStickyNavbar() {
  if (window.pageYOffset >= sticky) {
    //  $(".navbar-header").addClass("collapse");
    $(".categoriesNav").addClass("stuck");
     //$(".sticky-jump").addClass("sticky-on");
     $(".s-a").addClass("s-b");
    // $("body").css("padding-top", header_height);
    // $(".categoriesNav").css("top", header_height);    
    $(".nav-links")[0].style.marginRight="150px";
  } else {
    // $(".navbar-header").removeClass("collapse in").removeAttr("style");
    $(".categoriesNav").removeClass("stuck");
     $(".navbar-header,.site-header").removeClass("stuck");
     $(".sticky-jump").removeClass("sticky-on");
    $(".s-a").removeClass("s-b");
    // $("body").css("padding-top", 0);
    // $(".categoriesNav").css("top", 0);
    $(".nav-links")[0].style.marginRight="0px"
  }
 
}

// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("caTnaV");
// var navbarcomp = document.getElementById("site-header");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
// 	navbar.classList.add("sticky-header")
//   } else {
// 	navbar.classList.remove("sticky-header");
//   }
// }

function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

jQuery(function () {
  //Quantity box listing page
  jQuery(".QTY-input .QTY-up").click(function () {
    var qtyInput = jQuery(this).data("target");
    var incrementedVal = parseInt(jQuery(qtyInput).val()) + 1;
    jQuery(qtyInput).val(incrementedVal);
  });
  jQuery(".QTY-input .QTY-down").click(function () {
    var qtyInput = jQuery(this).data("target");
    var incrementedVal = parseInt(jQuery(qtyInput).val()) - 1;

    if (incrementedVal <= 1) incrementedVal = 1;
    jQuery(qtyInput).val(incrementedVal);
  });
});

//ddmenu build and animations with hoverintent
jQuery(function () {
  // see whether device supports touch events (a bit simplistic, but...)
  var hasTouch = "ontouchstart" in window;
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  // hook touch events for drop-down menus
  // NB: if has touch events, then has standards event handling too
  if (hasTouch && document.querySelectorAll) {
    var i,
      len,
      element,
      dropdowns = document.querySelectorAll(
        ".subnav > ul > li > a, #categories > li > a"
      );

    function menuTouch(event) {
      // toggle flag for preventing click for this link
      var i,
        len,
        noclick = !this.dataNoclick;

      // reset flag on all links
      for (i = 0, len = dropdowns.length; i < len; ++i) {
        dropdowns[i].dataNoclick = false;
      }

      // set new flag value and focus on dropdown menu
      this.dataNoclick = noclick;
      this.focus();
    }

    function menuClick(event) {
      // if click isn't wanted, prevent it
      if (this.dataNoclick) {
        event.preventDefault();
      }
    }

    for (i = 0, len = dropdowns.length; i < len; ++i) {
      element = dropdowns[i];
      element.dataNoclick = false;
      element.addEventListener("touchstart", menuTouch, false);
      element.addEventListener("click", menuClick, false);
    }
  }

  hiConfig = {
    sensitivity: 3, // number = sensitivity threshold (must be 1 or higher)
    interval: 155, // number = milliseconds for onMouseOver polling interval
    timeout: 50, // number = milliseconds delay before onMouseOut
    over: function () {
      $(".dropdown-menu").hide();
      //			$(this).find('.dropdown-menu').addClass('fadeInLeft');
      //			$(this).find('.dropdown-menu').show();
      $(this).find(".dropdown-menu").fadeIn(300);
    },
    out: function () {
      //			$(this).find('.dropdown-menu').removeClass('fadeInLeft');
      $(this).find(".dropdown-menu").hide();
    },
  };

  jQuery("#categories-outer #categories > li.dropdown").each(function () {
    $(this).hoverIntent(hiConfig);
  });
});

//scrollto
$(document).ready(function () {
  $(".scrolly").click(function (e) {
    e.preventDefault();
    var targ = jQuery(this).attr("data-target");

    $("html, body").animate(
      {
        scrollTop: $(targ).offset().top - 75,
      },
      1000
    );
  });
});
