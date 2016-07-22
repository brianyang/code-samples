(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q', '$http', UserService]);

  /**
   * Users DataService
   * asynchronously request remote data
   *
   * @returns {{loadAllUsers: Function}}
   * @constructor
   */
  function UserService($q, $http){

    var url = 'https://crossorigin.me/http://www.mocky.io/v2/57392a360f00008512b121d8'
      , users = $http.get(url)

    // Promise-based API
    return {
      loadAllUsers : function() {
        return $q.when(users);
      }
    };
  }

})();
