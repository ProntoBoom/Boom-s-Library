<script>
$(document).ready(function(){
	var disable_nav = ["By Ages","By Departments"];
	$('nav[role="navigation"] ul li').each(function(){
		for(var i=0; i < disable_nav.length; i++){
			if( $(this).children('a').text() == disable_nav[i] ){
				$(this).children('a').removeAttr('href');
				break;
			}
		}
	});
	$('div[role="complementary"] .flexnav li').each(function(){
		for(var i=0; i < disable_nav.length; i++){
			if( $(this).children('a').text() == disable_nav[i] ){
				$(this).children('a').removeAttr('href');
				break;
			}
		}
	});
	var check_select_main_nav = setInterval(function(){ 
		if($('nav[role=navigation] select').length > 0){
			$('nav[role=navigation] select > option').each(function(){
				for(var i = 0; i < main_nav_arr.length; i++){
					if( $(this).text() == main_nav_arr[i] ){
						$(this).attr('disabled', 'disabled');
					}
				}
			});
			clearInterval(check_select_main_nav);
		}
	}, 500);
});
</script>