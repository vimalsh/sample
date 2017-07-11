(function () {
    'use strict';
var app=angular.module('myApp',['ui.router']);
 app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
 }]);
app.controller("mycontrol",function($scope,$http,paymentService,$timeout,$interval){

	init();

	function init(){
		var merchant=getAuthorizationObj();
		console.log("merchant");
		console.log(merchant);
		paymentService.getAuthorization(merchant).then(function (data) {
			console.log("data");
			console.log(data);
		});
	}

	$scope.value={};
$scope.onWalletClick=function(){
var walletObj=getWalletObj();
paymentService.onWalletRequest(walletObj).then(function(data){
$scope.resultData=data.data;
console.log("$scope.resultData")
console.log($scope.resultData)
 $timeout( function(){
//alert("coming")
         var result = document.getElementById("formSubmit").submit();
     //document.InnotymMobiKwikForm.submit();
     }, 100 );
var resultvim=setInterval(callAtInterval, 5000);
//var result = document.getElementById("formSubmit").click();
})
}
	function callAtInterval(){
	var merchant=getcheckObj();
	paymentService.getCheckWalletUpdate(merchant).then(function (data) {
console.log("data");
console.log(data.data.status)
			if(data.data.status == "success"){
			console.log("1")
alert("its working")
			}else{
			console.log("0")
			}
		});
	}
	$scope.onPayClick=function(paymentform){
      	var dbObj = getCheckVPAOBJ();
	$scope.submitted = true;
      	if (!paymentform.$valid )
                return;

	paymentService.validateVPACheck(dbObj).then(function (data) {
		var result=data.data.result;
			if(result == "VE"){
				$scope.validateUPIResult=false;
				var upiObj=upiCheck();
				paymentService.upiPayment(upiObj).then(function (data) {
			});
			}else{
				$scope.validateUPIResult=true;
			}
		});
	}

//to wallet
function getWalletObj(){
var dbobj={
"pgPproviderName":"MOBIKWIK",
"paymentThrough":"MOBIKWIK",
"merchantKey":"AM_POWER",
"transId":"TEST-40685",
"transAmt":"51.00"
};
return dbobj;
}
function getcheckObj(){
var dbobj={
"merchantKey":"AM_POWER",
"transId":"TEST-106218",
"transAmt":"51.00"
};
return dbobj;
}

//to set merchant object
function getAuthorizationObj(){
	var merchantObj={
     		merchantKey:"AM_POWER",
		amount:"51.00",
		txnId:"TEST-40685",
		custName:"Geetha",
		custEmail:"geetha@gmail.com",
		custPhone:"968523474",
		redirectUrl:"nvkgjsd@gmail.com",
		paymentChannel:"Cash",
		productInfo:"test",
		address:"No:45,bharathi nagar",
		city:"Chennai",
		state:"TN",
		zipCode:"600145", 
                pgProvider:"",
                appName:"",
		device_id:"",	
		payment_through:"",
		api:"",
		mode:""
	}
	return merchantObj;
}
	var obj={
pg_provider_name:"HDFC",
pg:"UPI",
paymentchannel:"WEB",
merchantkey:"AM_POWER",
UPITxnID:"168021",
txnId:"TEST-9299"
}

function upiCheck(){
var dbObj={
 txnid:"TEST-9299",
vpaaddress:$scope.value.vpaaddress,
amount:"250.00",
remarks:$scope.value.remarks,
exptime:"2",
pg_provider_name:"HDFC",
pg:"UPI",
paymentchannel:"WEB",
merchantkey:"AM_POWER"
}
 return dbObj;
}

function getCheckVPAOBJ(){
      var dbObj={
      vpaaddress:$scope.value.vpaaddress,
      pg_provider_name:"HDFC",
      pg:"UPI",
      key:"AM_POWER",
      paymentchannel:"WEB",
      txnid:"TEST-9299"
       };
/*var dbObj={
pincode:600099,
area:"",
merchantName:""
}*/
    return dbObj;
    };
});
 
})();
