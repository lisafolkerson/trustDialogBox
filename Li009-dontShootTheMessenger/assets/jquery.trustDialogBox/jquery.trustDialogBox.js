$.fn.trustDialogBox = function() {
	// style dialog box for alert, prompt, confirm
	$( this ).on( 'click', function (e) {
			e.preventDefault();
			var overlay = $('#dimening');
			var overlayJr = $( '#alertItself' );

			overlay.fadeIn(400);
			overlayJr.fadeIn(400);

			overlay.on('click', function() {
				$( this ).fadeOut(400, function() {
					this.remove();

					$('.wrapper').append( '<div id="dimening">' + '<div id="alertItself" class="bounce">' + '<img class="animated bounce" src="assets/images/federer-nike.png" alt="Roger Federer\'s beautiful head">'
				 );
					// $('.wrapper').append( '<div id="alertItself">' );
					console.log( 'append?' );
				});
			});

			$( document ).keyup( function(e) {
				if ( e.keyCode == 27 ) {
					overlay.fadeOut(400, function() {
						this.remove();
					});
				}
			}); //end whatever	
		}); // end click function
} // end $.fn.trustDialogBox