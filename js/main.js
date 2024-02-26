// 메인 배너 슬라이드 
$('.ms_img_wrap').slick({
    prevArrow : '.s_prev',
    nextArrow : '.s_next',
    dots : true,
    appendDots : '.s_pager',
    customPaging : function(slider, i){
        return `<span class = "s_current">${i + 1}</span> / ${slider.slideCount}`
    },
    autoplay : true,
    autoplaySpeed : 4000,
    speed : 1200
});
// * 메인 슬라이드 - 멈춤
$('.s_pause').click(function(){
    $(this).hide();
    $('.s_play').show();
    $('.ms_img_wrap').slick('slickPause');
});
$('.s_play').click(function(){
    $(this).hide();
    $('.s_pause').show();
    $('.ms_img_wrap').slick('slickPlay');
});

// * 메뉴 슬라이드
$('.menu_wrap').slick({
    prevArrow : '.sp_prev',
    nextArrow : '.sp_next',
    dots : true,
    appendDots : '.sp_pager',
    customPaging : function(slider, i){
        return `<span class = "s_current">${i + 1}</span> / ${slider.slideCount}`
    }
});