$.fn.trustDialogBox = function() {
	// style dialog box for alert, prompt, confirm
	$( '#dialog' ).dialog ({
		dialogClass : 'noClose';
		modal : true,
		buttons : [
			{
				text : "nanana",
				click : function() {
					$this.dialog( 'close' );
				} // end click function()
			} // end nanana text object
		] // end buttons array
	}); // end #dialog.dialog call

	$( ".scaryBox" ).dialog({
	  dialogClass: 'alert'
	});

	$( ".yesBox" ).dialog({
	  dialogClass: 'prompt'
	});

	$( ".promptBox" ).dialog({
	  dialogClass: 'confirm'
	});
} // end $.fn.trustDialogBox