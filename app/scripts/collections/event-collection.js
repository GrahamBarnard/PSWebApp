/*global define*/
define([
    'underscore',
    'backbone',
    'models/event-model'
], function (_, Backbone, EventModel) {
    'use strict';

    var EventCollection = Backbone.Collection.extend({
        model: EventModel,
        url: 'http://localhost:5000/users/1/events' 
    }); 

    return EventCollection;
});