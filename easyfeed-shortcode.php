<?php
// [bartag foo="foo-value"]
$all_settings=array();
$i = 1;
function eif_shortcode( $atts ) { 
GLOBAL $all_settings ,$i;
if(! function_exists('eif_custom_js')){
		//Custom JS
			add_action( 'wp_footer', 'eif_custom_js' );
			function eif_custom_js() {
				 $eif_settings = get_option('eif_settings');
				 $eif_instagram_custom_js = $eif_settings[ 'eif_instagram_custom_js' ];
				if( !empty($eif_instagram_custom_js) ) echo '<!-- Instagram Feed JS -->';
				if( !empty($eif_instagram_custom_js) ) echo "\r\n";
				if( !empty($eif_instagram_custom_js) ) echo '<script type="text/javascript">';
				if( !empty($eif_instagram_custom_js) ) echo "\r\n";
				if( !empty($eif_instagram_custom_js) ) echo "jQuery( document ).ready(function($) {";
				if( !empty($eif_instagram_custom_js) ) echo "\r\n";
				//if( !empty($eif_instagram_custom_js) ) echo "window.eif_custom_js = function(){";
				if( !empty($eif_instagram_custom_js) ) echo "\r\n";
				if( !empty($eif_instagram_custom_js) ) echo stripslashes($eif_instagram_custom_js);
				if( !empty($eif_instagram_custom_js) ) echo "\r\n";
				//if( !empty($eif_instagram_custom_js) ) echo "}";
				if( !empty($eif_instagram_custom_js) ) echo "\r\n";
				if( !empty($eif_instagram_custom_js) ) echo "});";
				if( !empty($eif_instagram_custom_js) ) echo "\r\n";
				if( !empty($eif_instagram_custom_js) ) echo '</script>';
				if( !empty($eif_instagram_custom_js) ) echo "\r\n";
			 }
			 
			 }
			 if(! function_exists('eif_custom_css')){
			  //Custom CSS
			add_action( 'wp_footer', 'eif_custom_css' );
			function eif_custom_css() {
				 $eif_settings = get_option('eif_settings');

				$eif_instagram_custom_css = $eif_settings[ 'eif_instagram_custom_css' ];
				if( !empty($eif_instagram_custom_css) ) echo '<!-- Instagram Feed CSS -->';
				if( !empty($eif_instagram_custom_css) ) echo "\r\n";
				if( !empty($eif_instagram_custom_css) ) echo '<style type="text/css">';
				if( !empty($eif_instagram_custom_css) ) echo "\r\n";
				if( !empty($eif_instagram_custom_css) ) echo stripslashes($eif_instagram_custom_css);
				if( !empty($eif_instagram_custom_css) ) echo "\r\n";
				if( !empty($eif_instagram_custom_css) ) echo '</style>';
				if( !empty($eif_instagram_custom_css) ) echo "\r\n";
			}
}
    $eif_settings = get_option('eif_settings');
	// if(!empty($atts))
	// {
	// $atts['userid'] = explode(",",$atts['userid']);
	// $atts['userid'] = $eif_settings['eif_user_id'];
	// }

	//print_r($eif_settings);
	$atts = shortcode_atts(
	array(
	'userid'=> $eif_settings['eif_user_id'],
	//'searchtype'=> $eif_settings['eif_serach_type'],
	'hashtag'=> $eif_settings['eif_hastag'],
	'accesstoken'=> $eif_settings['eif_access_token'],
	 'num' => $eif_settings[ 'eif_feed_number_of_images' ],
     'cols' => $eif_settings[ 'eif_feed_column_numbers' ],
	 'width' =>$eif_settings['eif_feed_width'],
	 'widthunit' =>$eif_settings['eif_feed_width_unit'],
	 'height' =>$eif_settings['eif_feed_height'],
	 'heightunit' =>$eif_settings['eif_feed_height_unit'],
	 'backgroundcolor' =>$eif_settings['eif_feed_background_color'],
	 'orderby' =>$eif_settings['eif_feed_image_sorting'],
	 'resolution' =>$eif_settings['eif_feed_image_resolution'],
	 'imagepaddingunit' =>$eif_settings['eif_feed_image_padding_unit'],
	 'imagepadding' =>$eif_settings['eif_feed_image_padding_size'],
	 'followbuttondisplay' =>$eif_settings['eif_feed_show_button_status'],
	 'followbuttoncolor' =>$eif_settings['eif_feed_button_background_color'],
	 'followbuttontextcolor' =>$eif_settings['eif_feed_button_text_color'],
	 'followbuttontext' =>$eif_settings['eif_feed_follow_button_text'],
	 'loadmorebuttondisplay' =>$eif_settings['eif_feed_load_more_button_status'],
	 'loadmorebuttoncolor' =>$eif_settings['eif_feed_load_more_button_back_color'],
	 'loadmorebuttontextcolor' =>$eif_settings['eif_feed_load_more_button_text_color'],
	 'loadmorebuttontext' =>$eif_settings['eif_feed_load_more_button_text'],
	 'searchtype'=>$eif_settings['eif_serach_type'],
	  'headerdisplay' =>$eif_settings['eif_feed_header_status'],
	 'headertextcolor' =>$eif_settings['eif_feed_header_text_color'],
	 'showlightbox' =>$eif_settings['eif_disable_light_box'],
	 'captiondisplay' =>$eif_settings['eif_caption_status'],
	 'captiontextlength' =>$eif_settings['eif_caption_text_length'],
	 'captiontextcolor' =>$eif_settings['eif_caption_text_color'],
	 'captiontextsize' =>$eif_settings['eif_caption_text_size'],
	 'likesdisplay' =>$eif_settings['eif_show_likes'],
	 'commentsdisplay' =>$eif_settings['eif_show_comments'],
	 'likescommentscolor' =>$eif_settings['eif_likes_comments_color'],
	 'filteruserid' =>$eif_settings['eif_filter_userid_hashtag_type'],
	 'displaycomman' =>$eif_settings['eif_filter_comman_hashtag_type'],
	 'taggedby' =>$eif_settings['eif_Filter_Serch_UserId_Hashtag'],
	  'id' =>$i,
	  'mediatype' =>$eif_settings['eif_filter_feed_type'],
	),
	$atts);
	//print_r($atts);
	$eif_options =array();
	$eif_options =array(
	'eif_user_id' => $atts['userid'],
	'eif_serach_type' => $atts['searchtype'],
	'eif_hastag' => $atts['hashtag'],
	'eif_access_token' => $atts['accesstoken'],
	'eif_feed_image_sorting' => $atts['orderby'],
	'eif_feed_number_of_images' => $atts['num'],
	'resolution' => $atts['resolution'],
	'eif_feed_show_button_status' => $atts['followbuttondisplay'],
	'eif_feed_button_background_color' => $atts['followbuttoncolor'],
	'eif_feed_button_text_color' => $atts['followbuttontextcolor'],
	'eif_feed_follow_button_text' => $atts['followbuttontext'],
	'eif_feed_load_more_button_status' => $atts['loadmorebuttondisplay'],
	'eif_feed_load_more_button_back_color' => $atts['loadmorebuttoncolor'],
	'eif_feed_load_more_button_text_color' => $atts['loadmorebuttontextcolor'],
	'eif_feed_load_more_button_text' => $atts['loadmorebuttontext'],
	'eif_feed_header_status' =>$atts['headerdisplay'],
	'eif_feed_header_text_color' =>$atts['headertextcolor'],
	'eif_disable_light_box' =>$atts['showlightbox'],
	'eif_caption_status' =>$atts['captiondisplay'],
	'eif_caption_text_length' =>$atts['captiontextlength'],
	'eif_caption_text_color' =>$atts['captiontextcolor'],
	'eif_caption_text_size' =>$atts['captiontextsize'],
	'eif_show_likes' =>$atts['likesdisplay'],
	'eif_show_comments' =>$atts['commentsdisplay'],
	'eif_likes_comments_color' =>$atts['likescommentscolor'],
	'eif_filter_userid_hashtag_enable' => $atts['filteruserid'],
	'eif_filter_comman_hashtag_enable' => $atts['displaycomman'],
	'eif_filter_userid_hashtag' => $atts['taggedby'],
	'id' => $atts['id'],
	'mediatype' =>$atts['mediatype'],
	);
    //add_action('wp_enqueue_scripts','eif_shortcode_script');
	// print_r('\n hello you are here ');
	// echo EIF__PLUGIN_URL.'lib/js/easy-feed.js';
	
		
	
	
  //*******************CONTENT***************
   
	// pass option value is variables for 
	$number_of_columns = $eif_settings['eif_feed_column_numbers'];
	$feed_width	= $eif_settings['eif_feed_width'];
	$feed_width_unit = $eif_settings['eif_feed_width_unit'];
	$feed_height = $eif_settings['eif_feed_height'];
	$feed_height_unit = $eif_settings['eif_feed_height_unit'];
	$feed_background_color = $eif_settings['eif_feed_background_color'];
	$feed_image_sorting = $eif_settings['eif_feed_image_sorting'];
	$feed_image_resolution = $eif_settings['eif_feed_image_resolution'];
	$feed_image_padding_unit = $eif_settings['eif_feed_image_padding_unit'];
	$feed_image_padding_size = $eif_settings['eif_feed_image_padding_size'];
	$feed_show_button_status = $eif_settings['eif_feed_show_button_status'];
	$feed_button_background_color = $eif_settings['eif_feed_button_background_color'];
	$feed_button_text_color = $eif_settings['eif_feed_button_text_color'];
	$feed_follow_button_text = $eif_settings['eif_feed_follow_button_text'];
	$feed_load_more_button_status = $eif_settings['eif_feed_load_more_button_status'];
	$feed_load_more_button_back_color = $eif_settings['eif_feed_load_more_button_back_color'];
	$feed_load_more_button_text_color = $eif_settings['eif_feed_load_more_button_text_color'];
	$feed_load_more_button_text = $eif_settings['eif_feed_load_more_button_text'];
	
	
	
	// pass attributes with short code
	
	$number_of_columns = $atts['cols'];
	
	$feed_width = $atts['width'];
	$feed_width_unit = $atts['widthunit'];
	$feed_height = $atts['height'];
	$feed_height_unit = $atts['heightunit'];
	$feed_background_color = $atts['backgroundcolor'];
	
	$feed_image_resolution = $atts['resolution'];
	$feed_image_padding_unit = $atts['imagepaddingunit'];
	$feed_image_padding_size  = $atts['imagepadding'];
	$id = $atts['id'];
	
	$all_settings[$id]=$eif_options;
	
	
	/* ---------- enqueue with test server -------------*/
	
	 wp_register_script('eif-shortcode-front-js',EIF__PLUGIN_URL.'lib/js/easy-feed.js',array('jquery'));
     wp_localize_script('eif-shortcode-front-js','eifsetting',$all_settings);
     wp_enqueue_script('eif-shortcode-front-js');
    wp_enqueue_style('eifstyle',EIF__PLUGIN_URL.'lib/eif_style.css');
	 //wp_enqueue_style('eif-dialogbox-css',plugins_url('lib/style/stylemodal.css', __FILE__));
	 //wp_enqueue_script('eif-jquery-dialog-js-leanmodal',plugins_url('lib/js/jquery-popup.min.js',  __FILE__));
	//font-awesome
	wp_enqueue_style('eif_fontawesome','//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');
	$lightboxstatus = $atts['showlightbox'];	 
	 if($lightboxstatus == 'yes'){
	 //add_action( 'wp_head', 'eif_lightbox_js' );
			//function eif_lightbox_js() {
	// jquery light-box css and js
			//wp_enqueue_script('eif-jquery-ligt-box',plugins_url('lib/js/light-box/jquery-1.11.0.min.js',  __FILE__));
			 wp_enqueue_script('eif-jquery-ligt-box-min',plugins_url('lib/js/light-box/lightbox.min.js',  __FILE__));
			 wp_enqueue_style('eif-light-box-css',plugins_url('lib/style/light-box-css/lightbox.css', __FILE__));
   // moment js file
			wp_enqueue_script('eif-jquery-moment-js',plugins_url('lib/js/moment.js',  __FILE__));
	 //}
	 }
	
	
	
	
	// pass number of columns with url parameters
	if (isset($_GET['cols']))
		{
		$number_of_columns = $_GET['cols'];
		}
		
	if(isset($_GET['img_padding']))
	{
	$feed_image_padding_size = $_GET['img_padding'];
	}
	
	if(isset($_GET['img_padding_unit']))
	{
	$feed_image_padding_unit = $_GET['img_padding_unit'];
	}
								
	if($feed_width_unit=='px'||$feed_height_unit=='px')
	{	
				
				if($number_of_columns==1)
				{
				$contentwrapper = '<div id="eif_feed" class="eif eif-col-1 eif_fixed_width load'.$id.'"';
				}
				else if($number_of_columns==2)
				{
				$contentwrapper = '<div id="eif_feed" class="eif eif-col-2 eif_fixed_width load'.$id.'"';
				}
				else if($number_of_columns==3)
				{
				$contentwrapper = '<div id="eif_feed" class="eif eif-col-3 eif_fixed_width load'.$id.'"';
				}
				else if($number_of_columns==4)
				{
				$contentwrapper = '<div id="eif_feed" class="eif eif-col-4 eif_fixed_width load'.$id.'"';
				}
				else if($number_of_columns==5)
				{
				$contentwrapper = '<div id="eif_feed" class="eif eif-col-5 eif_fixed_width load'.$id.'"';
				}
				else if($number_of_columns==6)
				{
				$contentwrapper = '<div id="eif_feed" class="eif eif-col-6 eif_fixed_width load'.$id.'"';
				}
				else if($number_of_columns==7)
				{
				$contentwrapper = '<div id="eif_feed" class="eif eif-col-7 eif_fixed_width load'.$id.'"';
				}
				else if($number_of_columns==8)
				{
				$contentwrapper = '<div id="eif_feed" class="eif eif-col-8 eif_fixed_width load'.$id.'"';
				}
				else if($number_of_columns==9)
				{
				$contentwrapper = '<div id="eif_feed" class="eif eif-col-9 eif_fixed_width load'.$id.'"';
				}
				else if($number_of_columns==10)
				{
				$contentwrapper = '<div id="eif_feed" class="eif eif-col-10 eif_fixed_width load'.$id.'"';
				}
	}
	else
	{
	//print_r($number_of_columns);
				if($number_of_columns==1)
				{
				$contentwrapper = '<div id="eif_feed" class="eif eif-col-1 load'.$id.'"';
				}
				else if($number_of_columns==2)
				{
				$contentwrapper = '<div id="eif_feed" class="eif eif-col-2 load'.$id.'"';
				}
				else if($number_of_columns==3)
				{
				$contentwrapper = '<div id="eif_feed" class="eif eif-col-3 load'.$id.'"';
				}
				else if($number_of_columns==4)
				{
				$contentwrapper = '<div id="eif_feed" class="eif eif-col-4 load'.$id.'"';
				}
				else if($number_of_columns==5)
				{
				$contentwrapper = '<div id="eif_feed" class="eif eif-col-5 load'.$id.'"';
				}
				else if($number_of_columns==6)
				{
				$contentwrapper = '<div id="eif_feed" class="eif eif-col-6 load'.$id.'"';
				}
				else if($number_of_columns==7)
				{
				$contentwrapper = '<div id="eif_feed" class="eif eif-col-7 load'.$id.'"';
				}
				else if($number_of_columns==8)
				{
				$contentwrapper = '<div id="eif_feed" class="eif eif-col-8 load'.$id.'"';
				}
				else if($number_of_columns==9)
				{
				$contentwrapper = '<div id="eif_feed" class="eif eif-col-9 load'.$id.'"';
				}
				else if($number_of_columns==10)
				{
				$contentwrapper = '<div id="eif_feed" class="eif eif-col-10 load'.$id.'"';
				}
	}
  if($eif_settings['eif_feed_width_unit'] == 'px') $contentwrapper .= " eif_fixed_width";
  if($eif_settings['eif_feed_height_unit'] == 'px') $contentwrapper .= " eif_fixed_height";
  $contentwrapper .= '" style="width:'.$feed_width.''.$feed_width_unit.';';
  $contentwrapper .= 'height:'.$feed_height.''.$feed_height_unit.';';
  $contentwrapper .= 'background-color:'.$feed_background_color.';';
  $contentwrapper .= '"><div id="eif_images" class="eif_images'.$id.'" style="padding:'.$feed_image_padding_size.''.$feed_image_padding_unit.';"></div></div>';
   $i++;
  return $contentwrapper;

}

add_shortcode( 'easyinstagramfeed', 'eif_shortcode' );

//function eif_shortcode_script(){ wp_die();
    // enqueue script for shortcode which display the feed
 //   wp_enqueue_script('eif-shortcode',EIF__PLUGIN_URL.'lib/js/easy-feed.js',array('jquery'));
//}

?>