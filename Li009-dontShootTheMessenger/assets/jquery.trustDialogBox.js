$.fn.trustDialogBox = function() {
	// style dialog box for alert, prompt, confirm
	$( this ).on( 'click', function () {
			$( '.alertItself').addClass( 'open' );
			$( '.dimening').addClass( 'open' );

			var togglino = function() {
				if( this.hasClass( 'open' )) {
					$( '.alertItself' ).removeClass( 'open' );
				} else {
					mo.open();
				};
			};// end togglino

			var close = function() {
				( '.clickable' ).removeClass( 'open' );
			};

			var togglino = function() {
				if(xx.hasClass( 'open' )) {
					mo.close();
				} else {
					mo.open();
				};
			};

			var setContent = function(content) {
				xx.find( '.content' ).html(content);
			};

			var init = function() {
				console.log( 'Init Called' );
			};		

		}); // end click function
} // end $.fn.trustDialogBox