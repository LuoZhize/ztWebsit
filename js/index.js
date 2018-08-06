//导入页面
$('#zt_hpmain').load("./zthomePage.html",function () {
	jQuery.getScript("../ztWebsite/js/zthomePage.js");
});
$('#zt_ZXmain').load("./fw_page.html",function () {
	jQuery.getScript("../ztWebsite/js/fw_page.js");
});
$('#zt_XWmain').load("./xwgg.html",function () {
	jQuery.getScript("../ztWebsite/js/xwgg.js");
});
$('#zt_CGmain').load("./cgal.html",function () {
	
});
//切换时的颜色
//$('.ztNav_menu>li').click(function () {
//	$('.ztNav_menu>li').css('color','#363636');
//	this.style.color = 'black';
//})

//导航栏
$('.ztNav_menu>li:nth-of-type(1)').click(function () {
	$('#zt_hpmain').show();
	$('#zt_ZXmain').hide();
	$('#zt_CGmain').hide();
	$('#zt_XWmain').hide();
})
$('.ztNav_menu>li:nth-of-type(2)').click(function () {
	$('#zt_hpmain').hide();
	$('#zt_CGmain').hide();
	$('#zt_XWmain').hide();
	$('#zt_ZXmain').show();
})
$('.ztNav_menu>li:nth-of-type(3)').click(function () {
	$('#zt_hpmain').hide();
	$('#zt_ZXmain').hide();
	$('#zt_CGmain').hide();
	$('#zt_XWmain').show();
})
$('.ztNav_menu>li:nth-of-type(4)').click(function () {
	$('#zt_hpmain').hide();
	$('#zt_ZXmain').hide();
	$('#zt_XWmain').hide();
	$('#zt_CGmain').show();
//	navTab(hide,hide,hide,show);
})
//		function navTab (nav1,nav2,nav3,nav4) {
//			$('#zt_hpmain').nav1();
//			$('#zt_ZXmain').nav2();
//			$('#zt_XWmain').nav3();
//			$('#zt_CGmain').nav4();
//		}
//		$('.ztNav_menu>li:nth-of-type(4)').click(function () {
//			$('.zt_ZXmain').show()
//		})
