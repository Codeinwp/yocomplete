$(document).ready(function() {
    $(".container.profiles button.btn-outline-primary").click( function (){
        //console.log('works');
        $('.container.profiles .btn-outline-primary').removeClass('active');
        $('.profile').removeClass('active');
        $(this).addClass('active');
        $(this).next().addClass('active');
    });
    });
    
    
    