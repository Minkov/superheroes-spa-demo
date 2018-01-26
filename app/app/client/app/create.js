/* globals data */
( function() {
    var create = function( name, secretIdentity, bio, imgUrl ) {
        return data.createSuperhero( name, secretIdentity, bio, imgUrl );
    };

    $( function() {
        $( "#btn-create" ).on( "click", function() {
            create(
                $( "#tb-name" ).val(),
                $( "#tb-secret-identity" ).val(),
                $( "#tb-bio" ).val(),
                $( "#tb-imgUrl" ).val()
            )
                .then( () => {
                } );
        } );

        $( "#tb-imgUrl" ).on( "input", function() {
            $( "#preview" ).attr( "src", $( this ).val() );
        } );
    } );
} )();
