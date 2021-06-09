var counter=0;
activeLinks();
$(window).scroll(function () {
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
    $('#shell').append(infoTextInner);
    counter++;
}

function activeLinks() {
  const shell = document.getElementById('shell');
  const info = document.getElementById('info');
  let expandableLinks = document.querySelectorAll('.expand');

  expandableLinks.forEach((link) => {
    link.addEventListener('click', function() {
      console.log(link);
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
        console.log(link.children[0])
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
