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

//hide extrafield - Description with item class with no value


//hide qna  with no value
$(document).ready(function(){
    if ( $('div.col-md-12.spec-sections.qna-section')[0].children.length == 0 ) {
      $('.qna-section').hide();
  }
  })

//product page sticky nav
window.onscroll = function () {
myProductSticky();
};
var navbar = document.getElementById("caTnaV");
var sticky = navbar.offsetTop;
function myProductSticky() {
if (window.pageYOffset >= 300) {
  console.log('henlognjdb');
  $(".product-sticky-header").addClass("s-b");
    $(".product-sticky-header").addClass("stuck");
} else {
  $(".product-sticky-header").removeClass("s-b");
    $(".product-sticky-header").removeClass("stuck");
  }
}

$("#read-more").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#extended-description").offset().top -120
  }, 2000);
});
