var counter = 0;
var bgImg = $('.layer1');
var ran, ran2, ran3;
ranCocoon = Math.floor(Math.random() * 8);
ran = Math.floor(Math.random() * 22);
ran2 = Math.floor(Math.random() * 22);
ran3 = Math.floor(Math.random() * 22);
if (ran == ran2 || ran == ran3) {
    ran = Math.floor(Math.random() * 22);
}
if (ran2 == ran3) {
    ran2 = Math.floor(Math.random() * 22);
}


$(window).on("load", function() {
    $('<div class="break-sect"><center><img src="../cocoonImages/cocoon' + ranCocoon + '.jpg"></center></div>').appendTo('.session-info');

});

$(window).scroll(function() {

});



$(".top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");

    fadeOutAtTop();
    return false;
});

function sectionJump(value){
  var top = document.getElementById(value).offsetTop - 100;
  window.scrollTo(0, top);
	//document.getElementById(value).scrollIntoView();
}
