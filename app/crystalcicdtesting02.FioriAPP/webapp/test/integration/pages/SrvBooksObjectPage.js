sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'crystalcicdtesting02.FioriAPP',
            componentId: 'SrvBooksObjectPage',
            entitySet: 'SrvBooks'
        },
        CustomPageDefinitions
    );
});