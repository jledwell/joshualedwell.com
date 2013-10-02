$(document).ready(function() {
	$('#switcher .button').hover(function() {
		$(this).addClass('over');
	},
		function() {
		$(this).removeClass('over');
	});
	$('#switcher .button').click(function() {
		$('body').removeClass();
		$('div#mainImage').removeClass();
		if (this.id == 'swooshy') {
			$('body').addClass('image1');
			$('div#mainImage').addClass('bg1');
		}
		else if (this.id == 'yellow') {
			$('body').addClass('image2');
			$('div#mainImage').addClass('bg2');
		}
		else if (this.id == 'pointy') {
			$('body').addClass('image3');
			$('div#mainImage').addClass('bg3');
		}
		$('#switcher .button').removeClass('selected');
		$(this).addClass('selected');
	});
});

	
	
