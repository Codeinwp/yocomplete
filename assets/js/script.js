shortcuts = {
    "cci" : "customer called in",
    "rfc" : "request for comments",
    "www" : "world wide web"
}


window.onload = function() {
    var ta = document.getElementById("comment");
    var timer = 0;
    var re = new RegExp("\\b(" + Object.keys(shortcuts).join("|") + ")\\b", "g");
    

    
    update = function() {
        ta.value = ta.value.replace(re, function($0, $1) {
            return shortcuts[$1.toLowerCase()];
        });
    }
    
    ta.onkeydown = function() {
        clearTimeout(timer);
        timer = setTimeout(update, 200);

    }

    
}
