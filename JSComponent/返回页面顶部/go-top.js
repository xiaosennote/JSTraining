/*依赖jQuery*/
    var gotop = $('.go-top');
    window.addEventListener('scroll',function(){
    var sc = $('body').scrollTop();
        if (sc > 0) {
            gotop.addClass("go-top-show");
        }else{
            gotop.removeClass("go-top-show");
        }
    });
    /*点击返回*/
    $('.go-top').click(function(event) {
        $("body").animate({
            scrollTop: "0px"
        }, 500);
    });