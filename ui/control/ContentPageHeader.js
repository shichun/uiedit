(function($) {
	"use strict";

	sap.ui.define([
		"sap/uxap/ObjectPageHeader",
		"sap/ui/core/Icon",
		"sap/tnt/InfoLabel",
		"sap/m/ObjectStatus",
	], function(ObjectPageHeader, Icon, InfoLabel, ObjectStatus) {

		var ContentPageHeader = ObjectPageHeader.extend("com.sap.sme.x4.uidesigner.view.control.ContentPageHeader", {
			renderer: "sap.uxap.ObjectPageHeaderRenderer",
			metadata: {
				properties: {
					headerType: {
						type: "string",
						defaultValue: ""
					}
				}
			}
		});

		ContentPageHeader.prototype.init = function() {
			ObjectPageHeader.prototype.init.apply(this);

			this.addStyleClass("contentPageHeader");
		};

		ContentPageHeader.prototype.onBeforeRendering = function() {
			ObjectPageHeader.prototype.onBeforeRendering.apply(this);
		};

		ContentPageHeader.prototype.onAfterRendering = function() {
		//	ObjectPageHeader.prototype.onAfterRendering.apply(this);
			// var $objectImage = this._lazyLoadInternalAggregation("_objectImage").$();
		//	this._adaptLayout();
	
			// this._clearImageNotFoundHandler();
			// $objectImage.error(this._handleImageNotFoundError.bind(this));
	
			// if (!this.getObjectImageURI()){
			// 	this._handleImageNotFoundError();
			// }
		};

		ContentPageHeader.prototype._onHeaderResize = function (oEvent) {
			console.log("do nothing");
			// this._adaptLayout();
			// if (this.getParent() && typeof this.getParent()._onUpdateHeaderTitleSize === "function") {
			// 	this.getParent()._onUpdateHeaderTitleSize(oEvent);
			// }
		};




		return ContentPageHeader;
	}, /* bExport= */ true);
}(jQuery));