// 스크롤이벤트
$(window).scroll(function(){
    let sct = $(window).scrollTop();
    sct > 200 ? $('.top').stop().fadeIn() : $('.top').stop().fadeOut();
});//스크롤 이벤트 끝

// 메뉴 드롭다운
$('#gnb').mouseover(function(){
    $('#gnb').stop().animate({
        height : 300
    });
}).mouseout(function(){
    $('#gnb').stop().animate({
        height : 53
    });
});