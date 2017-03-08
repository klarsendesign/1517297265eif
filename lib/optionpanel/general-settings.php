<?php 
   $eif_token_url = "https://instagram.com/oauth/authorize/?client_id=";
   $eif_token_url .= '44a5744739304a48af362318108030bc';
   $eif_token_url .= "&scope=basic+public_content&redirect_uri=http://webriti.com/easy-instagram-feed/eiflite/";
   $eif_token_url .= "?return_uri=".admin_url('admin.php?page=easy-instagram-feed');
   $eif_token_url .= "&response_type=token";

if(isset($_POST['submit1'])){
	$eif_hastag = "";
	$eif_userids = "";
	$eif_useridhashtag = "";
	
    $eif_settings = get_option('eif_settings');
   //print_r($eif_settings);
    // create array of multiple ids
    //$eif_userids = explode(",",$_POST['eif_user_id']);
    
    // $eif_settings = array(
    //                 'eif_access_token' => $_POST['eif_access_token'],
    //                 'eif_user_id' => $eif_userids,
    //     );
	
	if(isset($_POST['eif_filter_type_userid_hashtag'])){$FilterSerchUserIdEnable = "yes";} else {$FilterSerchUserIdEnable = "no";}
	if(isset($_POST['eif_filter_type_comman_hashtag'])){$FilterCommanHashtagEnable = "yes";} else {$FilterCommanHashtagEnable = "no";}
	

	$selected_radio = $_POST['searchtype'];
    //print_r($selected_radio);
	if($selected_radio == "user")
	{
		$eif_userids = $_POST['eif_user_id'];
		$eif_useridhashtag = $_POST['eif_FilterSerchUserIdHashtag'];
		$eif_useridhashtag = explode(",",$eif_useridhashtag);
		$eif_userids = explode(",",$eif_userids);
	}
	else
	{
		$eif_hastag = $_POST['eif_hastag'];
		$eif_hastag = explode(",",$eif_hastag);
	}
	
    $eif_settings['eif_access_token'] = $_POST['eif_access_token'];
    $eif_settings['eif_user_id'] = $eif_userids;
	$eif_settings['eif_hastag'] = $eif_hastag;
	$eif_settings['eif_serach_type'] = $selected_radio;
    $eif_settings['eif_filter_userid_hashtag_type'] = $FilterSerchUserIdEnable;
	$eif_settings['eif_filter_comman_hashtag_type'] = $FilterCommanHashtagEnable;
	$eif_settings['eif_Filter_Serch_UserId_Hashtag'] = $eif_useridhashtag;
	$eif_settings['eif_filter_feed_type'] = $_POST['eif_filter_feed_type'];
	
    // update options
    update_option('eif_settings',$eif_settings);
}?>
<form  name="eif_form" method="post"><?php $eif_settings = get_option('eif_settings'); //wp_die(print_r($eif_settings)); ?>
<h3>Authorize plugin to get access token.</h3>
<div class="eif_auth_button">
    <a href="<?php echo $eif_token_url;?>" class="button button-primary">Login to your account and authorize the app.</a>
</div>
<table class="form-table">
        <tr valign="top">
        <th scope="row"><label>Your Access Token </label></th>
		<?php if($eif_settings['eif_serach_type'] == 'user') { ?>
        <td><input type="text" id="eif_access_token"  name="eif_access_token" value="<?php esc_attr_e($eif_settings['eif_access_token']); ?>" class="eif_token" /></td>
		<?php } else {?>
		<td><input type="text" id="eif_access_token_with_hastge"  name="eif_access_token" value="<?php esc_attr_e($eif_settings['eif_access_token']); ?>" class="eif_token"/></td>
	   <?php }?>
	   </tr>
        <tr valign="top">
        <th scope="row"><label>User Id</label></th>
        <td><input class="radio" type="radio" name="searchtype" value="user" <?php if($eif_settings['eif_serach_type']=='user'){echo 'checked';}?>><input type="text" id="eif_user_id" name="eif_user_id" value="<?php if($eif_settings['eif_serach_type'] == "user"){ esc_attr_e(implode(',',$eif_settings['eif_user_id'])); }else {}?>" />
        <span style="font-style:Italic;font-style:italic;font-size:12px;"> Seperate multiple Ids using commas. Click the link to know users id <a href="http://jelled.com/instagram/lookup-user-id" target="_blank">link</a>  </span>
		<br>
		<span id="userhashtagsection"><input type="checkbox" name="eif_filter_type_userid_hashtag" value="yes" <?php if($eif_settings['eif_filter_userid_hashtag_type']=='yes'){echo 'checked';}?>>
		Filter user feed with the specific hashtags : <input type="text" id="eif_FilterSerchUserIdHashtag" name="eif_FilterSerchUserIdHashtag" value="<?php if($eif_settings['eif_filter_userid_hashtag_type'] == 'yes') { if($eif_settings['eif_Filter_Serch_UserId_Hashtag'] != '') {esc_attr_e(implode(',',$eif_settings['eif_Filter_Serch_UserId_Hashtag'])); }else {}}?>" /><span style="font-style:Italic;font-style:italic;font-size:12px;"> Seperate multiple Hashtag using commas </span>
		</span>
		</td>
	   </tr>
		<tr valign="top">
        <th scope="row"><label>Hastag</label></th>
			<td><input class="radio" type="radio" name="searchtype" value="hastag" <?php if($eif_settings['eif_serach_type']=='hastag'){echo 'checked';}?>><input type="text" id="eif_hastag" name="eif_hastag" value="<?php if($eif_settings['eif_serach_type'] == "hastag") { esc_attr_e(implode(',',$eif_settings['eif_hastag'])); }else {}?>" />
				<span style="font-style:Italic;font-style:italic;font-size:12px;"> Seperate multiple Hastag using commas.<br><strong>Note:</strong> Please Enter only hashtag name no need to use '#' symbol </span>
				<br>
			</td>
        </tr>
		<tr valign="top">
		<th scope="row"><label>Display comman</label></th>
		<td><input  type="checkbox" name="eif_filter_type_comman_hashtag" value="yes" <?php if($eif_settings['eif_filter_comman_hashtag_type'] == 'yes'){echo 'checked';}?>> &nbsp; Show comman feeds tagged by multiple hashtags.
		</td>
		</tr>
		
		<tr valign="top">
		<th scope="row"><label>Select type of media want to show in feeds</label></th>
		<td>
			<select id="eif_filter_feed_type" name="eif_filter_feed_type">
				<option value="all" <?php if($eif_settings['eif_filter_feed_type']=='all'){ echo 'selected'; } ?>>All</option>
				<option value="image" <?php if($eif_settings['eif_filter_feed_type']=='image'){ echo 'selected'; } ?>>Image</option>
				<option value="video" <?php if($eif_settings['eif_filter_feed_type']=='video'){ echo 'selected'; } ?>>Video</option>
			</select>
			</td>
		</tr>
</table>
    <input type="submit" name="submit1" value="Save" class="button button-primary"/>
</form>

