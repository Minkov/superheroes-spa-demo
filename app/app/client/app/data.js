/* globals http */

( function( scope ) {
    var URL = "/api/superheroes";
    var getSuperheroes = function() {
        return http.getJson( URL );
    };

    var getSuperheroDetails = function( id ) {
        return http.getJson( URL + "/" + id );
    };

    var createSuperhero = function( name, secretIdentity, bio, imgUrl ) {
        var body = {
            name: name,
            secretIdentity: secretIdentity,
            bio: bio,
            imgUrl: imgUrl
        };

        return http.postJson( URL, body );
    };

    scope.data = {
        getSuperheroes: getSuperheroes,
        getSuperheroDetails: getSuperheroDetails,
        createSuperhero: createSuperhero
    };
} )( window );
