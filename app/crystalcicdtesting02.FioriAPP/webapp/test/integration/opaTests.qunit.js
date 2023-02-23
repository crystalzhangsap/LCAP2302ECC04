sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'crystalcicdtesting02/FioriAPP/test/integration/FirstJourney',
		'crystalcicdtesting02/FioriAPP/test/integration/pages/SrvBooksList',
		'crystalcicdtesting02/FioriAPP/test/integration/pages/SrvBooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, SrvBooksList, SrvBooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('crystalcicdtesting02/FioriAPP') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSrvBooksList: SrvBooksList,
					onTheSrvBooksObjectPage: SrvBooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);