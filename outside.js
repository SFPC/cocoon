var counter=1;

function scaleBetween(unscaledNum, minAllowed, maxAllowed, min, max) {
  return (maxAllowed - minAllowed) * (unscaledNum - min) / (max - min) + minAllowed;
}



$(window).scroll(function () {
    var elementHeight = $('.info').height();
    var firstHeight = $('.intro-text-first').height();
    var scrollTop = $(this).scrollTop();




    $('#header').css({
      opacity: function() {

        // opacity = 1 - (elementHeight / counter - scrollTop) / elementHeight;
        //
        // opacity = 1, scrollToTop = 0,
        // opacity = .5, scrollToTop = elementHeight/2/counter,
        // opacity = 0, scrollToTop = elementHeight/counter



        opacity = scaleBetween(scrollTop, 1, 0, 0, $(document).height() - $(window).height() / counter);
        return opacity;
      }
    });



    // elementHeight / counter

  // (elementHeight - scrollTop / elementHeight)

    // console.log(elementHeight / 2 / counter / scrollTop);

    // console.log(scrollTop / counter);
    //
    // console.log('scroll ' + scrollTop);
    // console.log('counter ' + counter);
    // console.log('opacity ' + opacity);
    // console.log('height ' + elementHeight);
    // console.log('relativeTop ' + scrollTop - elementHeight);

    // console.log(counter);

    console.log($(document).height() - $(window).height());
    console.log(scrollTop == $(document).height() - $(window).height())
    console.log('scroll ' + scrollTop);
    console.log('counter ' + counter);
    console.log('docHeight ' + $(document).height());
    console.log('windowHeight ' + $(window).height());
    console.log('opacity ' + scaleBetween(scrollTop, 1, 0, 0, $(document).height() - $(window).height() / counter ));


    if (scrollTop == $(document).height() - $(window).height()) {
        endlessScrollText();
        $('#header').removeClass('dim');
    }
    // console.log(counter);

    // $('#header').addClass('dim');


    //
    // if(counter>=3) {
    //   $('.info').children('div:first').remove();
    //   counter++;
    // }

});





function endlessScrollText() {


    infotext = '<div class="intro-text"><p>The School for Poetic Computation is changing. This summer, we are making a temporary space together—inviting others into our (un)learning and into our collective studies. In the process, we are developing experimental curriculum that can later grow and morph to be taught again and again. Unlearning is a process of learning to unlearn with others in order to change the conditions of learning itself. We are seeking new “schooling” positions that facilitate the oscillation between “teacher" and “learner." How do we go into the cocoon, again, and how do we leave it behind?</p><p>COCOON includes sessions taught and organized by Zainab Aliyu, American Artist, Todd Anderson, Neta Bomani, Nabil Hassein, Melanie Hoff, Celine Katzman, Zach Lieberman, Galen Macdonald, and Emma Rae Bruml Norton.</p><p>The official programming schedule will be released on June 12th. Follow us on <a href="" target="_blank">Twitter</a> and <a href="" target="_blank">Instagram</a> for updates and announcements. We will be updating this web page a lot over the summer. Reach out to us <a href="">here</a>.</p><div class="peek"><a href="programs/index.html" class="peek">P e e k &nbsp; I n s i d e</a></div></div>'

    $('#info').append(infotext);
    counter++;



}
