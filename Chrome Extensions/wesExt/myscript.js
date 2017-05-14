window.onload = function(){
	//Add jQuery to page
	if(1){
		(function () {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
    })();
    	console.log("jquery 3.2.1 loaded");
	}
	console.log("myscript.js ran to the end!");




}