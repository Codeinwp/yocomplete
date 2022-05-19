let shortcuts = {
    ty: "Thank you for contacting us.",
    pw: "Please wait and we will get back to you soon.",
    sry: "We are sorry for the inconvenience caused."
};

function escapeRegExp( str ) {
    str += " ";
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}

let so = Object.keys( shortcuts ).map(( value ) => escapeRegExp( value ));

function sayYo( e ) {
    let timer = 0;
    const textarea = e.target;
    const re = new RegExp( "(" + so.join("|") + ")", "g" );
    textarea.onkeydown = function( e ) {
        if ( e.keyCode === 32 ) {
            clearTimeout( timer );
            timer = setTimeout(function() {
                let text;
                if (textarea.value.search( re ) !== -1) {
                    textarea.value = textarea.value.replace( re, function( $0, $1 ) {
                        const sc = $1.substring( 0, $1.length - 1 );
                        text = shortcuts[ sc ];
                        return text;
                    });
                }
            }, 200);
        }
    };
}

$( document ).ready( function() {
    $( document ).on( 'focus', 'textarea', sayYo );
    $( document ).on( 'focus', 'input', sayYo );
    $( document ).on( 'focus', '[contenteditable="true"]', sayYo );
} );
