//hide extrafield with no value
console.log('hi from luna');
$(document).ready(function(){
var doc = document.querySelectorAll('.col-md-12.spec-sections').length;
console.log('doc',doc);
for (var i = 0; i < doc; i++) {
  var isEmpty = document.getElementById('.col-md-12.spec-sections').innerHTML;
  if (isEmpty === null) {
    console.log('empty');
  }     
}
})
//document.querySelector(".col-md-12.spec-sections").children[1].innerHTML;


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

