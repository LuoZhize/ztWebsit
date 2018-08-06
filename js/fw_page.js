var num=0,num1=0,num2=0;//项目类型、项目需求、联系方式点击事件
$('.ZX_nav>li:nth-of-type(1)').click(function () {
	if ($('#XQDia').is(':visible')||$('#LXwayDia').is(':visible')) {} else{
		num++;
		if (num==1) {
			$('.ztZX_type').slideDown(500);
			$('.xDown').css({"transform":"rotateZ(180deg) translateY(-0.3rem)"})
		} else{
			$('.ztZX_type').slideUp(500);
			$('.xDown').css({"transform":"rotateZ(0deg) translateY(0rem)"})
			num =0;
		}
	}
})
$('.ZX_nav>li:nth-of-type(2)').click(function () {
	if ($('.ztZX_type').is(':visible')||$('#LXwayDia').is(':visible')) {} else{
		num1++;
		if (num1==1) {
			$('#XQDia').slideDown(500);
		} else{
			num1 =0;
			$('#XQDia').slideUp(500);
		}
	}
})
$('.ZX_nav>li:nth-of-type(3)').click(function () {
	if ($('.ztZX_type').is(':visible')||$('#XQDia').is(':visible')) {} else{
		num2++;
		if (num2==1) {
			$('#LXwayDia').fadeIn(300);
		} else{
			$('#LXwayDia').fadeOut(300);
			num2 =0;
		}
	}
})