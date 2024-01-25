<?php
/*
Plugin Name: Auto-Dismiss Pattern Popup for 2024 Theme
Description: Automatically closes the 'Choose a Pattern' modal popup in the new WordPress editor when creating new page in TwentyTwentyFourTheme.
Version: 1.0
Author: Mattr
Author URI: https://mattr.co.uk
*/

/**
 * Enqueue the JavaScript file
 */
function mattr_close_modal_enqueue_script() {
	$current_screen = get_current_screen();

	// Check if the current screen is the new page creation screen
	if ($current_screen && $current_screen->id === 'page') {
		wp_enqueue_script(
			'mattr-dismiss-patterns-popup', // Unique handle for the script
			plugin_dir_url(__FILE__) . 'mattr-dismiss-patterns-popup.js',
			array(),
			'1.0',
			true
		);
	}
}
add_action('admin_enqueue_scripts', 'mattr_close_modal_enqueue_script');