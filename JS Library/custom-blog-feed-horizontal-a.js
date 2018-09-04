<script>
$( document ).ready( function() {
	$( '.hp-blog article' ).each( function() {
		$( this ).find( 'figure' ).nextAll().wrapAll( '<div class="content"></div>' );
	});
});
</script>