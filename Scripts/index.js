﻿angular.module("movieApp", []);

var mApp = angular.module("movieApp");

var datasofmovies = '{ "Movies": [ { "Title": "Star Wars: Episode IV - A New Hope", "Year": "1977", "ID": "cw0076759", "Type": "movie", "Poster": "http://ia.media-imdb.com/images/M/MV5BOTIyMDY2NGQtOGJjNi00OTk4LWFhMDgtYmE3M2NiYzM0YTVmXkEyXkFqcGdeQXVyNTU1NTcwOTk@._V1_SX300.jpg" }, { "Title": "Star Wars: Episode V - The Empire Strikes Back", "Year": "1980", "ID": "cw0080684", "Type": "movie", "Poster": "http://ia.media-imdb.com/images/M/MV5BMjE2MzQwMTgxN15BMl5BanBnXkFtZTcwMDQzNjk2OQ@@._V1_SX300.jpg" }, { "Title": "Star Wars: Episode VI - Return of the Jedi", "Year": "1983", "ID": "cw0086190", "Type": "movie", "Poster": "http://ia.media-imdb.com/images/M/MV5BMTQ0MzI1NjYwOF5BMl5BanBnXkFtZTgwODU3NDU2MTE@._V1._CR93,97,1209,1861_SX89_AL_.jpg_V1_SX300.jpg" }, { "Title": "Star Wars: The Force Awakens", "Year": "2015", "ID": "cw2488496", "Type": "movie", "Poster": "http://ia.media-imdb.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg" }, { "Title": "Star Wars: Episode I - The Phantom Menace", "Year": "1999", "ID": "cw0120915", "Type": "movie", "Poster": "http://ia.media-imdb.com/images/M/MV5BMTQ4NjEwNDA2Nl5BMl5BanBnXkFtZTcwNDUyNDQzNw@@._V1_SX300.jpg" }, { "Title": "Star Wars: Episode III - Revenge of the Sith", "Year": "2005", "ID": "cw0121766", "Type": "movie", "Poster": "http://ia.media-imdb.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg" }, { "Title": "Star Wars: Episode II - Attack of the Clones", "Year": "2002", "ID": "cw0121765", "Type": "movie", "Poster": "http://ia.media-imdb.com/images/M/MV5BMTY5MjI5NTIwNl5BMl5BanBnXkFtZTYwMTM1Njg2._V1_SX300.jpg" } ] }';

