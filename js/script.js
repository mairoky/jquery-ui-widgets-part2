$( function() {

//Date Picker
$( "#datepicker" ).datepicker();

// Menu
$( "#menu" ).menu();

// SelectMenu
$( "#speed" ).selectmenu();
 
$( "#files" ).selectmenu();
 
$( "#number" )
    .selectmenu()
    .selectmenu( "menuWidget" )
    .addClass( "overflow" );
 
$( "#salutation" ).selectmenu();

// Slider
var handle = $( "#custom-handle" );
	$( "#slider" ).slider({
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle.text( ui.value );
      }
    });

//Tabs
$( "#tabs" ).tabs({
      event: "mouseover"
    });

    
} );

	
