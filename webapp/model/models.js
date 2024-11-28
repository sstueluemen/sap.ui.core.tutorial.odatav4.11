sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device",
	"sap/ui/model/resource/ResourceModel"
], function (JSONModel, Device, ResourceModel) {
	"use strict";

	return {

		createDeviceModel : function () {
			var oModel = new JSONModel(Device);

			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		}

	};
});
