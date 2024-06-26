<?php

/**
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-only
 */
namespace OCP\Search;

/**
 * Provides a template for search functionality throughout Nextcloud;
 * @since 7.0.0
 * @deprecated 20.0.0
 */
abstract class Provider {
	/**
	 * @since 8.0.0
	 * @deprecated 20.0.0
	 */
	public const OPTION_APPS = 'apps';

	/**
	 * List of options
	 * @var array
	 * @since 7.0.0
	 * @deprecated 20.0.0
	 */
	protected $options;

	/**
	 * Constructor
	 * @param array $options as key => value
	 * @since 7.0.0 - default value for $options was added in 8.0.0
	 * @deprecated 20.0.0
	 */
	public function __construct($options = []) {
		$this->options = $options;
	}

	/**
	 * get a value from the options array or null
	 * @param string $key
	 * @return mixed
	 * @since 8.0.0
	 * @deprecated 20.0.0
	 */
	public function getOption($key) {
		if (is_array($this->options) && isset($this->options[$key])) {
			return $this->options[$key];
		} else {
			return null;
		}
	}

	/**
	 * checks if the given apps and the apps this provider has results for intersect
	 * returns true if the given array is empty (all apps)
	 * or if this provider does not have a list of apps it provides results for (legacy search providers)
	 * or if the two above arrays have elements in common (intersect)
	 * @param string[] $apps
	 * @return bool
	 * @since 8.0.0
	 * @deprecated 20.0.0
	 */
	public function providesResultsFor(array $apps = []) {
		$forApps = $this->getOption(self::OPTION_APPS);
		return empty($apps) || empty($forApps) || array_intersect($forApps, $apps);
	}

	/**
	 * Search for $query
	 * @param string $query
	 * @return array An array of OCP\Search\Result's
	 * @since 7.0.0
	 * @deprecated 20.0.0
	 */
	abstract public function search($query);
}
