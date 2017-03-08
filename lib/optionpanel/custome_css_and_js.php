<?php
if(isset($_POST['submit'])){
$eif_settings = array();
$eif_settings = get_option('eif_settings');
$eif_settings['eif_instagram_custom_css'] = $_POST['eif_instagram_custom_css'];
    $eif_settings['eif_instagram_custom_js'] = $_POST['eif_instagram_custom_js'];
	update_option('eif_settings',$eif_settings);
}
?>

<form  name="eif_form" method="post"><?php $eif_settings = get_option('eif_settings'); ?>

		<table class="form-table">
			<tbody>
				<tr valign="top">
					<td style="padding-bottom: 0;">
						<strong style="font-size: 15px;">Custom CSS</strong><br></td>
				</tr>
				<tr valign="top">
					<td>
						<textarea name="eif_instagram_custom_css" id="eif_instagram_custom_css"   style="width: 70%;" rows="7"><?php  esc_attr_e(stripslashes( $eif_settings['eif_instagram_custom_css'])); ?></textarea>
						<span style="font-style:12px;font-style:italic"><strong>Note:</strong> Only enter css without script tag.</span>
					</td>
				</tr>
				<tr valign="top">
					<td style="padding-bottom: 0;">
						<strong style="font-size: 15px;">Custom JavaScript</strong><br></td>
				</tr>
				<tr valign="top">
					<td>
						<textarea name="eif_instagram_custom_js" id="eif_instagram_custom_js"  style="width: 70%;" rows="7"><?php esc_attr_e(stripslashes( $eif_settings['eif_instagram_custom_js'])); ?></textarea>
						<span style="font-style:12px;font-style:italic"><strong>Note:</strong> Enter js without script tag.</span>
					
					</td>
				</tr>
			</tbody>
		</table>
	
 

    <input type="submit" name="submit" value="Submit" class="button button-primary"/>
	
	
	
</form> 



 
