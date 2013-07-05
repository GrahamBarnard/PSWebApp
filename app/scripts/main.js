/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone-amd/backbone',
        underscore: '../bower_components/underscore-amd/underscore',
        bootstrap: 'vendor/bootstrap'
    },
    config: {
        users: 'http://localhost:5000/users/',
        events: 'http://localhost:5000/events/',
        photos: 'http://localhost:5000/photos/'
    }
});

require([
    'backbone',
    'routes/App-router'
], function (Backbone, AppRouter) {
    AppRouter.initialize();
});