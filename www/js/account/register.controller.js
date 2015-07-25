(function() {
    'use strict';

    angular
        .module('app.account')
        .controller('AccountRegisterCtrl', AccountRegisterCtrl)
    ;

    AccountRegisterCtrl.$inject = ['$scope', '$q', '$ionicPopup', '$location', 'auth'];

    /**
     *
     */
    function AccountRegisterCtrl($scope, $q, $ionicPopup, $location, auth) {
        var vm = this;
        var promises = [];

        vm.submit = submit;

        activate();

        /** **/
        function activate() {
        }

        /** **/
        function submit() {
            auth.register(vm.username, vm.email, vm.password)
                .success(function(res) {
                    $location.path('/tab/account');
                })
                .error(function(err) {
                    showError(err.message);
                });
        }

        /** **/
        function showError(msg) {
            var alertPopup = $ionicPopup.alert({
                title: 'Registration Error!',
                template: msg
            });
            alertPopup.then(function(res) {
            });
        }
    }
}).call(this);
