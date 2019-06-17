sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.sap.sme.x4.uidesigner.view.App", {
		onInit: function() {
			var data = {
				label:"dateName",
				dateValue: new Date()
			};
			var jsonModel = new sap.ui.model.json.JSONModel(data);
			this.getView().setModel(jsonModel, "section");
			var xmlFragment = sap.ui.xmlfragment("com.sap.sme.x4.uidesigner.view.fragment.DataField",
									this);
			var section = this.getView().byId("ObjectPageLayout").getSections()[0]
			section.getAggregation("subSections")[0].addBlock(xmlFragment[0])
			section.getAggregation("subSections")[0].addBlock(xmlFragment[1])
		}

	});
});