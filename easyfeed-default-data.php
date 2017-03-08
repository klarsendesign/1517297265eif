<?php $eif_settings = array();

$eif_settings = array(
    'eif_user_id' => '',
    'eif_access_token' => '1591885187.44a5744.87e84a6f76394d60a2f19f8d9b53582a',
    'eif_feed_width' => '100',
	'eif_hastag'=> '',
	'eif_serach_type' => '',
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
	'eif_likes_comments_color' =>'#dd9494',
	'eif_filter_userid_hashtag_type' => '',
	'eif_filter_comman_hashtag_type' => '',
	'eif_Filter_Serch_UserId_Hashtag' => '',
	'eif_filter_feed_type' => 'all'
    );


// add the default settings value to the databsae
$default_settings  = wp_parse_args(get_option('eif_settings'),$eif_settings);
update_option('eif_settings',$default_settings);
?>