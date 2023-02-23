sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'crystalcicdtesting02.FioriAPP',
            componentId: 'SrvBooksList',
            entitySet: 'SrvBooks'
        },
        CustomPageDefinitions
    );
});