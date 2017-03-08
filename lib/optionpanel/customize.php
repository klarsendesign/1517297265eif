<?php 
if(isset($_POST['rest']))
{
$eif_settings = array();
$eif_settings = array(
    'eif_user_id' => '',
    'eif_access_token' => '1591885187.44a5744.385971946cc341fa9f84967c9ba1b9db',
    'eif_feed_width' => '100',
	'eif_hastag'=> '',
	'eif_serach_type' => 'user',
    'eif_feed_width_unit' => '%',
    'eif_feed_height' => '100',
    'eif_feed_height_unit' => '%',
    'eif_feed_background_color' => '#fff',
	'eif_feed_image_padding_unit'=> 'px',
	'eif_feed_image_padding_size' => '5',
	'eif_feed_column_numbers'=> '4',
	'eif_feed_number_of_images' => '20',
	'eif_feed_image_resolution' => 'low_resolution',
	'eif_feed_image_sorting' => 'newer',
	'eif_feed_show_button_status'=>'no',
	'eif_feed_button_background_color' => '#000000',
	'eif_feed_button_text_color'=> '#fff',
	'eif_feed_follow_button_text' => 'Follow on Instagram',
	'eif_feed_load_more_button_status'=> 'no',
	'eif_feed_load_more_button_back_color'=> '#000000',
	'eif_feed_load_more_button_text_color' => '#fff',
	'eif_feed_load_more_button_text' => 'Load More',
	'eif_feed_header_status' =>'yes',
	'eif_feed_header_text_color' =>'#e34f0e',
	'eif_disable_light_box' =>'no',
	'eif_caption_status'=>'yes',
	'eif_caption_text_length' =>'30',
	'eif_caption_text_color' =>'#666',
	'eif_caption_text_size' =>'14',
	'eif_show_likes' =>'yes',
	'eif_show_comments' => 'yes',
	'eif_likes_comments_color' =>'#dd9494'
	
    );


// add the default settings value to the databsae
update_option('eif_settings',$eif_settings);
}


