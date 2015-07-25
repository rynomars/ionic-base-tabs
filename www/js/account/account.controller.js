(function() {
    'use strict';

    angular
        .module('app.account')
        .controller('AccountCtrl', AccountCtrl)
    ;

    AccountCtrl.$inject = ['$q'];

    /**
     *
     */
    function AccountCtrl($q) {
        var vm = this;
        var promises = [];

        vm.settings = {
            enableFriends: true
        };

        activate();

        /** **/
        function activate() {
            return $q.all(promises).then(function() { });
        }
    }
}).call(this);
