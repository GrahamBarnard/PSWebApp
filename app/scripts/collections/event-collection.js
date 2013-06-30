/*global define*/

define([
    'underscore',
    'backbone',
    'models/event-model'
], function (_, Backbone, EventModel) {
    'use strict';

    var EventCollection = Backbone.Collection.extend({
        model: EventModel
    });

    return EventCollection;
});