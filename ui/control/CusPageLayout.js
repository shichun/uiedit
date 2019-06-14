(function($) {
	"use strict";

	sap.ui.define([
		"sap/uxap/ObjectPageLayout",
		"sap/uxap/LazyLoading",
		"sap/ui/core/Icon",
		"sap/tnt/InfoLabel",
		"sap/m/ObjectStatus",
	], function(ObjectPageLayout,LazyLoading, Icon, InfoLabel, ObjectStatus) {

		var CusPageLayout = ObjectPageLayout.extend("com.sap.sme.x4.uidesigner.view.control.CusPageLayout", {
			renderer: "sap.uxap.ObjectPageLayoutRenderer",
			metadata: {
				properties: {
					headerType: {
						type: "string",
						defaultValue: ""
					}
				}
			}
		});

		CusPageLayout.prototype.init = function() {
			ObjectPageLayout.prototype.init.apply(this);

			this.addStyleClass("contentPageHeader");
		};

		CusPageLayout.prototype.onBeforeRendering = function () {

			var oHeaderContent,
				bPinnable;
	
			this._deregisterScreenSizeListener();
	
			if (this._oLazyLoading) {
				this._oLazyLoading.destroy();
			}
			// The lazy loading helper needs media information, hence instantiated on onBeforeRendering, where contextual width is available
			this._oLazyLoading = new LazyLoading(this);
	
			this._deregisterCustomEvents();
	
			if (!this.getVisible()) {
				return;
			}
	
			if (!this.getSelectedSection()) {
				this._bHeaderExpanded = true; // enforce to expanded header whenever selectedSection is reset
			}
	
			// this._bMobileScenario = library.Utilities.isPhoneScenario(this._getCurrentMediaContainerRange());
			// this._bTabletScenario = library.Utilities.isTabletScenario(this._getCurrentMediaContainerRange());
	
			// if (this._checkAlwaysShowContentHeader()) {
				this._bHeaderExpanded = true; // enforce to expanded header whenever the <code>alwaysShowContentHeader</code> takes effect (it takes effect depending on screen size and header type)
			// }
	
			this._bHeaderInTitleArea = this._shouldPreserveHeaderInTitleArea();
	
			this._createHeaderContent();
			// this._getHeaderContent().setContentDesign(this._getHeaderDesign());
			// this._oABHelper._getAnchorBar().setProperty("upperCase", this.getUpperCaseAnchorBar(), true);
	
			// this._storeScrollLocation(); // store location *before* applying the UXRules (=> while the old sectionInfo with positionTop of sections is still available)
			// this._applyUxRules();
	
			// set the <code>scrollPosition</code> of custom scrollBar back to initial value,
			// otherwise in the scrollBar's <code>onAfterRendering</code> it will scroll to its last valid <code>scrollPosition</code> => will propagate the scroll to the <code>ObjectPageLayout</code> content container =>
			// and get in conflict with the scroll of the <code>ObjectPageLayout</code> content container to its own *newly chosen* scroll position
			this._getCustomScrollBar().setScrollPosition(0);
	
			// If we are on the first true rendering : first time we render the page with section and blocks
			if (!jQuery.isEmptyObject(this._oSectionInfo) && this._bFirstRendering) {
				this._preloadSectionsOnBeforeFirstRendering();
				this._bFirstRendering = false;
			}
	
			this._bStickyAnchorBar = false; //reset default state in case of re-rendering
	
			// Detach expand button press event
			this._handleExpandButtonPressEventLifeCycle(false);
			this._attachTitlePressHandler();
	
			oHeaderContent = this._getHeaderContent();
			if (oHeaderContent && oHeaderContent.supportsPinUnpin()) {
				bPinnable = this.getHeaderContentPinnable() && !this.getPreserveHeaderStateOnScroll();
				this._getHeaderContent().setPinnable(bPinnable);
				if (bPinnable) {
					this._attachPinPressHandler();
				}
			}
	
			this._attachVisualIndicatorsPressHandlers(this._handleDynamicTitlePress, this);
			this._attachVisualIndicatorMouseOverHandlers(this._addHoverClass, this._removeHoverClass, this);
			this._attachTitleMouseOverHandlers(this._addHoverClass, this._removeHoverClass, this);
	
		};

		CusPageLayout.prototype.onAfterRendering = function() {
			//var oHeaderContent = this._getHeaderContent(),
		//	oFooter = this.getFooter(),
		//	sFooterAriaLabel,
		//	iWidth = this._getWidth(this);

	/* 	this._iResizeId = ResizeHandler.register(this, this._onUpdateScreenSize.bind(this)); */

//		this._ensureCorrectParentHeight();

//		this._cacheDomElements();

	//	if (this._hasDynamicTitle()) {
	//		this.addStyleClass("sapUxAPObjectPageHasDynamicTitle");
	//	}

		/* if (iWidth > 0) {
			this._updateMedia(iWidth, ObjectPageLayout.MEDIA);
		} */

		// this._$opWrapper.on("scroll.OPL", this._onScroll.bind(this));

		//the dom is already ready (re-rendering case), thus we compute the header immediately
		//in order to avoid flickering (see Incident 1570011343)
		/* if (this._bDomReady && this.$().parents(":hidden").length === 0) {
			this._onAfterRenderingDomReady();
		} else {
			// schedule instead
			if (this._iAfterRenderingDomReadyTimeout) { // if the page was rerendered before the previous scheduled task completed, cancel the previous
				clearTimeout(this._iAfterRenderingDomReadyTimeout);
			}
			this._iAfterRenderingDomReadyTimeout = setTimeout(this._onAfterRenderingDomReady.bind(this), this._getDOMCalculationDelay());
		} */

	/* 	if (oHeaderContent && oHeaderContent.supportsPinUnpin()) {
			this.$().toggleClass("sapUxAPObjectPageLayoutHeaderPinnable", oHeaderContent.getPinnable());
		} */

	//	if (oFooter) {
	//		sFooterAriaLabel = ObjectPageLayout._getLibraryResourceBundle().getText("FOOTER_ARIA_LABEL");
		//	oFooter.$().attr("aria-label", sFooterAriaLabel);
	//	}

		// Attach expand button event
		this._handleExpandButtonPressEventLifeCycle(true);
		};

		CusPageLayout.prototype._onHeaderResize = function (oEvent) {
			console.log("do nothing");
			// this._adaptLayout();
			// if (this.getParent() && typeof this.getParent()._onUpdateHeaderTitleSize === "function") {
			// 	this.getParent()._onUpdateHeaderTitleSize(oEvent);
			// }
		};




		return CusPageLayout;
	}, /* bExport= */ true);
}(jQuery));