var detail = '[{ "Title": "Star Wars: Episode IV - A New Hope", "Year": "1977", "Rated": "PG", "Released": "25 May 1977", "Runtime": "121 min", "Genre": "Action, Adventure, Fantasy", "Director": "George Lucas", "Writer": "George Lucas", "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing", "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empires world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.", "Language": "English", "Country": "USA", "Awards": "Won 6 Oscars. Another 48 wins & 28 nominations.", "Poster": "http://ia.media-imdb.com/images/M/MV5BOTIyMDY2NGQtOGJjNi00OTk4LWFhMDgtYmE3M2NiYzM0YTVmXkEyXkFqcGdeQXVyNTU1NTcwOTk@._V1_SX300.jpg", "Metascore": "92", "Rating": "8.7", "Votes": "915,459", "ID": "cw0076759", "Type": "movie", "Price": "123.5" }, { "Title": "Star Wars: Episode VI - Return of the Jedi", "Year": "1983", "Rated": "PG", "Released": "25 May 1983", "Runtime": "131 min", "Genre": "Action, Adventure, Fantasy", "Director": "Richard Marquand", "Writer": "Lawrence Kasdan (screenplay), George Lucas (screenplay), George Lucas (story by)", "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams", "Plot": "After rescuing Han Solo from the palace of Jabba the Hutt, the rebels attempt to destroy the second Death Star, while Luke struggles to make Vader return from the dark side of the Force.", "Language": "English", "Country": "USA", "Awards": "Nominated for 4 Oscars. Another 18 wins & 16 nominations.", "Poster": "http://ia.media-imdb.com/images/M/MV5BMTQ0MzI1NjYwOF5BMl5BanBnXkFtZTgwODU3NDU2MTE@._V1._CR93,97,1209,1861_SX89_AL_.jpg_V1_SX300.jpg", "Metascore": "53", "Rating": "8.4", "Votes": "686,479", "ID": "cw0086190", "Type": "movie", "Price": "253.5" }, { "Title": "Star Wars: Episode V - The Empire Strikes Back", "Year": "1980", "Rated": "PG", "Released": "20 Jun 1980", "Runtime": "124 min", "Genre": "Action, Adventure, Fantasy", "Director": "Irvin Kershner", "Writer": "Leigh Brackett (screenplay), Lawrence Kasdan (screenplay), George Lucas (story by)", "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams", "Plot": "After the Rebel base on the icy planet Hoth is taken over by the Empire, Han, Leia, Chewbacca, and C-3PO flee across the galaxy from the Empire. Luke travels to the forgotten planet of Dagobah to receive training from the Jedi master Yoda, while Vader endlessly pursues him.", "Language": "English", "Country": "USA", "Awards": "Won 1 Oscar. Another 19 wins & 18 nominations.", "Poster": "http://ia.media-imdb.com/images/M/MV5BMjE2MzQwMTgxN15BMl5BanBnXkFtZTcwMDQzNjk2OQ@@._V1_SX300.jpg", "Metascore": "80", "Rating": "8.8", "Votes": "842,451", "ID": "cw0080684", "Type": "movie", "Price": "13.5" },{ "Title": "Star Wars: Episode II - Attack of the Clones", "Year": "2002", "Rated": "PG", "Released": "16 May 2002", "Runtime": "142 min", "Genre": "Action, Adventure, Fantasy", "Director": "George Lucas", "Writer": "George Lucas (screenplay), Jonathan Hales (screenplay), George Lucas (story by)", "Actors": "Ewan McGregor, Natalie Portman, Hayden Christensen, Christopher Lee", "Plot": "Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé, while Obi-Wan investigates an assassination attempt on the Senator and discovers a secret clone army crafted for the Jedi.", "Language": "English", "Country": "USA", "Awards": "Nominated for 1 Oscar. Another 16 wins & 53 nominations.", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDRkYzA4OGYtOTBjYy00YzFiLThhYmYtMWUzMDBmMmZkM2M3XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg", "Metascore": "54", "Rating": "6.7", "Votes": "469,134", "ID": "cw0121765", "Type": "movie", "Price": "12.5" },{ "Title": "Star Wars: Episode III - Revenge of the Sith", "Year": "2005", "Rated": "PG-13", "Released": "19 May 2005", "Runtime": "140 min", "Genre": "Action, Adventure, Fantasy", "Director": "George Lucas", "Writer": "George Lucas", "Actors": "Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiarmid", "Plot": "During the near end of the clone wars, Darth Sidious has revealed himself and is ready to execute the last part of his plan to rule the Galaxy. Sidious is ready for his new apprentice, Lord...", "Language": "English", "Country": "USA", "Awards": "Nominated for 1 Oscar. Another 25 wins & 51 nominations.", "Poster": "http://ia.media-imdb.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg", "Metascore": "68", "Rating": "7.6", "Votes": "522,705", "ID": "cw0121766", "Type": "movie", "Price": "125.5" },{ "Title": "Star Wars: Episode I - The Phantom Menace", "Year": "1999", "Rated": "PG", "Released": "19 May 1999", "Runtime": "136 min", "Genre": "Action, Adventure, Fantasy", "Director": "George Lucas", "Writer": "George Lucas", "Actors": "Liam Neeson, Ewan McGregor, Natalie Portman, Jake Lloyd", "Plot": "Two Jedi Knights escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to reclaim their old glory.", "Language": "English", "Country": "USA", "Awards": "Nominated for 3 Oscars. Another 24 wins & 60 nominations.", "Poster": "http://ia.media-imdb.com/images/M/MV5BMTQ4NjEwNDA2Nl5BMl5BanBnXkFtZTcwNDUyNDQzNw@@._V1_SX300.jpg", "Metascore": "51", "Rating": "6.5", "Votes": "537,242", "ID": "cw0120915", "Type": "movie", "Price": "123343.5" },{ "Title": "Star Wars: The Force Awakens", "Year": "2015", "Rated": "PG-13", "Released": "18 Dec 2015", "Runtime": "138 min", "Genre": "Action, Adventure, Fantasy", "Director": "J.J. Abrams", "Writer": "Lawrence Kasdan, J.J. Abrams, Michael Arndt, George Lucas (based on characters created by)", "Actors": "Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver", "Plot": "30 years after the defeat of Darth Vader and the Empire, Rey, a scavenger from the planet Jakku, finds a BB-8 droid that knows the whereabouts of the long lost Luke Skywalker. Rey, as well as a rogue stormtrooper and two smugglers, are thrown into the middle of a battle between the Resistance and the daunting legions of the First Order.", "Language": "English", "Country": "USA", "Awards": "Nominated for 5 Oscars. Another 48 wins & 104 nominations.", "Poster": "http://ia.media-imdb.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg", "Metascore": "81", "Rating": "8.2", "Votes": "575,439", "ID": "cw2488496", "Price": "129.5", "Type": "movie" }]';

