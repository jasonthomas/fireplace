var helpers = require('../../helpers');

helpers.startCasper({path: '/feed/editorial/kevins-bonanza'});

casper.test.begin('Brand landing page tests', {
    test: function(test) {
        casper.waitForSelector('.brand-landing', function() {
            test.assertVisible('.brand-landing .app', 'Assert apps');

            // Test model cache.
            casper.then(function() {
                var modelCount = casper.evaluate(function() {
                    return Object.keys(window.require('models')('app').data_store.app).length;
                });
                test.assertEqual(modelCount, 6, 'Assert model cache');
            });
        });

        casper.run(function() {
            test.done();
        });
    }
});
