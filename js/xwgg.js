$('.ztxw_nav>li').click(function () {//新闻导航栏的线
	$(this).css('border-image','url(../ztWebsite/img/ztxw_navImg.png) 30 0 round').siblings().css('border-image','url()');
})
$('.ztXWList>li').mouseenter(function () {//鼠标放上去显示的遮罩层
	$(this).children().eq(0).show();
	$(this).find('.ztxwLJ img').attr("src","../ztWebsite/img/ztxwLJ1.png");
})
$('.ztXWList>li').mouseleave(function () {
    $(this).children().eq(0).hide();
    $(this).find('.ztxwLJ img').attr("src","../ztWebsite/img/ztxwLJ.png");
})
var ztXWlistNum = 0;//记录新闻左边实践的点击
var ztXWlistLength = $('.ztXWList').children('li').length;//记录新闻列表的总长度
console.log(ztXWlistLength);
$('.pageL').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
	if (ztXWlistNum > ztXWlistLength-2) {console.log(ztXWlistNum);} else {
        ztXWlistNum++;
        $('.ztXWList').css('left',-30*ztXWlistNum+'rem');
	}
})
$('.pageR').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
	if (ztXWlistNum < 1) {} else {
        ztXWlistNum--;
        $('.ztXWList').css('left',-30*ztXWlistNum+'rem');
	}
})