mApp.config(function ($httpProvider) {
    //cors setting in angular
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

mApp.filter('getById', function() {
    return function(input, id) {
        var i=0, len=input.length;
        for (; i<len; i++) {
            if (input[i].ID === id) {
                return input[i];
            }
        }
        return null;
    }
});

mApp.filter('lowestPrice', function () {

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



mApp.component("movieTitle", {
    template: '<div class="header content-header" style="margin-left:20px;margin-right: 20px; background-color: #33ee44; font-size: 20px;">Movie Lists <div style="float:right"><a href="notes.html">Documentation</a></div></div>'
});

mApp.component("detailTitle", {
    template: '<div style="margin-left:20px;margin-right: 20px; background-color: #33ee44; font-size: 20px;">Movie Detail</div>'
});

mApp.component("movieList", {

    template: "<div class='row body body-content' style='margin:20px;'><div class='col-sm-5'><div><input class='btn btn-success' type=button ng-click='$ctrl.getLowest()' value='Get Lowest Price Movie'></div><div ng-repeat='item in $ctrl.movies' style='display: inline-block;'><div style='padding-top:5px;'><img src={{item.Poster}} ng-click='$ctrl.SearchEachMovie(item.ID)' style='border: 1px solid #3322; width: 150px;height:100px; float:left; cursor: pointer;'></div><div ng-click='$ctrl.SearchEachMovie(item.ID)'>Name: {{item.Title}}<br/>Date:{{item.Year}}</div></div>" +
        "</div><div class='col-sm-7' style='background-color: #3344;'><div ng-show='$ctrl.moviesingle.Title'><h2>{{$ctrl.moviesingle.Title}}</h2><br/><div style='display: inline-block;'> <div>Name: {{$ctrl.moviesingle.Title}}<br/>Date: {{$ctrl.moviesingle.Year}}<br/>Rate:  {{$ctrl.moviesingle.Rated}}<br/>Duration:  {{$ctrl.moviesingle.Runtime}}<br/>Description:  {{$ctrl.moviesingle.Plot}}<br/>Price:  ${{$ctrl.moviesingle.Price}}<br/>Actors:  {{$ctrl.moviesingle.Actors}}<br/> <img src={{$ctrl.moviesingle.Poster}}></div><div>{{$ctrl.moviesingle.Title}}</div> </div></div></div>",

    bindings: { movies: '&'},

    controller: function ($http, $sce, $filter, $rootScope) {

        var moviesdata = JSON.parse(datasofmovies);

        this.movies = JSON.parse(datasofmovies).Movies;

        this.SearchEachMovie = function (movieId)
        {
            this.moviesingle = ($filter('getById')(JSON.parse(detail), movieId));
        }

        this.getLowest = function ()
        {
            this.moviesingle = ($filter('lowestPrice')(JSON.parse(detail)));

        }

 
    }

});

mApp.component("movieDetail", {

    template: "<div>{{$ctrl.moviesingled}}</div>",

    bindings: { moviesingled: '@'},

    controller: function ($http, $filter, $rootScope, $scope) {
        var self = this ;
        
        self.moviesingled = "";

        $rootScope.$on("menu-changed", function (evt, data) {
            self.moviesingled = data.Title;
            console.log(data);
            console.log(   self.moviesingled );
            console.log(    data.Title);

          });

     

       // this.moviesingle =($filter('getById')(JSON.parse(datasofmovies).Movies, "cw0076759"));
      //  The best way is to create a factory and you include this factory in the both modules. After that, everything in the factory will be shared between the components
    }

});

mApp.component("fooTer", {
    template: '<footer>Copyright@2016 David Lizhong Huang</footer>',
    controller: function () {

        var docHeight = $(window).height();

        var footerHeight = $('foo-ter').height();

        var footerTop = $('foo-ter').position().top + footerHeight;

        if (footerTop < docHeight) {

            $('foo-ter').css('margin-top', 10 + (docHeight - footerTop) + 'px');
        }

    }

});

//var headers = {
//     'Content-Type': 'application/json',
//    'Accept': 'application/json'
//};
//    var url = "http://webjetapitest.azurewebsites.net/api/cinemaworld/movies?x-access-token=sjd1HfkjU83ksdsm3802k";
//    $sce.trustAsResourceUrl(url);
//    var ds = $http.jsonp(url, { headers: headers }).
//success(function (data, status, headers, config) {
//    console.log(data);
//    console.log(status);
//}).
//error(function (data, status, headers, config) {
//    console.log(status);
//});
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


