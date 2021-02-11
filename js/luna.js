//hide extrafield with no value
$(document).ready(function() {
	//if ($('.spec-sections > .info').is(':empty')){
      if ( $('.spec-sections.info').children().length > 0 ) {
       $('.spec-sections.info').parent().css({"display": "none"});
	}
});

//product page sticky nav
window.onscroll = function () {
myProductSticky();
};
var sticky = navbar.offsetTop;
function myProductSticky() {
if (window.pageYOffset >= 300) {
$(".container-fluid").css("display", "block");
$(".container-fluid").addClass("collapse");
$(".container-fluid").addClass("stuck");
$(".container-fluid").addClass("stuck");
$(".container-fluid").addClass("sticky-on");
} else {
$(".container-fluid").css("display", "none");
$(".container-fluid").removeClass("collapse");
$(".container-fluid").removeClass("stuck");
$(".container-fluid").removeClass("stuck");
$(".container-fluid").removeClass("sticky-on");
$(".navbar-header").removeClass("collapse in").removeAttr("style");
$(".categoriesNav").removeClass("stuck");
$(".navbar-header,.site-header").removeClass("stuck");
$(".sticky-jump").removeClass("sticky-on");
$("body").css("padding-top", 0);
$(".categoriesNav").css("top", 0);
  }
}

