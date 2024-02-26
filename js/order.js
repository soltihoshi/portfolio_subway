// 카드 슬라이드
$('.card_img_slick').slick({
    prevArrow : '.btn_prev',
    nextArrow : '.btn_next',
    dots : true,
    appendDots : '.order_list',
    customPaging : function(slider, i){
        return `
        <p class = "step">STEP</P>
        <span class = "step_num">${i + 1}</span>
        `
    },
    asNavFor : '.card_txt_slick',
    speed : 1000,
});
// 텍스트 슬라이드
$('.card_txt_slick').slick({
    prevArrow : '.btn_prev',
    nextArrow : '.btn_next',
    dots : true,
    appendDots : '.txt_step',
    customPaging : function(slider, i){
        return `
        <span class = "step_num">${i + 1}</span>
        `
    },
    asNavFor : '.card_img_slick',
    speed : 1000
});
