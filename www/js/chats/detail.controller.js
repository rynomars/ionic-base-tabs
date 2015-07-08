(function() {
   'use strict';

    angular
        .module('app.chats')
        .controller('ChatDetailCtrl', ChatDetailCtrl)
    ;   

    ChatDetailCtrl.$inject = ['$q', '$stateParams', 'ChatsDataService'];

    /** 
     *
     */
    function ChatDetailCtrl($q, $stateParams, Chats) {
        var vm = this;
        var promises = []; 

        vm.chat = Chats.get($stateParams.chatId).then(function (data) { return vm.chat = data } );
        promises.push(vm.chat);

        activate();

        /** **/
        function activate() {
            return $q.all(promises).then(function() { }); 
        }   
    }   
}).call(this);
