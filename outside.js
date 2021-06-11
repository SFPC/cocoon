var counter=0;
var bgImg = $('.layer1');
var ran = Math.floor(Math.random() * 8);
var bg = bgImg.css('background-image'); // old image


activeLinks();
$(window).scroll(function () {
   console.log(counter);
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
        endlessScrollText();
        activeLinks();
    };
});

$(".top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

function endlessScrollText() {
    let infoTextInner = $('#info').html();
    let bgImgLayer = $('.bgImg').html();
    $('#shell').append(infoTextInner);
    ran = Math.floor(Math.random() * 8);
    $('.bgImg').append('<img src="bgImages/layer' + ran + '.png" class="spiral" alt="" />').fadeIn(1000);;
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

//
// $(function() {
//     var rotation = 0,
//         scrollLoc = $(document).scrollTop();
//     $(window).scroll(function() {
//         var newLoc = $(document).scrollTop();
//         var diff = scrollLoc - newLoc;
//         rotation += diff / 100, scrollLoc = newLoc;
//         // var rotationStr = "rotate(" + rotation + "deg) scale(" + rotation + ")";
//         var rotationStr = "rotate(" + rotation + "deg)";
//         $(".spiral").css({
//             "-webkit-transform": rotationStr,
//             "-moz-transform": rotationStr,
//             "transform": rotationStr
//         });
//     });
// })
