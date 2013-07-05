define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/event-list.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'LIST BANANAS';

}
return __p
};

this["JST"]["app/scripts/templates/event.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href="#events:' +
((__t = ( id )) == null ? '' : __t) +
'">' +
((__t = ( name )) == null ? '' : __t) +
'</a>';

}
return __p
};

this["JST"]["app/scripts/templates/photo.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>Your content here.</p>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/user.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form class="form-horizontal">\n  <div class="control-group">\n    <div class="controls"> \n      <input type="text" id="inputEmail" placeholder="Email">\n    </div>\n  </div>\n  <div class="control-group">\n    <div class="controls">\n      <input type="password" id="inputPassword" placeholder="Password">\n    </div>\n  </div>\n  <div class="control-group">\n    <div class="controls">\n      <button type="submit" class="btn">Sign in</button>\n    </div>\n  </div>\n</form>';

}
return __p
};

  return this["JST"];

});