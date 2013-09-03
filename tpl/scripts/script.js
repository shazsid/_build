$(function(){
				var sswidth = 0;
				var ssheight = 0;
				var ssslides = [];
				var curslide = 0;
				
				function sssizes(){
					sswidth = $("#slideshow div:first").width();
					ssheight = $("#slideshow div:first").height();
					$("#ss-btns").empty();
					$("#slideshow div").each(function(i){
						$("#ss-btns").append('<a href="#" rel="'+i+'"><img src="tpl/images/ss-btn-next.png" /></a>');
						$(this).attr("id", i+"_slide");
						$(this).css({
							'top': '0px',
							'left': (sswidth*i) + 'px'
						});
					});
					$("#ss-btns a[rel='"+curslide+"'] img").attr("src","tpl/images/ss-btn-current.png");
				}
				sssizes();
				$(window).resize(sssizes);
				
				function slideto(ssid){
					var slidepos = $("#"+ssid+"_slide").css("left");
					$("#slideshow").animate({
						'scrollLeft': slidepos
					}, 500);
					
					curslide = ssid;
					$("#ss-btns a img").attr("src","tpl/images/ss-btn-next.png");
					$("#ss-btns a[rel='"+ssid+"'] img").attr("src","tpl/images/ss-btn-current.png");
				}
				
				setInterval(function(){
					var ssid = curslide+1;
					if(ssid > $("#slideshow div").length-1){ ssid = 0; }
					slideto(ssid);
				}, 5000);

				$("#ss-arrow-left").click(function(){
					var ssid = curslide-1;
					if(ssid < 0){ ssid = $("#slideshow div").length-1; }
					slideto(ssid);
				});
				
				$("#ss-arrow-right").click(function(){
					var ssid = curslide+1;
					if(ssid > $("#slideshow div").length-1){ ssid = 0; }
					slideto(ssid);
				});

				$("#ss-btns a").click(function(){
					var ssid = $(this).attr("rel");
					slideto(ssid);
				});
				
			});