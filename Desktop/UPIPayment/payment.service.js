(function () {
    'use strict';
angular.module('myApp').factory('paymentService', paymentService);
	function paymentService($http, $q){
	return {
	validateVPACheck:validateVPACheck,
        upiPayment:upiPayment,
 	getAuthorization:getAuthorization,
	onWalletRequest:onWalletRequest,
	getCheckWalletUpdate:getCheckWalletUpdate
		}

function getCheckWalletUpdate(dbObj){
         	var deferred = $q.defer();
       		$http({
		    method: 'POST',
		    url: 'http://15.15.15.168:8080/testspring/api/checkWalletUpdateResponse',
		    data: JSON.stringify(dbObj),
		    headers: { 'Content-Type': 'application/json' }
        	}).then(function mySuccess(response) {
			deferred.resolve(response);
    		}, function myError(err) {
			deferred.reject(err);;
    		});
 		return deferred.promise;
	}
function onWalletRequest(dbObj){
		console.log("onWalletRequest");
		console.log(dbObj);
         	var deferred = $q.defer();
       		$http({
		    method: 'POST',
		    url: 'http://15.15.15.168:8080/testspring/api/walletTransactionRequest',
		    data: JSON.stringify(dbObj),
		    headers: { 'Content-Type': 'application/json' }
        	}).then(function mySuccess(response) {
                       console.log(response);
			deferred.resolve(response);
    		}, function myError(err) {
			deferred.reject(err);;
    		});
 		return deferred.promise;
	}	


  	function getAuthorization(dbObj){
		console.log("getAuthorization");
		console.log(dbObj);
         	var deferred = $q.defer();
       		$http({
		    method: 'POST',
		    url: 'http://15.15.15.168:8080/testspring/api/getAuthorization',
		    data: JSON.stringify(dbObj),
		    headers: { 'Content-Type': 'application/json' }
        	}).then(function mySuccess(response) {
                       console.log(response);
			deferred.resolve(response);
    		}, function myError(err) {
			deferred.reject(err);;
    		});
 		return deferred.promise;
	}


	function upiPayment(dbObj){
console.log("Upi");
console.log(dbObj)
 var deferred = $q.defer();
       $http({
            method: 'POST',
            url: 'http://15.15.15.168:8080/testspring/upiPayment',
            data: JSON.stringify(dbObj),
            headers: { 'Content-Type': 'application/json' }
        }).then(function mySuccess(response) {
       deferred.resolve(response);
    }, function myError(err) {
	deferred.reject(err);;
    });
 return deferred.promise;
	}


          function validateVPACheck(dbObj) {
      var deferred = $q.defer();
                    $http({
            method: 'POST',
            url: 'http://15.15.15.168:8080/testspring/upiVPACheck',
            data: JSON.stringify(dbObj),
            headers: { 'Content-Type': 'application/json' }
        }).then(function mySuccess(response) {
       deferred.resolve(response);
    }, function myError(err) {
	deferred.reject(err);;
    });
 return deferred.promise;
        };




	}	
})();







































































/*$http.get("http://15.15.15.167:8080/testspring/upiTest")
                    .then(function mySuccess(response) {
        console.log("successresponse");
	console.log(response);
    }, function myError(response) {
       console.log("errresponse")
	console.log(response);
    });*/
           



/* $http({
        method : "GET",
        url : 'http://15.15.15.167:8080/testspring/upiVPACheck'
    }).then(function mySuccess(response) {
        console.log("successresponse");
	console.log(response);
    }, function myError(response) {
       console.log("errresponse")
	console.log(response);
    });*/
/*$http.post("http://15.15.15.167:8080/testspring/upiVPACheck",dbObj).then(function mySuccess(response) {
        console.log("successresponse");
	console.log(response);
    }, function myError(response) {
       console.log("errresponse")
	console.log(response);
    });*/
            /*var deferred = $q.defer();
var urlBase="http://15.15.15.167:8080/testspring";
            $http.get(urlBase+"/upiTest")

                    .success(function (data) {
                        deferred.resolve(data);

                    }).error(function (err) {

                deferred.reject(err);

            });

            return deferred.promise;*/
