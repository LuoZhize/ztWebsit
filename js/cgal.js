$('.zt_CGList>li').mouseenter(function () {
    $(this).children().eq(0).show(100);
    $(this).children().eq(1).css('left','0');
})
$('.zt_CGList>li').mouseleave(function () {
    $(this).children().eq(1).css('left','-100%');
    $(this).children().eq(0).hide(300);
})