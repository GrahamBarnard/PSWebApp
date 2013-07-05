/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
], function ($, _, Backbone, JST, EventModel) {
    'use strict';

    var EventView = Backbone.View.extend({
        template: JST['app/scripts/templates/event.ejs'],
        tagName: "li",

        initialize: function() {
            this.model.on('change', this.render, this);
        },
        
        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });

    return EventView;
});


