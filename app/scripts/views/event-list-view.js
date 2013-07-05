/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/event-collection',
    'views/event-view'
], function ($, _, Backbone, JST, EventCollection, EventView) {
    'use strict';

    var EventListView = Backbone.View.extend({
        template: JST['app/scripts/templates/event-list.ejs'],

        initialize: function() {
            var that = this;

            that.events = new EventCollection();

            that.events.fetch({ 
                success: function (data) {
                    $("#events").html(that.render().el);
                },
                error: function (data) {
                    alert("error");
                }
            });
        },
        addAll: function(){
            this.$el.empty();
            this.events.forEach(this.addOne, this);
        },
        addOne: function(eventModel){
            var eventView = new EventView({model: eventModel});
            this.$el.append(eventView.render().el);
        },
        render: function(){
            this.addAll();
            return this;
        }
    });
    return EventListView;
});