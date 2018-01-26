/* globals data */
( function() {
    var createSuperheroesList = function( superheroes ) {
        var $list = $( "<ul/>" )
            .addClass( "list" );
        var $itemTemplate = $( "<div/>" )
            .append(
                $( "<li/>" )
                    .addClass( "list-item" )
                    .append(
                        $( "<div/>" )
                            .addClass( "content" )
                    )
                    .append(
                        $( "<img/>" )
                    )
        );

        $( superheroes ).each( function( _, superhero ) {
            $itemTemplate.find( "img" )
                .attr( "src", superhero.imgUrl );
            $itemTemplate.find( ".content" )
                .html( superhero.name );

            $list.append(
                $itemTemplate.html()
            );
        } );

        return $list;
    };

    $( function() {
        loader.show();
        data.getSuperheroes()
            .then( function( superheroes ) {
                var $list = createSuperheroesList( superheroes );
                $( "#root" ).html( $list );
                loader.hide();
            } );
    } );
} )();
