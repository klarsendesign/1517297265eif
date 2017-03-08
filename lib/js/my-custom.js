 jQuery(function($) {
    $( "#option-tree-settings-api" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#option-tree-settings-api li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
  });
  
   jQuery(document).ready(function () {
	   
	 var radioValue = jQuery("input[name='searchtype']:checked").val();
            if(radioValue == "hastag"){
				jQuery('#userhashtagsection').hide();
            }else
			if(radioValue == "user"){
              jQuery('#commanhashtagfiltersection').hide();
            }
			else{
				jQuery('#userhashtagsection').hide();
				jQuery('#commanhashtagfiltersection').hide();
			}
	   
   
	
    jQuery(".radio").change(function (){ 
        if (this.value == "user"){ 
           jQuery('#userhashtagsection').stop(true,true).show(2000);
		  //jQuery('#commanhashtagfiltersection').stop(true,true).hide(2000);
        } else if (this.value == "hastag"){
            jQuery('#userhashtagsection').stop(true,true).hide(2000);
			//jQuery('#commanhashtagfiltersection').stop(true,true).show(2000);
        }
    });
});