(function() {
    'use strict';

    angular
        .module('app.account')
        .controller('AccountLogoutCtrl', AccountLogoutCtrl)
    ;

    AccountLogoutCtrl.$inject = ['$q', '$location', 'AuthToken'];

    /**
     *
     */
    function AccountLogoutCtrl($q, $location, AuthToken) {
        var vm = this;

        activate();

        /** **/
        function activate() {
            AuthToken.removeToken();
            $location.path('/');
        }
    }
}).call(this);
