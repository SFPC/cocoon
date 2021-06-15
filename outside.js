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
var bg = bgImg.css('background-image');
var position = $(window).scrollTop();
var bgR, bgG, bgB;


activeLinks();


$(window).on("load", function() {
    $('<img src="bgImages/layer1.png" class="spiral" alt="" />').appendTo('.bgImg').hide().fadeIn(1000);
    $('<img src="bgImages/layer2.png" class="spiral" alt="" />').appendTo('.bgImg').hide().fadeIn(2000);
    $('<img src="bgImages/layer3.png" class="spiral" alt="" />').appendTo('.bgImg').hide().fadeIn(3000);
    $('<div class="break-sect"><center><img src="cocoonImages/cocoon' + ranCocoon + '.jpg"></center></div>').appendTo('#shell');
    $('<div class="again "><h2>↓ (...over and over again) ↓</h2></div>').appendTo('#shell');



});

$(document).ready(function() {
    bgR = 239, bgG = 154, bgB = 131;
    // $("body").get(0).style.setProperty("--background", "rgb(" + bgR + "," + bgG + "," + bgB + ")");
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var diff = $(document).height() - $(window).height();

    console.log("Scroll " + scroll);
    console.log("Diff " + diff);

    // console.log(diff);

    bgR = bgR + 5;
    bgG = bgG + 5;
    bgB = bgB + 5;

    if ((scroll + 100 >= diff && scroll <= diff)) {
        endlessScrollText();
        activeLinks();
        // lighterBG();
    };

    if ($(window).scrollTop() == 0) {
        fadeOutAtTop();
    }
});



$(".top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");

    fadeOutAtTop();
    return false;
});


function showPrograms(){
    $(".programs-list").removeClass('hide');
    $(".programs span").fadeOut();
    $(".programs").addClass('active');
    return false;
}
function fadeOutAtTop() {
    $(".newBg").fadeOut(300, function() {
        $(this).remove();
    });

    $(".newText").fadeOut(300, function() {
        $(this).remove();
    });

    $(".break-new").fadeOut(300, function() {
        $(this).remove();
    });


    $(".programs-list").addClass('hide');
    $(".programs span").fadeIn();
    $(".programs").removeClass('active');

    counter = 0;
}

function endlessScrollText() {
    let infoTextInner = $('#info').html();
    let bgImgLayer = $('.bgImg').html();
    // $('#shell').append(infoTextInner);
    $(infoTextInner).appendTo('#shell').addClass('newText');
    ran = Math.floor(Math.random() * 22);
    ran2 = Math.floor(Math.random() * 22);
    ran3 = Math.floor(Math.random() * 22);
    if (ran == ran2 || ran == ran3) {
        ran = Math.floor(Math.random() * 22);
    }
    if (ran2 == ran3) {
        ran2 = Math.floor(Math.random() * 22);
    }
    ranCocoon = Math.floor(Math.random() * 8);
    $('<div class="break-sect break-new"><center><img src="cocoonImages/cocoon' + ranCocoon + '.jpg"></center></div>').appendTo('#shell');
    $('<div class="again break-new"><h2>↓ (...over and over again) ↓</h2></div>').appendTo('#shell');

    $('<img src="bgImages/layer' + ran + '.png" class="spiral newBg" alt="" />').appendTo('.bgImg').hide().fadeIn(1000);
    $('<img src="bgImages/layer' + ran + '.png" class="spiral newBg" alt="" />').appendTo('.bgImg').hide().fadeIn(2000);
    $('<img src="bgImages/layer' + ran2 + '.png" class="spiral newBg" alt="" />').appendTo('.bgImg').hide().fadeIn(3000);

    counter++
}

function activeLinks() {
    const shell = document.getElementById('shell');
    const info = document.getElementById('info');
    let expandableLinks = document.querySelectorAll('.expand');

    expandableLinks.forEach((link) => {
        link.addEventListener('click', function() {
            // console.log(link);
            showExpanded(link);
        })
    })

    function lighterBG() {
        bgR += 1;
        bgG += 1;
        bgB += 1;
        //  $("body").get(0).style.setProperty("--background", "rgb(" + bgR + "," + bgG + "," + bgB + ")");
    }

    function showExpanded(link) {
        hideOtherExpandedLinks();
        link.classList.add('active');
        link.children[0].style.display = "inline";
    }

    function hideOtherExpandedLinks() {
        expandableLinks.forEach((link) => {
            if (link.classList.contains('active')) {
                link.classList.remove('active');
            }

            if (link.children.length > 0) {
                // console.log(link.children[0])
                link.children[0].style.display = "none";
            }
        })
    }

    shell.addEventListener('touchstart', function() {
        info.classList.add('touched');
    }, false);

    shell.addEventListener('touchend', function() {
        if (info.classList.contains('touched')) {
            info.classList.remove('touched');
        }
    }, false);
}
