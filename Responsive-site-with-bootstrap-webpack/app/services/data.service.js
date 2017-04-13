/*
* Pure360 Data service
* Fetch the list of emails and their details
*/
angular.module('pure360').factory('dataService', DataService);

function DataService($http) { 
    var service = {
        emailsList: emailsList,
        emailDetail: emailDetail
    };
    return service;

    /*
    * Fetch emails lists 
    */

    function emailsList() {
        return $http.get('app/api/emails.json')
            .then(getCompleteList)
            .catch(getFailedDetails);

        function getCompleteList(response) {
           return response.data.collection;
        }

        function getFailedDetails(error) {
            console.log('XHR Failed for emailsList().' + error);
        }
    }

    /*
    *   Fetch email details    
    */

    function emailDetail(id) {        
        return $http.get('app/api/email-' + id + '.json')
            .then(getCompleteDetail)
            .catch(getFailedDetails);

        function getCompleteDetail(response) {
           return response.data;
        }

        function getFailedDetails(error) {
            console.log('XHR Failed for emailDetail().' + error.data);
        }
    } 
}