if(isset($_POST['submit2'])){

if(isset($_POST['eif_feed_load_more_button_status']))
{
$val = "yes";
}
else
{
$val = "no";
//print_r($val);
}
if(isset($_POST['eif_feed_show_button_status']))
{
$load_val = "yes";
}
else
{
$load_val = "no";

}

if(isset($_POST['eif_feed_header_status']))
{
$header_status = "yes";
}
else
{
$header_status = "no";
}

if(isset($_POST['eif_disable_light_box']))
{
$light_box_status = "yes";
}else{
$light_box_status = "no";
}

if(isset($_POST['eif_caption_status']))
{
$caption_status = "yes";
}else{
$caption_status = "no";
}
if(isset($_POST['eif_show_likes']))
{
$Likes_status = 'yes';
}else
{
$Likes_status = 'no';
}

if(isset($_POST['eif_show_comments']))
{
$comments_status ='yes';
}else
{
$comments_status = 'no';
}



    $eif_settings = array();
    $eif_settings = get_option('eif_settings');
    // update feeds section configuration settings.
    
    $eif_settings['eif_feed_width'] = $_POST['eif_feed_width'];
    $eif_settings['eif_feed_width_unit'] = $_POST['eif_feed_width_unit'];
    $eif_settings['eif_feed_height'] = $_POST['eif_feed_height'];
    $eif_settings['eif_feed_height_unit'] = $_POST['eif_feed_height_unit'];
    $eif_settings['eif_feed_background_color'] = $_POST['eif_feed_background_color'];
	$eif_settings['eif_feed_image_sorting'] = $_POST['eif_feed_image_sorting'];
	$eif_settings['eif_feed_number_of_images'] = $_POST['eif_feed_number_of_images'];
	$eif_settings['eif_feed_column_numbers'] = $_POST['eif_feed_column_numbers'];
	$eif_settings['eif_feed_image_resolution'] =$_POST['eif_feed_image_resolution'];
	$eif_settings['eif_feed_image_padding_unit'] = $_POST['eif_feed_image_padding_unit'];
	$eif_settings['eif_feed_image_padding_size']= $_POST['eif_feed_image_padding_size'];
    $eif_settings['eif_feed_show_button_status'] = $load_val;
	$eif_settings['eif_feed_button_background_color'] = $_POST['eif_feed_button_background_color'];
	$eif_settings['eif_feed_button_text_color'] = $_POST['eif_feed_button_text_color'];
    $eif_settings['eif_feed_follow_button_text'] = $_POST['eif_feed_follow_button_text'];
	$eif_settings['eif_feed_load_more_button_status'] = $val;
	$eif_settings['eif_feed_load_more_button_back_color'] = $_POST['eif_feed_load_more_button_back_color'];
	$eif_settings['eif_feed_load_more_button_text_color'] = $_POST['eif_feed_load_more_button_text_color'];
	$eif_settings['eif_feed_load_more_button_text'] = $_POST['eif_feed_load_more_button_text'];
	$eif_settings['eif_feed_header_status'] = $header_status;
	$eif_settings['eif_feed_header_text_color'] = $_POST['eif_feed_header_text_color'];
	$eif_settings['eif_disable_light_box'] = $light_box_status;
	$eif_settings['eif_caption_status'] = $caption_status;
	$eif_settings['eif_caption_text_length'] = $_POST['eif_caption_text_length'];
	$eif_settings['eif_caption_text_color'] = $_POST['eif_caption_text_color'];
	$eif_settings['eif_caption_text_size'] = $_POST['eif_caption_text_size'];
	$eif_settings['eif_show_likes'] = $Likes_status;
	$eif_settings['eif_show_comments'] = $comments_status;
	$eif_settings['eif_likes_comments_color'] = $_POST['eif_likes_comments_color'];
	
	
	//wp_die(print_r($eif_settings['eif_feed_background_color']));
       
        // update options
        update_option('eif_settings',$eif_settings);
        

}?>
<form id="eif_settings_form"  name="eif_form" method="post"><?php $eif_settings = get_option('eif_settings');  //wp_die(print_r(get_option('eif_settings'))); ?>
<h3>Customize Feed Area</h3>

