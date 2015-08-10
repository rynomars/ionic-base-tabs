(function () {
    'use strict';
    angular.module('app')
        .config(appConfig)
        .constant('API_URL', 'http://localhost:1337/api/')
    ;

    appConfig.$inject = ['$httpProvider'];

    /* @ngInject */
    function appConfig($httpProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
    }
}).call(this);
