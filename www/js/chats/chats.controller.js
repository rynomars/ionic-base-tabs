(function() {
    'use strict';

    angular
        .module('app.chats')
        .controller('ChatsCtrl', ChatsCtrl)
    ;

    ChatsCtrl.$inject = ['$q', 'ChatsDataService'];

    /**
     *
     */
    function ChatsCtrl($q, Chats) {
        var vm = this;
        var promises = [];

        vm.remove = Remove;

        vm.chats = Chats.all().then(function(data) { vm.chats = data; });
        promises.push(vm.chats);

        function Remove(chat) {
            Chats.remove(chat);
        }

        activate();

        /** **/
        function activate() {
            return $q.all(promises).then(function() { });
        }
    }
}).call(this);
