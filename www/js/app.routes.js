(function () {
    'use strict';
    angular.module('app')
    .config(appRoutes);

    appRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

    /* @ngInject */
    function appRoutes($stateProvider, $urlRouterProvider) {

        // Each state's controller can be found in controllers.js
        $stateProvider

        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html',
            authNotAllowed: true
        })

        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'AccountLoginCtrl as vm',
            authNotAllowed: true

        })
        .state('logout', {
            url: '/logout',
            controller: 'AccountLogoutCtrl as vm'
        })
        .state('register', {
            url: '/signin',
            templateUrl: 'templates/register.html',
            controller: 'AccountRegisterCtrl as vm',
            authNotAllowed: true
        })

        // setup an abstract state for the tabs directive
        .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'templates/tabs.html'
        })

        // Each tab has its own nav history stack:
        .state('tab.dash', {
            url: '/dash',
            views: {
                'tab-dash': {
                    templateUrl: 'templates/tab-dash.html',
                    controller: 'DashCtrl as vm'
                }
            },
            authRequired: true
        })

        .state('tab.chats', {
            url: '/chats',
            views: {
                'tab-chats': {
                    templateUrl: 'templates/tab-chats.html',
                    controller: 'ChatsCtrl as vm'
                }
            },
            authRequired: true
        })

        .state('tab.chat-detail', {
            url: '/chats/:chatId',
            views: {
                'tab-chats': {
                    templateUrl: 'templates/chat-detail.html',
                    controller: 'ChatDetailCtrl as vm'
                }
            },
            authRequired: true
        })

        .state('tab.account', {
            url: '/account',
            views: {
                'tab-account': {
                    templateUrl: 'templates/tab-account.html',
                    controller: 'AccountCtrl as vm'
                }
            },
            authRequired: true
        });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/');
    }
}).call(this);
