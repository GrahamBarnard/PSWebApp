/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
], function ($, _, Backbone, JST) {
    'use strict';

    var EventView = Backbone.View.extend({
        template: JST['app/scripts/templates/event.ejs']
    });

    return EventView;
});