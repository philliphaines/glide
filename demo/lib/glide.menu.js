// Generated by CoffeeScript 1.4.0
(function() {
  var GlideMenu,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  GlideMenu = (function() {

    function GlideMenu(glide) {
      var _base,
        _this = this;
      this.glide = glide;
      this.toggle = __bind(this.toggle, this);

      this.close = __bind(this.close, this);

      this.menu = document.querySelector('#main-menu');
      (_base = this.glide.hooks)['before:to'] || (_base['before:to'] = []);
      this.glide.hooks['before:to'].push(function() {
        return _this.close();
      });
    }

    GlideMenu.prototype.close = function() {
      this.menu.style.display = 'none';
      return this.menuOpen = false;
    };

    GlideMenu.prototype.toggle = function() {
      var _this = this;
      if (this.menuOpen) {
        setTimeout(function() {
          return _this.glide.translate(_this.menu, 'X', '-110%', '0.3s');
        }, 10);
        setTimeout(function() {
          return _this.menu.style.display = 'none';
        }, 300);
        return this.menuOpen = false;
      } else {
        this.glide.translate(this.menu, 'X', '-110%', '0ms');
        setTimeout(function() {
          return _this.glide.translate(_this.menu, 'X', '0%', '0.3s');
        }, 50);
        this.menu.style.display = "block";
        return this.menuOpen = true;
      }
    };

    return GlideMenu;

  })();

  window.GlideMenu = GlideMenu;

}).call(this);
