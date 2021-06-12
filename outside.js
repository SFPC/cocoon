var counter=0;
var bgImg = $('.layer1');
var ran = Math.floor(Math.random() * 11);
var bg = bgImg.css('background-image');
var position = $(window).scrollTop();
var bgR, bgG, bgB;


activeLinks();


$(window).on("load", function() {
  $('<img src="bgImages/layer1.png" class="spiral" alt="" />').appendTo('.bgImg').hide().fadeIn(500);
  $('<img src="bgImages/layer2.png" class="spiral" alt="" />').appendTo('.bgImg').hide().fadeIn(1500);
  $('<img src="bgImages/layer3.png" class="spiral" alt="" />').appendTo('.bgImg').hide().fadeIn(3000);
});

$(document).ready(function() {
  bgR = 239, bgG = 154, bgB = 131;
  $("body").get(0).style.setProperty("--background", "rgb(" + bgR + "," + bgG + "," + bgB + ")");
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var diff = $(document).height() - $(window).height();

    console.log("Scroll " + scroll);
    console.log("Diff " + diff);

    // console.log(diff);

    bgR = bgR + 5;
    bgG = bgG + 5;
    bgB = bgB + 5;

    if (scroll + 100 >= diff && scroll <= diff) {
        endlessScrollText();
        activeLinks();
        // lighterBG();
    };

    if(scroll < position) {
        $(".bgImg img:last-child").remove();
    }
});

$(".top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
  $('body').remove(".newText");
  $('body').remove(".newBg");
  counter=0;
});

function endlessScrollText() {
    let infoTextInner = $('#info').html();
    let bgImgLayer = $('.bgImg').html();
    // $('#shell').append(infoTextInner);
    $(infoTextInner).appendTo('#shell').addClass('newText');
    ran = Math.floor(Math.random() * 11);


    $('<img src="bgImages/layer' + ran + '.png" class="spiral newBg" alt="" />').appendTo('.bgImg').hide().fadeIn(1000);
    $('<img src="bgImages/layer' + ran + '.png" class="spiral newBg" alt="" />').appendTo('.bgImg').hide().fadeIn(2000);
    $('<img src="bgImages/layer' + ran + '.png" class="spiral newBg" alt="" />').appendTo('.bgImg').hide().fadeIn(2000);

    // bgImg.css('background-image', bg +','+ 'bgImages/layer' + Math.floor(Math.random() * 4) + '.png'); // add new image

    counter++;
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
     $("body").get(0).style.setProperty("--background", "rgb(" + bgR + "," + bgG + "," + bgB + ")");
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
