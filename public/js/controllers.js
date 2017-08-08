angular.module('matrisearch.controller', [])

.controller('searchCtrl', function($scope, serviceDB, dataStorage, $location) {
   
   $scope.educationList = ["BE", "B.Com", "BA", "BSc", "diploma", "MBBS", "SSLC"];
   $scope.pincodeList = ["560003", "560010", "560019", "560040"];
   $scope.suburbList = ["HanumanthaNagara", "Malleshvara", "RajajiNagara", "VijayaNagara"];
   $scope.gothraList = ["Aathreyasa", "Bhaaradvaaja", "Gauthama", "Kaundinya"];
   $scope.vedaList = ["Ruk", "Saama", "Yajus"];
   $scope.occupationList = ["business", "govt job", "pvt job", "unemployed"];
   $scope.hobbiesList = ["cricket", "football", "meditation", "music", "painting", "travel"];
   $scope.maritalStatusList = ["married & continuing", "married but divorced", "married but widowed", "not yet married"];
   $scope.numOfKidsList = ["0", "1", "2"];
   $scope.searchDetails = {};
   $scope.userMsg = "";

   $scope.searchMembers = function() {
       console.log('entered search members');
      console.log($scope.searchDetails); 
     var promise = serviceDB.toServerGET($scope.searchDetails, '/getMembersByFilter');
     promise.then(function(res) {
        console.log(res.data);
        if(res.data.done && res.data.data.length) {
            dataStorage.put(JSON.stringify(res.data));
            $location.path('/matchedList');
        } 
        else if(!res.data.done) {
            console.log(res.data.message);
            $scope.userMsg = res.data.message; 
        } else {
            console.log('no results found');
            $scope.userMsg = "No results found"
        }
     }, function() {
        console.log('error'); 
     }) 
   } 
})

.controller('matchedListCtrl', function($scope, dataStorage, $location) {

   $scope.profilesList =  JSON.parse(dataStorage.get());
   console.log($scope.profilesList);

   $scope.viewProfile = function(profile) {
       dataStorage.putProfile(JSON.stringify(profile));
       $location.path('/viewProfile'); 
   }
})

.controller('viewProfileCtrl', function($scope, dataStorage) {
    $scope.curProfile =  JSON.parse(dataStorage.getProfile());
})