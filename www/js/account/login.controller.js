(function() {
    'use strict';

    angular
        .module('app.account')
        .controller('AccountLoginCtrl', AccountLoginCtrl)
    ;

    AccountLoginCtrl.$inject = ['$q', '$location', '$ionicPopup', 'auth'];

    /**
     *
     */
    function AccountLoginCtrl($q, $location, $ionicPopup, auth) {
        var vm = this;
        var promises = [];

        vm.submit = submit;

        activate();

        /** **/
        function activate() {
        }

        /** **/
        function submit() {
            auth.login(vm.username, vm.password)
                .success(function(res) {
                    $location.path('/tab/dash');
                })
                .error(function(err) {
                    showError(
                        'There was a problem with the username/email and password you provided'
                    );
                });
        }

        /** **/
        function showError(msg) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login Error!',
                template: msg
            });

            alertPopup.then(function(res) { });
        }
    }
}).call(this);
