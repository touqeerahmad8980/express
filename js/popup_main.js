function openOffersDialog() {
	$('#overlay').fadeIn('fast', function() {
		$('#boxpopup').css('display','block');
        $('#boxpopup').animate({'left':'30%'},500);
    });
}


function closeOffersDialog(prospectElementID) {
	$(function($) {
		$(document).ready(function() {
		$('#' + prospectElementID).css('position', 'fixed');
			$('#' + prospectElementID).animate({'left':'-100%'}, 500, function() {
				$('#' + prospectElementID).css('position','fixed');
				$('#' + prospectElementID).css('left','100%');
				$('#overlay').fadeOut('fast');
			});
		});
	});
}

function closedOffersDialog(prospectElementID) {
    $(function($) {
        $(document).ready(function() {
            $('#' + prospectElementID).css('display', 'none');
            $('#' + prospectElementID).animate({ 'left': '-100%' }, 10, function() {
                $('#' + prospectElementID).css('position', 'fixed');
                $('#' + prospectElementID).css('left', '100%');
                $('#overlay').fadeOut('fast');
            });
        });
    });
}

