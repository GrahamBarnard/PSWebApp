/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/user-model',
], function ($, _, Backbone, JST, UserModel) {
    'use strict';

    var UserView = Backbone.View.extend({
        template: JST['app/scripts/templates/user.ejs'],

        initialize: function() {
            var that = this;
            var yep = function() {}
            var nope = function() {}

            that.user = new UserModel([]); 

            that.user.fetch({ success : yep, error : nope, dataType: "json" });
            
            $("#login").html(this.render().el);
        },
        render: function() {
            this.$el.html(this.template(this.user.attributes));
            return this;
        }
    });

    return UserView;
});