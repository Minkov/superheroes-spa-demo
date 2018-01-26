( function( scope ) {
    var loaderHtml = `
<div class="loader-container">
    <div class="loader-content">
        <span class="loader-text">
            Loading
        </span>
        <span class="loader-animation">
        </span>
    </div>
</div>`;

    var $loaderContainer = $( "<div/>" )
        .addClass( "loader-hidden" )
        .html( loaderHtml );


    var toggleLoaderVisibility = function() {
        $loaderContainer.toggleClass( "loader-hidden" );
    };

    $( function() {
        $( document.body ).append( $loaderContainer );
    } );

    scope.loader = {
        show: toggleLoaderVisibility,
        hide: toggleLoaderVisibility
    };
} )( window );
