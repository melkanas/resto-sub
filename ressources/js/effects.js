$('#small-menu').click(()=>{
    let statusDis = $('#nav-tabs').css('display');
    if(statusDis == "block")
        $('#nav-tabs').css('display','none');
    else
        $('#nav-tabs').css('display','block');
})

$('.btn-discover').click(function () {
       $('html, body').animate({scrollTop: $('.sect-feature').offset().top}, 1000).delay(2000).animate({scrollTop: $('.section-meals').offset().top}, 1000).delay(2000).animate({scrollTop: $('.section-testimonials').offset().top}, 1000).delay(900).animate({scrollTop: $('.section-plans').offset().top-50}, 1000).delay(2000).animate({scrollTop: $('.nav-min').offset().top-50}, 2000)
});

let gridAnimate = function(){
    let imageNumber = Math.floor(Math.random()*12+1);
    let imageId = "#foodwall_" + imageNumber; 
    $(imageId).css('animation','anim-hover 1s ease infinite alternate');
    setTimeout(()=>{$(imageId).css('animation','');},2000);
    
}
setInterval(gridAnimate,2000);