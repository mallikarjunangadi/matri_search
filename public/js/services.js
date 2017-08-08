angular.module('matrisearch.services', [])

    .factory('serviceDB', function ($http, $q) {

        function toServerGET(doc2send, url) {
            var deferred = $q.defer();
            console.log(doc2send); 
            var req =
                {
                    method: 'GET',
                    url: url,
                    params: doc2send,
                    headers:
                    {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }

            $http(req).then(function (res) {
                //    console.log('service db success');
                deferred.resolve(res);
            }, function (res) {
                console.log('error ');
                deferred.reject(res);
            });

            return deferred.promise;
        }

        return {
            toServerGET: toServerGET
        }
    })

    .factory('dataStorage', function($window) {
        function put(profiles) {
            $window.localStorage['profiles'] = profiles;
        }

        function putProfile(selProfile) {
            $window.localStorage['selProfile'] = selProfile;
        }

        function get() {
            return $window.localStorage['profiles'];
        }

        function getProfile() {
            return $window.localStorage['selProfile'];
        }

        function remove() {
            $window.localStorage.removeItem('profiles');
        }

        function removeProfile() {
            $window.localStorage.removeItem('selProfile');
        }

        return {
            put : put,
            get : get,
            remove : remove,
            putProfile : putProfile,
            getProfile : getProfile,
            removeProfile : removeProfile
        }
    })
