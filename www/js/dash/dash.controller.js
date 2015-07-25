(function() {
    'use strict';

    angular
        .module('app.dash')
        .controller('DashCtrl', DashCtrl)
    ;

    DashCtrl.$inject = ['$q'];

    /**
     *
     */
    function DashCtrl($q) {
        var vm = this;
        var promises = [];

        activate();

        /** **/
        function activate() {
            return $q.all(promises).then(function() { });
        }
    }
}).call(this);
