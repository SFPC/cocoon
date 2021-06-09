var counter=0;

$(window).scroll(function () {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
        endlessScrollText();
    }
    console.log(counter);

    // if(counter>3) {
    //   $('.info').find('.intro-text').first().remove();
    // }

});

function endlessScrollText() {

    infotext = '<div class="intro-text"><p>The School for Poetic Computation is changing. This summer, we are making a temporary space together—inviting others into our (un)learning and into our collective studies. In the process, we are developing experimental curriculum that can later grow and morph to be taught again and again. Unlearning is a process of learning to unlearn with others in order to change the conditions of learning itself. We are seeking new “schooling” positions that facilitate the oscillation between “teacher" and “learner." How do we go into the cocoon, again, and how do we leave it behind?</p><p>COCOON includes sessions taught and organized by Firstname Lastname, Firstname Lastname, Firstname Lastname, Firstname Lastname, Firstname Lastname and Firstname Lastname.</p><p>The official programming schedule will be released on June 12th. Follow us on <a href="" target="_blank">Twitter</a> and <a href="" target="_blank">Instagram</a> for updates and announcements. We will be updating this web page a lot over the summer. Reach out to us <a href="">here</a>.</p><div class="peek"><a href="programs/index.html" class="peek">P e e k &nbsp; I n s i d e</a></div></div>'

    $('#info').append(infotext);
    counter++;


}
