(function() {
    'use strict';
    angular
        .module('app.auth')
        .factory('AuthInterceptor', AuthInterceptor)
    ;

    AuthInterceptor.$inject = ['AuthToken'];

    function AuthInterceptor(AuthToken) {
        return {
            request: function (config) {
                var token = AuthToken.getToken();
                if (token) {
                    config.headers.Authorization = 'Bearer ' + token;
                }

                return config;
            },
            response: function(response) {
                return response;
            }
        };
    }
}).call(this);
