/*global define*/

define([
    'underscore',
    'backbone',
    'models/user-model'
], function (_, Backbone, UserModel) {
    'use strict';

    var UserCollection = Backbone.Collection.extend({
        model: UserModel
    });

    return UserCollection;
});