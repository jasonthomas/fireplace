var config = require('commonplace').config;
var extend = require('node.extend');

var LIB_DEST_PATH = config.LIB_DEST_PATH;

var localConfig = extend(true, {
    bowerConfig: {
        // Bower configuration for which files to get, and where to put them.
        // [Source, excluding bower_components]: [Destination].
        'document-register-element/build/document-register-element.max.js': config.LIB_DEST_PATH,
        'flipsnap/flipsnap.js': config.LIB_DEST_PATH,
        'salvattore-moox/dist/salvattore.js': config.LIB_DEST_PATH,
    },
    cssBundles: {
        'splash.css': ['splash.styl.css']
    },
    cssExcludes: ['fxa.css', 'splash.styl.css'],
    requireConfig: {
        // RequireJS configuration for development, notably files in lib/.
        // [Module name]: [Module path].
        paths: {
            'document-register-element': 'lib/document-register-element.max',
            'flipsnap': 'lib/flipsnap',
            'salvattore': 'lib/salvattore',
        },
        shim: {
            'flipsnap': {
                'exports': 'Flipsnap'
            },
            'document-register-element': {
                'exports': 'window.document.registerElement'
            },
            'salvattore': {
                'exports': 'salvattore'
            }
        }
    },
    BOWER_PATH: config.BOWER_PATH || 'bower_components/',
    PORT: 8675,
    packageConfig: {
        'prod': {
            domain: 'https://marketplace.firefox.com',
            media_url: 'https://marketplace.cdn.mozilla.net/media/',
            name: 'Marketplace',
            origin: 'app://packaged.marketplace.firefox.com',
            iframe_origin: 'app://marketplace.firefox.com'
        },
        'dev': {
            domain: 'https://marketplace-dev.allizom.org',
            media_url: 'https://marketplace-dev.mozflare.net/media/',
            name: 'Dev',
            origin: 'app://packaged.marketplace-dev.allizom.org',
            iframe_origin: 'app://marketplace-dev.allizom.org'
        },
        'stage': {
            domain: 'https://marketplace.allizom.org',
            media_url: 'https://marketplace-stage.cdn.mozilla.net/media/',
            name: 'Stage',
            origin: 'app://packaged.marketplace.allizom.org',
            iframe_origin: 'app://marketplace.allizom.org'
        },
        'altdev': {
            domain: 'https://marketplace-altdev.allizom.org',
            media_url: 'https://marketplace-altdev-cdn.allizom.org/media/',
            name: 'AltDev',
            origin: 'app://packaged.marketplace-altdev.allizom.org',
            iframe_origin: 'app://marketplace-altdev.allizom.org'
        },
        'paymentsalt': {
            domain: 'https://payments-alt.allizom.org',
            media_url: 'https://payments-alt-cdn.allizom.org/media/',
            name: 'PaymentsAlt',
            origin: 'app://packaged.payments-alt.allizom.org',
            iframe_origin: 'app://payments-alt.allizom.org'
        },
        'feeddev': {
            domain: 'https://marketplace-feed-dev.allizom.org',
            media_url: 'https://marketplace-feed-dev.allizom.org/media/',
            name: 'FeedDev',
            origin: 'app://packaged.marketplace-feed-dev.allizom.org',
            iframe_origin: 'app://marketplace-feed-dev.allizom.org'
        }
    }
}, config);

localConfig.inlineRequireConfig = config.makeInlineRequireConfig(
    localConfig.requireConfig);

module.exports = localConfig;