<table class="form-table">
		
        <tr valign="top">
        <th scope="row"><label>Width of feed area:</label></th>
            <td>
                <input type="text" id="eif_feed_width"  name="eif_feed_width" value="<?php esc_attr_e($eif_settings['eif_feed_width']); ?>" size="5" />
                <select name="eif_feed_width_unit">
                    <option value="px" <?php if($eif_settings['eif_feed_width_unit'] == "px") echo 'selected="selected"' ?> ><?php _e('px'); ?></option>
                    <option value="%" <?php if($eif_settings['eif_feed_width_unit'] == "%") echo 'selected="selected"' ?> ><?php _e('%'); ?></option>
                </select>
            </td>
        </tr>
         
        <tr valign="top">
        <th scope="row"><label>Height of feed area:</label></th>
            <td>
                <input type="text" id="eif_feed_height"  name="eif_feed_height" value="<?php esc_attr_e($eif_settings['eif_feed_height']); ?>" size="5" />
                <select name="eif_feed_height_unit">
                    <option value="px" <?php if($eif_settings['eif_feed_height_unit'] == "px") echo 'selected="selected"' ?> ><?php _e('px'); ?></option>
                    <option value="%" <?php if($eif_settings['eif_feed_height_unit'] == "%") echo 'selected="selected"' ?> ><?php _e('%'); ?></option>
                </select>
            </td>
        </tr>
        
        <tr valign="top">
        <th scope="row"><label>Background color of feed section:</label></th>
            <td>
                <input type="text" name="eif_feed_background_color" value="<?php esc_attr_e($eif_settings['eif_feed_background_color']);?>" class="eif-color-field" />
            </td>
        </tr>
		
       
    </table>
	<table class="form-table">
    <hr />
        <h3>Photos</h3>
		<tr valign="top">
			<th scope="row"><label>Order by:</label></th>
				<td>
					<select name="eif_feed_image_sorting">
						<option value="newer" <?php if($eif_settings['eif_feed_image_sorting'] == "newer") echo 'selected="selected"' ?> ><?php _e('Newest to oldest'); ?></option>
						<option value="random" <?php if($eif_settings['eif_feed_image_sorting'] == "random") echo 'selected="selected"' ?> ><?php _e('Random'); ?></option>
					</select>
				</td>	
		</tr>
		<tr>
			<th scope="row"><label>Number of Photos:</label></th>
			<td>
				<input type="text" id="eif_feed_number_of_images" name="eif_feed_number_of_images" value="<?php esc_attr_e($eif_settings['eif_feed_number_of_images']);?>">
				<br><br><span style="font-style:Italic;font-size:12px"> Specify number of photos to show initially. Maximum 33 media items returned in a single request. In case of multiple id and hash you will get this much number of media items for each ids/tags.</span>
			
			</td>
		</tr>
		<tr>
			<th scope="row"><label>Number of Columns:</label></th>
			<td>
				<select name="eif_feed_column_numbers">
					<option value="1"<?php  if($eif_settings['eif_feed_column_numbers']=="1") echo 'selected="selected"' ; ?>><?php _e('1'); ?></option>
					<option value="2"<?php  if($eif_settings['eif_feed_column_numbers']=="2") echo 'selected="selected"' ; ?>><?php _e('2'); ?></option>
					<option value="3"<?php  if($eif_settings['eif_feed_column_numbers']=="3") echo 'selected="selected"' ; ?>><?php _e('3'); ?></option>
					<option value="4"<?php  if($eif_settings['eif_feed_column_numbers']=="4") echo 'selected="selected"' ; ?>><?php _e('4'); ?></option>
					<option value="5"<?php  if($eif_settings['eif_feed_column_numbers']=="5") echo 'selected="selected"' ; ?>><?php _e('5'); ?></option>
					<option value="6"<?php  if($eif_settings['eif_feed_column_numbers']=="6") echo 'selected="selected"' ; ?>><?php _e('6'); ?></option>
					<option value="7"<?php  if($eif_settings['eif_feed_column_numbers']=="7") echo 'selected="selected"' ; ?>><?php _e('7'); ?></option>
					<option value="8"<?php  if($eif_settings['eif_feed_column_numbers']=="8") echo 'selected="selected"' ; ?>><?php _e('8'); ?></option>
					<option value="9"<?php  if($eif_settings['eif_feed_column_numbers']=="9") echo 'selected="selected"' ; ?>><?php _e('9'); ?></option>
					<option value="10"<?php if($eif_settings['eif_feed_column_numbers']=="10") echo 'selected="selected"' ; ?>><?php _e('10'); ?></option>
				</select>
			</td>
		</tr>
		
		<tr>
		<th scope="row"><label>Image Resolution:</label></th>
		<td>
			<select name="eif_feed_image_resolution">
				<option value="thumbnail"<?php if($eif_settings['eif_feed_image_resolution']=="thumbnail'") echo 'selected="selected"'; ?>><?php _e('Thumbnail(150*150)');?></option>
				<option value="low_resolution"<?php if($eif_settings['eif_feed_image_resolution']=="low_resolution") echo 'selected="selected"'; ?>><?php _e('Medium(306*306)');?></option>
				<option value="standard_resolution"<?php if($eif_settings['eif_feed_image_resolution']=='standard_resolution') echo 'selected="selected"'; ?>><?php _e('Full Size(640*640)');?></option>
			</select>
		</td>
		</tr>
		
		<tr>
		<th scope="row"><label>Padding around Images:<label></th>
		<td>
			<input type="text" id="eif_feed_image_padding_size" name="eif_feed_image_padding_size" value="<?php esc_attr_e($eif_settings['eif_feed_image_padding_size']); ?>">
			<select name="eif_feed_image_padding_unit">
				<option value="px"<?php if($eif_settings['eif_feed_image_padding_unit']=='px') echo 'selected="selected"';?>><?php _e('PX');?></option>
				<option value="%"<?php if($eif_settings['eif_feed_image_padding_unit']=='%') echo 'selected="selected"';?>><?php _e('%');?></option>
			</select>
		</td>
		</tr>
		<tr>
			<th scope="row"><label>Enable Pop-up Lightbox:</label></th>
			<td>
				<input type="checkbox" name="eif_disable_light_box" value="yes" <?php if($eif_settings['eif_disable_light_box']=='yes'){echo 'checked';} ?>>
				<br><br><span style="font-style:Italic;font-size:12px"> If you disable lightbox pop up than on click of each media item you will be redirected to their respective detail page of instagram.</span>
			</td>
		</tr>
		
 </table>
	
 <table class="form-table">
 <hr/>
	<h3>Header</h3>
	<tr valign="top">
		<th scope="row"><label>Show the Header:</label></th>
		<td>
			<input type="checkbox" name="eif_feed_header_status" value="yes" <?php if($eif_settings['eif_feed_header_status']=='yes'){echo 'checked';}?>>
		</td>
	<tr>
	<tr valign="top">
		 <th scope="row"><label>Header Text Color:</label></th>
		 <td>
			<input type="text" name="eif_feed_header_text_color" value="<?php if(esc_attr_e($eif_settings['eif_feed_header_text_color']));?>" class="eif-color-field"/>
		 </td>
	</tr>
 </table>
 
 <table class="form-table">
 <hr/>
 <h3>Caption</h3>
 <tr valign="top">
	<th scope="row"><label>Show Caption:</label></th>
	<td>
			<input type="checkbox" name="eif_caption_status" value="yes" <?php if($eif_settings['eif_caption_status']=='yes'){echo 'checked';}?>>
	</td>
 </tr>
