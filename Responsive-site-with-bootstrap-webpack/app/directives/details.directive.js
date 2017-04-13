/*
* Directive for <email-details></email-details> template
*/
angular
    .module('pure360')
    .directive('emailDetails', emailDetails);

function emailDetails() {
    var emailDetail = {
        link : linkFunc,
        templateUrl: 'app/views/details.html',
        restrict: 'EA',
        transclude: false,
        controller: detailController,
        controllerAs: 'vm',
        bindToController: true 
    };
    return emailDetail;
    
    function linkFunc(scope, elem, attr, vm) {

         scope.html = function() {       
            vm.showHide = false;
        };

        scope.plainText = function() {            
            vm.showHide = true;
        };       
    }

    function detailController($stateParams, dataService) {        
        var vm = this;        
        vm.emailId = $stateParams.id;
        vm.showHide = false;

        fetchDetail();

        function fetchDetail() {
            if(vm.emailId) {
                return dataService.emailDetail(vm.emailId).then(function(response) {
                    vm.emailDetail = response;                    
                    return vm.emailDetail;
                });    
            } 
        }                  
    }
}