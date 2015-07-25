(function () {
    'use strict';

    angular.module('app')
    .run(appRun);

    appRun.$inject = ['$rootScope', '$state', '$location', 'AuthToken'];

    /* @ngInject */
    function appRun($rootScope, $state, $location, AuthToken) {
        $rootScope.isAuthenticated = AuthToken.isAuthenticated;

        $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams) {
                if (toState.authNotAllowed  && $rootScope.isAuthenticated()) {
                    $location.path('/tab/account');
                }

                if (toState.authRequired && !$rootScope.isAuthenticated()) {
                    console.log('Redirect To Login');
                    $location.path('/login');
                }
            }
        );
    }
}).call(this);
