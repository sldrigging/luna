//Replace Account with firstname lastname if Logged In
$(".guest").text(function(index, text) {
  return text.replace("Guest", "Sign In/ Register");
});

//homepage scroll nav hide on click outside

$(".mobile-menu-inner").on('blur',function(){
  $(this).fadeOut(300);
});



//hide extrafield with info class with no value - works for Spec Sheet, Product Manual & Certifications, Catalog.
$(document).ready(function(){
var doc = document.querySelectorAll('.col-md-12.spec-sections > div.info').length;
for (var i = 0; i < doc; i++) {
  if ( $('.col-md-12.spec-sections > div.info')[i].children.length == 0 ) {
    $('.col-md-12.spec-sections > div.info').eq(i).parent().hide();
}
}
})

//hide extrafield with info class-span with no value - for Material, WLL, MBL, Size and Length.
$(document).ready(function(){
  var len = document.querySelectorAll('.extra_field > span.info').length;
  for (var i = 0; i < len; i++) {
    if ( $('.extra_field > span.info')[i].innerHTML == "") {
      $('.extra_field > span.info').eq(i).parent().hide();
  }
  }
  })

//hide extrafield - Description with item class with no value


//hide qna  with no value
$(document).ready(function(){
    if ( $('div.col-md-12.spec-sections.qna-section')[0].children.length == 0 ) {
      $('.qna-section').hide();
  }
  })

//product page sticky nav
window.onscroll = function () {
  var navbar = document.getElementById("caTnaV");
  var sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky+100) {    
      $(".navbar-header").removeClass("collapse in").removeAttr("style");
      $(".categoriesNav").removeClass("stuck");
      $(".navbar-header,.site-header").removeClass("stuck");
      $(".sticky-jump").removeClass("sticky-on");
      $(".s-a").removeClass("s-b");
      $("body").css("padding-top", 0);
      $(".categoriesNav").css("top", 0);
    }
 
myProductSticky();

if (window.innerWidth < 1420) {
  resizeMenu();
}

  }

// myNoStickyNavbar();
// myProductSticky();
// };
// var navbar = document.getElementById("caTnaV");
// var sticky = navbar.offsetTop;
// function myNoStickyNavbar() {
//   if (window.pageYOffset >= sticky+100) {    
//     $(".navbar-header").removeClass("collapse in").removeAttr("style");
//     $(".categoriesNav").removeClass("stuck");
//     $(".navbar-header,.site-header").removeClass("stuck");
//     $(".sticky-jump").removeClass("sticky-on");
//     $(".s-a").removeClass("s-b");
//     $("body").css("padding-top", 0);
//     $(".categoriesNav").css("top", 0);
//   }
// }

function myProductSticky() {
if (window.pageYOffset >= 300) {
  // console.log('henlognjdb');
  $(".product-sticky-header").addClass("s-b");
    $(".product-sticky-header").addClass("stuck");
} else {
  $(".product-sticky-header").removeClass("s-b");
    $(".product-sticky-header").removeClass("stuck");
  }
}

function resizeMenu(){
  document.getElementsByClassName("nav-links")[0].style.marginRight = "150px";
}

$("#read-more").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#extended-description").offset().top -120
  }, 1000);
});

$(".sticky-qty").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $(".addToCartBlock").offset().top -120
  }, 100);
});

// update quantity sticky header

    function updateAddQty(){
        var qty = $('#qty-0')[0].value;
         qty = parseInt(qty);
         $('.sticky-qty').html(qty+1);
    }
    function updateSubQty(){ 
        var qtyb = $('#qty-0')[0].value;
        if (qtyb == '1'){
            $('.sticky-qty').html(qtyb);
        }
        else{
            $('.sticky-qty').html(qtyb-1);
        }      
    }    
    function checkQtyVal(){
        var qtyabc = $('#qty-0')[0].value;
        $('.sticky-qty-label').html(qtyabc);
    }


