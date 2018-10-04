jQuery(document).ready(function(){
    
    console.log('Made with love and full Code!');

    jQuery('.scroll').click(function(event) {
        event.preventDefault();
 
        var full_url = this.href;
        
        var parts = full_url.split('#');
        var trgt = parts[1];

        var target_offset = jQuery('#'+trgt).offset();
        var target_top = target_offset.top;

        jQuery('html, body').animate({scrollTop:target_top}, 500);


    });
    
    
});