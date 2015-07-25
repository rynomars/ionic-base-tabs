(function() {
    'use strict';

    angular
        .module('app.auth')
        .service('auth', auth)
    ;

    auth.$inject = ['$http', 'API_URL', 'AuthToken'];

    function auth($http, API_URL, AuthToken) {
        return {
            login: login,
            register: register
        };

        function authSuccessful(res) {
            AuthToken.setToken(res.token);
            console.log('Authenticated');
        }

        function login(username, password) {
            return $http.post(API_URL + 'auth/login',
                    {
                        username:username,
                        password:password
                    }
                )
                .success(authSuccessful);
        }

        function register(username, email, password) {
            return $http.post(API_URL + 'auth/register',
                    {
                        username:username,
                        email:email,
                        password:password
                    }
                )
                .success(authSuccessful);
        }
    }

}).call(this);
