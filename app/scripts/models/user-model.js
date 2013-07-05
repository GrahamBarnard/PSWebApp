/*global define*/

define([
    'underscore',
    'backbone',
], function (_, Backbone) {
    'use strict';

    var UserModel = Backbone.Model.extend({
        defaults: {
        },
        urlRoot : 'http://localhost:5000/users/1',
    });

    return UserModel;
});