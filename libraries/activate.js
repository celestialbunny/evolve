function ResizeIframeFromParent(id) {
    if (jQuery('#'+id).length > 0) {
        var window = document.getElementById(id).contentWindow;
        var prevheight = jQuery('#'+id).attr('height');
        var newheight = Math.max( window.document.body.scrollHeight, window.document.body.offsetHeight, window.document.documentElement.clientHeight, window.document.documentElement.scrollHeight, window.document.documentElement.offsetHeight );
        if (newheight != prevheight && newheight > 0) {
            jQuery('#'+id).attr('height', newheight);
            console.log("Adjusting iframe height for "+id+": " +prevheight+"px => "+newheight+"px");
        }
    }
}

jQuery(document).ready(function() {
    // Try to change the iframe size every 2 seconds
    setInterval(function() {
        ResizeIframeFromParent('google-form-iframe');
    }, 1000);
});