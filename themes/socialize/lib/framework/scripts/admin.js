jQuery( document ).ready( function( $ ) {

	'use strict';

	/**
	 * Show page template/post format dependant metaboxes
	 *
	 */
	if ( $( 'body' ).hasClass( 'block-editor-page' ) ) { // Is Gutenberg active?

		wp.data.subscribe( () => {

			var newPageTemplate = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'template' );
		
			$( 'body:not(.post-type-post) .redux-metabox' ).each( function() {
		
				var metabox = $( this ),
					metaboxID = metabox.attr( 'id' );

				if ( metaboxID !== 'redux-socialize-metabox-page-options' ) {

					metaboxID = metaboxID.replace( 'redux-socialize-metabox-', '' );
					metaboxID = metaboxID.replace( 'template-options', '' );
					metaboxID = metaboxID + 'template.php';
			
					if ( metaboxID === newPageTemplate ) {
						metabox.removeClass( 'hide-if-js closed' );
					} else if ( 'page' !== newPageTemplate ) {
						metabox.addClass( 'hide-if-js' );
					}
					
				}	
		
			});

		});

		wp.data.subscribe( () => {

			var newPostFormat = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'format' );

			$( '.post-type-post .redux-metabox' ).each( function() {
	
				var metabox = $( this ),
					metaboxID = metabox.attr( 'id' );
					
				if ( metaboxID !== 'redux-socialize-metabox-post-options' ) {
		
					metaboxID = metaboxID.replace( 'redux-socialize-metabox-', '' );
					metaboxID = metaboxID.replace( '-format-options', '' );
			
					if ( metaboxID === newPostFormat ) {
						metabox.removeClass( 'hide-if-js closed' );
					} else {
						metabox.addClass( 'hide-if-js' );
					}
				
				}	
	
			});

		});

	}

	/**
	 * Load demo content
	 *
	 */	
	 
	// Homepage 1
	$( '.ghostpool_vc_homepage_1_template' ).click( function() {
    	$( '#page_template' ).val( 'homepage-layerslider.php' );
    	$( '#_gp_title_headerdisable' ).prop( 'checked', true );
	});

	// Homepage 2
	$( '.ghostpool_vc_homepage_2_template' ).click( function() {
    	$( '#page_template' ).val( 'homepage-flexslider.php' );
    	$( '#_gp_title_headerdisable' ).prop( 'checked', true );
	});

	// Homepage 3
	$( '.ghostpool_vc_homepage_3_template' ).click( function() {
    	$( '#page_template' ).val( 'homepage-layerslider.php' );
    	$( '#_gp_title_headerdisable' ).prop( 'checked', true );
	});

	// Homepage 4
	$( '.ghostpool_vc_homepage_4_template' ).click( function() {
    	$( '#page_template' ).val( 'homepage-flexslider.php' );
    	$( '#_gp_title_headerdisable' ).prop( 'checked', true );
	});

	// Homepage 5
	$( '.ghostpool_vc_homepage_5_template' ).click( function() {
    	$( '#page_template' ).val( 'homepage-template.php' );
    	$( '#_gp_layout' ).val( 'no-sidebar' );
    	$( '#_gp_title_headerdisable' ).prop( 'checked', true );
	});

	// Homepage 6
	$( '.ghostpool_vc_homepage_6_template' ).click( function() {
    	$( '#page_template' ).val( 'homepage-template.php' );
    	$( '#_gp_layout' ).val( 'no-sidebar' );
    	$( '#_gp_title_headerdisable' ).prop( 'checked', true );
	});

	// Homepage 7
	$( '.ghostpool_vc_homepage_7_template' ).click( function() {
    	$( '#page_template' ).val( 'homepage-template.php' );
    	$( '#_gp_layout' ).val( 'no-sidebar' );
    	$( '#_gp_title_headerdisable' ).prop( 'checked', true );
	});

	// Homepage 8
	$( '.ghostpool_vc_homepage_8_template' ).click( function() {
    	$( '#page_template' ).val( 'homepage-template.php' );
    	$( '#_gp_layout' ).val( 'no-sidebar' );
    	$( '#_gp_title_headerdisable' ).prop( 'checked', true );
	});

	// About Us
	$( '.ghostpool_vc_about_us_template' ).click( function() {
    	$( '#page_template' ).val( 'homepage-template.php' );
    	$( '#_gp_layout' ).val( 'no-sidebar' );
	});

	// FAQs
	$( '.ghostpool_vc_faqs_template' ).click( function() {
    	$( '#page_template' ).val( 'homepage-template.php' );
    	$( '#_gp_layout' ).val( 'no-sidebar' );
	});
								
	// Coming Soon and Maintenance Mode
	$( '.ghostpool_coming_soon_template, .ghostpool_vc_maintenance_mode_template' ).click( function() {
    	$( '#page_template' ).val( 'blank-page.php' );
		$( '#gp-theme-options' ).hide();	
	});	

});