/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2015 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

OCA = OCA || {};

(function() {

	/**
	 * @classdesc let's the wizard backend count the available users
	 *
	 * @constructor
	 */
	var WizardDetectorUserGroupAssociation = OCA.LDAP.Wizard.WizardDetectorFilterSimpleRequestAbstract.subClass({
		init: function() {
			this.setTargetKey('ldap_group_count');
			this.wizardMethod = 'determineGroupMemberAssoc';
			this.runsOnRequest = true;
		},

		/**
		 * @inheritdoc
		 */
		run: function(model, configID) {
			// TODO: might be better with configuration marker as uniqueMember
			// is a valid value (although probably less common then member and memberUid).
			if(model.configuration.ldap_group_member_assoc_attribute && model.configuration.ldap_group_member_assoc_attribute !== '') {
				// a value is already set. Don't overwrite and don't ask LDAP
				// without reason.
				return false;
			}
			this._super(model, configID);
		}
	});

	OCA.LDAP.Wizard.WizardDetectorUserGroupAssociation = WizardDetectorUserGroupAssociation;
})();
