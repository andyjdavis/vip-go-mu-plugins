<?php

namespace Automattic\VIP\Elasticsearch;

use \WP_CLI;
use \WP_CLI\Utils;

/**
 * Commands to view and manage the health of VIP Go Elasticsearch indexes
 *
 * @package Automattic\VIP\Elasticsearch
 */
class Health_Command extends \WPCOM_VIP_CLI_Command {
	private const SUCCESS_ICON = "\u{2705}"; // unicode check mark
	private const FAILURE_ICON = "\u{274C}"; // unicode cross mark

	public function __construct() {
		require_once ABSPATH . 'wp-admin/includes/plugin.php';

		parent::__construct();
	}

	/**
	 * Validate DB and ES index counts for all objects
	 *
	 * ## OPTIONS
	 *
	 *
	 * ## EXAMPLES
	 *     wp vip-es health validate-counts
	 *
	 * @subcommand validate-counts
	 */
	public function validate_counts( $args, $assoc_args ) {
		WP_CLI::line( "Validating posts count\n" );

		$posts_results = Elasticsearch::factory()->validate_posts_count( $args, $assoc_args );
		if ( is_wp_error( $posts_results ) ) {
			WP_CLI::warning( 'Error while validating posts count: ' . $posts_results->get_error_message() );
		}

		$this->render_results( $posts_results );

		WP_CLI::line( '' );
		WP_CLI::line( sprintf( "Validating users count\n" ) );

		$users_results = Elasticsearch::factory()->validate_users_count( $args, $assoc_args );
		if ( is_wp_error( $users_results ) ) {
			WP_CLI::warning( 'Error while validating users count:' . $users_results->get_error_message() );
		}
		$this->render_results( $users_results );
	}

	private function render_results( array $results ) {
		foreach( $results as $result ) {
			$message = ' inconsistencies found';  
			if ( $result[ 'diff' ] ) {
				$icon = self::FAILURE_ICON;
			} else {
				$icon = self::SUCCESS_ICON;
				$message = 'no' . $message;
			}

			$message = sprintf( '%s %s when counting %s, type: %s (DB: %s, ES: %s, Diff: %s)', $icon, $message, $result[ 'entity' ], $result[ 'type' ], $result[ 'db_total' ], $result[ 'es_total' ], $result[ 'diff' ] );
			WP_CLI::line( $message );
		}
	}
}
