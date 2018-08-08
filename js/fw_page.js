var tabList = 0;//服务咨询左侧列表点击数量
$('.fw_mainTab>li:nth-of-type(1)').children('.fwMainListZhe').show(10);
$('.fw_mainInfo:nth-of-type(1)').show(10);
$('.fw_mainTab>li:nth-of-type(1)').addClass('fw_mainListDefault');
$('.fw_mainTab>li').mouseenter(function () {
    $('.fw_mainTab>li:nth-of-type(1)').removeClass('fw_mainListDefault');
    $('.fwMainListZhe').hide(10)
	$(this).children('.fwMainListZhe').show(10);
	$('.fw_mainInfo').show(10);
	$('#LXwayDia').hide();
})
$('.fw_mainTab>li').mouseleave(function () {
    $('.fw_mainTab>li:nth-of-type(1)').removeClass('fw_mainListDefault');
    $('.fwMainListZhe').hide(10);
    $('.fw_mainInfo').hide(10);
    if (tabList>0) {
        $('#LXwayDia').show(10);
	} else {}
})
$('.fw_mainTab>li').click(function () {
    tabList++;
	if (tabList != 0) {
        $(this).children('.fw_mainListSub').children('.fw_mainTabConfirm').show(10);
        $(this).siblings().children('.fw_mainListSub').children('.fw_mainTabConfirm').hide(10);
        $('#LXwayDia').show(10);
        $('.fw_mainInfo').hide(10);
    } else {
        $(this).children('.fw_mainListSub').children('.fw_mainTabConfirm').hide(10);
        $('#LXwayDia').hide(10);
        $('.fw_mainInfo').show(10);
        tabList=0;
    }
})