var all_posts='';
var img_sort='';
var image_limit='';
var image_resolution='';
var user_name_link = '';
var UserArray = [],UserArraycontent = [],UserArraywidget = [],UserArraywithwidget = [],UserArraywithcontent = [],UserArraymore = [];
var i=0;
var mk = 0;
var mk1 = 0;
var test_url=[];
var showChar ='';
var classes = '';
var number_of_user_in_more = '',number_of_user_content = '',number_of_user_in_widget = '',number_of_user_with_content = '',number_of_user_with_widget = '',number_of_user_widget = '';
var user_lenght = '';

$ = jQuery;
$(document).ready(function($){
$.each( eifsetting, function( index, eifsettings ){
	

//var user_ids = eifsettings.eif_hastag;
var hashtagwithspecificusername_withserchtypeuser = eifsettings.eif_filter_userid_hashtag_enable;
var FilterHashtag  = eifsettings.eif_filter_userid_hashtag;						
var comman_display = eifsettings.eif_filter_comman_hashtag_enable;
var hashtagwithspecificusername_withsearchtypehashtag = 'no';
var media_type = eifsettings.mediatype;
	
var id  = eifsettings.id;	
		var search_type = eifsettings.eif_serach_type;
		
		if(search_type !='user')
		{
			var user_ids = eifsettings.eif_hastag;
			user_ids = user_ids.toString();
			user_ids = user_ids.split(',');
			var search_url = 'tags';
			
			function containsAll(needles, haystack){ 
					for(var i = 0 , len = needles.length; i < len; i++){
					if($.inArray(needles[i].toLowerCase(), haystack) == -1) return false;
					}
					return true;
					}
			
		}
		else
		{
			var search_url =  'users';
			var user_ids = eifsettings.eif_user_id;
		
		user_ids = user_ids.toString();
		 user_ids = user_ids.split(',');
		 
		 function containsAll(needles, haystack){ 
			for(var i = 0 , len = needles.length; i < len; i++){
			if($.inArray('#'+needles[i].toLowerCase(), haystack) == -1) return false;
			}
			return true;
			}
		}
	

    var token = eifsettings.eif_access_token;
	
	
	if(user_ids == ''|| token == '')
	{
		var msgdiv = document.createElement("div"); 
		var t = document.createTextNode("you forget to specify token or user id");
		msgdiv.appendChild(t); 
		msgdiv.setAttribute('id','useridmsg');
		//msgdiv.setAttribute('class','errormsg');
		$("#eif_feed").append(msgdiv);
		
	}
	img_sort = eifsettings.eif_feed_image_sorting;
	image_limit = eifsettings.eif_feed_number_of_images;
	image_resolution = eifsettings.resolution;
	
	// Follow me on instagram button settings variable 
	var show = eifsettings.eif_feed_show_button_status;
	show = show.toLowerCase();
	var follow_btn_back_color = eifsettings.eif_feed_button_background_color;
	var follow_btn_text_color = eifsettings.eif_feed_button_text_color;
	var follow_btn_text  = eifsettings.eif_feed_follow_button_text;
	
	// Load more button settings variable
	var load_show = eifsettings.eif_feed_load_more_button_status;
	load_show = load_show.toLowerCase();
	var load_btn_back_color = eifsettings.eif_feed_load_more_button_back_color;
	var load_btn_text_color = eifsettings.eif_feed_load_more_button_text_color;
	var load_btn_text = eifsettings.eif_feed_load_more_button_text;
	
	// feed header information 
	var feed_header=eifsettings.eif_feed_header_status;
	var header_text_color = eifsettings.eif_feed_header_text_color;
	// light-box variable
	var lightbox_status = eifsettings.eif_disable_light_box;
	//caption settings variable
	var caption_status = eifsettings.eif_caption_status;
	var catiopn_text_length = eifsettings.eif_caption_text_length;
	var caption_text_color = eifsettings.eif_caption_text_color;
	var caption_text_size = eifsettings.eif_caption_text_size;
	
	// Meta settings
	var like_status = eifsettings.eif_show_likes;
	var comments_status = eifsettings.eif_show_comments;
	var likes_comments_color  = eifsettings.eif_likes_comments_color;
	
	if(comments_status!='yes')
	{
	var comments_display_css = 'none';
	}else
	{
	 var comments_display_css = 'inline';
	}
	
	if(like_status!='yes')
	{
	var likes_display_css = 'none';
	}else
	{
	var likes_display_css = 'inline';
	}
	
	
	
	if(caption_status!='yes')
	{
	var caption_css =  'none';
	}else
	{
	var caption_css =  'inline';
	}
	showChar = catiopn_text_length;
	
	var number_of_user = user_ids.length;
	user_lenght  = number_of_user;
	var count_hide = 0;
	
    $.each(user_ids,function(i,val){
	var url = "https://api.instagram.com/v1/"+ search_url +"/"+ val +"/media/recent?access_token="+ token +"&count="+image_limit+"";
	displayImgs(url);
	function displayImgs(url) {
        $.ajax({
        method: "GET",
		 url: url,
		dataType: "jsonp",
        success: function(data){
        var posts = data.data;
		
		if(posts != undefined)
		{
			
			test_url = data.pagination.next_url;
			var posts_length = posts.length;
		
		// create Load more button
		if(i==0)
		{
			if(load_show == 'yes')
			{
				var btn = document.createElement("BUTTON"); 
				var t = document.createTextNode(load_btn_text);
				btn.appendChild(t); 
				btn.setAttribute('id','Load_update'+id);
				btn.setAttribute('name','Load_update');
				btn.setAttribute('class','load_more');
				btn.setAttribute('data-id',id);
				btn.setAttribute('style','background:'+load_btn_back_color+'; float:left;color:'+load_btn_text_color+';border-radius: 5px;padding: 10px 18px 10px;margin-bottom: 10px;margin-left: 10px;font-size: 11px;line-height: 1.5;font-family: "Noto Serif", serif;');
				$(".load"+id).append(btn);
			}
		
				if(search_url!='tags')
				{
				
						// create follow me button 
						if(show == 'yes')
						{
							var showbtn = document.createElement("BUTTON");
							var stn = document.createTextNode(follow_btn_text);
							showbtn.appendChild(stn);
							showbtn.setAttribute('id','show_button');
							showbtn.setAttribute('name','show_button');
							showbtn.setAttribute('onclick','follow_butn()');
							showbtn.setAttribute('style','border-radius: 5px;margin-left: 11px;margin-bottom: 10px;padding: 10px 18px 10px;color:'+follow_btn_text_color+';background-color:'+follow_btn_back_color+';font-size: 11px;line-height: 1.5;font-family: "Noto Serif", serif;');
							$(".load"+id).append(showbtn);	
						}
						// create feed header
						if(feed_header=="yes")
						{
								$.ajax({
												type: "GET",
												dataType: "jsonp",
												cache: false,
												url: "https://api.instagram.com/v1/users/"+val+"/?access_token="+token+"",
												success: function (user) {
																			var header_user_name  = user.data.username;
																			var header_user_image = user.data.profile_picture;
																			var header_user_bio = user.data.bio;
																		
																			$("<div class='eif_user_header'style='padding: 10px; padding-bottom: 0;'><a href='http://instagram.com/"+header_user_name+"' target='_blank' title='@"+header_user_name+"' class='eif_header_link'><div class='eif_header_text'style='color:"+header_text_color+";'><h3>@"+header_user_name+"</h3><p>"+header_user_bio+"</p></div><div class='eif_header_img'><img src='"+header_user_image+"' alt='"+header_user_name+"' width='50' height='50'></div></a></div>").prependTo(".load"+id);
															
																		}
											});
							
							
						
						}
				}		
		}
		
		if(test_url != undefined)
		{
			 if(id == 1){
					UserArraycontent[val] = test_url;
				 }else if(id == 2){
					UserArraywidget[val] = test_url;
				 }else if(id == 3){
					UserArraywithwidget[val] = test_url;
				 }else if(id == 4){
					UserArraywithcontent[val] = test_url;
				}else if(id == 5){
					UserArraymore[val] = test_url;
				}else{
				UserArray[val] = test_url;
				}
		}
		else
		{
				count_hide++;
		}
		if(count_hide == number_of_user)
		{
		//document.getElementById('Load_update').style.display = 'none';
		//document.getElementById('Load_update').style.visibility = 'hidden';
		
		$('#Load_update'+id).css("visibility", "hidden");
		}
	// check random condition and call function for random images 
			if(img_sort=='random')
			{
			shuffle(posts);
			}
			all_posts=posts;
		
			$.each(posts, function(index){
				
				if(this.type == media_type ){
					
					if(hashtagwithspecificusername_withserchtypeuser == 'yes' && comman_display != 'yes'){
				
			
					var search_type = eifsettings.eif_serach_type;
					if(search_type == 'user')
					{
							var FilterHashtag  = eifsettings.eif_filter_userid_hashtag;	
							
								if (FilterHashtag instanceof Array) {} else {
								FilterHashtag = FilterHashtag.split(',');
								}
								
						
							var caption_arrytext ;
							var caption_arry = [];
							var hashtag_seachval = [];
							caption_arrytext = this.caption.text;
							caption_arrytext = caption_arrytext.toLowerCase();
							caption_arry = caption_arrytext.split(" ");
							

							for(var i = 0; i<= FilterHashtag.length; i++){
									if(jQuery.inArray('#'+FilterHashtag[i], caption_arry) !== -1){
									
										var result = true;
										break;
									} else {
										
										var result = false;
									}

							}	
							
							
					}
				}// end of get hashtag feed with sepecific username 
			
			
						// start comman hashtag
			
						if(comman_display =='yes')
						{
							
							
						if(hashtagwithspecificusername_withserchtypeuser == "yes"){
							
							
							
							var FilterHashtag  = eifsettings.eif_filter_userid_hashtag;	
							
								FilterHashtag = FilterHashtag.toString();
									FilterHashtag = FilterHashtag.split(',');
									
									
									var caption_arrytext ;
									
								var caption_arry = [];
								var hashtag_seachval = [];
								caption_arrytext = this.caption.text;
								caption_arrytext = caption_arrytext.toLowerCase();
								caption_arry = caption_arrytext.split(" ");
								
								var result =containsAll(FilterHashtag, caption_arry);
								
							
						}else{
								
								var user_ids = eifsettings.eif_hastag;
							
								user_ids = user_ids.toString();
									user_ids = user_ids.split(',');
									
									
									var caption_arrytext ;
									
								var caption_arry = [];
								var hashtag_seachval = [];
								caption_arrytext = this.caption.text;
								caption_arrytext = caption_arrytext.toLowerCase();
								caption_arry = caption_arrytext.split(" ");
								
								var result =containsAll(user_ids, caption_arry);
								//console.log(user_ids);
									
						}									
							

						} //  End of test commn hashtag
						
						
						
						
						
						if(result == false){
							mk = mk+1;
						}
						
							
							if(number_of_user > 1)
							{
								var image_limit1 = image_limit*number_of_user
							}else{
								var image_limit1 = image_limit;
							}
							
							if(mk == image_limit1){
							var msgdiv = document.createElement("div"); 
						var t1 = document.createTextNode("No feed matched given criteria.");
						msgdiv.appendChild(t1); 
						msgdiv.setAttribute('id','feedshowmsg');
						msgdiv.setAttribute('style','color:red;font-family: "Noto Serif", serif;');
						$("#eif_images").append(msgdiv);
						}
						
			
				// run code if no any filtring apply 
				if(hashtagwithspecificusername_withserchtypeuser == 'no' && comman_display == 'no' || result == true )
				{
					
		
							if(image_resolution== 'low_resolution')
							{
							var post_image_src = this.images.low_resolution.url;
							}
							else if(image_resolution== 'thumbnail')
							{
							var post_image_src = this.images.thumbnail.url;
							}
							else if(image_resolution== 'standard_resolution')
							{
							var post_image_src = this.images.standard_resolution.url;
							}
							
							var user_name  = this.user.username;
							user_name_link = user_name;
							var user_image = this.user.profile_picture;
							var post_image_link = this.link;
							var post_image_created_time = this.created_time;
							post_image_src = post_image_src.replace(/.*?:\/\//g, "//");
							// create protocol relative instagram page link url
							post_image_link = post_image_link.replace(/.*?:\/\//g, "//");
							// header information 
							
							var media_caption = this.caption;
							 if(media_caption!=null)
							{
								var media_caption_text = this.caption.text;
							}
							else
							{
								media_caption_text = '';
							}
							
							var c = media_caption_text.substr(0, showChar);
							var h = media_caption_text.substr(showChar, media_caption_text.length - showChar);
							var likes_count  = this.likes.count;
							var comments_count = this.comments.count;
							
							
							var post_image_type = this.type;
							
							var classes = get_media_classes(this.tags);
							
							if(post_image_type == 'video')
							{
								if(lightbox_status == 'yes')
									{
									
										var feed_date  = this.created_time;
										feed_date =  feed_date * 1000;
										feed_date = moment(feed_date).format('DD MMM');
										
										var post_video_type_link = this.videos.standard_resolution.url;
										
										var wrapper='<div id="eif_'+ this.id +'" class="eif_item '+classes+'"><div class="image-container"><img src="' + post_image_src + '" /><div class="after"><p class="eif_username"><a href="http://instagram.com/'+user_name_link+'" target="_blank">'+user_name_link+'</a></p><a class="eif_feed_link" href='+post_image_link+' target="_blank" title="Instagram"><i class="fa fa-instagram"></i></a><p class="eif_date">'+feed_date+'</p><a  onclick="put_val(this)" href="'+ post_image_src +'" id="'+post_image_link+'" feed_video="'+post_video_type_link+'"  data-lightbox="eif_media" data-title="'+media_caption_text+'" user_image="'+user_image+'" user_name="'+user_name_link+'" class="eif_lightbox_link"><i class="fa fa-play"></i></a></div></div>';
										
										wrapper +='<div class="eif_info"><span class="eif_caption" style=" font-size: '+caption_text_size+'px; color:'+caption_text_color+';display:'+caption_css+';">'+c+'</span><span class="eif_caption'+ this.id +' eif_caption " style=" font-size: '+caption_text_size+'px; color:'+caption_text_color+';">'+h+'</span><span class="eif_expand'+this.id +'" > <a href="#"><span id="'+this.id +'" class="eif_more" style="display:'+caption_css+';">...</span></a></span><div class="eif_meta" style="color:'+likes_comments_color+'; "><span class="eif_likes" style="font-size: 11px; display:'+likes_display_css+';"><i class="fa fa-heart" style="font-size: 11px;"></i>'+likes_count+'</span><span class="eif_comments" style="font-size: 11px; display:'+comments_display_css+';"><i class="fa fa-comment" style="font-size: 11px;"></i>'+comments_count+'</span></div></div>';
										wrapper += '</div>';
									}else
										{
										
										var wrapper='<div id="eif_'+ this.id +'" class="eif_item '+classes+'"><div class="eif_photo_wrap"><i class="fa fa-play met"></i></div><a href="'+ post_image_link +'" target="_blank"><img src="' + post_image_src + '"/></a>';
										wrapper +='<div class="eif_info"><span class="eif_caption" style="  font-size: '+caption_text_size+'px; color:'+caption_text_color+';display:'+caption_css+';">'+c+'</span><span class="eif_caption'+ this.id +' eif_caption" style=" font-size: '+caption_text_size+'px; color:'+caption_text_color+';">'+h+'</span><span class="eif_expand'+this.id +'"> <a href="#"><span id="'+ this.id +'" class="eif_more" style="display:'+caption_css+';">...</span></a></span><div class="eif_meta" style="color:'+likes_comments_color+';"><span class="eif_likes" style="font-size: 11px;  display:'+likes_display_css+';"><i class="fa fa-heart" style="font-size: 11px;"></i>'+likes_count+'</span><span class="eif_comments" style="font-size: 11px; display:'+comments_display_css+'; "><i class="fa fa-comment" style="font-size: 11px;"></i>'+comments_count+'</span></div></div>';
										wrapper += '</div>';
										
										}
							 
							}
							else
							{
								if(lightbox_status == 'yes')
								{
									var feed_date  = this.created_time;
									feed_date =  feed_date * 1000;
									feed_date = moment(feed_date).format('DD MMM');
									
									var wrapper='<div id="eif_'+ this.id +'" class="eif_item '+classes+'"><div class="image-container"><img src="' + post_image_src + '" /><div class="after"><p><a class="eif_username" href="http://instagram.com/'+user_name_link+'" target="_blank">'+user_name_link+'</a></p><a class="eif_feed_link" href='+post_image_link+' target="_blank" title="Instagram"><i class="fa fa-instagram"></i></a><p class="eif_date">'+feed_date+'</p><a onclick="put_val(this)" href="'+ post_image_src +'" id="'+post_image_link+'"  data-lightbox="eif_media" data-title="'+media_caption_text+'" user_image="'+user_image+'" user_name="'+user_name_link+'" class="eif_lightbox_link"><i class="fa fa-arrows-alt"></i></a></div></div>';
									
									wrapper +='<div class="eif_info"><span class="eif_caption" style=" font-size: '+caption_text_size+'px; color:'+caption_text_color+';display:'+caption_css+';">'+c+'</span><span class="eif_caption'+ this.id +' eif_caption " style="  font-size: '+caption_text_size+'px; color:'+caption_text_color+';">'+h+'</span><span class="eif_expand'+this.id +'" > <a href="#"><span id="'+this.id +'" class="eif_more" style="display:'+caption_css+';">...</span></a></span><div class="eif_meta" style="color:'+likes_comments_color+';"><span class="eif_likes" style="font-size: 11px;  display:'+likes_display_css+';"><i class="fa fa-heart" style="font-size: 11px;"></i>'+likes_count+'</span><span class="eif_comments" style="font-size: 11px; display:'+comments_display_css+';"><i class="fa fa-comment" style="font-size: 11px;"></i>'+comments_count+'</span></div></div>';
									wrapper += '</div>';
								}else
								{
									var wrapper='<div id="eif_'+ this.id +'" class="eif_item '+classes+'"><a href="'+ post_image_link +'" target="_blank"><img src="' + post_image_src + '"/></a>';
									wrapper +='<div class="eif_info"><span class="eif_caption" style=" font-size: '+caption_text_size+'px; color:'+caption_text_color+'; display:'+caption_css+';">'+c+'</span><span class="eif_caption'+ this.id +' eif_caption " style=" font-size: '+caption_text_size+'px; color:'+caption_text_color+';">'+h+'</span><span class="eif_expand'+this.id +'"> <a href="#"><span id="'+ this.id +'" class="eif_more" style="display:'+caption_css+';">...</span></a></span><div class="eif_meta" style="color:'+likes_comments_color+'; "><span class="eif_likes" style="font-size: 11px;  display:'+likes_display_css+';"><i class="fa fa-heart" style="font-size: 11px;"></i>'+likes_count+'</span><span class="eif_comments" style="font-size: 11px; display:'+comments_display_css+';"><i class="fa fa-comment" style="font-size: 11px;"></i>'+comments_count+'</span></div></div>';
									wrapper += '</div>';
								}
							}
							
							$('.eif_images'+id).append(wrapper);
							
							if(id == 1){
						 number_of_user_content = Object.keys(UserArraycontent).length;
						 }else if(id == 2){
						 number_of_user_in_widget = Object.keys(UserArraywidget).length;
						 }else if(id == 3){
						 number_of_user_with_content = Object.keys(UserArraywithwidget).length;
						 } else if(id == 4){
						 number_of_user_with_widget = Object.keys(UserArraywithcontent).length;
						 } else if(id == 5){
						 number_of_user_widget = Object.keys(UserArraymore).length;
						 }else{
						 number_of_user_in_more = Object.keys(UserArray).length;
						 }
						
							
							//display none info div
							 var div_id = $(this).attr('id');
							 $(".eif_caption"+div_id).toggleClass("expand");
							 
							 if(media_caption_text.length<=showChar)
							 {
								$(".eif_expand"+div_id).toggleClass("expand");
							 }
			 
				} 
					
				}
				else if(media_type == 'all')
				{
					if(hashtagwithspecificusername_withserchtypeuser == 'yes' && comman_display != 'yes'){
				
			
					var search_type = eifsettings.eif_serach_type;
					if(search_type == 'user')
					{
							var FilterHashtag  = eifsettings.eif_filter_userid_hashtag;	
							
								if (FilterHashtag instanceof Array) {} else {
								FilterHashtag = FilterHashtag.split(',');
								}
								
						
							var caption_arrytext ;
							var caption_arry = [];
							var hashtag_seachval = [];
							caption_arrytext = this.caption.text;
							caption_arrytext = caption_arrytext.toLowerCase();
							caption_arry = caption_arrytext.split(" ");
							

							for(var i = 0; i<= FilterHashtag.length; i++){
									if(jQuery.inArray('#'+FilterHashtag[i], caption_arry) !== -1){
									
										var result = true;
										break;
									} else {
										
										var result = false;
									}

							}	
							
							
					}
				}// end of get hashtag feed with sepecific username 
			
			
						// start comman hashtag
			
						if(comman_display =='yes')
						{
							
							
						if(hashtagwithspecificusername_withserchtypeuser == "yes"){
							
							
							
							var FilterHashtag  = eifsettings.eif_filter_userid_hashtag;	
							
								FilterHashtag = FilterHashtag.toString();
									FilterHashtag = FilterHashtag.split(',');
									
									
									var caption_arrytext ;
									
								var caption_arry = [];
								var hashtag_seachval = [];
								caption_arrytext = this.caption.text;
								caption_arrytext = caption_arrytext.toLowerCase();
								caption_arry = caption_arrytext.split(" ");
								
								var result =containsAll(FilterHashtag, caption_arry);
								
							
						}else{
								
								var user_ids = eifsettings.eif_hastag;
							
								user_ids = user_ids.toString();
									user_ids = user_ids.split(',');
									
									
									var caption_arrytext ;
									
								var caption_arry = [];
								var hashtag_seachval = [];
								caption_arrytext = this.caption.text;
								caption_arrytext = caption_arrytext.toLowerCase();
								caption_arry = caption_arrytext.split(" ");
								
								var result =containsAll(user_ids, caption_arry);
								//console.log(user_ids);
									
						}									
							

						} //  End of test commn hashtag
						
						
						
						
						
						if(result == false){
							mk = mk+1;
						}
						
							
							if(number_of_user > 1)
							{
								var image_limit1 = image_limit*number_of_user
							}else{
								var image_limit1 = image_limit;
							}
							
							if(mk == image_limit1){
							var msgdiv = document.createElement("div"); 
						var t1 = document.createTextNode("No feed matched given criteria.");
						msgdiv.appendChild(t1); 
						msgdiv.setAttribute('id','feedshowmsg');
						msgdiv.setAttribute('style','color:red;font-family: "Noto Serif", serif;');
						$("#eif_images").append(msgdiv);
						}
						
			
				// run code if no any filtring apply 
				if(hashtagwithspecificusername_withserchtypeuser == 'no' && comman_display == 'no' || result == true )
				{
					
		
							if(image_resolution== 'low_resolution')
							{
							var post_image_src = this.images.low_resolution.url;
							}
							else if(image_resolution== 'thumbnail')
							{
							var post_image_src = this.images.thumbnail.url;
							}
							else if(image_resolution== 'standard_resolution')
							{
							var post_image_src = this.images.standard_resolution.url;
							}
							
							var user_name  = this.user.username;
							user_name_link = user_name;
							var user_image = this.user.profile_picture;
							var post_image_link = this.link;
							var post_image_created_time = this.created_time;
							post_image_src = post_image_src.replace(/.*?:\/\//g, "//");
							// create protocol relative instagram page link url
							post_image_link = post_image_link.replace(/.*?:\/\//g, "//");
							// header information 
							
							var media_caption = this.caption;
							 if(media_caption!=null)
							{
								var media_caption_text = this.caption.text;
							}
							else
							{
								media_caption_text = '';
							}
							
							var c = media_caption_text.substr(0, showChar);
							var h = media_caption_text.substr(showChar, media_caption_text.length - showChar);
							var likes_count  = this.likes.count;
							var comments_count = this.comments.count;
							
							
							var post_image_type = this.type;
							
							var classes = get_media_classes(this.tags);
							
							if(post_image_type == 'video')
							{
								if(lightbox_status == 'yes')
									{
									
										var feed_date  = this.created_time;
										feed_date =  feed_date * 1000;
										feed_date = moment(feed_date).format('DD MMM');
										
										var post_video_type_link = this.videos.standard_resolution.url;
										
										var wrapper='<div id="eif_'+ this.id +'" class="eif_item '+classes+'"><div class="image-container"><img src="' + post_image_src + '" /><div class="after"><p class="eif_username"><a href="http://instagram.com/'+user_name_link+'" target="_blank">'+user_name_link+'</a></p><a class="eif_feed_link" href='+post_image_link+' target="_blank" title="Instagram"><i class="fa fa-instagram"></i></a><p class="eif_date">'+feed_date+'</p><a  onclick="put_val(this)" href="'+ post_image_src +'" id="'+post_image_link+'" feed_video="'+post_video_type_link+'"  data-lightbox="eif_media" data-title="'+media_caption_text+'" user_image="'+user_image+'" user_name="'+user_name_link+'" class="eif_lightbox_link"><i class="fa fa-play"></i></a></div></div>';
										
										wrapper +='<div class="eif_info"><span class="eif_caption" style=" font-size: '+caption_text_size+'px; color:'+caption_text_color+';display:'+caption_css+';">'+c+'</span><span class="eif_caption'+ this.id +' eif_caption " style=" font-size: '+caption_text_size+'px; color:'+caption_text_color+';">'+h+'</span><span class="eif_expand'+this.id +'" > <a href="#"><span id="'+this.id +'" class="eif_more" style="display:'+caption_css+';">...</span></a></span><div class="eif_meta" style="color:'+likes_comments_color+'; "><span class="eif_likes" style="font-size: 11px; display:'+likes_display_css+';"><i class="fa fa-heart" style="font-size: 11px;"></i>'+likes_count+'</span><span class="eif_comments" style="font-size: 11px; display:'+comments_display_css+';"><i class="fa fa-comment" style="font-size: 11px;"></i>'+comments_count+'</span></div></div>';
										wrapper += '</div>';
									}else
										{
										
										var wrapper='<div id="eif_'+ this.id +'" class="eif_item '+classes+'"><div class="eif_photo_wrap"><i class="fa fa-play met"></i></div><a href="'+ post_image_link +'" target="_blank"><img src="' + post_image_src + '"/></a>';
										wrapper +='<div class="eif_info"><span class="eif_caption" style="  font-size: '+caption_text_size+'px; color:'+caption_text_color+';display:'+caption_css+';">'+c+'</span><span class="eif_caption'+ this.id +' eif_caption" style=" font-size: '+caption_text_size+'px; color:'+caption_text_color+';">'+h+'</span><span class="eif_expand'+this.id +'"> <a href="#"><span id="'+ this.id +'" class="eif_more" style="display:'+caption_css+';">...</span></a></span><div class="eif_meta" style="color:'+likes_comments_color+';"><span class="eif_likes" style="font-size: 11px;  display:'+likes_display_css+';"><i class="fa fa-heart" style="font-size: 11px;"></i>'+likes_count+'</span><span class="eif_comments" style="font-size: 11px; display:'+comments_display_css+'; "><i class="fa fa-comment" style="font-size: 11px;"></i>'+comments_count+'</span></div></div>';
										wrapper += '</div>';
										
										}
							 
							}
							else
							{
								if(lightbox_status == 'yes')
								{
									var feed_date  = this.created_time;
									feed_date =  feed_date * 1000;
									feed_date = moment(feed_date).format('DD MMM');
									
									var wrapper='<div id="eif_'+ this.id +'" class="eif_item '+classes+'"><div class="image-container"><img src="' + post_image_src + '" /><div class="after"><p><a class="eif_username" href="http://instagram.com/'+user_name_link+'" target="_blank">'+user_name_link+'</a></p><a class="eif_feed_link" href='+post_image_link+' target="_blank" title="Instagram"><i class="fa fa-instagram"></i></a><p class="eif_date">'+feed_date+'</p><a onclick="put_val(this)" href="'+ post_image_src +'" id="'+post_image_link+'"  data-lightbox="eif_media" data-title="'+media_caption_text+'" user_image="'+user_image+'" user_name="'+user_name_link+'" class="eif_lightbox_link"><i class="fa fa-arrows-alt"></i></a></div></div>';
									
									wrapper +='<div class="eif_info"><span class="eif_caption" style=" font-size: '+caption_text_size+'px; color:'+caption_text_color+';display:'+caption_css+';">'+c+'</span><span class="eif_caption'+ this.id +' eif_caption " style="  font-size: '+caption_text_size+'px; color:'+caption_text_color+';">'+h+'</span><span class="eif_expand'+this.id +'" > <a href="#"><span id="'+this.id +'" class="eif_more" style="display:'+caption_css+';">...</span></a></span><div class="eif_meta" style="color:'+likes_comments_color+';"><span class="eif_likes" style="font-size: 11px;  display:'+likes_display_css+';"><i class="fa fa-heart" style="font-size: 11px;"></i>'+likes_count+'</span><span class="eif_comments" style="font-size: 11px; display:'+comments_display_css+';"><i class="fa fa-comment" style="font-size: 11px;"></i>'+comments_count+'</span></div></div>';
									wrapper += '</div>';
								}else
								{
									var wrapper='<div id="eif_'+ this.id +'" class="eif_item '+classes+'"><a href="'+ post_image_link +'" target="_blank"><img src="' + post_image_src + '"/></a>';
									wrapper +='<div class="eif_info"><span class="eif_caption" style=" font-size: '+caption_text_size+'px; color:'+caption_text_color+'; display:'+caption_css+';">'+c+'</span><span class="eif_caption'+ this.id +' eif_caption " style=" font-size: '+caption_text_size+'px; color:'+caption_text_color+';">'+h+'</span><span class="eif_expand'+this.id +'"> <a href="#"><span id="'+ this.id +'" class="eif_more" style="display:'+caption_css+';">...</span></a></span><div class="eif_meta" style="color:'+likes_comments_color+'; "><span class="eif_likes" style="font-size: 11px;  display:'+likes_display_css+';"><i class="fa fa-heart" style="font-size: 11px;"></i>'+likes_count+'</span><span class="eif_comments" style="font-size: 11px; display:'+comments_display_css+';"><i class="fa fa-comment" style="font-size: 11px;"></i>'+comments_count+'</span></div></div>';
									wrapper += '</div>';
								}
							}
							
							$('.eif_images'+id).append(wrapper);
							
							if(id == 1){
						 number_of_user_content = Object.keys(UserArraycontent).length;
						 }else if(id == 2){
						 number_of_user_in_widget = Object.keys(UserArraywidget).length;
						 }else if(id == 3){
						 number_of_user_with_content = Object.keys(UserArraywithwidget).length;
						 } else if(id == 4){
						 number_of_user_with_widget = Object.keys(UserArraywithcontent).length;
						 } else if(id == 5){
						 number_of_user_widget = Object.keys(UserArraymore).length;
						 }else{
						 number_of_user_in_more = Object.keys(UserArray).length;
						 }
						
							
							//display none info div
							 var div_id = $(this).attr('id');
							 $(".eif_caption"+div_id).toggleClass("expand");
							 
							 if(media_caption_text.length<=showChar)
							 {
								$(".eif_expand"+div_id).toggleClass("expand");
							 }
			 
				} 
				}
			
			
			
           });
			
           //$('.eif_item:nth-child(4n)').after('<div class="clearfix"></div>'); 
		}
			else{
				
				var msgdiv = document.createElement("div"); 
		var t = document.createTextNode("NO feed to match given criteria. please check your given general settings");
		msgdiv.appendChild(t); 
		msgdiv.setAttribute('id','feederrormsg');
		msgdiv.setAttribute('style','color:red;font-family: "Noto Serif", serif;');
		$("#eif_feed").append(msgdiv);
			}		
    
		},
		
		
    });// end of ajax request
	}
});
});
});


// load more button function
var count_hide_secound = 0,count_hide_secound_widget = 0,count_hide_secound_with_widget = 0,count_hide_secound_content = 0,count_hide_secound_with_content = 0,count_hide_secound_with_user = 0;

$(document).on('click','.load_more',function()
{
 id=$(this).attr('data-id');
eifsettings=eifsetting[id];
		//var user_ids = eifsettings.eif_user_id;
		var search_type = eifsettings.eif_serach_type;
		
		var hashtagwithspecificusername_withserchtypeuser = eifsettings.eif_filter_userid_hashtag_enable;
		var FilterHashtag  = eifsettings.eif_filter_userid_hashtag;				
		var comman_display = eifsettings.eif_filter_comman_hashtag_enable;
		var hashtagwithspecificusername_withsearchtypehashtag = 'no';
		var media_type = eifsettings.mediatype;
		
		if(search_type !='user')
		{
			var user_ids = eifsettings.eif_hastag;
		
		user_ids = user_ids.toString();
		 user_ids = user_ids.split(',');
			var search_url = 'tags';
			
			function containsAll(needles, haystack){ 
					for(var i = 0 , len = needles.length; i < len; i++){
					if($.inArray(needles[i].toLowerCase(), haystack) == -1) return false;
					}
					return true;
					}
			
		}
		else
		{
			var search_url =  'users';
			var user_ids = eifsettings.eif_user_id;
		
		user_ids = user_ids.toString();
		 user_ids = user_ids.split(',');
		 
		 function containsAll(needles, haystack){ 
			for(var i = 0 , len = needles.length; i < len; i++){
			if($.inArray('#'+needles[i].toLowerCase(), haystack) == -1) return false;
			}
			return true;
			}
		}
		


    //var token = eifsettings.eif_access_token;
	
	
	/*if(user_ids == ''|| token == '')
	{
		
		var msgdiv = document.createElement("div"); 
		var t = document.createTextNode("Please enter User id an access token");
		msgdiv.appendChild(t); 
		msgdiv.setAttribute('id','useridmsg');
		msgdiv.setAttribute('style','color:red;font-family: "Noto Serif", serif;');
		$("#eif_feed").append(msgdiv);
		
	}*/
	
	
	
	img_sort = eifsettings.eif_feed_image_sorting;
	image_limit = eifsettings.eif_feed_number_of_images;
	image_resolution = eifsettings.resolution;
	
	// Follow me on instagram button settings variable 
	//var show = eifsettings.eif_feed_show_button_status;
	//show = show.toLowerCase();
	//var follow_btn_back_color = eifsettings.eif_feed_button_background_color;
	//var follow_btn_text_color = eifsettings.eif_feed_button_text_color;
	//var follow_btn_text  = eifsettings.eif_feed_follow_button_text;
	
	// Load more button settings variable
	//var load_show = eifsettings.eif_feed_load_more_button_status;
	//load_show = load_show.toLowerCase();
	//var load_btn_back_color = eifsettings.eif_feed_load_more_button_back_color;
	//var load_btn_text_color = eifsettings.eif_feed_load_more_button_text_color;
	//var load_btn_text = eifsettings.eif_feed_load_more_button_text;
	
	// light-box variable
	var lightbox_status = eifsettings.eif_disable_light_box;
	
	//caption settings variable
	var caption_status = eifsettings.eif_caption_status;
	var catiopn_text_length = eifsettings.eif_caption_text_length;
	var caption_text_color = eifsettings.eif_caption_text_color;
	var caption_text_size = eifsettings.eif_caption_text_size;
	
	// Meta settings
	var like_status = eifsettings.eif_show_likes;
	var comments_status = eifsettings.eif_show_comments;
	var likes_comments_color  = eifsettings.eif_likes_comments_color;
	
	if(comments_status!='yes')
	{
	var comments_display_css = 'none';
	}else
	{
	 var comments_display_css = 'inline';
	}
	
	if(like_status!='yes')
	{
	var likes_display_css = 'none';
	}else
	{
	var likes_display_css = 'inline';
	}
	
	
	if(caption_status!='yes')
	{
	var caption_css =  'none';
	}else
	{
	var caption_css =  'inline';
	}
	showChar = catiopn_text_length;
	
	//var number_of_user = user_ids.length;
	
$(document).ready(function($){ 

if(id == 1){
UserArray = UserArraycontent
}else if(id == 2){
UserArray = UserArraywidget
}else if(id == 3){
UserArray = UserArraywithwidget
}else if(id == 4){
UserArray = UserArraywithcontent
}else if(id == 5){
UserArray = UserArraymore
}

for (var key in UserArray) {

key = key.split(",");
$.each(key,function(i,val){
	var url = UserArray[key];
	displayImgs(url);
	function displayImgs(url) {
        $.ajax({
        method: "GET",
		 url: url,
		dataType: "jsonp",
        success: function(data){
			
        var posts = data.data;
		
		test_url = data.pagination.next_url;
		
 		var posts_length = posts.length;
		// hide Load more button if no more media
		if(test_url != undefined)
		{
			if(id == 1){
				UserArraycontent[val] = test_url;
				}else if(id == 2){
				UserArraywidget[val] = test_url;
				}else if(id == 3){
				UserArraywithwidget[val] = test_url;
				}else if(id == 4){
				UserArraywithcontent[val] = test_url;
				}else if(id == 5){
				UserArraymore[val] = test_url;
				}else{
				UserArray[val] = test_url;
				}
		}
		else
		{
			if(id == 1){
				count_hide_secound_widget++;
				delete UserArraycontent[val];
				}else if(id == 2){
				count_hide_secound_with_widget++;
				delete UserArraywidget[val];
				}else if(id == 3){
				count_hide_secound_content++;
				delete UserArraywithwidget[val];
				}else if(id == 4){
				count_hide_secound_with_content++;
				delete UserArraywithcontent[val];
				}else if(id == 5){
				count_hide_secound_with_user++;
				delete UserArraymore[val];
				}else{
				count_hide_secound++;
				delete UserArray[val];
				}	
			
		}
		
		if(id == 1){
			if(count_hide_secound_widget == number_of_user_content){
			$('#Load_update'+id).css("visibility", "hidden");
			}
		}else if(id == 2){
			if(count_hide_secound_with_widget == number_of_user_in_widget){
			$('#Load_update'+id).css("visibility", "hidden");
			}
		}else if(id == 3){
			if(count_hide_secound_content == number_of_user_with_content){
			$('#Load_update'+id).css("visibility", "hidden");
			}
		}else if(id == 4){
			if(count_hide_secound_with_content == number_of_user_with_widget){
			$('#Load_update'+id).css("visibility", "hidden");
			}
		}else if(id == 5){
			if(count_hide_secound_with_user == number_of_user_widget){
			$('#Load_update'+id).css("visibility", "hidden");
			}
		}
			// check random condition and call function for random images 
					if(img_sort=='random')
					{
					shuffle(posts);
					}
					all_posts=posts;
		
			$.each(posts, function(index){
				
						if(this.type == media_type ){
			
			// start get hashtag feed with a specificusername with search type user 
				
			if(hashtagwithspecificusername_withserchtypeuser == 'yes' && comman_display != 'yes'){
				
			
					var search_type = eifsettings.eif_serach_type;
					if(search_type == 'user')
					{
							var FilterHashtag  = eifsettings.eif_filter_userid_hashtag;	
							
								if (FilterHashtag instanceof Array) {} else {
								FilterHashtag = FilterHashtag.split(',');
								}
								
						
							var caption_arrytext ;
							var caption_arry = [];
							var hashtag_seachval = [];
							caption_arrytext = this.caption.text;
							caption_arrytext = caption_arrytext.toLowerCase();
							caption_arry = caption_arrytext.split(" ");
							

							for(var i = 0; i<= FilterHashtag.length; i++){
									if(jQuery.inArray('#'+FilterHashtag[i], caption_arry) !== -1){
									
										var result = true;
										break;
									} else {
										
										var result = false;
									}

							}
								
							
					}
				}
			
			// start comman hashtag
		
			if(comman_display =='yes')
						{
							
							
						if(hashtagwithspecificusername_withserchtypeuser == "yes"){
							
							
							
							var FilterHashtag  = eifsettings.eif_filter_userid_hashtag;	
							
								FilterHashtag = FilterHashtag.toString();
									FilterHashtag = FilterHashtag.split(',');
									
									
									var caption_arrytext ;
									
								var caption_arry = [];
								var hashtag_seachval = [];
								caption_arrytext = this.caption.text;
								caption_arrytext = caption_arrytext.toLowerCase();
								caption_arry = caption_arrytext.split(" ");
								
								var result =containsAll(FilterHashtag, caption_arry);
								//console.log(caption_arry);
								//console.log(FilterHashtag);
							
						}else{
								
								var user_ids = eifsettings.eif_hastag;
							
								user_ids = user_ids.toString();
									user_ids = user_ids.split(',');
									
									
									var caption_arrytext ;
									
								var caption_arry = [];
								var hashtag_seachval = [];
								caption_arrytext = this.caption.text;
								caption_arry = caption_arrytext.split('#');
								
								var result =containsAll(user_ids, caption_arry);
								//console.log(user_ids);
									
						}									
							

						} //  End of test commn hashtag			
							
				
				if(result == false){mk1 = mk1+1;
						}
				
				if(user_lenght > 1)
							{
								var image_limit1 = image_limit*user_lenght
							}else{
								var image_limit1 = image_limit;
							}
								
						if(mk1 == image_limit1){
							
						if ($('#feedshowmsg').length) {
							jQuery('#feedshowmsg').remove();
							}
							var msgdiv = document.createElement("div"); 
						var t1 = document.createTextNode("No feed matched given criteria.");
						msgdiv.appendChild(t1); 
						msgdiv.setAttribute('id','feedshowmsg');
						msgdiv.setAttribute('style','color:red;font-family: "Noto Serif", serif;');
						$("#eif_images").append(msgdiv);
						}
				
			if(hashtagwithspecificusername_withserchtypeuser == 'no' && comman_display == 'no' || result == true ) 	
			{
				
				if ($('#feedshowmsg').length) {
							jQuery('#feedshowmsg').remove();
						}
				
			if(image_resolution== 'low_resolution')
			{
            var post_image_src = this.images.low_resolution.url;
			}
			else if(image_resolution== 'thumbnail')
			{
            var post_image_src = this.images.thumbnail.url;
			}
			else if(image_resolution== 'standard_resolution')
			{
            var post_image_src = this.images.standard_resolution.url;
			}
			
			var user_name  = this.user.username;
			user_name_link = user_name;
            var post_image_link = this.link;
			var user_image = this.user.profile_picture;
			var post_image_created_time = this.created_time;
            post_image_src = post_image_src.replace(/.*?:\/\//g, "//");
			
            // create protocol relative instagram page link url
            post_image_link = post_image_link.replace(/.*?:\/\//g, "//");
			var media_caption = this.caption;
			if(media_caption!=null)
			{
				var media_caption_text = this.caption.text;
			
			}
			else
			{
				media_caption_text	 = '';
			}
			
			//var showChar =10;
			var c = media_caption_text.substr(0, showChar);
			var h = media_caption_text.substr(showChar, media_caption_text.length - showChar);
			
			var likes_count  = this.likes.count;
			var comments_count = this.comments.count;
            //alert(post_image_link);
			var post_image_type = this.type;
			
			var classes = get_media_classes(this.tags);
			
			if(post_image_type == 'video')
			{
				if(lightbox_status == 'yes')
					{
						var feed_date  = this.created_time;
						feed_date =  feed_date * 1000;
						feed_date = moment(feed_date).format('DD MMM');
			
						var post_video_type_link = this.videos.standard_resolution.url;
						//var wrapper='<div id="'+ this.id +'" class="eif_item"> <div class="eif_photo_wrap"><i class="fa fa-play met"></i></div>';
						//wrapper +='<a  onclick="playdiv('+"'"+post_video_type_link+"'"+')" ><img src="' + post_image_src + '"/></a>';
						
						 
						var wrapper='<div id="eif_'+ this.id +'" class="eif_item '+classes+'"><div class="image-container"><img src="' + post_image_src + '" /><div class="after"><p class="eif_username"><a href="http://instagram.com/'+user_name_link+'" target="_blank">'+user_name_link+'</a></p><a class="eif_feed_link" href='+post_image_link+' target="_blank" title="Instagram"><i class="fa fa-instagram"></i></a><p class="eif_date">'+feed_date+'</p><a  onclick="put_val(this)" href="'+ post_image_src +'" id="'+post_image_link+'" feed_video="'+post_video_type_link+'"  data-lightbox="eif_media" data-title="'+media_caption_text+'" user_image="'+user_image+'" user_name="'+user_name_link+'" class="eif_lightbox_link"><i class="fa fa-play"></i></a></div></div>';
						
						wrapper +='<div class="eif_info"><span class="eif_caption" style=" font-size: '+caption_text_size+'px; color:'+caption_text_color+';display:'+caption_css+';">'+c+'</span><span class="eif_caption'+ this.id +' eif_caption " style=" font-size: '+caption_text_size+'px; color:'+caption_text_color+';">'+h+'</span><span class="eif_expand'+this.id +'" > <a href="#"><span id="'+this.id +'" class="eif_more" style="display:'+caption_css+';">...</span></a></span><div class="eif_meta" style="color:'+likes_comments_color+';"><span class="eif_likes" style="font-size: 11px; display:'+likes_display_css+';"><i class="fa fa-heart" style="font-size: 11px;"></i>'+likes_count+'</span><span class="eif_comments" style="font-size: 11px; display:'+comments_display_css+';"><i class="fa fa-comment" style="font-size: 11px;"></i>'+comments_count+'</span></div></div>';
						wrapper += '</div>';
					}else
						{
						
						var wrapper='<div id="eif_'+ this.id +'" class="eif_item '+classes+'"><div class="eif_photo_wrap"><i class="fa fa-play met"></i></div><a href="'+ post_image_link +'" target="_blank"><img src="' + post_image_src + '"/></a>';
					wrapper +='<div class="eif_info"><span class="eif_caption" style="  font-size: '+caption_text_size+'px; color:'+caption_text_color+';display:'+caption_css+';">'+c+'</span><span class="eif_caption'+ this.id +' eif_caption " style=" font-size: '+caption_text_size+'px; color:'+caption_text_color+';">'+h+'</span><span class="eif_expand'+this.id +'"> <a href="#"><span id="'+ this.id +'" class="eif_more" style="display:'+caption_css+';">...</span></a></span><div class="eif_meta" style="color:'+likes_comments_color+';><span class="eif_likes" style="font-size: 11px; display:'+likes_display_css+';"><i class="fa fa-heart" style="font-size: 11px;"></i>'+likes_count+'</span><span class="eif_comments" style="font-size: 11px; display:'+comments_display_css+';"><i class="fa fa-comment" style="font-size: 11px;"></i>'+comments_count+'</span></div></div>';
					wrapper += '</div>';
						
						}
			 
			}
			else
			{
				if(lightbox_status == 'yes')
				{
					var feed_date  = this.created_time;
					feed_date =  feed_date * 1000;
					feed_date = moment(feed_date).format('DD MMM');
			
					var wrapper='<div id="eif_'+ this.id +'" class="eif_item '+classes+'"><div class="image-container"><img src="' + post_image_src + '" /><div class="after"><p><a class="eif_username" href="http://instagram.com/'+user_name_link+'" target="_blank">'+user_name_link+'</a></p><a class="eif_feed_link" href='+post_image_link+' target="_blank" title="Instagram"><i class="fa fa-instagram"></i></a><p class="eif_date">'+feed_date+'</p><a onclick="put_val(this)" href="'+ post_image_src +'" id="'+post_image_link+'"  data-lightbox="eif_media" data-title="'+media_caption_text+'" user_image="'+user_image+'" user_name="'+user_name_link+'" class="eif_lightbox_link"><i class="fa fa-arrows-alt"></i></a></div></div>';
					wrapper +='<div class="eif_info"><span class="eif_caption" style=" font-size: '+caption_text_size+'px; color:'+caption_text_color+';display:'+caption_css+';">'+c+'</span><span class="eif_caption'+ this.id +' eif_caption " style="  font-size: '+caption_text_size+'px; color:'+caption_text_color+';">'+h+'</span><span class="eif_expand'+this.id +'" > <a href="#"><span id="'+this.id +'" class="eif_more" style="display:'+caption_css+';">...</span></a></span><div class="eif_meta" style="color:'+likes_comments_color+';"><span class="eif_likes" style="font-size: 11px; display:'+likes_display_css+';"><i class="fa fa-heart" style="font-size: 11px;"></i>'+likes_count+'</span><span class="eif_comments" style="font-size: 11px;  display:'+comments_display_css+';"><i class="fa fa-comment" style="font-size: 11px;"></i>'+comments_count+'</span></div></div>';
					wrapper += '</div>';
				}else
				{
					var wrapper='<div id="eif_'+ this.id +'" class="eif_item '+classes+'"><a href="'+ post_image_link +'" target="_blank"><img src="' + post_image_src + '"/></a>';
					wrapper +='<div class="eif_info"><span class="eif_caption" style=" font-size: '+caption_text_size+'px; color:'+caption_text_color+'; display:'+caption_css+';">'+c+'</span><span class="eif_caption'+ this.id +' eif_caption " style=" font-size: '+caption_text_size+'px; color:'+caption_text_color+';">'+h+'</span><span class="eif_expand'+this.id +'"> <a href="#"><span id="'+ this.id +'" class="eif_more" style="display:'+caption_css+';">...</span></a></span><div class="eif_meta" style="color:'+likes_comments_color+';"><span class="eif_likes" style="font-size: 11px; display:'+likes_display_css+';"><i class="fa fa-heart" style="font-size: 11px;"></i>'+likes_count+'</span><span class="eif_comments" style="font-size: 11px; display:'+comments_display_css+';"><i class="fa fa-comment" style="font-size: 11px;"></i>'+comments_count+'</span></div></div>';
					wrapper += '</div>';
				}
			}
            $('.eif_images'+id).append(wrapper);
			
			//display none info div
			var div_id = $(this).attr('id');
			$(".eif_caption"+div_id).toggleClass("expand");
			if(media_caption_text.length<=showChar)
			 {
				$(".eif_expand"+div_id).toggleClass("expand");
			 }
			}
							
						}else if(media_type == 'all'){
							
							
			
			// start get hashtag feed with a specificusername with search type user 
				
			if(hashtagwithspecificusername_withserchtypeuser == 'yes' && comman_display != 'yes'){
				
			
					var search_type = eifsettings.eif_serach_type;
					if(search_type == 'user')
					{
							var FilterHashtag  = eifsettings.eif_filter_userid_hashtag;	
							
								if (FilterHashtag instanceof Array) {} else {
								FilterHashtag = FilterHashtag.split(',');
								}
								
						
							var caption_arrytext ;
							var caption_arry = [];
							var hashtag_seachval = [];
							caption_arrytext = this.caption.text;
							caption_arrytext = caption_arrytext.toLowerCase();
							caption_arry = caption_arrytext.split(" ");
							

							for(var i = 0; i<= FilterHashtag.length; i++){
									if(jQuery.inArray('#'+FilterHashtag[i], caption_arry) !== -1){
									
										var result = true;
										break;
									} else {
										
										var result = false;
									}

							}
								
							
					}
				}
			
			// start comman hashtag
		
			if(comman_display =='yes')
						{
							
							
						if(hashtagwithspecificusername_withserchtypeuser == "yes"){
							
							
							
							var FilterHashtag  = eifsettings.eif_filter_userid_hashtag;	
							
								FilterHashtag = FilterHashtag.toString();
									FilterHashtag = FilterHashtag.split(',');
									
									
									var caption_arrytext ;
									
								var caption_arry = [];
								var hashtag_seachval = [];
								caption_arrytext = this.caption.text;
								caption_arrytext = caption_arrytext.toLowerCase();
								caption_arry = caption_arrytext.split(" ");
								
								var result =containsAll(FilterHashtag, caption_arry);
								//console.log(caption_arry);
								//console.log(FilterHashtag);
							
						}else{
								
								var user_ids = eifsettings.eif_hastag;
							
								user_ids = user_ids.toString();
									user_ids = user_ids.split(',');
									
									
									var caption_arrytext ;
									
								var caption_arry = [];
								var hashtag_seachval = [];
								caption_arrytext = this.caption.text;
								caption_arry = caption_arrytext.split('#');
								
								var result =containsAll(user_ids, caption_arry);
								//console.log(user_ids);
									
						}									
							

						} //  End of test commn hashtag			
							
				
				if(result == false){mk1 = mk1+1;
						}
				
				if(user_lenght > 1)
							{
								var image_limit1 = image_limit*user_lenght
							}else{
								var image_limit1 = image_limit;
							}
								
						if(mk1 == image_limit1){
							
						if ($('#feedshowmsg').length) {
							jQuery('#feedshowmsg').remove();
							}
							var msgdiv = document.createElement("div"); 
						var t1 = document.createTextNode("No feed matched given criteria.");
						msgdiv.appendChild(t1); 
						msgdiv.setAttribute('id','feedshowmsg');
						msgdiv.setAttribute('style','color:red;font-family: "Noto Serif", serif;');
						$("#eif_images").append(msgdiv);
						}
				
			if(hashtagwithspecificusername_withserchtypeuser == 'no' && comman_display == 'no' || result == true ) 	
			{
				
				if ($('#feedshowmsg').length) {
							jQuery('#feedshowmsg').remove();
						}
				
			if(image_resolution== 'low_resolution')
			{
            var post_image_src = this.images.low_resolution.url;
			}
			else if(image_resolution== 'thumbnail')
			{
            var post_image_src = this.images.thumbnail.url;
			}
			else if(image_resolution== 'standard_resolution')
			{
            var post_image_src = this.images.standard_resolution.url;
			}
			
			var user_name  = this.user.username;
			user_name_link = user_name;
            var post_image_link = this.link;
			var user_image = this.user.profile_picture;
			var post_image_created_time = this.created_time;
            post_image_src = post_image_src.replace(/.*?:\/\//g, "//");
			
            // create protocol relative instagram page link url
            post_image_link = post_image_link.replace(/.*?:\/\//g, "//");
			var media_caption = this.caption;
			if(media_caption!=null)
			{
				var media_caption_text = this.caption.text;
			
			}
			else
			{
				media_caption_text	 = '';
			}
			
			//var showChar =10;
			var c = media_caption_text.substr(0, showChar);
			var h = media_caption_text.substr(showChar, media_caption_text.length - showChar);
			
			var likes_count  = this.likes.count;
			var comments_count = this.comments.count;
            //alert(post_image_link);
			var post_image_type = this.type;
			
			var classes = get_media_classes(this.tags);
			
			if(post_image_type == 'video')
			{
				if(lightbox_status == 'yes')
					{
						var feed_date  = this.created_time;
						feed_date =  feed_date * 1000;
						feed_date = moment(feed_date).format('DD MMM');
			
						var post_video_type_link = this.videos.standard_resolution.url;
						//var wrapper='<div id="'+ this.id +'" class="eif_item"> <div class="eif_photo_wrap"><i class="fa fa-play met"></i></div>';
						//wrapper +='<a  onclick="playdiv('+"'"+post_video_type_link+"'"+')" ><img src="' + post_image_src + '"/></a>';
						
						 
						var wrapper='<div id="eif_'+ this.id +'" class="eif_item '+classes+'"><div class="image-container"><img src="' + post_image_src + '" /><div class="after"><p class="eif_username"><a href="http://instagram.com/'+user_name_link+'" target="_blank">'+user_name_link+'</a></p><a class="eif_feed_link" href='+post_image_link+' target="_blank" title="Instagram"><i class="fa fa-instagram"></i></a><p class="eif_date">'+feed_date+'</p><a  onclick="put_val(this)" href="'+ post_image_src +'" id="'+post_image_link+'" feed_video="'+post_video_type_link+'"  data-lightbox="eif_media" data-title="'+media_caption_text+'" user_image="'+user_image+'" user_name="'+user_name_link+'" class="eif_lightbox_link"><i class="fa fa-play"></i></a></div></div>';
						
						wrapper +='<div class="eif_info"><span class="eif_caption" style=" font-size: '+caption_text_size+'px; color:'+caption_text_color+';display:'+caption_css+';">'+c+'</span><span class="eif_caption'+ this.id +' eif_caption " style=" font-size: '+caption_text_size+'px; color:'+caption_text_color+';">'+h+'</span><span class="eif_expand'+this.id +'" > <a href="#"><span id="'+this.id +'" class="eif_more" style="display:'+caption_css+';">...</span></a></span><div class="eif_meta" style="color:'+likes_comments_color+';"><span class="eif_likes" style="font-size: 11px; display:'+likes_display_css+';"><i class="fa fa-heart" style="font-size: 11px;"></i>'+likes_count+'</span><span class="eif_comments" style="font-size: 11px; display:'+comments_display_css+';"><i class="fa fa-comment" style="font-size: 11px;"></i>'+comments_count+'</span></div></div>';
						wrapper += '</div>';
					}else
						{
						
						var wrapper='<div id="eif_'+ this.id +'" class="eif_item '+classes+'"><div class="eif_photo_wrap"><i class="fa fa-play met"></i></div><a href="'+ post_image_link +'" target="_blank"><img src="' + post_image_src + '"/></a>';
					wrapper +='<div class="eif_info"><span class="eif_caption" style="  font-size: '+caption_text_size+'px; color:'+caption_text_color+';display:'+caption_css+';">'+c+'</span><span class="eif_caption'+ this.id +' eif_caption " style=" font-size: '+caption_text_size+'px; color:'+caption_text_color+';">'+h+'</span><span class="eif_expand'+this.id +'"> <a href="#"><span id="'+ this.id +'" class="eif_more" style="display:'+caption_css+';">...</span></a></span><div class="eif_meta" style="color:'+likes_comments_color+';><span class="eif_likes" style="font-size: 11px; display:'+likes_display_css+';"><i class="fa fa-heart" style="font-size: 11px;"></i>'+likes_count+'</span><span class="eif_comments" style="font-size: 11px; display:'+comments_display_css+';"><i class="fa fa-comment" style="font-size: 11px;"></i>'+comments_count+'</span></div></div>';
					wrapper += '</div>';
						
						}
			 
			}
			else
			{
				if(lightbox_status == 'yes')
				{
					var feed_date  = this.created_time;
					feed_date =  feed_date * 1000;
					feed_date = moment(feed_date).format('DD MMM');
			
					var wrapper='<div id="eif_'+ this.id +'" class="eif_item '+classes+'"><div class="image-container"><img src="' + post_image_src + '" /><div class="after"><p><a class="eif_username" href="http://instagram.com/'+user_name_link+'" target="_blank">'+user_name_link+'</a></p><a class="eif_feed_link" href='+post_image_link+' target="_blank" title="Instagram"><i class="fa fa-instagram"></i></a><p class="eif_date">'+feed_date+'</p><a onclick="put_val(this)" href="'+ post_image_src +'" id="'+post_image_link+'"  data-lightbox="eif_media" data-title="'+media_caption_text+'" user_image="'+user_image+'" user_name="'+user_name_link+'" class="eif_lightbox_link"><i class="fa fa-arrows-alt"></i></a></div></div>';
					wrapper +='<div class="eif_info"><span class="eif_caption" style=" font-size: '+caption_text_size+'px; color:'+caption_text_color+';display:'+caption_css+';">'+c+'</span><span class="eif_caption'+ this.id +' eif_caption " style="  font-size: '+caption_text_size+'px; color:'+caption_text_color+';">'+h+'</span><span class="eif_expand'+this.id +'" > <a href="#"><span id="'+this.id +'" class="eif_more" style="display:'+caption_css+';">...</span></a></span><div class="eif_meta" style="color:'+likes_comments_color+';"><span class="eif_likes" style="font-size: 11px; display:'+likes_display_css+';"><i class="fa fa-heart" style="font-size: 11px;"></i>'+likes_count+'</span><span class="eif_comments" style="font-size: 11px;  display:'+comments_display_css+';"><i class="fa fa-comment" style="font-size: 11px;"></i>'+comments_count+'</span></div></div>';
					wrapper += '</div>';
				}else
				{
					var wrapper='<div id="eif_'+ this.id +'" class="eif_item '+classes+'"><a href="'+ post_image_link +'" target="_blank"><img src="' + post_image_src + '"/></a>';
					wrapper +='<div class="eif_info"><span class="eif_caption" style=" font-size: '+caption_text_size+'px; color:'+caption_text_color+'; display:'+caption_css+';">'+c+'</span><span class="eif_caption'+ this.id +' eif_caption " style=" font-size: '+caption_text_size+'px; color:'+caption_text_color+';">'+h+'</span><span class="eif_expand'+this.id +'"> <a href="#"><span id="'+ this.id +'" class="eif_more" style="display:'+caption_css+';">...</span></a></span><div class="eif_meta" style="color:'+likes_comments_color+';"><span class="eif_likes" style="font-size: 11px; display:'+likes_display_css+';"><i class="fa fa-heart" style="font-size: 11px;"></i>'+likes_count+'</span><span class="eif_comments" style="font-size: 11px; display:'+comments_display_css+';"><i class="fa fa-comment" style="font-size: 11px;"></i>'+comments_count+'</span></div></div>';
					wrapper += '</div>';
				}
			}
            $('.eif_images'+id).append(wrapper);
			
			//display none info div
			var div_id = $(this).attr('id');
			$(".eif_caption"+div_id).toggleClass("expand");
			if(media_caption_text.length<=showChar)
			 {
				$(".eif_expand"+div_id).toggleClass("expand");
			 }
			}
			
			}
						
           });
		},
    });// end of ajax request
	}
});
}
});
});

function shuffle(array) 
{
	  var currentIndex = array.length, temporaryValue, randomIndex ;
	  while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	  }
	return array;
}

// follow on instagram button function 
function follow_butn()
{
 window.open('http://instagram.com/'+user_name_link+'');
}


// expand media caption
// jQuery(".eif_more").live('click',function(e){
// var div_id = jQuery(this).attr('id');
  // jQuery(".eif_caption"+div_id).toggleClass("expand");
  // e.preventDefault();
  // e.stopPropagation();
// });



 // expand media caption
   $(document).ready(function(){
 $(document).on('click','.eif_more',function(e){
var div_id = $(this).attr('id');
  $(".eif_caption"+div_id).toggleClass('expand');
	e.preventDefault();
  e.stopPropagation();
});
                    
});


function put_val(val)
{

$(".eif_lightbox_action a").attr("href", val.id);

$("#eif_facebook_icon").attr("href","http://www.facebook.com/sharer/sharer.php?u=http:"+val.id);
$("#eif_twitter_icon").attr("href","https://twitter.com/home?status=http:"+val.id);
$("#eif_google_icon").attr("href","https://plus.google.com/share?url=http:"+val.id);
$("#eif_linkedin_icon").attr("href","https://www.linkedin.com/shareArticle?mini=true&url=http:"+val.id);
$("#eif_pinterest_icon").attr("href","https://pinterest.com/pin/create/button/?url=http:"+val.id+"&media="+val.href+"");
$("#eif_reddit_icon").attr("href","http://www.reddit.com/submit?url=http:"+val.id);
$("#eif_stumbleupon_icon").attr("href","http://www.stumbleupon.com/badge/?url=http:"+val.id);

}
 

function get_media_classes(tags_class){
	var classes='';
	$.each(tags_class, function(i,val){
		classes = classes+' '+val;
	});
	return classes;
}
