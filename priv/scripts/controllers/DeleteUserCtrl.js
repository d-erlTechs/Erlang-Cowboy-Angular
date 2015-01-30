// Generated by CoffeeScript 1.8.0
(function() {
  var DeleteUserCtrl;

  DeleteUserCtrl = (function() {
    function DeleteUserCtrl($log, $location, UserService, $routeParams) {
      this.$log = $log;
      this.$location = $location;
      this.UserService = UserService;
      this.$routeParams = $routeParams;
      this.$log.debug("constructing DeleteUserController");
      this.user = {};
      this.deleteUser();
    }

    DeleteUserCtrl.prototype.deleteUser = function() {
      this.$log.debug("deleteUser()");
      return this.UserService.deleteUser(this.$routeParams.firstname).then((function(_this) {
        return function(data) {
          _this.$log.debug("Promise returned " + data + " User");
          return _this.user = data;
        };
      })(this), (function(_this) {
        return function(error) {
          return _this.$log.error("Unable to Delete User: " + error);
        };
      })(this));
    };

    return DeleteUserCtrl;

  })();

  controllersModule.controller('DeleteUserCtrl', DeleteUserCtrl);

}).call(this);