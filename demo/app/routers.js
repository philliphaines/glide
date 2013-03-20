// Generated by CoffeeScript 1.6.2
(function() {
  var AppRouter, _ref, _ref1,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AppRouter = (function(_super) {
    __extends(AppRouter, _super);

    function AppRouter() {
      _ref = AppRouter.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    AppRouter.prototype.routes = {
      '': 'index',
      'getting-started': 'gettingStarted',
      'fixed-header-footer': 'fixedHeaderFooter',
      'transitions': 'transitions',
      'slide': 'slide',
      'slideUp': 'slideUp',
      'contacts': 'contacts',
      'contacts/:id': 'showContact',
      'created-by': 'createdBy',
      'contribute': 'contribute'
    };

    AppRouter.prototype.index = function() {
      return glide.to('#index');
    };

    AppRouter.prototype.gettingStarted = function() {
      return glide.to('#getting-started');
    };

    AppRouter.prototype.fixedHeaderFooter = function() {
      return glide.to('#fixed-header-footer');
    };

    AppRouter.prototype.transitions = function() {
      return glide.to('#transitions');
    };

    AppRouter.prototype.slide = function() {
      return glide.to('#slide');
    };

    AppRouter.prototype.slideUp = function() {
      return glide.to('#slideUp');
    };

    AppRouter.prototype.contacts = function() {
      var view;

      view = new app.Views.Contacts({
        collection: app.Collections.Contacts
      });
      view.render();
      return glide.to('#contacts');
    };

    AppRouter.prototype.showContact = function(id) {
      var model, view, _ref1;

      model = (_ref1 = app.Collections.Contacts) != null ? _ref1.get(id) : void 0;
      view = new app.Views.ContactsShow({
        model: model
      });
      view.render();
      return glide.to('#contact-page');
    };

    AppRouter.prototype.createdBy = function() {
      return glide.to('#created-by');
    };

    AppRouter.prototype.contribute = function() {
      return glide.to('#contribute');
    };

    return AppRouter;

  })(Backbone.Router);

  this.app = (_ref1 = window.app) != null ? _ref1 : {};

  this.app.Routers.AppRouter = AppRouter;

}).call(this);
