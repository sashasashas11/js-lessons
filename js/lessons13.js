/**
 * Created by sasha on 28.11.13.
 */
$(function(){
	$(window).on('scroll',function(){});
	var offset = $('#last').offset(),
		win = $(window),
		body = $('body')
		;
	win.scroll(function(){
		var distanceTop = offset.top - win.height();

		if (win.scrollTop()>distanceTop) {
			body.addClass('with-banner');
		}
		else
			body.removeClass('with-banner');
	});

		$('#slide-box .close').click(function(){
			$('#slide-box').parent().remove();
	})
});