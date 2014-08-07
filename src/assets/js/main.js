



$(function() {
	console.log( "ready!" );

	ajax_get('#link-about', 'about.php');
	ajax_get('#link-portfolio', 'portfolio.php');
	ajax_get('#link-contact', 'contact.php');

});

function ajax_get(elem, page_url){
	$(elem).click(function() {
		$.get(page_url, function(ajaxresult){
			$('.main-content').fadeOut('1000', function() {
				$('.main-content').hide().html(ajaxresult).fadeIn('1000');
			});
		});
	});
}