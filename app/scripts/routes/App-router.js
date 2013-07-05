/*global define*/

define([
    'jquery',
    'backbone',
    'views/user-view',
    'views/event-list-view'
], function ($, Backbone, UserView, EventListView) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            'login': 'login',
            'events' : 'events'
        }
    });

    var initialize = function(){

        var app_router = new AppRouter;

        app_router.on('route:login', function(){
             var userView = new UserView();
        });

        app_router.on('route:events', function(){
             var eventListView = new EventListView();
        });

        Backbone.history.start();
    };
    return { 
        initialize: initialize
    };
});