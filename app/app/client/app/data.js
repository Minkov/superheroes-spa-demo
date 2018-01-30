/* globals http */

( function( scope ) {
    var SUPERHEROES_KEY = "superheroes";
    var URL = "/api/superheroes";

    var getSuperheroes = function() {
        return http.getJson( URL );
    };

    var getSuperheroDetails = function( id ) {
        return http.getJson( URL + "/" + id );
    };

    var createSuperhero = function( name, secretIdentity, bio, imgUrl ) {
        return http.postJson( URL, { name, secretIdentity, bio, imgUrl } );
    };

    var getSuperheroesLocal = function() {
        var superheroesString = localStorage.getItem( SUPERHEROES_KEY ) || "[]";
        return JSON.parse( superheroesString );
    };

    var createSuperheroLocal = function( name, secretIdentity, bio, imgUrl ) {
        var superheroesString = localStorage.getItem( SUPERHEROES_KEY ) || "[]";
        var superheroes = JSON.parse( superheroesString );
        superheroes.push( {
            name: name,
            secretIdentity: secretIdentity,
             bio: bio,
            imgUrl: imgUrl
        } );

        localStorage.setItem( SUPERHEROES_KEY, JSON.stringify( superheroes ) );
    };

    scope.data = {
        getSuperheroes: getSuperheroes,
        getSuperheroDetails: getSuperheroDetails,
        createSuperhero: createSuperhero,
        getSuperheroesLocal: getSuperheroesLocal,
        createSuperheroLocal: createSuperheroLocal
    };
} )( window );
