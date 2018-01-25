( function( scope ) {
    var makeJsonRequest = function( url, method, data ) {
        return new Promise( ( resolve, reject ) => {
            $.ajax( {
                url: url,
                method: method,
                contentType: "application/json",
                data: JSON.stringify( data ),
                success: resolve,
                error: reject
            } );
        } );
    };

    var getJson = function( url ) {
        return makeJsonRequest( url, "GET", null );
    };

    var postJson = function( url, body ) {
        return makeJsonRequest( url, "POST", body );
    };

    scope.http =  {
        getJson: getJson,
        postJson: postJson
    };
} )( window );
