sap.ui.define(
  [
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    'com/sap/sme/x4/uidesigner/model/OberonModel',
    'com/sap/sme/x4/uidesigner/model/CommandInvoker',
    'com/sap/sme/x4/uidesigner/util/Constant',
    'com/sap/sme/x4/uidesigner/thirdparty/lodash'
  ],
  function(UIComponent, JSONModel, OberonModel, CommandInvoker, Constant, _) {
    'use strict'

    return UIComponent.extend('com.sap.sme.x4.uidesigner.Component', {
      metadata: {
        manifest: 'json'
      },

      init: function() {
        UIComponent.prototype.init.apply(this, arguments)
        var oData = {
          recipient: {
            name: 'World'
          }
        }
        var oModel = new JSONModel(oData)
        this.setModel(oModel)

        var oNewModel = new OberonModel()
        sap.ui.getCore().setModel(oNewModel, Constant.ModelName.OberonTree)
        var oCommandInvoker = new CommandInvoker()
        sap.ui.getCore().setModel(oCommandInvoker, Constant.ModelName.CommandInvoker)
      }
    })
  }
)
