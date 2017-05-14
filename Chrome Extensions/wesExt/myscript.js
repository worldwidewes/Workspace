    (function () {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = '//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
    })();

    window.wcl = {};
    //wcl tools
    wcl.alert = function(msg){
        /*FIRE AN ALERT MESSAGE*/
        alert(msg);
    };
    wcl.jsloop = function(selector){
        //Run jQuery Loop
        jQuery(selector).each(function(i,elem){
            if(elem.text){
                console.log(elem.text);
            }
        })
    }

    //Confirmation of Loaded
	console.log("myscript.js ran to the end!");

}