angular.module("noteApp", []);

var nApp = angular.module("noteApp");

//testing code for index.html
//asp.net web api 2 should enable cors for this web site, 
nApp.config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
nApp.filter('getById', function () {
    return function (input, id) {
        var i = 0, len = input.length;
        for (; i < len; i++) {
            if (input[i].ID === id) {
                return input[i];
            }
        }
        return null;
    }
});
nApp.filter('lowestPrice', function () {

    return function (input) {

        var lowest = Number.POSITIVE_INFINITY;

        var highest = Number.NEGATIVE_INFINITY;

        var tmp;

        for (var i = input.length - 1; i >= 0; i--) {

            tmp = input[i].Price;

            if (tmp < lowest) lowest = tmp;

            if (tmp > highest) highest = tmp;

        }

        for (var i = input.length - 1; i >= 0; i--) {

            tmps = input[i].Price;

            if (tmps === lowest) {
                return input[i];
            }

        }

    }

});

nApp.component("mainContent", {
    template: '<ul ng-repeat="item in $ctrl.movieslist"><li>{{item.Title}}</li></ul>',
    bindings: { movieslist: '&' },
    controller: function ($http, $sce) {

        var headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        var url = "http://webjetapitest.azurewebsites.net/api/cinemaworld/movies?x-access-token=sjd1HfkjU83ksdsm3802k";

        $sce.trustAsResourceUrl(url);
        //not working, server side cors should accept this localhost url
        this.movieslist= $http.jsonp(url, { headers: headers }).
            success(function (data, status, headers, config) {
                console.log(data);
                console.log(status);
            }).
            error(function (data, status, headers, config) {
                console.log(status);
            });

     }
})
 


// this.movies = $http.get("http://webjetapitest.azurewebsites.net/api/cinemaworld/movies", {
// params: { 'x-access-token': 'sjd1HfkjU83ksdsm3802k', headers: headers }
// });
// console.log(this.movies);
//this.movies=['fighter','alien','machine man'];
//$.ajax({
//    type: "GET",
//    url: "http://webjetapitest.azurewebsites.net/api/cinemaworld/movies",
//    params: { 'x-access-token': 'sjd1HfkjU83ksdsm3802k', headers: headers },
//    async: true,
//    dataType: 'jsonp',   //you may use jsonp for cross origin request
//    crossDomain: true,
//    success: function (data, status, xhr) {
//        alert(xhr.getResponseHeader('Location'));
//    }
//});

//ajax call not working either, so server side cors enabling is necessary


