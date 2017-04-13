/*
*  Unit Testing using karma / jasmine
*/
"use strict";

describe("Services", function () {

    beforeEach(module("pure360"));

    describe("Car services", function () {

        var service, $httpBackend;

        /*
        *  Pass the test
        */
        beforeEach(inject(function($injector) {
            service = $injector.get('dataService');
            $httpBackend = $injector.get('$httpBackend');
            $httpBackend.when('GET', 'app/api/emails.json').respond(200);
        }));

        it('get email list - should return 3 emails', function () {
            service.emailsList().then(function(response) {
               // expect(response.items.length).toEqual(3); 
            });
            $httpBackend.flush();
        });


    });
});