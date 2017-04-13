/*
* Directive for <email-lists></email-lists> template
*/
angular
    .module('pure360')
    .directive('emailLists', emailLists);

function emailLists() {
    
    var emailList = {
        templateUrl: 'app/views/home.html',
        restrict: 'EA',
        transclude: false,
        controller: emailController,
        controllerAs: 'vm',
        bindToController: true 
    };
    return emailList;
    
    function emailController(dataService) {        
        var vm = this;
        fetchEmails();

        function fetchEmails() {
            return dataService.emailsList().then(function(response) {
                vm.itemsList = response.items;
                return vm.itemsList;
            });
        }              
    }
}