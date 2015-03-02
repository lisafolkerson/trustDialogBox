$.fn.trustDialogBox = function() {
	// style dialog box for alert, prompt, confirm
	$( this ).on( 'click', function (e) {
			e.preventDefault();
			var overlay = $('#dimening');
			var overlayJr = $( '#alertItself' );

			overlay.fadeIn(300);
			overlayJr.fadeIn(300);

			overlay.on('click', function() {
				$( this ).fadeOut(300, function() {
					this.remove();

					$('.wrapper').append( '<div id="dimening">' );
					// $('.wrapper').append( '<div id="alertItself">' );
					console.log( 'append?' );
				});
			});

			$( document ).keyup( function(e) {
				if ( e.keyCode == 27 ) {
					overlay.fadeOut(300, function() {
						this.remove();
					});
				}
			}); //end whatever	
		}); // end click function
} // end $.fn.trustDialogBox