<tr>
	<th scope="row"><label>Maximum Text Length:</label></th>
<td>
		<input type="text" name="eif_caption_text_length" value="<?php if(esc_attr_e($eif_settings['eif_caption_text_length']));?>" size="60">	
</td>
</tr>
<tr>
	<th scope="row"><label>Text Color:</label></th>
	<td>
		<input type="text" name="eif_caption_text_color" value="<?php if(esc_attr_e($eif_settings['eif_caption_text_color']));?>" class="eif-color-field"/>	
	</td>
</tr>
<tr>
	<th scope="row"><label>Text Size:</label></th>
			<td>
				<select name="eif_caption_text_size">
					<option value="10"<?php  if($eif_settings['eif_caption_text_size']=="10") echo 'selected="selected"' ; ?>><?php _e('10'); ?></option>
					<option value="12"<?php  if($eif_settings['eif_caption_text_size']=="12") echo 'selected="selected"' ; ?>><?php _e('12'); ?></option>
					<option value="14"<?php  if($eif_settings['eif_caption_text_size']=="14") echo 'selected="selected"' ; ?>><?php _e('14'); ?></option>
					<option value="16"<?php  if($eif_settings['eif_caption_text_size']=="16") echo 'selected="selected"' ; ?>><?php _e('16'); ?></option>
					<option value="18"<?php  if($eif_settings['eif_caption_text_size']=="18") echo 'selected="selected"' ; ?>><?php _e('18'); ?></option>
					<option value="20"<?php  if($eif_settings['eif_caption_text_size']=="20") echo 'selected="selected"' ; ?>><?php _e('20'); ?></option>
					<option value="22"<?php  if($eif_settings['eif_caption_text_size']=="22") echo 'selected="selected"' ; ?>><?php _e('22'); ?></option>
					<option value="24"<?php  if($eif_settings['eif_caption_text_size']=="24") echo 'selected="selected"' ; ?>><?php _e('24'); ?></option>
					<option value="26"<?php  if($eif_settings['eif_caption_text_size']=="26") echo 'selected="selected"' ; ?>><?php _e('26'); ?></option>
					<option value="28"<?php  if($eif_settings['eif_caption_text_size']=="28") echo 'selected="selected"' ; ?>><?php _e('28'); ?></option>
				</select>
			</td>
 </tr>
 </table>
 
 <table class="form-table">
		<hr/>
		<h3>Like and Comments</h3>
		
	<tr valign="top">
		<th scope="row"><label>Like Show:</label></th> 
		<td>
		<input type="checkbox" name="eif_show_likes" value="yes" <?php if($eif_settings['eif_show_likes']=='yes')
		{echo 'checked';}?>>
		
		</td>
	</tr>
	
	<tr valign="top">
		<th scope="row"><label>comments Show:</label></th> 
		<td>
		<input type="checkbox" name="eif_show_comments" value="yes" <?php if($eif_settings['eif_show_comments']=='yes')
		{echo 'checked';}?>>
		</td>
	</tr>	
	
	
	<tr valign="top">
		<th scope="row"><label> Background color:</label></th>
		<td>
		<input type="text" name="eif_likes_comments_color" value="<?php if(esc_attr_e($eif_settings['eif_likes_comments_color']));?>"  class="eif-color-field"/>
		</td>
	</tr>
 </table>
 
 <table class="form-table">
	 <hr/>
	 <h3>'Load More' Button </h3>
	 <tr valign="top">
		<th scope="row"><label>Show the 'Load More' button:</label></th>
		<td>
			<input type="checkbox" name="eif_feed_load_more_button_status" value="yes" <?php if($eif_settings['eif_feed_load_more_button_status']=='yes'){echo 'checked';}?>>
		</td>
	 </tr>
	<tr valign="top">
		 <th scope="row"><label>Button Background Color:</label></th>
		 <td>
			<input type="text" name="eif_feed_load_more_button_back_color" value="<?php if(esc_attr_e($eif_settings['eif_feed_load_more_button_back_color']));?>" class="eif-color-field"/>
		 </td>
	</tr>
	<tr valign="top">
		 <th scope="row"><label>Button Text Color:</label></th>
		 <td>
			<input type="text" name="eif_feed_load_more_button_text_color" value="<?php if(esc_attr_e($eif_settings['eif_feed_load_more_button_text_color']));?>" class="eif-color-field"/>
		 </td>
	</tr>
	<tr valign ="top">
		<th scope="row"><label>Button Text:</label></th>
		<td>
			<input type="text" name="eif_feed_load_more_button_text" value="<?php if(esc_attr_e($eif_settings['eif_feed_load_more_button_text']));?>" size="60">
		</td>
	</tr>
 </table>
 
 <table class="form-table">
	<hr/>
	<h3>'Follow on Instagram' Button</h3>
	<tr valign="top">
		<th scope="row"><label>Show the follow button:</label></th>
		<td>
			<input type="checkbox" name="eif_feed_show_button_status" value="yes"<?php if($eif_settings['eif_feed_show_button_status']=='yes'){echo 'checked';} ?>>
		
		</td>
	</tr>
	<tr valign="top">
		<th scope="row"><label>Button Background Color:</label></th>
		<td>
			<input type="text" name="eif_feed_button_background_color" value="<?php if(esc_attr_e($eif_settings['eif_feed_button_background_color'])); ?>" class="eif-color-field">
		</td>
	</tr>
	<tr valign="top">
		<th scope="row"><label>Button Text Color:</label></th>
		<td>
			<input type="text" name="eif_feed_button_text_color" value="<?php if(esc_attr_e($eif_settings['eif_feed_button_text_color']));?>" class="eif-color-field"/>
		</td>
	</tr>
	<tr valign ="top">
		<th scope="row"><label>Button Text:</label></th>
		<td>
			<input type="text" name="eif_feed_follow_button_text" value="<?php if(esc_attr_e($eif_settings['eif_feed_follow_button_text']));?>" size="60">
		</td>
	</tr>
	
 </table>
 

    <input type="submit" name="submit2" value="Save" class="button button-primary"/>
	<input type="submit" name="rest" value="Reset" class="button button-primary"/>
</form>