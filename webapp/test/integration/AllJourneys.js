/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"app/ZZMASRAF_02/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"app/ZZMASRAF_02/test/integration/pages/View1",
	"app/ZZMASRAF_02/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "app.ZZMASRAF_02.view.",
		autoWait: true
	});
});